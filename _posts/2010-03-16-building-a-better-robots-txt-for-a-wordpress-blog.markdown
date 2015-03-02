---
layout: post
status: publish
published: true
title: Building A Better robots.txt For A WordPress Blog
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kdeleon3.site
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kdeleon3.site
excerpt: "<img src=\"http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;03&#47;robot.jpg\"
  alt=\"robot\" &#47;>\r\n\r\nSo I have been designing websites for quite a while
  now.  I realize the importance of a <code>robots.txt<&#47;code> file, and the implications
  it holds for search engine optimization (SEO) and preventing duplicate content.
  \ However, for some reason, I have never bothered looking into building a better
  <code>robots.txt<&#47;code> file for my personal blog&#47;WordPress powered portfolio.
  \ Weird, right?  Honestly, what made me realize I needed to do something better
  was <a href=\"http:&#47;&#47;www.google.com&#47;webmasters\" target=\"_blank\">Google's
  Webmaster<&#47;a> tools, which I started using since re-launching my website this
  month.  After looking through a few weeks of data in my account, I quickly realized
  that I would be running into duplicate content issues at the very least.  So, I
  started re-searching best practices for writing <code>robots.txt<&#47;code> files
  for WordPress installations. "
wordpress_id: 100
wordpress_url: http://www.kdeleon3.site/?p=100
date: '2010-03-16 14:14:45 -0500'
date_gmt: '2010-03-16 18:14:45 -0500'
categories:
- development
- SEO
- wordpress
tags: []
comments:
- id: 85
  author: d3mha
  author_email: d3mha@live.com
  author_url: http://www.d3mha.com
  date: '2010-11-12 17:05:44 -0600'
  date_gmt: '2010-11-12 22:05:44 -0600'
  content: "almost perfect robots.txt file\r\n\r\nadding \r\nDisallow: &#47;readme.html\r\nDisallow:
    &#47;license.txt\r\n# Internet Archiver Wayback Machine\r\nUser-agent: ia_archiver\r\nDisallow:
    &#47;\r\n\r\n\r\nwould be helpful too :)"
- id: 86
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: ''
  date: '2010-11-12 17:09:16 -0600'
  date_gmt: '2010-11-12 22:09:16 -0600'
  content: |-
    d3mha,

    Thanks for the comment.  I will definitely look into Disallowing those.
- id: 241
  author: Chris Hough
  author_email: chrismhough@gmail.com
  author_url: http://excitabledude.com
  date: '2011-06-11 14:09:50 -0500'
  date_gmt: '2011-06-11 19:09:50 -0500'
  content: Thanks for this post, it was really helpful in my most recent WP setup
- id: 246
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: ''
  date: '2011-08-20 10:30:45 -0500'
  date_gmt: '2011-08-20 15:30:45 -0500'
  content: Hey man..no worries at all.  Glad it helped.
- id: 271
  author: joao
  author_email: webipbip@yahoo.com.br
  author_url: http://bip-online.tk
  date: '2012-03-03 13:39:53 -0600'
  date_gmt: '2012-03-03 19:39:53 -0600'
  content: good article. I'll try this. thanks
- id: 380
  author: samooo
  author_email: sayyah@gmail.com
  author_url: ''
  date: '2012-07-14 12:08:04 -0500'
  date_gmt: '2012-07-14 17:08:04 -0500'
  content: "hey kev,\r\n\r\nwhy use Sitemap: http:&#47;&#47;www.example.com&#47;sitemap.xml.gz
    as opposed to the sitemap.xml - i do use the xml sitemap generator so it does
    generate both variations of the file - but wouldn't it make sense to just use
    the non compressed directive instead?"
