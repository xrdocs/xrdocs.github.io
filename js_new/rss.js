const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser())
/* Fetch URLs from JSON */
fetch('assets/urls.json').then((res) => {
	var posts = []
	function Item(title, pubDate, link, description) {
		this.title = title;
		this.date = pubDate;
		this.link = link;
		this.description = description;
	  }
	res.text().then((data) => {
		JSON.parse(data).urls.forEach((u) => {
			try {
                var url = new URL(u)
                var proxy_url = '';
			}
			catch (e) {
				console.error('URL invalid');
				return
			}
			fetch(proxy_url+url).then((res) => {
				res.text().then((htmlTxt) => {
					/* Extract the RSS Feed URL from the website */
					try {
                        let doc = DOMPARSER(htmlTxt, 'text/html')
                        var feedUrl = doc.querySelector('link[type="application/atom+xml"]').href
					} catch (e) {
						console.error('Error in parsing the website');
						return
					}
					/* Fetch the RSS Feed */
					 fetch(proxy_url+feedUrl).then((res) => {
						res.text().then((xmlTxt) => {
							/* Parse the RSS Feed and display the content */
							try {
								let doc = DOMPARSER(xmlTxt, "text/xml")
								doc.querySelectorAll('item:nth-last-child(-n+5)').forEach((item) => {
									var post = new Item(item.querySelector('title').textContent,
														item.querySelector('pubDate').textContent,
														item.querySelector('link').textContent, 
														item.querySelector('description').textContent
														);
									posts.push(post)
								})
							} catch (e) {
								console.error('Error in parsing the feed')
							}
						})
					}).catch(() => console.error('Error in fetching the RSS feed'))
				})
			})
		})
	})
	return posts
}).then((res) => {
			var frag = document.createDocumentFragment()
			
			
		setTimeout(() => {
			let lastesPosts = res.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,5)
			
			lastesPosts.forEach(post => {
				let temp = document.importNode(document.querySelector('template').content, true)
                let t = temp.querySelector.bind(temp)
                t('a').setAttribute('href', post.link)
				t('h2').textContent = post.title
                t('h3').innerHTML = post.description
				frag.appendChild(temp)
            })
            document.querySelector('output').appendChild(frag)
		}, 1000)
})