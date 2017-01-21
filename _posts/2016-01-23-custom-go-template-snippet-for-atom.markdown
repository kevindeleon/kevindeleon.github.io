---
layout: post
status: publish
published: true
title: 'Tutorial: Custom Go Template Snippet for Atom'
author:
  display_name: Kevin deLeon
  email: kevin.deleon@gmail.com
  url: https://kevin-deleon.com
author_email: kevin.deleon@gmail.com
author_url: https://kevin-deleon.com
categories:
- development
- tutorial
- go
- atom
- cson
tags: []
comments: true
---
<em>Update 01/24/16: I thought this may be useful enough, that I decided to submit it to the core `language-go` package with <a href="https://github.com/atom/language-go/pull/83" target="_blank">this pull request</a>. It was merged, so this should be available by default in future releases.</em>

This is going be a super quick post, but I thought I&rsquo;d throw it out there for any Atom newcomers who might need a snippet for creating a quick little starter template for their Go packages/scripts.

First things first, make sure the core `language-go` package is enabled. It should be by default.

Next, select &ldquo;Open Your Snippets&rdquo; from the &ldquo;Atom&rdquo; menu item (on OS X...not sure where it lives on Windows).

In the file that opens, `snippets.cson`, paste the following code:

<code data-gist-id="b05ac36ea7aeaaa16e39"></code>

After that&rsquo;s in place, open up a `.go` file. When you start typing `got` into the file, you should see your new snippet in the autocomplete menu!

Start typing, and you'll see that the `package` and `main` function declarations change at the same time. Tab around and get a feel for the template.

Feel free to change the name &ldquo;go template&rdquo; and the &ldquo;prefix&rdquo; to whatever makes sense for you.
