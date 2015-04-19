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
excerpt: "<img src=\"http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2013&#47;06&#47;twitterhead.jpg\"
  alt=\"Twitter App\" title=\"Twitter App\" width=\"620\" height=\"239\" class=\"alignnone
  size-full\">\r\n\r\n<p><em>UPDATE 6.24.13<&#47;em>: You can now download&#47;fork
  the <a href=\"https:&#47;&#47;github.com&#47;kevindeleon&#47;get-tweets\" target=\"_blank\">source
  code<&#47;a> for my PHP and JS files used in this tutorial on github. You will still
  need to get your own copies of <a href=\"https:&#47;&#47;github.com&#47;mynetx&#47;codebird-php\"
  target=\"_blank\">codebird<&#47;a> and <a href=\"http:&#47;&#47;jquery.com\" target=\"_blank\">jQuery<&#47;a>
  from their respective sources.<&#47;p> \r\n\r\n<p>Up until recently I had been using
  Twitter&rsquo;s v1 API and their <code><a href=\"http:&#47;&#47;twitter.com&#47;javascripts&#47;blogger.js\"
  target=\"_blank\">blogger.js<&#47;a><&#47;code> script to display my most recent
  tweet in the footer of my website. It was simple, worked great and was really all
  I wanted. As of yesterday, Twitter finally retired the v1 API in favor of their
  v1.1 API which requires OAuth authentication. This promptly left me with the \"oh
  crap, my site is broken\" problem. I decided to write a quick blog post on how I
  resolved this problem. It's probably not the best way to do it, but if it helps
  you out, great!<&#47;p>"
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
comments:
- id: 1209
  author: Charles
  author_email: charlsm333@gmail.com
  author_url: ''
  date: '2013-07-12 10:02:28 -0500'
  date_gmt: '2013-07-12 15:02:28 -0500'
  content: |-
    Hello,

    For the get-tweets.php section, do I have to add <?php to the beginning of that file or should I just copy+paste exactly what you have here?
- id: 1210
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-07-12 10:09:13 -0500'
  date_gmt: '2013-07-12 15:09:13 -0500'
  content: "@Charles yes you will need the opening php tag at the beginning of that
    file. You can see the complete files at the github link at the beginning of the
    post."
- id: 1277
  author: Jim
  author_email: sharpjr@me.com
  author_url: ''
  date: '2013-07-24 05:24:26 -0500'
  date_gmt: '2013-07-24 10:24:26 -0500'
  content: Thanks for this - nice to follow. Only, it just gets stuck on 'loading
    tweets' so I'm guessing I've missed something. I've checked curl, openssl, both
    enabled. I've referenced site.js and query.min.js using script tags, and the get_tweets.php
    using a require once... I've also been sure to change the twitter username...
    anything else I've missed?
- id: 1278
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-07-24 08:48:11 -0500'
  date_gmt: '2013-07-24 13:48:11 -0500'
  content: "@Jim, It's hard for me to know exactly what you've missed.  I am assuming
    you are receiving no PHP errors (or that your server has PHP errors turned off).
    No JavaScript errors?  Are you sure you are referencing the correct element id
    (the one you want the JS to replace)? I'm also assuming that you have changed
    all the twitter OAUTH secrets and keys in your PHP file?"
- id: 1300
  author: Deon
  author_email: deongee@hotmail.com
  author_url: ''
  date: '2013-07-27 10:38:23 -0500'
  date_gmt: '2013-07-27 15:38:23 -0500'
  content: "I'm getting Loading Tweets, don't know what I\"m doing wrong.\r\n<!DOCTYPE
    html PUBLIC \"-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.0 Transitional&#47;&#47;EN\"\r\n\r\n\r\n\r\nTwitter
    Test for GeeGirls\r\n\r\n \r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\nLoading tweets...\r\n\r\n\r\n
    \   &#47;&#47;get JSON object from twitter\r\n    var tweets = ;\r\n     \r\n
    \   &#47;&#47;pass returned JSON object into display_tweets()\r\n    display_tweets(tweets);\r\n\r\n\r\n"
