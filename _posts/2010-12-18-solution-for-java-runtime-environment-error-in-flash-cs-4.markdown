---
layout: post
status: publish
published: true
title: 'Tutorial: Solution for Java Runtime Environment Error in Flash CS 4 and ActionScript
  3'
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
excerpt: "<img title=\"Flash ActionScript 3.0 Java Runtime Environment Error\" src=\"http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;12&#47;as3error.jpg\"
  alt=\"Flash ActionScript 3.0 Java Runtime Environment Error\" width=\"620\" height=\"239\"
  &#47;>\r\n\r\nThis is just a really quick post to hopefully help anyone out that
  may be running into the same annoying problem I was with Flash CS4 and ActionScript
  3 on Apple OS X (specifically 10.5).\r\n\r\nI kept receiving the error pictured
  above, \"Error initializing Java Runtime Environment.  You may need to reinstall
  Flash,\" whenever I would try to open a new ActionScript 3 project&#47;file, or
  whenever I would try to run any AS3 code.  The error didn't occur when I was running
  ActionScript 2.0 projects. "
wordpress_id: 117
wordpress_url: http://kevin-deleon.com/?p=117
date: '2010-12-18 23:18:41 -0600'
date_gmt: '2010-12-19 04:18:41 -0600'
categories:
- development
- software
- tutorial
- Flash
- ActionScript
tags: []
comments:
- id: 268
  author: hafi
  author_email: hafi_e@walla.com
  author_url: ''
  date: '2012-02-12 15:28:55 -0600'
  date_gmt: '2012-02-12 21:28:55 -0600'
  content: "hi,\r\nthank you very much!\r\nI found this post as soon as I started
    looking for a solution, and it worked like magic. you saved me a lot of trouble.
    \r\nThanks again!"
- id: 269
  author: hafi
  author_email: hafi_e@walla.com
  author_url: ''
  date: '2012-02-12 15:31:06 -0600'
  date_gmt: '2012-02-12 21:31:06 -0600'
  content: "by the way.\r\nI use windows OS, so I removed the Java update through
    control panel - remove software, if it helps anyone."
- id: 270
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: ''
  date: '2012-02-12 15:38:34 -0600'
  date_gmt: '2012-02-12 21:38:34 -0600'
  content: "@hafi,\r\n\r\nGlad to be of some help, and thanks for posting your Windows
    specific tip."
- id: 292
  author: Pierre T
  author_email: pierre.tolmer@gmail.com
  author_url: http://lapindesbaskerville.illustrateur.org/
  date: '2012-04-28 05:14:19 -0500'
  date_gmt: '2012-04-28 10:14:19 -0500'
  content: Thank you SO much!
- id: 294
  author: Matus Grinvalsky
  author_email: m.grinvalsky@adsulting.com
  author_url: http://www.adsulting.com
  date: '2012-05-03 11:52:43 -0500'
  date_gmt: '2012-05-03 16:52:43 -0500'
  content: "I run into same error message on Win7 x64, Flash CS4 combination. It would
    pop up starting flash (no file opened).\r\n\r\nThe solution is to fix (lower)
    JVM Max Heap Size value in registry (it seem to be in jvm.ini in CS5, but for
    CS4 it is registry value).\r\n\r\nYou can try to go up if you want to, default
    is dword:00000080 (128 decimal), with dword:00000100 (256 decimal) also working.
    I do not how and why, but i got dword:00000200 there.\r\n\r\nBelow is content
    of reg file for easy fix ;-)\r\n\r\nREGEDIT4\r\n\r\n[HKEY_CURRENT_USER\\Software\\Adobe\\Flash
    10]\r\n\r\n[HKEY_CURRENT_USER\\Software\\Adobe\\Flash 10\\ActionsInspector]\r\n\"JVM
    Max Heap Size\"=dword:00000080"
- id: 296
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: ''
  date: '2012-05-05 16:22:47 -0500'
  date_gmt: '2012-05-05 21:22:47 -0500'
  content: Thanks for your comment. I'm not much of a Windows guy, but I am sure this
    info will help someone out.
- id: 346
  author: Ben
  author_email: domiben11@yahoo.com
  author_url: ''
  date: '2012-06-23 22:17:36 -0500'
  date_gmt: '2012-06-24 03:17:36 -0500'
  content: "Thanks to deLeon for posting this! I've searched all over the Adobe and
    Actionscript forums and no one had a clue what to do. \r\n\r\nAnd I used to think
    blogs weren't useful-- pffft. :3"
- id: 379
  author: Christine
  author_email: calmblackwater@yahoo.com
  author_url: ''
  date: '2012-07-11 23:07:40 -0500'
  date_gmt: '2012-07-12 04:07:40 -0500'
  content: Computers are not my forte so when I started getting this error message,
    I was clueless.   I was lucky though all I needed was a software update for the
    java and I was back in business!  For mac people, go to the apple, click on software
    updates and let your computer do it's thing.  Finally!  Back to work!
- id: 389
  author: Alex
  author_email: alexander.p.mulder@gmail.com
  author_url: ''
  date: '2012-09-04 14:07:58 -0500'
  date_gmt: '2012-09-04 19:07:58 -0500'
  content: "Awesome!\r\n\r\nWorked like a charm :)"
---
<p><img title="Flash ActionScript 3.0 Java Runtime Environment Error" src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;12&#47;as3error.jpg" alt="Flash ActionScript 3.0 Java Runtime Environment Error" width="620" height="239" &#47;></p>
<p>This is just a really quick post to hopefully help anyone out that may be running into the same annoying problem I was with Flash CS4 and ActionScript 3 on Apple OS X (specifically 10.5).</p>
<p>I kept receiving the error pictured above, "Error initializing Java Runtime Environment.  You may need to reinstall Flash," whenever I would try to open a new ActionScript 3 project&#47;file, or whenever I would try to run any AS3 code.  The error didn't occur when I was running ActionScript 2.0 projects. <a id="more"></a><a id="more-117"></a></p>
<p>After doing some searching on Google, and finding mostly solutions that were regarding the 'CLASSPATH' variable on Windows systems, it dawned on me that when I installed NetBeans IDE a few weeks back, it also installed a newer version of the Java Runtime Environment.</p>
<p>So I opened 'Java Preferences.app' which is installed in my '&#47;Applications&#47;Utilities&#47;' folder and found what I had suspected.  My JRE was set to 'Java SE 6.'</p>
<p><img title="Java Preferences Utility" src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;12&#47;javaprefs1.jpg" alt="Java Preferences Utility" width="623" height="461" &#47;></p>
<p>Apparently, Flash for some reason needs to run a 32-bit instance of JRE 5 on my machine when running ActionScript 3 code.  This may be due to the fact I am running an older Intel Macbook Pro, or maybe Flash CS4 just needs an older version of Java.  I honestly have no idea.  But, after changing the Java Preferences to 'J2SE 5.0 32-bit,' Flash CS4 now runs without a hitch, and has no problem executing ActionScript 3.  I do have to switch the preferences back to 6 when I run NetBeans, but that is fairly trivial using the Java Preferences panel.</p>
<p>If you don't have 'Java Preferences.app' installed for some reason, you could try changing the preferred version manually from the command line by creating a symlink from 'CurrentJDK' to J2SE 5.0.  However, I don't recommend this route unless you know what you are doing.</p>
<p>Now, as I stated before, there are apparently several other issues that will also throw this same error (it's pretty generic and unhelpful).  This post isn't intended to solve them all, but this is what worked for me.  I hope it helps someone else and saves you a bit of a headache.</p>