- id: 381
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2012-07-15 15:12:57 -0500'
  date_gmt: '2012-07-15 20:12:57 -0500'
  content: |-
    @Samooo

    That's a good question and one you will find varying answers to out on the web, but basically using a compressed version (which is supported by most major search engines) uses less bandwidth on both the search engine side and your server's side.  It really will not effect you much unless you have a HUGE sitemap.  Honestly, the answer is, it doesn't really matter, unless you have a sitemap with THOUSANDS of urls in it.  Hope this clears it up.
- id: 400
  author: rohit
  author_email: bloginvent@gmail.com
  author_url: http://www.bloginvent.com
  date: '2013-03-19 02:58:48 -0500'
  date_gmt: '2013-03-19 07:58:48 -0500'
  content: thanks a lot for this blog i am suffering from a lot of problem regarding
    robots file and fetching error,and trying to read ur blog continously and like
    your blog
- id: 402
  author: Anton
  author_email: zolotuhin87@gmail.com
  author_url: http://santa-agata.com/
  date: '2013-04-04 08:45:04 -0500'
  date_gmt: '2013-04-04 13:45:04 -0500'
  content: "Helpful article.\r\nWordPress Codex has a good example of robots.txt until
    the moment you change your theme. The essential things are still the same but
    some entries must be corrected or deleted. So I think the best way to create a
    clean robots.txt is to delete all unnecessary files from the server (readme, license
    etc), check the current folders&#47;files hierarchy and then make the necessary
    changes to robots.txt. In this case you can feel all the benefits."
- id: 36506
  author: quick response times
  author_email: rheasawyers@hotmail.com
  author_url: http://admin818bailbonds.wordpress.com
  date: '2015-02-21 18:14:56 -0600'
  date_gmt: '2015-02-22 00:14:56 -0600'
  content: "In a criminal complaint filed in Dallas, ATF investigators allege that
    operatives of La Familia shipped numerous firearms in tthe U.\r\nEnglish is an
    additional language utilised by people moving into many parts in tthe \r\nworld.
    It&acirc;&euro;&trade;s possible thhat living your life without stress isn't likely
    but learning to manage it is possible."