- id: 1301
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-07-27 13:04:04 -0500'
  date_gmt: '2013-07-27 18:04:04 -0500'
  content: "@Deon\r\n\r\nReally hard for me to know what's going on from the code
    you have posted.  If you would like to give me a link to a test version of your
    page, or the actual URL, I'll be more than happy to take a look at the front-end
    code to rule anything out on that end."
- id: 1302
  author: Brian
  author_email: briandavidsymmes@compuserve.com
  author_url: http://www.analemma.org
  date: '2013-07-28 02:49:40 -0500'
  date_gmt: '2013-07-28 07:49:40 -0500'
  content: One thing to point out to those not familiar with codebird. In order to
    validate with the OAuth function you must have the cacert.pem file in the same
    folder as the codebird.php file that you download from Git. It comes with the
    Codebird download.
- id: 1303
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-07-28 11:56:58 -0500'
  date_gmt: '2013-07-28 16:56:58 -0500'
  content: |-
    @Brian

    I don't use the cacert.pem in my installation and it works fine.  Maybe that is the problem some are running into, but I am not experiencing that issue without cacert.pem. I don't see anywhere in the codebird documentation where it says that is necessary.  I'm not saying it isn't for some applications...but for my purpose, it doesn't seem to matter.
- id: 1316
  author: shaan
  author_email: shaanin2020@gmail.com
  author_url: http://www.klassicclub.com
  date: '2013-08-22 12:58:32 -0500'
  date_gmt: '2013-08-22 17:58:32 -0500'
  content: "hello there..\r\nfirst of all hats off to u for describing such a wonderful
    tutorial.\r\n\r\nbt i got stuck. its says ::\r\nWarning: Unexpected character
    in input: '\\' (ASCII=92) state=1 in C:\\Inetpub\\vhosts\\klassicclub.com\\httpdocs\\twitter\\get-tweets.php
    on line 39\r\n\r\nthe actual code in line 39 ::\r\n\t\t\\Codebird\\Codebird::setConsumerKey($CONSUMER_KEY,
    $CONSUMER_SECRET);\r\n\r\nif i make it just codebird, then the pages displays
    nothing except the plain html defined text \"loading tweets...\"\r\n\r\nplease
    help me with this.\r\n\r\ndemo link : www.klassicclub.com&#47;twitter&#47;index.php"
- id: 1317
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-08-22 14:36:17 -0500'
  date_gmt: '2013-08-22 19:36:17 -0500'
  content: |-
    @shaan,

    It looks like you are using an older version of PHP on your server.  Codebird requires PHP 5.3 or higher due to the fact that it uses namespaces among other features.
- id: 1318
  author: robbie
  author_email: txt3rob@gmail.com
  author_url: http://raspberrypihell.blogspot.co.uk/
  date: '2013-08-30 07:29:16 -0500'
  date_gmt: '2013-08-30 12:29:16 -0500'
  content: "in chrome and firefox i see the loading tweets section but then i see
    in firebug:\r\n\r\nReferenceError: display_tweets is not defined\r\n\t\r\n\r\ndisplay_tweets(tweets);\r\nany
    ideas?"
- id: 1319
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-08-30 08:30:15 -0500'
  date_gmt: '2013-08-30 13:30:15 -0500'
  content: |-
    @robbie,

    Well...it depends on how you decided to set your JS up...if you followed my tutorial and didn't do something different, then it sounds like you aren't including the display_tweets function in the page before you are calling it.
