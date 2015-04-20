---
layout: post
status: publish
published: true
title: Building A Better robots.txt For A WordPress Blog | Kevin deLeon | Web Design and Development | New Orleans, LA
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
wordpress_id: 100
wordpress_url: http://kevin-deleon.com/?p=100
date: '2010-03-16 14:14:45 -0500'
date_gmt: '2010-03-16 18:14:45 -0500'
categories:
- development
- SEO
- wordpress
tags: []
---
So I have been designing websites for quite a while now. I realize the importance of a `robots.txt` file, and the implications it holds for search engine optimization (SEO) and preventing duplicate content. However, for some reason, I have never bothered looking into building a better `robots.txt` file for my personal blog/WordPress powered portfolio. Weird, right? Honestly, what made me realize I needed to do something better was Google&rsquo;s Webmaster tools, which I started using since re-launching my website this month. After looking through a few weeks of data in my account, I quickly realized that I would be running into duplicate content issues at the very least. So, I started re-searching best practices for writing `robots.txt` files for WordPress installations.

My first stop of course was the [WordPress Codex](http://codex.wordpress.org/Search_Engine_Optimization_for_WordPress). Suffice it to say, I wasn&rsquo;t disappointed. They have a VERY good example of a `robots.txt` file written specifically for a base WordPress install.

{% highlight robotframework %}
User-agent: *
Disallow: /cgi-bin
Disallow: /wp-admin
Disallow: /wp-includes
Disallow: /wp-content/plugins
Disallow: /wp-content/cache
Disallow: /wp-content/themes
Disallow: /trackback
Disallow: /feed
Disallow: /comments
Disallow: /category/*/*
Disallow: */trackback
Disallow: */feed
Disallow: */comments
Disallow: /*?*
Disallow: /*?
Allow: /wp-content/uploads

# Google Image
User-agent: Googlebot-Image
Disallow:
Allow: /*

# Google AdSense
User-agent: Mediapartners-Google*
Disallow:
Allow: /*

# digg mirror
User-agent: duggmirror
Disallow: /

Sitemap: http://www.example.com/sitemap.xml
{% endhighlight %}

Most of this is quite useful just the way it is. It solves almost all duplicate content problems (comments, categories, query strings (?)), and keeps the robots out of unnecessary/private directories such as the &lsquo;wp-&rsquo; group of folders (wp-content, wp-admin, etc...). It allows a few important bots into all directories, such as the Google Image bot, and the Google AdSense bot (if you are displaying AdWords ads).

An interesting, and I feel, important item is that they are blocking &lsquo;duggmirror.&rsquo; DuggMirror is a site that mirrors content from other sites that have been dugg (see [digg](http://www.digg.com)). DuggMirror can be a duplicate content nightmare, and can cause Google to index THEIR site instead of YOUR site or value their content more highly. So, what does that mean for you? That means say "bye-bye" to that traffic that you have earned and deserve. Blocking DuggMirror solves that problem.

So, for the most part, I have decided to keep this `robots.txt` file in-tact. However, I did make a few changes, and my `robots.txt` file is below in its entirety, along with an explanation of the changes I made.

{% highlight robotframework %}
User-agent: *
Disallow: /cgi-bin
Disallow: /wp-*
Disallow: /trackback
Disallow: /feed
Disallow: /archives
Disallow: /comments
Disallow: /category/*/*
Disallow: */trackback
Disallow: */feed
Disallow: */comments
Disallow: /*?*
Disallow: /*?
Allow: /wp-content/uploads

# Google Image
User-agent: Googlebot-Image
Disallow:
Allow: /*

# digg mirror
User-agent: duggmirror
Disallow: /

Sitemap: http://kdeleon3.site/sitemap.xml.gz
{% endhighlight %}

For starters I got rid of most of the &lsquo;wp-&rsquo; directives and shortened them to the one `Disallow: wp-*` directive using the `robots.txt` wildcard character. The wildcard character allows you to match one or more characters in a URL. Historically there was a bit of controversy over using wildcards in `robots.txt` files because early on they lacked support. However, most (and all of the engines that I really care about) now support the use of wildcards. You do need to be safe when using wildcards though, because if you don&rsquo;t, you may [cause yourself some unwanted headaches](http://www.seobook.com/archives/002361.shtml).

I also got rid of the directives that were in reference to Google AdSense bot. I don&rsquo;t use Google AdSense, and I doubt I ever will, so having it in there serves no purpose.

So there you have it. That is my strategy so far with my `robots.txt` file when it comes to my WordPress powered website. It&rsquo;s definitely a work in progress that I will have to continually monitor to make sure I am getting the results that I want. Thankfully Google Webmaster tools makes that pretty simple.

