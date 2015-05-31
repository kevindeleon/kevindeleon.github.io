---
layout: post
status: publish
published: true
title: Tutorial: Solution for Java Runtime Environment Error in Flash CS 4 and ActionScript 3
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
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
comments: true
---
This is just a really quick post to hopefully help anyone out that may be running into the same annoying problem I was with Flash CS4 and ActionScript 3 on Apple OS X (specifically 10.5).

I kept receiving the error pictured above, "Error initializing Java Runtime Environment. You may need to reinstall Flash," whenever I would try to open a new ActionScript 3 project/file, or whenever I would try to run any AS3 code. The error didn&rsquo;t occur when I was running ActionScript 2.0 projects.

After doing some searching on Google, and finding mostly solutions that were regarding the &lsquo;CLASSPATH&rsquo; variable on Windows systems, it dawned on me that when I installed NetBeans IDE a few weeks back, it also installed a newer version of the Java Runtime Environment.

So I opened &lsquo;Java Preferences.app&rsquo; which is installed in my &lsquo;/Applications/Utilities/&rsquo; folder and found what I had suspected. My JRE was set to &lsquo;Java SE 6.&rsquo;

<img class="img-max" src="/wp-content/uploads/2010/12/javaprefs1.jpg" alt="Java Preferences Utility" />

Apparently, Flash for some reason needs to run a 32-bit instance of JRE 5 on my machine when running ActionScript 3 code. This may be due to the fact I am running an older Intel Macbook Pro, or maybe Flash CS4 just needs an older version of Java. I honestly have no idea. But, after changing the Java Preferences to &lsquo;J2SE 5.0 32-bit,&rsquo; Flash CS4 now runs without a hitch, and has no problem executing ActionScript 3. I do have to switch the preferences back to 6 when I run NetBeans, but that is fairly trivial using the Java Preferences panel.

If you don&rsquo;t have &lsquo;Java Preferences.app&rsquo; installed for some reason, you could try changing the preferred version manually from the command line by creating a symlink from &lsquo;CurrentJDK&rsquo; to J2SE 5.0. However, I don&rsquo;t recommend this route unless you know what you are doing.

Now, as I stated before, there are apparently several other issues that will also throw this same error (it&rsquo;s pretty generic and unhelpful). This post isn&rsquo;t intended to solve them all, but this is what worked for me. I hope it helps someone else and saves you a bit of a headache.