- id: 1321
  author: Claudio Tellez
  author_email: claudio.tellez@gmail.com
  author_url: http://claudiotellez.com
  date: '2013-08-31 01:35:51 -0500'
  date_gmt: '2013-08-31 06:35:51 -0500'
  content: "Guys,\r\n\r\nFor this tutorials you should know some JS and PHP in order
    to understand the instructions. Kevin created this tutorial according to his needs
    and you need to adapt it depending on yours.\r\n\r\nHope this help you all understand
    it better.\r\n\r\nyou need:\r\n\r\n1. The Code Bird files. which need to be separate
    from your files. You may need the cacert.pem depeding on your server's settings
    (I needed it)\r\n2. PHP file to create the class to login to twitter api and invoke
    (gather, retrieve) the tweet(s). you should required('codebird.php') <- use the
    relative path from the this php file.\r\n2. JS file with the methods to parse
    all that data. You don&#039;t need to have the code provided into a specific js
    file, you can write on your html code between  tags.\r\n3.  Put the following
    lines of js wherever you want to display it: \r\n    &#47;&#47;get JSON object
    from twitter\r\n    var tweets = ;\r\n     \r\n    &#47;&#47;pass returned JSON
    object into display_tweets()\r\n    display_tweets(tweets);\r\n\r\n\r\nit basically
    fills the \"tweets\"  js var with the results from the query to the API deploying
    the content with PHP. (hopefully this makes sense) and then it just calls the
    display_tweets js method to parse the data and show.\r\n\r\nHope this is helpful.\r\n\r\n(
    I'm still dealing with this btw :) )"
- id: 1322
  author: Claudio Tellez
  author_email: claudio.tellez@gmail.com
  author_url: http://claudiotellez.com
  date: '2013-08-31 01:54:05 -0500'
  date_gmt: '2013-08-31 06:54:05 -0500'
  content: Worked like a charm Kevin. you saved my day.
- id: 1323
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-09-03 20:47:34 -0500'
  date_gmt: '2013-09-04 01:47:34 -0500'
  content: |-
    @Claudio,

    Glad I could help!
- id: 1324
  author: Perumal
  author_email: perumal@friendswebsolution.com
  author_url: ''
  date: '2013-09-16 08:42:33 -0500'
  date_gmt: '2013-09-16 13:42:33 -0500'
  content: "Hi,\r\n\r\nI have been followed by tutorial and give all twitter aps information's
    like CONSUMER_KEY,CONSUMER_SECRET,ACCESS_TOKEN,ACCESS_TOKEN_SECRET and even i
    have get-tweet.php,codebird.php,site.js,blogger.js...\r\n\r\nbut there is no output,
    only display given below message..\r\nLoading tweets...\r\nkindly check given
    below link also,\r\nhttp:&#47;&#47;mysummary.me&#47;for_appln&#47;twitter&#47;my_twit&#47;get-tweets.php\r\n\r\nplease
    guide me..."
- id: 1325
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-09-16 08:47:45 -0500'
  date_gmt: '2013-09-16 13:47:45 -0500'
  content: |-
    @Perumal

    I'm really not able to help with the information you have given.  Without specific errors, it's very hard to troubleshoot. From the looks of that example page, there are many things potentially wrong.
- id: 1326
  author: Perumal
  author_email: perumal@friendswebsolution.com
  author_url: ''
  date: '2013-09-17 05:50:10 -0500'
  date_gmt: '2013-09-17 10:50:10 -0500'
  content: "Hello Kevin deLeon,\r\n\r\nThank you for your answer and to spent much
    more valuable time for me, could you possible to give me the full source code..!\r\nbecause
    i have been tried many times(ways) so kindly give me full execution compressed
    files..\r\nthat is useful for validate my mistake also...\r\n\r\nplease give me
    full execution files for twitter feeds display on my website..\r\n\r\nThanks and
    advance\r\nPerumal"
- id: 1327
  author: Ben Harvey
  author_email: bgharvey@gmail.com
  author_url: http://gomako.co.uk
  date: '2013-09-19 05:56:32 -0500'
  date_gmt: '2013-09-19 10:56:32 -0500'
  content: "Hi, this was so useful for me, after rolling out loads of sites pulling
    public tweets. I needed something quick to fix all those \"Loading tweets...\"
    boxes!\r\n\r\nOne thing I noticed when I implemented it was that I was getting
    retweets displayed regardless of the true&#47;false argument.\r\n\r\nI looked
    through twitter's api and it seems that you need to change 'rts' to 'include_rts'
    in the $params array. That fixed it for me!\r\n\r\n Thanks again!"
- id: 1328
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-09-19 08:29:55 -0500'
  date_gmt: '2013-09-19 13:29:55 -0500'
  content: |-
    @Ben

    Thanks so much man.  I actually saw this change when I was writing this lesson and completely forgot to change that. I guess since I DO want to include retweets in my display, I never noticed it!  I will get that changed in both the source files and the tutorial ASAP. Thanks for the comment.
- id: 1342
  author: Rob
  author_email: robjralston@gmail.com
  author_url: ''
  date: '2013-09-24 00:54:25 -0500'
  date_gmt: '2013-09-24 05:54:25 -0500'
  content: "Hi,\r\n\r\nGreat easy to follow. Thanks\r\nDo you know if its possible
    to call in any new tweets tweets with out a page refresh using ajax?"
- id: 1345
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-09-24 09:18:35 -0500'
  date_gmt: '2013-09-24 14:18:35 -0500'
  content: |-
    @Rob,

    Since all we are doing is making a call to the Twitter API with a set of parameters, it should be fairly easy to accomplish what you are trying to do. Be careful of API limits though.  I can't remember off the top of my head whether or not the Twitter API has a limit, and if it does what the request count is.
- id: 1347
  author: Rob
  author_email: robjralston@gmail.com
  author_url: ''
  date: '2013-09-24 18:11:15 -0500'
  date_gmt: '2013-09-24 23:11:15 -0500'
  content: Yeah I think there is limits but should be with what I need it for. Don;t
    suppose you could help me out on how to make this re-fetch any new tweets and
    then add them to the page with ajax? understand if its asking too much. cheers
    mate
- id: 1354
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-09-26 23:08:48 -0500'
  date_gmt: '2013-09-27 04:08:48 -0500'
  content: |-
    @Rob,

    Sorry man, I really don't have time at the moment. If you need something built, I would be more than happy to give you a quote.
- id: 1396
  author: Caes
  author_email: caes@outlook.be
  author_url: http://www.splendeurs-ardennaises.be
  date: '2013-10-11 07:52:33 -0500'
  date_gmt: '2013-10-11 12:52:33 -0500'
  content: It works perfectly... Thanks a lot for the time saving ;)
