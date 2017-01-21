---
layout: post
status: publish
published: true
title: 'Tutorial: Display Recent Tweets Using jQuery, PHP and Twitter''s API'
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: https://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: https://kevin-deleon.com
wordpress_id: 127
wordpress_url: https://kevin-deleon.com/?p=127
date: '2013-06-12 23:40:21 -0500'
date_gmt: '2013-06-13 04:40:21 -0500'
categories:
- development
- tutorial
- api
- twitter
- jquery
- php
tags: []
comments: true
---
*UPDATE 6.24.13*: You can now download/fork the <a href="https://github.com/kevindeleon/get-tweets" target="_blank">source code</a> for my PHP and JS files used in this tutorial on github. You will still need to get your own copies of <a href="https://github.com/mynetx/codebird-php" target="_blank">codebird</a> and <a href="http://jquery.com" target="_blank">jQuery</a> from their respective sources. 

Up until recently I had been using Twitter&rsquo;s v1 API and their <a href="http://twitter.com/javascripts/blogger.js" target="_blank">blogger.js</a> script to display my most recent tweet in the footer of my website. It was simple, worked great and was really all I wanted. As of yesterday, Twitter finally retired the v1 API in favor of their v1.1 API which requires OAuth authentication. This promptly left me with the "oh crap, my site is broken" problem. I decided to write a quick blog post on how I resolved this problem. It&rsquo;s probably not the best way to do it, but if it helps you out, great!

Things we&rsquo;ll need:

* Your web-server should be running PHP 5.3 or higher.
* <a href="http://jquery.com/" target="_blank">jQuery (I believe I am using 1.7)</a>
* We aren&rsquo;t going to build our own OAuth library. I recommend using <a href="https://github.com/mynetx/codebird-php">Codebird</a>.
* If you are going to use Codebird, your server should also have PHP OpenSSL and PHP cURL enabled. Most worthwhile hosting providers have OpenSSL and cURL enabled by default, so you probably don&rsquo;t have to worry about that.

First things first, you are going to have to <a href="https://dev.twitter.com/apps" target="_blank">setup an app at Twitter.</a> That process is pretty straight forward, so I am not going to dive off into a separate tutorial. If you need help with that, I recommend using the Googles. We need a VERY simple app for what we are trying to accomplish. Fill out the required fields. You don&rsquo;t need a callback URL for this to work.

After you have your app setup, click into your apps details and click on the OAuth tool tab. You are going to need your consumer key, consumer secret, access token and access token secret.

<img src="/wp-content/uploads/2013/06/oauth.jpg" alt="Twitter OAuth Tool" class="img-max">

Alright, let&rsquo;s get to the meat of this. Again, this is the way I solved this problem. I am sure there are better options. If you have a better way, please feel free to post it in the comments.

Create a file to contain your PHP class. I called mine `get-tweets.php`. You can call it whatever you want, but just remember you are going to have to include it in whatever file you are going to be loading your statuses onto.

<code data-gist-id="8d661944743918c01415"></code>

Our method `get_most_recent()` accepts 3 string parameters. The first is the username of your twitter account. The second parameter is the number of tweets to return, and the last parameter is whether or not to include retweets (true or false).

Now we need to require our php file in our page that will be displaying our tweets. You can do this simply with the following line. I put this near the top of my footer include (which is where my tweets are displayed), but you can put it wherever you want.

<code data-gist-id="1e6b58da532976c3d614"></code>

Now let&rsquo;s get to our JavaScript/jQuery. I added the following code inside a file I call `site.js` and include that file in the head of my page that is going to display my tweets. Quite a bit of logic in `display_tweets()` (and all of `relative_time()`) comes from Twitter&rsquo;s <a href="http://twitter.com/javascripts/blogger.js" target="_blank">blogger.js</a> script that many of us were using. I made some changes using jQuery and also changed the wrappers from &lsquo;li&rsquo; to &lsquo;p&rsquo; because it works better for my particular situation. They were also using `display_tweets()` as a callback in their query string which I don&rsquo;t believe is supported anymore. Their &lsquo;twitters.length&rsquo; check was broken, as that is not a valid property of the new object it seems. I could be wrong there, but it wasn&rsquo;t working for me. To correct the broken loop, I changed the way we iterate using jQuery&rsquo;s `.each()`.

<code data-gist-id="22accfab044106ce7e7c"></code>

The function `display_tweets()` accepts a JSON object that contains &ldquo;tweet&rdquo; objects. It will then append our tweets (wrapped in &lsquo;p&rsquo; tags) into an element with the id &lsquo;twitter_update_list&rsquo; (which is a div in my case). I also use a span, with the class `tweet-loader`, inside my main container div to give the user some feedback in case things are loading slowly. You could use an animated gif or something if you like, but simple text works fine for me as it is usually gone before anyone notices anyway. Our JS above removes this span before appending our tweets(s)

Place this code in your page that will be displaying your tweets.

<code data-gist-id="fcef6cc9d4c93574a2ae"></code>

That&rsquo;s really it! I know I kind of blew through a lot here, but I really just wanted to get this out there to help those that may have been in the same situation I was in. If you have any questions, please ask them in the comments and I will try to answer them as quickly as possible.