---
layout: post
status: publish
published: true
title: 'Tutorial: Display Recent Tweets Using jQuery, PHP and Twitter''s API'
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
wordpress_id: 127
wordpress_url: http://kevin-deleon.com/?p=127
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
---
*UPDATE 6.24.13*: You can now download/fork the <a href="https://github.com/kevindeleon/get-tweets" target="_blank">source code</a> for my PHP and JS files used in this tutorial on github. You will still need to get your own copies of <a href="https://github.com/mynetx/codebird-php" target="_blank">codebird</a> and <a href="http://jquery.com" target="_blank">jQuery</a> from their respective sources. 

Up until recently I had been using Twitter&rsquo;s v1 API and their <a href="http://twitter.com/javascripts/blogger.js" target="_blank">blogger.js</a> script to display my most recent tweet in the footer of my website. It was simple, worked great and was really all I wanted. As of yesterday, Twitter finally retired the v1 API in favor of their v1.1 API which requires OAuth authentication. This promptly left me with the "oh crap, my site is broken" problem. I decided to write a quick blog post on how I resolved this problem. It's probably not the best way to do it, but if it helps you out, great!

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

{% highlight php %}
class GetTweets {
  static public function get_most_recent($screen_name, $count, $retweets)
  {
    //codebird is going to be doing the oauth lifting for us
    require_once('codebird.php');

    //These are your keys/tokens/secrets provided by Twitter
    $CONSUMER_KEY = 'yourconsumerkey';
    $CONSUMER_SECRET = 'yourconsumersecret';
    $ACCESS_TOKEN = 'accesstoken';
    $ACCESS_TOKEN_SECRET = 'accesstokensecret';

    //Get authenticated
    \Codebird\Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);

    $cb = \Codebird\Codebird::getInstance();
    $cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

    //These are our params passed in for our request to twitter
    //The GET request is made by our codebird instance for us further down
    $params = array(
      'screen_name' => $screen_name,
      'count' => $count,
      'include_rts' => $retweets,
    );

    //tweets returned by Twitter in JSON object format
    $tweets = (array) $cb->statuses_userTimeline($params);

    //Let's encode it for our JS/jQuery and return it
    return json_encode($tweets);
  }
}
{% endhighlight %}

Our method `get_most_recent()` accepts 3 string parameters. The first is the username of your twitter account. The second parameter is the number of tweets to return, and the last parameter is whether or not to include retweets (true or false).

Now we need to require our php file in our page that will be displaying our tweets. You can do this simply with the following line. I put this near the top of my footer include (which is where my tweets are displayed), but you can put it wherever you want.

{% highlight php %}
// Requiring custom class that pulls most recent tweets
require_once('get-tweets.php')
{% endhighlight %}

Now let&rsquo;s get to our JavaScript/jQuery. I added the following code inside a file I call `site.js` and include that file in the head of my page that is going to display my tweets. Quite a bit of logic in `display_tweets()` (and all of `relative_time()`) comes from Twitter&rsquo;s <a href="http://twitter.com/javascripts/blogger.js" target="_blank">blogger.js</a> script that many of us were using. I made some changes using jQuery and also changed the wrappers from 'li' to 'p' because it works better for my particular situation. They were also using `display_tweets()` as a callback in their query string which I don&rsquo;t believe is supported anymore. Their 'twitters.length' check was broken, as that is not a valid property of the new object it seems. I could be wrong there, but it wasn&rsquo;t working for me. To correct the broken loop, I changed the way we iterate using jQuery's `.each()`.

{% highlight javascript %}
//display_tweets accepts a JSON object
function display_tweets(tweets) {
  var statusHTML = "";
  jQuery.each(tweets, function(i, tweet) {
  //let's check to make sure we actually have a tweet
  if (tweet.text !== undefined) {
    var username = tweet.user.screen_name;
    //clean things up a bit
    var status = tweet.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML = '<span>'+status+'</span> <a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+tweet.id_str+'">'+relative_time(tweet.created_at)+'</a>';
    jQuery('.tweet-loader').remove();
    jQuery('#twitter_update_list').append(statusHTML);
  }
	});
}

//taken from Twitter's blogger.js
function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'less than a minute ago';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}
{% endhighlight %}

The function `display_tweets()` accepts a JSON object that contains &ldquo;tweet&rdquo; objects. It will then append our tweets (wrapped in 'p' tags) into an element with the id 'twitter_update_list' (which is a div in my case). I also use a span, with the class `tweet-loader`, inside my main container div to give the user some feedback in case things are loading slowly. You could use an animated gif or something if you like, but simple text works fine for me as it is usually gone before anyone notices anyway. Our JS above removes this span before appending our tweets(s)

Place this code in your page that will be displaying your tweets.

{% highlight html %}
<!-- Our div that will contain our tweets -->
<div id="twitter_update_list"><span class="tweet-loader">Loading tweets...</span></div>
<script type="text/javascript">
  //get JSON object from twitter
  var tweets = <?php echo GetTweets::get_most_recent('kevindeleon','1','true') ?>;
  //pass returned JSON object into display_tweets()
  display_tweets(tweets);
</script>
{% endhighlight %}

That&rsquo;s really it! I know I kind of blew through a lot here, but I really just wanted to get this out there to help those that may have been in the same situation I was in. If you have any questions, please ask them in the comments and I will try to answer them as quickly as possible.