- id: 1460
  author: maria
  author_email: princessmaria.soomro@gmail.com
  author_url: ''
  date: '2013-10-26 11:10:13 -0500'
  date_gmt: '2013-10-26 16:10:13 -0500'
  content: above code is not working in my pc but same code is working in my teacher's
    pc my teacher have Wamp and i have Xamp and i also enable curl extension now what
    should i do?
- id: 1471
  author: Jim Williams
  author_email: jimwill@aol.com
  author_url: ''
  date: '2013-10-28 19:33:24 -0500'
  date_gmt: '2013-10-29 00:33:24 -0500'
  content: Thanks!  Worked beautifully.
- id: 1526
  author: Rakesh shetty
  author_email: rakesh@infoways.in
  author_url: ''
  date: '2013-12-12 01:46:46 -0600'
  date_gmt: '2013-12-12 07:46:46 -0600'
  content: "It does not display anything.\r\n\r\nIt shows Loading tweets....\r\n\r\nWhen
    I inspect it shows following errors :-\r\n\r\n<b>Fatal error<&#47;b>:  Uncaught
    exception 'Exception' with message 'Error 77 while validating the Twitter API
    certificate.' in &#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;codebird.php:978\r\nStack
    trace:\r\n#0 &#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;codebird.php(488):
    Codebird\\Codebird->_callApi('GET', 'statuses&#47;user_t...', 'statuses&#47;user_t...',
    Array, false, false)\r\n#1 &#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;get-tweets.php(50):
    Codebird\\Codebird->__call('statuses_userTi...', Array)\r\n#2 &#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;get-tweets.php(50):
    Codebird\\Codebird->statuses_userTimeline(Array)\r\n#3 &#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;index.php(11):
    GetTweets::get_most_recent('r4kesh', '1', 'true')\r\n#4 {main}\r\n  thrown in
    <b>&#47;home&#47;mysite&#47;public_html&#47;tweet_test&#47;v1&#47;codebird.php<&#47;b>
    on line <b>978<&#47;b>"
- id: 1527
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2013-12-17 13:26:44 -0600'
  date_gmt: '2013-12-17 19:26:44 -0600'
  content: "@Rakesh\r\n\r\nSounds like either you have Codebird setup improperly or
    you have the wrong API info entered in...outside of that, I'm not sure."
