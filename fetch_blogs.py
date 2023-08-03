import os
import re
import yaml
import json
from datetime import datetime
from operator import itemgetter
from github import Github
import jwt
import time
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.backends import default_backend


def create_jwt():
    PRIVATE_KEY = os.getenv('PRIVATEKEY_FETCH_LATEST_BLOGS')
    APP_ID = os.getenv('APP_ID')  # replace with your GitHub App's ID
    # Generate the JWT
    private_key = serialization.load_pem_private_key(
        PRIVATE_KEY.encode(),
        password=None,
        backend=default_backend()
    )
    # Define payload
    payload = {
        "iat": int(time.time()),
        "exp": int(time.time()) + (10 * 60),
        "iss": APP_ID
    }
    jwt_token = jwt.encode(payload, private_key, algorithm='RS256')
    return jwt_token


# Authenticate with GitHub
jwt_token = create_jwt()
g = Github(jwt=jwt_token)


#github_api_url = "https://api.github.com/repos/{}/{}/contents{}"

repos = [
('xrdocs', 'design', '_blogs'), #this is the error repo
    ('xrdocs', 'design', '_tutorials'), 
    ('xrdocs', 'virtual-routing', '_blogs'),
    ('xrdocs', 'virtual-routing', '_tutorials'),
    ('xrdocs', 'ztp', '_blogs'),
    ('xrdocs', 'ztp', '_tutorials'),
    ('xrdocs', 'cisco-service-layer', '_blogs'),
    ('xrdocs', 'cisco-service-layer', '_tutorials'),
    ('xrdocs', 'security', '_blogs'),
    ('xrdocs', 'security', '_tutorials'),
    ('xrdocs', 'asr9k', '_blogs'),
    ('xrdocs', 'asr9k', '_tutorials'),
    ('xrdocs', 'cnbng', '_blogs'),
    ('xrdocs', 'cnbng', '_tutorials'),
    ('xrdocs', '8000', '_blogs'),
    ('xrdocs', '8000', '_tutorials'),
    ('xrdocs', 'packet-fronthaul', '_blogs'),
    ('xrdocs', 'packet-fronthaul', '_tutorials'),
    ('xrdocs', 'multicast', '_blogs'),
    ('xrdocs', 'multicast', '_tutorials'),
    ('xrdocs', 'programmability', '_blogs'),
    ('xrdocs', 'programmability', '_tutorials'),
    ('xrdocs', 'automation', '_blogs'),
    ('xrdocs', 'automation', '_tutorials'),
    ('xrdocs', 'application-hosting', '_blogs'),
    ('xrdocs', 'application-hosting', '_tutorials'),
    ('xrdocs', 'cloud-scale-networking', '_blogs'),
    ('xrdocs', 'cloud-scale-networking', '_tutorials'),
    ('xrdocs', 'device-lifecycle', '_blogs'),
    ('xrdocs', 'device-lifecycle', '_tutorials'),
    ('xrdocs', 'telemetry', '_blogs'),
    ('xrdocs', 'telemetry', '_tutorials'),
    ('xrdocs', 'tdm2ip', '_blogs'),
    ('xrdocs', 'tdm2ip', '_tutorials'),
    ('xrdocs', 'segment-routing', '_blogs'),
    ('xrdocs', 'segment-routing', '_tutorials')
]

def remove_date_from_title(title) :
    date = r'^\d{4}-\d{2}-\d{2}-(.*)$'
    match = re.match(date, title)
    if match:
        return match.group(1)
    else:
       return title

def get_published_info(content, path, user, repo, directory) :
    if content.startswith('---\n') :
        last_line = content.find('\n---\n', 4)
        if last_line != -1:
            first_lines_info = content[4:last_line]
            try:
                first_lines = yaml.safe_load(first_lines_info)
                if isinstance(first_lines, dict) :
                    first_lines['path'] = path
                    first_lines['url'] = f"https://xrdocs.io/{user}/{repo}/{directory[1:]}/{path[:-3]}/"
                    description = first_lines.get('excerpt', '')
                    if description is not None and isinstance(description, str):
                        first_lines['description'] = description.strip()
                    else :
                        first_lines['description'] = ''
                    return first_lines
            except yaml.YAMLError as error_message :
                print(f"Error retrieving first couple of lines: {error_message}")
    return {}

def main() :
    recent_posts = []

    for user, repo_name, directory in repos :
        repo_obj = g.get_repo(f"{user}/{repo_name}")
        contents = repo_obj.get_contents(directory)

        for content_file in contents :
            if content_file.name == '2019-02-02-modernizing-ixp-design.md' :
                continue 

            if content_file.type == 'file' and content_file.name.endswith('.md') :
                commits = list(repo_obj.get_commits(path=content_file.path))
        
                if commits:
                    last_commit_date = commits[0].commit.committer.date
                    date = last_commit_date.replace(tzinfo=None)

                    file_content = content_file.decoded_content.decode()
                    first_lines = get_published_info(file_content, content_file.name, user, repo_name, directory)

                    if first_lines and first_lines.get('published', False) and first_lines.get('position', '') == 'top' and first_lines.get('title') :
                        title = remove_date_from_title(content_file.name[:-3])
                        repo_url = f'https://xrdocs.io/{repo_name}/{directory[1:]}/{content_file.name[:-3]}/'
                        description = first_lines.get('excerpt', '')
                        recent_posts.append({
                        'title' : title,
                        'date' : date,
                        'url' : repo_url,
                        'blog-description' : description
                        })

    recent_posts.sort(key = itemgetter('date'), reverse = True)

    recent_posts_data = [{
        'title' : file['title'],
        'date' : file['date'].isoformat(),
        'url' : file['url'],
        'blog-description' : file['blog-description']
    } for file in recent_posts]

    with open('latest-articles.json', 'w') as json_file :
        json.dump(recent_posts_data, json_file, indent = 4)

main()