---
<p><img src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;03&#47;robot.jpg" alt="robot" &#47;></p>
<p>So I have been designing websites for quite a while now.  I realize the importance of a <code>robots.txt<&#47;code> file, and the implications it holds for search engine optimization (SEO) and preventing duplicate content.  However, for some reason, I have never bothered looking into building a better <code>robots.txt<&#47;code> file for my personal blog&#47;WordPress powered portfolio.  Weird, right?  Honestly, what made me realize I needed to do something better was <a href="http:&#47;&#47;www.google.com&#47;webmasters" target="_blank">Google's Webmaster<&#47;a> tools, which I started using since re-launching my website this month.  After looking through a few weeks of data in my account, I quickly realized that I would be running into duplicate content issues at the very least.  So, I started re-searching best practices for writing <code>robots.txt<&#47;code> files for WordPress installations. <a id="more"></a><a id="more-100"></a></p>
<p>My first stop of course was the <a href="http:&#47;&#47;codex.wordpress.org&#47;Search_Engine_Optimization_for_WordPress" target="_blank">WordPress Codex<&#47;a>.&Acirc;&nbsp; Suffice it to say, I wasn't disappointed.&Acirc;&nbsp; They have a VERY good example of a <code>robots.txt<&#47;code> file written specifically for a base WordPress install.<br />
[plain]<br />
User-agent: *<br />
Disallow: &#47;cgi-bin<br />
Disallow: &#47;wp-admin<br />
Disallow: &#47;wp-includes<br />
Disallow: &#47;wp-content&#47;plugins<br />
Disallow: &#47;wp-content&#47;cache<br />
Disallow: &#47;wp-content&#47;themes<br />
Disallow: &#47;trackback<br />
Disallow: &#47;feed<br />
Disallow: &#47;comments<br />
Disallow: &#47;category&#47;*&#47;*<br />
Disallow: *&#47;trackback<br />
Disallow: *&#47;feed<br />
Disallow: *&#47;comments<br />
Disallow: &#47;*?*<br />
Disallow: &#47;*?<br />
Allow: &#47;wp-content&#47;uploads</p>
<p># Google Image<br />
User-agent: Googlebot-Image<br />
Disallow:<br />
Allow: &#47;*</p>
<p># Google AdSense<br />
User-agent: Mediapartners-Google*<br />
Disallow:<br />
Allow: &#47;*</p>
<p># digg mirror<br />
User-agent: duggmirror<br />
Disallow: &#47;</p>
<p>Sitemap: http:&#47;&#47;www.example.com&#47;sitemap.xml<br />
[&#47;plain]<br />
Most of this is quite useful just the way it is.  It solves almost all duplicate content problems (comments, categories, query strings (?)), and keeps the robots out of unnecessary&#47;private directories such as the 'wp-' group of folders (wp-content, wp-admin, etc...).  It allows a few important bots into all directories, such as the Google Image bot, and the Google AdSense bot (if you are displaying AdWords ads).</p>
<p>An interesting, and I feel, important item is that they are blocking 'duggmirror.'  DuggMirror is a site that mirrors content from other sites that have been dugg (see <a href="http:&#47;&#47;www.digg.com" target="_blank">digg<&#47;a>).  DuggMirror can be a duplicate content nightmare, and can cause Google to index THEIR site instead of YOUR site or value their content more highly.  So, what does that mean for you?  That means say "bye-bye" to that traffic that you have earned and deserve.  Blocking DuggMirror solves that problem.</p>
<p>So, for the most part, I have decided to keep this <code>robots.txt<&#47;code> file in-tact. However, I did make a few changes, and my <code>robots.txt<&#47;code> file is below in its entirety, along with an explanation of the changes I made.<br />
[plain]<br />
User-agent: *<br />
Disallow: &#47;cgi-bin<br />
Disallow: &#47;wp-*<br />
Disallow: &#47;trackback<br />
Disallow: &#47;feed<br />
Disallow: &#47;archives<br />
Disallow: &#47;comments<br />
Disallow: &#47;category&#47;*&#47;*<br />
Disallow: *&#47;trackback<br />
Disallow: *&#47;feed<br />
Disallow: *&#47;comments<br />
Disallow: &#47;*?*<br />
Disallow: &#47;*?<br />
Allow: &#47;wp-content&#47;uploads</p>
<p># Google Image<br />
User-agent: Googlebot-Image<br />
Disallow:<br />
Allow: &#47;*</p>
<p># digg mirror<br />
User-agent: duggmirror<br />
Disallow: &#47;</p>
<p>Sitemap: http:&#47;&#47;kdeleon3.site&#47;sitemap.xml.gz<br />
[&#47;plain]<br />
For starters I got rid of most of the 'wp-' directives and shortened them to the one <code>'Disallow: wp-*'<&#47;code> directive using the <code>robots.txt<&#47;code> wildcard character.  The wildcard character allows you to match one or more characters in a URL.  Historically there was a bit of controversy over using wildcards in <code>robots.txt<&#47;code> files because early on they lacked support.  However, most (and all of the engines that I really care about) now support the use of wildcards.  You do need to be safe when using wildcards though, because if you don't, you may <a href="http:&#47;&#47;www.seobook.com&#47;archives&#47;002361.shtml" target="_blank">cause yourself some unwanted headaches<&#47;a>.</p>
<p>I also got rid of the directives that were in reference to Google AdSense bot.  I don't use Google AdSense, and I doubt I ever will, so having it in there serves no purpose.</p>
<p>So there you have it.  That is my strategy so far with my <code>robots.txt<&#47;code> file when it comes to my WordPress powered website.&Acirc;&nbsp; It's definitely a work in progress that I will have to continually monitor to make sure I am getting the results that I want.  Thankfully Google Webmaster tools makes that pretty simple.</p>