- id: 1531
  author: Morgan
  author_email: bansuri93@gmail.com
  author_url: ''
  date: '2014-03-12 13:09:52 -0500'
  date_gmt: '2014-03-12 18:09:52 -0500'
  content: Worked great -- thanks for the resource and explanation on how it works!
- id: 1532
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2014-03-12 13:12:36 -0500'
  date_gmt: '2014-03-12 18:12:36 -0500'
  content: Glad it worked out Morgan...thanks!
- id: 3265
  author: Ron
  author_email: ron@ronchan.com
  author_url: ''
  date: '2014-05-20 17:21:56 -0500'
  date_gmt: '2014-05-20 22:21:56 -0500'
  content: "Thanks for the great code. I was using similar but needed to have a no
    retweet option. When I first used your code it didn't work but then I looked at
    your code (that didn't work) and the code I was using (which did work) and I realized
    that there was a difference in how Codebird was accessed.\r\n\r\nSo I changed
    this in your code:\r\n\r\n&#47;&#47;Get authenticated\r\n        \\Codebird\\Codebird::setConsumerKey($CONSUMER_KEY,
    $CONSUMER_SECRET);\r\n         \r\n        $cb = \\Codebird\\Codebird::getInstance();\r\n\r\nto
    this:\r\n\r\n&#47;&#47;Get authenticated\r\n        Codebird::setConsumerKey($CONSUMER_KEY,
    $CONSUMER_SECRET);\r\n         \r\n        $cb = Codebird::getInstance();\r\n\r\nand
    Success!!\r\n\r\nPath problem I think????\r\n\r\nJust thought that this might
    help others that might be running into problems implementing it.\r\n\r\nThanks
    again!!"
- id: 20103
  author: STARfish
  author_email: davisandrey@rocketmail.com
  author_url: ''
  date: '2014-11-04 02:43:20 -0600'
  date_gmt: '2014-11-04 08:43:20 -0600'
  content: This worked for me just great! Thanks!
---
<p><img src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2013&#47;06&#47;twitterhead.jpg" alt="Twitter App" title="Twitter App" width="620" height="239" class="alignnone size-full"></p>
<p><em>UPDATE 6.24.13<&#47;em>: You can now download&#47;fork the <a href="https:&#47;&#47;github.com&#47;kevindeleon&#47;get-tweets" target="_blank">source code<&#47;a> for my PHP and JS files used in this tutorial on github. You will still need to get your own copies of <a href="https:&#47;&#47;github.com&#47;mynetx&#47;codebird-php" target="_blank">codebird<&#47;a> and <a href="http:&#47;&#47;jquery.com" target="_blank">jQuery<&#47;a> from their respective sources.<&#47;p> </p>
<p>Up until recently I had been using Twitter&rsquo;s v1 API and their <code><a href="http:&#47;&#47;twitter.com&#47;javascripts&#47;blogger.js" target="_blank">blogger.js<&#47;a><&#47;code> script to display my most recent tweet in the footer of my website. It was simple, worked great and was really all I wanted. As of yesterday, Twitter finally retired the v1 API in favor of their v1.1 API which requires OAuth authentication. This promptly left me with the "oh crap, my site is broken" problem. I decided to write a quick blog post on how I resolved this problem. It's probably not the best way to do it, but if it helps you out, great!<&#47;p><a id="more"></a><a id="more-127"></a></p>
<p>Things we&rsquo;ll need:<&#47;p></p>
<ul>
<li>Your web-server should be running PHP 5.3 or higher.<&#47;li>
<li><a href="http:&#47;&#47;jquery.com&#47;" target="_blank">jQuery (I believe I am using 1.7)<&#47;a><&#47;li>
<li>We aren&rsquo;t going to build our own OAuth library. I recommend using <a href="https:&#47;&#47;github.com&#47;mynetx&#47;codebird-php">Codebird<&#47;a>.<&#47;li>
<li>If you are going to use Codebird, your server should also have PHP OpenSSL and PHP cURL enabled. Most worthwhile hosting providers have OpenSSL and cURL enabled by default, so you probably don&rsquo;t have to worry about that.<&#47;li><br />
<&#47;ul></p>
<p>First things first, you are going to have to <a href="https:&#47;&#47;dev.twitter.com&#47;apps" target="_blank">setup an app at Twitter.<&#47;a>  That process is pretty straight forward, so I am not going to dive off into a separate tutorial.  If you need help with that, I recommend using the Googles.  We need a VERY simple app for what we are trying to accomplish.  Fill out the required fields.  You don&rsquo;t need a callback URL for this to work.<&#47;p></p>
<p>After you have your app setup, click into your apps details and click on the OAuth tool tab.  You are going to need your consumer key, consumer secret, access token and access token secret.<&#47;p></p>
<p><img src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2013&#47;06&#47;oauth.jpg" alt="Twitter OAuth Tool" title="Twitter OAuth Tool" width="620" class="alignnone size-full"><&#47;p></p>
<p>Alright, let&rsquo;s get to the meat of this. Again, this is the way I solved this problem.  I am sure there are better options.  If you have a better way, please feel free to post it in the comments.<&#47;p></p>
<p>Create a file to contain your PHP class. I called mine <code>get-tweets.php<&#47;code>. You can call it whatever you want, but just remember you are going to have to include it in whatever file you are going to be loading your statuses onto.<&#47;p></p>
<p>[php]<br />
class GetTweets {<br />
	static public function get_most_recent($screen_name, $count, $retweets)<br />
	{<br />
		&#47;&#47;codebird is going to be doing the oauth lifting for us<br />
		require_once('codebird.php');</p>
<p>		&#47;&#47;These are your keys&#47;tokens&#47;secrets provided by Twitter<br />
		$CONSUMER_KEY = 'yourconsumerkey';<br />
		$CONSUMER_SECRET = 'yourconsumersecret';<br />
		$ACCESS_TOKEN = 'accesstoken';<br />
		$ACCESS_TOKEN_SECRET = 'accesstokensecret';</p>
<p>		&#47;&#47;Get authenticated<br />
		\Codebird\Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);</p>
<p>		$cb = \Codebird\Codebird::getInstance();<br />
		$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);</p>
