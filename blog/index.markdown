---
layout: page
status: publish
published: true
title: Blog | Web Development &amp; Digital Marketing | New Orleans, LA
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: https://kevin-deleon.com/blog
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: https://kevin-deleon.com
wordpress_id: 44
wordpress_url: https://kevin-deleon.com/?page_id=44
date: '2010-03-01 22:01:49 -0600'
date_gmt: '2010-03-02 03:01:49 -0600'
categories:
- Uncategorized
tags: []
comments: []
---

<ul class="blog-list">
  {% for post in site.posts %}
    <li>
      <span>{{ post.date | date: '%B %d, %Y' }}</span><br><a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
