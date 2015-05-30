---
layout: post
status: publish
published: true
title: 'Tutorial: Custom React Native Components in Swift'
author:
  display_name: Kevin deLeon
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
categories:
- development
- tutorial
- swift
- react native
- reactjs
- javascript
- mobile
tags: []
comments: true
---
I&rsquo;m sure you&rsquo;ve probably heard by now, <a href="https://facebook.github.io/react-native" target="_blank">React Native</a> is awesome. I&rsquo;ve been interested in mobile app development for a while, but until now really just haven&rsquo;t had time to dive in. A few months ago, I started learning Swift, but then got busy with some projects and put it down. Recently, the hype around the inter-webs has been React, and now it&rsquo;s counterpart React Native. For someone like me who spends most of his days in JavaScript and other &lsquo;web&rsquo; languages, the ability to write native apps in JavaScript is pretty damn exciting.

The base of React Native contains a TON of what you need to build a pretty awesome app. However, from time to time, we&rsquo;ll likely need to write our own custom components. When React Native was first released, this could only be accomplished using Objective-C. However, recently the ability to export custom componenets in Swift has arrived. I did quite a bit of searching for examples, but really only found the <a href="https://facebook.github.io/react-native/docs/nativemodulesios.html#content" target="_blank">documentation</a> avaialable on the React Native website, and <a href="http://moduscreate.com/react_native_custom_components_ios/" target="_blank">a pretty great tutorial</a> by Jay Garcia on building custom components in Objective-C.

Armed with the manual and Jay&rsquo;s tutorial, I decided to implement Jay&rsquo;s `MCFileWriterUtil` in Swift and export to React Native!

A bit of a warning: I won&rsquo;t be spending a ton of time delving into the code, or what is going on. This is more of a proof of concept. I would HIGHLY recommend you fully read Jay&rsquo;s tutorial, because he has done a great job explaining things. This tutorial will mostly touch on the differences and problems I ran into. If you have any questions or would like further explanations, please hit me up in the comments. Also, I am NOT a Swift, Objective-C or React Native ninja. If I am doing something wrong, or not using a best practice, please let me know in the comments and I&rsquo;ll update things accordingly.

All of the code that will be used in this post is available <a href="https://github.com/kevindeleon/react-custom-swift-component" target="_blank">on github</a>, so you may want to grab it before reading on. Most of the code (and code comments) come directly from Jay&rsquo;s tutorial. I&rsquo;ve tried to keep it as close as possible so that it&rsquo;s easy to compare the two.

{% highlight JavaScript %}