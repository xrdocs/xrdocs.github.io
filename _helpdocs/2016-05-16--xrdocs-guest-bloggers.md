---
published: false
date: '2016-05-16 16:06 +0530'
title: '@xrdocs Guest Bloggers'
permalink: /helpdocs/xrdocs-guest-bloggers
author: Akshat Sharma
excerpt: >-
  A Brief walkthrough of the Github based Documentation review process with
  @xrdocs
tags:
  - iosxr
  - cisco
position: hidden
sitemap: false
---
{% include toc icon="table" title="Guest Blogging on @xrdocs" %}

{% include base_path %}
[Back to @xrdocs How-To]({{ base_path }}/helpdocs/xrdocs-how-to)

---


## First Steps:

As we've already explained in the [xrdocs How-To guide/First Steps]({{ base_path }}/helpdocs/xrdocs-how-to#first-steps) section, 

>
Request access to the [xrdocs/xrdocs-images](https://github.com/xrdocs/xrdocs-images/tree/gh-pages) images repository and set up your author profile by sending an email to the [xrdocs-team](mailto:xrdocs-team@cisco.com) with the following data:  
>
* Full Name
* Github ID
* Email
* attach a bio photo in jpg/jpeg/png format
* twitter handle (optional)
{: .notice--warning}


---

## Quick Recap on types of Users @xrdocs


>
There are 2 types of users on @xrdocs
>
*   **Owners/contributors** of the corresponding github repos (app-hosting, telemetry etc.). The documents created by these users on prose.io directly get committed to the github repos (hence the website), when saved.
*   **Guest Bloggers**: Do NOT have write access to repositories. All their documents created on prose.io appear as pull requests on github, and are subject to a peer review by the owners/contributors before merging with the website.  

TMEs in the Web Solutions group at Cisco are by default the owners of the internal github repositories that host the XR documentation.

---

## Guest Bloggers

"Guest Blogger" is a generic term we use to define any user that does not have write access to the internal github repository where the documents get stored.

Without going into details of how the github organization (xrdocs) and its repositories (application-hosting, telemetry etc.) are set up, it would be good to understand which repositories a Guest Blogger will be granted access to:


[appgit]: https://github.com/xrdocs/application-hosting
[telgit]: https://github.com/xrdocs/application-hosting
[csngit]: https://github.com/xrdocs/cloud-scale-networking
[xrimagesgit]: https://github.com/xrdocs/xrdocs-images

[apphome]:  https://xrdocs.github.io/application-hosting
[telhome]:  https://xrdocs.github.io/telemetry
[csnhome]:  https://xrdocs.github.io/cloud-scale-networking
[xrimagehome]: https://xrdocs.github.io/xrdocs-images

[aksgit]: https://github.com/akshshar
[shellygit]: https://github.com/scadora
[jlistegit]: https://github.com/joseliste 



|  Github Repository        | Website Home                         |Owner           |       Guest Write Access| 
| ------------------------- | -------------------------------------| ---------------------------|-------------
| [xrdocs/application-hosting][appgit]| [Apphosting Home][apphome] |[Akshat Sharma][aksgit]     |    No       |
| [xrdocs/telemetry][telgit]          | [Telemetry Home][telhome]   |[Shelly Cadora][shellygit] |    No       |
| [xrdocs/cloud-scale-networking][csngit]| [Cloud-Scale Networking Home][csnhome]   |[Jose Liste][jlistegit] |    No       |
| [xrdocs/xrdocs-images][xrimagesgit] | [Xrdocs-images Home][xrimagehome] |Cisco Web TMEs       |    Yes      |   

[xrdocs/xrdocs-images](https://github.com/xrdocs/xrdocs-images/tree/gh-pages)  is the only repository that Guest bloggers will have write access to. Think of this as your image repository in the cloud.   


## Document Creation Workflow
>
As a Guest Blogger, document creation is very similar to an owner/contributor workflow, except:
>
* **Create a local copy of your markdown content**
* **Use [prose.io](http://prose.io) to submit your content for review**
* **Update github pull request based on reviewer's comments.**
* **Create new pull requests using prose.io if the changes required are massive**
{: .notice--info}




## Commit and Peer review: Important

Let's take an illustrative example to see how the commit and peer review process may happen in real life.

### Create a Local Markdown file

As a guest blogger, I open my markdown content in my markdown editor of choice, let's say the Atom.io editor.

![Local Markdown File](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/sample_blog_guest.png)
This is my local markdown file, I'll use it to keep my content saved and updated.
{: .notice}



### Submit the content on prose.io

Let's assume  we're contributing to the application-hosting xrdocs website at <https://xrdocs.github.io/application-hosting>

Open up prose.io and point to the github-pages repo of the repository:  
(Browse to <http://prose.io/#xrdocs/application-hosting/tree/gh-pages>)

![Prose.io App-hosting gh-pages](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/proseio_apphosting_ghpages.png)


Click on `_blogs` folder  and then on [NEW FILE](javascript:void(0)){: .btn .btn--success} button.  

![Create New Blog on Prose.io](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/proseio_blogs_new_file.png)



Copy and paste your markdown content into the prose.io window and set a title for your blog:  

![Copy Paste into Prose.io](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/proseio_sample_blog.png)


Set the metadata fields appropriately:  

![Set Metadata fields](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/proseio_sampleblog_metadata.png)


Finally commit/Save the content by clicking the commit button or issuing a Ctrl+S

![Commit the blog!](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/proseio_commit_sample_blog.png)


Done! You've submitted a pull request!
{: .notice--success}


### Peer Review

A pull request will appear for the gh-pages branch of the application-hosting Repository.
Scoot over to the link: <https://github.com/xrdocs/application-hosting/pulls> and you should see the pull request created.

![Pull Request](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/pull_request_from_proseio.png)


As an owner/contributor for the  Github repo in question, look around, view the commit, view the rendered markdown file:

![Browse around pull request](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/pull_request_click_on_commits.png)   
   
   


![Files Changed](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/pull_request_fileschanged.png)
Click on "Files Changed" to view the diffs
{: .notice}   
   
   

Provide comments just like you do on code:

![Provide inline Comments](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/pull_request_provide_comments.png)
Provide inline comments! 
{: .notice}    
    
    


As the Guest blogger, if there are any updates, edit the pull request in github itself    

![Provide inline Comments](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/github_edit_pull_request.png)
Use github itself to make edits if needed 
{: .notice}    
    
    
If the changes are massive, you can submit a whole new pull request through prose.io and the reviewer can close the original pull request. 
**However, be aware that if you submit a new pull request then your content will have to come from your local copy, prose.io is not going to reflect your earlier commit, because it wasn't accepted by the reviewer.**
{: .notice--warning}


If everyone is happy, the reviewer can merge the changes:
![Provide inline Comments](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/confirm_merge_pull.png)
Confirm merge to integrate the new blog.
{: .notice}


The Guest Blog should Appear on the website in about 10-30 seconds.
{: .notice--success}
![Guest Blog is Live](http://xrdocs.github.io/xrdocs-images/assets/tutorial-images/Guest_blog_is_ready.png)
