var posts=["posts/3791.html","posts/3eeb.html","posts/aea2.html","posts/76f9.html","posts/1b90.html","posts/8310.html","posts/1bd.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};