<p>		&#47;&#47;These are our params passed in for our request to twitter<br />
		&#47;&#47;The GET request is made by our codebird instance for us further down<br />
		$params = array(<br />
			'screen_name' => $screen_name,<br />
			'count' => $count,<br />
			'include_rts' => $retweets,<br />
		);</p>
<p>		&#47;&#47;tweets returned by Twitter in JSON object format<br />
	    $tweets = (array) $cb->statuses_userTimeline($params);</p>
<p>		&#47;&#47;Let's encode it for our JS&#47;jQuery and return it<br />
		return json_encode($tweets);<br />
	}</p>
<p>}<br />
[&#47;php]</p>
<p>Our method <code>get_most_recent()<&#47;code> accepts 3 string parameters.  The first is the username of your twitter account.  The second parameter is the number of tweets to return, and the last parameter is whether or not to include retweets (true or false).</p>
<p>Now we need to require our php file in our page that will be displaying our tweets.  You can do this simply with the following line.  I put this near the top of my footer include (which is where my tweets are displayed), but you can put it wherever you want.<&#47;p></p>
<p>[php]<br />
&#47;&#47; Requiring custom class that pulls most recent tweets<br />
require_once('get-tweets.php')<br />
[&#47;php]</p>
<p>Now let&rsquo;s get to our JavaScript&#47;jQuery.  I added the following code inside a file I call <code>site.js<&#47;code> and include that file in the head of my page that is going to display my tweets. Quite a bit of logic in <code>display_tweets()<&#47;code> (and all of <code>relative_time()<&#47;code>) comes from Twitter&rsquo;s <code><a href="http:&#47;&#47;twitter.com&#47;javascripts&#47;blogger.js" target="_blank">blogger.js<&#47;a><&#47;code> script that many of us were using.  I made some changes using jQuery and also changed the wrappers from 'li' to 'p' because it works better for my particular situation.  They were also using <code>display_tweets()<&#47;code> as a callback in their query string which I don&rsquo;t believe is supported anymore. Their 'twitters.length' check was broken, as that is not a valid property of the new object it seems. I could be wrong there, but it wasn&rsquo;t working for me. To correct the broken loop, I changed the way we iterate using jQuery's <code>.each()<&#47;code>.<&#47;p></p>
<p>[js]<br />
&#47;&#47;display_tweets accepts a JSON object<br />
function display_tweets(tweets) {<br />
    var statusHTML = "";<br />
	jQuery.each(tweets, function(i, tweet) {<br />
	    &#47;&#47;let's check to make sure we actually have a tweet<br />
		if (tweet.text !== undefined) {<br />
			var username = tweet.user.screen_name;<br />
			&#47;&#47;clean things up a bit<br />
            var status = tweet.text.replace(&#47;((https?|s?ftp|ssh)\:\&#47;\&#47;[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])&#47;g, function(url) {<br />
                return '<a href="'+url+'">'+url+'<&#47;a>';<br />
            }).replace(&#47;\B@([_a-z0-9]+)&#47;ig, function(reply) {<br />
                return  reply.charAt(0)+'<a href="http:&#47;&#47;twitter.com&#47;'+reply.substring(1)+'">'+reply.substring(1)+'<&#47;a>';<br />
            });<br />
            statusHTML = '
<p><span>'+status+'<&#47;span> <a style="font-size:85%" href="http:&#47;&#47;twitter.com&#47;'+username+'&#47;statuses&#47;'+tweet.id_str+'">'+relative_time(tweet.created_at)+'<&#47;a><&#47;p>';<br />
            jQuery('.tweet-loader').remove();<br />
            jQuery('#twitter_update_list').append(statusHTML);<br />
		}<br />
	});<br />
}</p>
<p>&#47;&#47;taken from Twitter's blogger.js<br />
function relative_time(time_value) {<br />
  var values = time_value.split(" ");<br />
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];<br />
  var parsed_date = Date.parse(time_value);<br />
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();<br />
  var delta = parseInt((relative_to.getTime() - parsed_date) &#47; 1000);<br />
  delta = delta + (relative_to.getTimezoneOffset() * 60);</p>
<p>  if (delta < 60) {<br />
    return 'less than a minute ago';<br />
  } else if(delta < 120) {<br />
    return 'about a minute ago';<br />
  } else if(delta < (60*60)) {<br />
    return (parseInt(delta &#47; 60)).toString() + ' minutes ago';<br />
  } else if(delta < (120*60)) {<br />
    return 'about an hour ago';<br />
  } else if(delta < (24*60*60)) {<br />
    return 'about ' + (parseInt(delta &#47; 3600)).toString() + ' hours ago';<br />
  } else if(delta < (48*60*60)) {<br />
    return '1 day ago';<br />
  } else {<br />
    return (parseInt(delta &#47; 86400)).toString() + ' days ago';<br />
  }<br />
}<br />
[&#47;js]</p>
<p>The function <code>display_tweets()<&#47;code> accepts a JSON object that contains &ldquo;tweet&rdquo; objects. It will then append our tweets (wrapped in 'p' tags) into an element with the id 'twitter_update_list' (which is a div in my case). I also use a span, with the class <code>tweet-loader<&#47;code>, inside my main container div to give the user some feedback in case things are loading slowly.  You could use an animated gif or something if you like, but simple text works fine for me as it is usually gone before anyone notices anyway.  Our JS above removes this span before appending our tweets(s)<&#47;p></p>
<p>Place this code in your page that will be displaying your tweets.<&#47;p></p>
<p>[html]<br />
<!-- Our div that will contain our tweets --></p>
<div id="twitter_update_list"><span class="tweet-loader">Loading tweets...<&#47;span><&#47;div></p>
<p><script type="text&#47;javascript"><br />
    &#47;&#47;get JSON object from twitter<br />
	var tweets = <?php echo GetTweets::get_most_recent('kevindeleon','1','true') ?>;</p>
<p>	&#47;&#47;pass returned JSON object into display_tweets()<br />
	display_tweets(tweets);<br />
<&#47;script><br />
[&#47;html]</p>
<p>That&rsquo;s really it!  I know I kind of blew through a lot here, but I really just wanted to get this out there to help those that may have been in the same situation I was in.  If you have any questions, please ask them in the comments and I will try to answer them as quickly as possible.<&#47;p></p>
