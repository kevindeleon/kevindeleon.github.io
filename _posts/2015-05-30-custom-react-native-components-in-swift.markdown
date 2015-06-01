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
I&rsquo;m sure you&rsquo;ve probably heard by now, <a href="https://facebook.github.io/react-native" target="_blank">React Native</a> is awesome!

I&rsquo;ve been interested in mobile app development for a while, but until now, I really just haven&rsquo;t had time to dive in. A few months ago I started learning Swift, but got busy with some other projects and had to put it down. Recently, the hype around the inter-webs has been <a href="http://facebook.github.io/react/" target="_blank">React</a>, and I&rsquo;ve had a chance to work on a few React projects. React has been a pleasure to work with, so when Facebook released React Native, I was pretty stoked. For someone like me who spends most of his days in JavaScript, and other &lsquo;web&rsquo; languages, the ability to write native apps in JavaScript is pretty damn exciting.

The core of React Native contains a TON of what you need to build a pretty awesome app. However, from time to time, we&rsquo;ll likely need to write our own custom component, re-use some Swift code we&rsquo;ve used in the past, or take advantage of some platform specific API that isn&rsquo;t available in the core. The React Native team has done a fantastic job of making this possible via the `RCTBridgeModule` (or React Native bridge). When React Native was first released, this could only be accomplished using Objective-C. I admit, I&rsquo;m not a huge fan of Objective-C. I know it&rsquo;s a great language, but coming from JavaScript, PHP, Ruby, etc..., the syntax is just so foreign feeling to me. I know I&rsquo;d get it eventually, but Swift just &lsquo;feels&rsquo; so much better. Thankfully, the ability to export custom components in Swift has arrived. I did quite a bit of searching for examples, but really only found the <a href="https://facebook.github.io/react-native/docs/nativemodulesios.html#content" target="_blank">documentation</a> available on the React Native website, and <a href="http://moduscreate.com/react_native_custom_components_ios/" target="_blank">a pretty great tutorial</a> by <a href="https://twitter.com/modusjesus" target="_blank">Jay Garcia</a> on building custom components in Objective-C.

Armed with the manual and Jay&rsquo;s tutorial, I decided to implement Jay&rsquo;s `MCFileWriterUtil` in Swift and export to React Native!

A bit of a warning: I won&rsquo;t be spending a ton of time delving into the code (which is all pretty basic stuff), or what is going on. This is more of a proof of concept. I would HIGHLY recommend you read Jay&rsquo;s tutorial. He has done a great job explaining things. This tutorial will mostly touch on the differences and problems I ran into. If you have any questions, or would like further explanations, please hit me up in the comments. Also, I am NOT a Swift, Objective-C or React Native ninja. If I am doing something wrong, or not using best practices, please let me know in the comments and I&rsquo;ll update things accordingly.

All of the code that will be used in this post is available <a href="https://github.com/kevindeleon/react-custom-swift-component" target="_blank">on GitHub</a>, so you may want to grab it before reading on. Most of the code (and code comments) come directly from Jay&rsquo;s tutorial. I&rsquo;ve tried to keep it as close as possible so that it&rsquo;s easy to compare the two.

## Missing Documentation?
This may be something that most Swift developers would have known, but is definitely not covered in the React Native <a href="https://facebook.github.io/react-native/docs/nativemodulesios.html#content" target="_blank">documentation</a>: we need an Objective-C bridging file (`CustomSwiftComponent-Bridging-Header.h`) that imports `RCTBridgeModule.h`. If we don&rsquo;t have that file, we&rsquo;ll receive an error when trying to build our application complaining about the missing header file. If we add the header file, but don&rsquo;t add the import statement, we receive a build error for our use of an undeclared type (`RCTResponseSenderBlock`). Now, this could be missing from the <a href="https://facebook.github.io/react-native/docs/nativemodulesios.html#content" target="_blank">documentation</a> because it is obvious to those familiar with Swift, or it may be something I am doing wrong in Xcode. Either way, it seems to be a necessity. I&rsquo;ve opened an <a href="https://github.com/facebook/react-native/issues/1468" target="_blank">issue</a> on React Native&rsquo;s GitHub account. I will update this post if something changes, or I get clarification.

<!-- Objective-C Bridging Header -->
<code data-gist-id="4d8738fe44fd91cae3fb"></code>

## Private Implementation File
This part of the process is pretty straight forward, but a bit more cumbersome than the Objective-C implementation. As you&rsquo;ve probably already read in the <a href="https://facebook.github.io/react-native/docs/nativemodulesios.html#content" target="_blank">docs</a>, or seen in Jay&rsquo;s implementation, this file is where all the magic happens when implementing a custom Objective-C module. However, in the Swift implementation, because there is no support for macros, we expose our methods (that are built in our Swift file below) to the React Native bridge here, but we don&rsquo;t include any of the logic here.

<!-- MCFileWriterUtil.m -->
<code data-gist-id="fdfa54325db7f73d03b4"></code>

## Swift
This file is obviously where the majority of the differences are between my implementation and Jay&rsquo;s implementation, and for a pretty obvious reason: his is in Objective-C and mine is in Swift. Again, I&rsquo;m not going to hit on all the syntax differences, but if you compare the two implementations, they&rsquo;re pretty easy to spot. If you have questions, or see ways that I can make this better, please let me know in the comments. Again, this is one of my first few forays into Swift, so I won&rsquo;t be offended!

<!-- MCFileWriterUtil.swift -->
<code data-gist-id="95417e5c6e0ed2819b32"></code>

## React
This file is pretty much identical to Jay&rsquo;s file, right down to most of the comments. There are a few comments that are mine, indicated by my initials, that explain things I changed and why. I wanted to keep things as close to the way Jay did it as possible so that we are comparing apples to apples.

<!-- index.ios.js -->
<code data-gist-id="49ae2bbd9478422a06e7"></code>
