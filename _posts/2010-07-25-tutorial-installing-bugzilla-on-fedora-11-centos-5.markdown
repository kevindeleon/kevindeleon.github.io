---
layout: post
status: publish
published: true
title: 'Tutorial: Installing Bugzilla on Fedora 11 & CentOS 5'
author:
  display_name: Kevin deLeon
  login: admin
  email: kevin.deleon@gmail.com
  url: http://kevin-deleon.com
author_login: admin
author_email: kevin.deleon@gmail.com
author_url: http://kevin-deleon.com
excerpt: "<img src=\"http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;07&#47;bugzilla-fly1.jpg\"
  alt=\"Installing Bugzilla\" &#47;>\r\n\r\nSo a buddy of mine, <a href=\"http:&#47;&#47;www.linkedin.com&#47;pub&#47;charles-glisan&#47;\">Charlie
  Glisan<&#47;a>, was having issues installing Bugzilla on Fedora 11 and CentOS 5
  a while back. After hours of strife, and finally getting the software up and running,
  \ he decided he would write detailed instructions on how to accomplish the install.
  \ He doesn't have a blog himself and thought that it might be helpful to others
  out there that are trying to accomplish the same goal to have the instructions available,
  so he asked if I would like to post the instructions on my blog. "
wordpress_id: 111
wordpress_url: http://kevin-deleon.com/?p=111
date: '2010-07-25 14:31:09 -0500'
date_gmt: '2010-07-25 18:31:09 -0500'
categories:
- development
- web
- software
- tutorial
tags: []
comments:
- id: 249
  author: Murali
  author_email: mm@gmail.com
  author_url: http://www.mm.com
  date: '2011-09-19 01:52:03 -0500'
  date_gmt: '2011-09-19 06:52:03 -0500'
  content: "Hey, thank you for nice information. Looks like configuring httpd.conf
    to include bugzilla is missing. \r\n\r\nThank you for the steps though"
- id: 285
  author: lmntcrans
  author_email: lmntcrans@mailinator.com
  author_url: ''
  date: '2012-03-26 11:59:18 -0500'
  date_gmt: '2012-03-26 16:59:18 -0500'
  content: Murali; current versions put in a &#47;etc&#47;httpd&#47;conf.d&#47;bugzilla
    file for you, taking care of that
- id: 287
  author: Sterling Michel
  author_email: sterlingmichel@gmail.com
  author_url: http://www.5searches.com
  date: '2012-03-27 17:30:38 -0500'
  date_gmt: '2012-03-27 22:30:38 -0500'
  content: Thanks you much. I spent one week trying to get it install using the source
    code from bugzilla and I think there is an issue with the code.
- id: 291
  author: Robbie
  author_email: robbie.bays@googlemail.com
  author_url: ''
  date: '2012-04-24 03:22:52 -0500'
  date_gmt: '2012-04-24 08:22:52 -0500'
  content: "Great - this saved me a lot of ball-ache!\r\n\r\nCheers!"
- id: 310
  author: Vijay
  author_email: vijayabhaskarr@gmail.com
  author_url: ''
  date: '2012-06-10 10:43:33 -0500'
  date_gmt: '2012-06-10 15:43:33 -0500'
  content: "Hi,\r\n\r\nI have installed BugZilla through YUM and execution of checksetup.pl\r\n
    is sucessfull. It throws error '403 Forbidden' when try to access bugzill with
    url: http:&#47;&#47;localhost&#47;bugzilla&#47;.\r\n\r\nI am using CentOS. \r\n\r\nPls
    suugest me if i missed any setps.\r\n\r\nThanks,\r\nVijay"
- id: 312
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: ''
  date: '2012-06-10 11:38:36 -0500'
  date_gmt: '2012-06-10 16:38:36 -0500'
  content: |-
    @Vijay,

    As I stated in the blog post, I didn't write this tutorial.  I was just posting it for a friend (kind of a guest writer).  So, I am sorry to say you are probably on your own.  If he swings through, maybe he'll post a reply.

    As for 403 errors...they can be caused by many different things.  One of the most common is visiting an empty directory when "directory listing" is turned off on the server. However, if bugzilla was installed successfully to the localhost&#47;bugzilla&#47; directory, then that seems like an unlikely problem.  I would check to make sure there are actually files in that directory as a first step.
- id: 383
  author: prashansa
  author_email: helloprashansa@gmail.com
  author_url: ''
  date: '2012-08-04 07:46:44 -0500'
  date_gmt: '2012-08-04 12:46:44 -0500'
  content: "ii have installed bugzilla following these steps but it's giving an error
    \r\n&#47;etc&#47;bugzilla&#47;localconfig: Permission denied at Bugzilla&#47;Install&#47;Localconfig.pm
    line 386."
- id: 384
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2012-08-04 12:05:08 -0500'
  date_gmt: '2012-08-04 17:05:08 -0500'
  content: |-
    @prashansa, Sorry you are having trouble with the install. It looks like Bugzilla is trying to write a file called localconfig to that directory "&#47;etc&#47;bugzilla&#47;"... You may not have permissions to do that.

    Be sure you are running checksetup.pl (.&#47;checksetup.pl) from the Bugzilla directory (cd &#47;path&#47;to&#47;bugzilla;), and that your account has write access to that directory.
- id: 385
  author: prashansa
  author_email: helloprashansa@gmail.com
  author_url: ''
  date: '2012-08-07 05:00:06 -0500'
  date_gmt: '2012-08-07 10:00:06 -0500'
  content: "kevin thank's for your reply \r\nnow bugzilla is installed propely but
    still giving an error during configuration \r\nERROR:install_driver(mysql) failed:
    Attempt to reload DBD&#47;mysql.pm aborted.\r\nCompilation failed in require at
    (eval 1314) line 3,  line 558."
- id: 386
  author: Kevin deLeon
  author_email: kevin.deleon@gmail.com
  author_url: http://kdeleon3.site
  date: '2012-08-07 08:44:36 -0500'
  date_gmt: '2012-08-07 13:44:36 -0500'
  content: "@prashansa,\r\n\r\nNo problem...glad that helped.  It sounds like you
    are either missing the Perl DBD::mysql module or according to an article I found,
    if you are using OS X, then it may be a path issue.\r\n\r\nhttp:&#47;&#47;probably.co.uk&#47;problems-installing-dbdmysql-on-os-x-snow-leopard.html\r\n\r\nSee
    if that link helps...if not, make sure you have the correct Perl module installed
    for mysql."
- id: 387
  author: prashansa
  author_email: helloprashansa@gmail.com
  author_url: ''
  date: '2012-08-08 04:13:17 -0500'
  date_gmt: '2012-08-08 09:13:17 -0500'
  content: "thank for your support kevin\r\n\r\nI am working on fedora 17 yes i found
    there is misssing PerlDBD\r\nnow i have installed tar file of DBD but where should
    i placed that DBD file in in mysql folder or in bugzilla folder\r\n(bugzilla and
    mysql both is in &#47;usr&#47;local file)"
- id: 404
  author: Tomas
  author_email: tozt87@gmail.com
  author_url: ''
  date: '2013-04-08 09:31:57 -0500'
  date_gmt: '2013-04-08 14:31:57 -0500'
  content: "Thanks! This is a great step-by-step guide! I'm using Fedora 18 and it
    works almost perfect, I just need to use:\r\n\r\n service [service_name] start
    \r\n\r\ninstead of the commands in this guide."
- id: 1387
  author: Dee
  author_email: deehouse@mail.ru
  author_url: ''
  date: '2013-10-08 12:10:20 -0500'
  date_gmt: '2013-10-08 17:10:20 -0500'
  content: Thank you! You did the great work! Peace!
---
<p><img src="http:&#47;&#47;www.kdeleon3.site&#47;wp-content&#47;uploads&#47;2010&#47;07&#47;bugzilla-fly1.jpg" alt="Installing Bugzilla" &#47;></p>
<p>So a buddy of mine, <a href="http:&#47;&#47;www.linkedin.com&#47;pub&#47;charles-glisan&#47;">Charlie Glisan<&#47;a>, was having issues installing Bugzilla on Fedora 11 and CentOS 5 a while back. After hours of strife, and finally getting the software up and running,  he decided he would write detailed instructions on how to accomplish the install.  He doesn't have a blog himself and thought that it might be helpful to others out there that are trying to accomplish the same goal to have the instructions available, so he asked if I would like to post the instructions on my blog. <a id="more"></a><a id="more-111"></a></p>
<p>I am always a fan of finding helpful information out on the interwebs, so I am posting his instructions, verbatim, in hopes that they are helpful to a few struggling souls.  If you have any questions, or find errors, please post them in the comments below and we will try to get to them as quickly as possible.</p>
<h3>Installing Bugzilla on Fedora 11 &amp; CentOS 5<&#47;h3><br />
Log in as root or su:<br />
[bash light="true"]<br />
$ su<br />
(enter root password)<br />
[&#47;bash]<br />
For CentOS only, add the EPEL repository (which contains Bugzilla):<br />
[bash light="true"]<br />
$ rpm -Uvh http:&#47;&#47;download.fedora.redhat.com&#47;pub&#47;epel&#47;5&#47;i386&#47;epel-release-5-3.noarch.rpm<br />
[&#47;bash]<br />
Install Bugzilla:<br />
[bash light="true"]<br />
$ yum install bugzilla<br />
[&#47;bash]<br />
Install MySQL:<br />
[bash light="true"]<br />
$ yum install mysql-server<br />
[&#47;bash]<br />
Install Apache:<br />
[bash light="true"]<br />
$ yum install httpd<br />
[&#47;bash]<br />
Start the the MySQL service:<br />
[bash light="true"]<br />
$ &#47;etc&#47;init.d&#47;mysqld start<br />
[&#47;bash]<br />
Set password for the root user in MySQL:<br />
[bash light="true"]<br />
$ mysqladmin -u root password {password}<br />
[&#47;bash]<br />
Log into MySQL:<br />
[bash light="true"]<br />
$ mysql -u root -p<br />
[&#47;bash]<br />
Create 'bugs' user in MySQL:<br />
[bash light="true"]<br />
mysql> CREATE USER 'bugs'@'localhost' IDENTIFIED BY '{password}';<br />
[&#47;bash]<br />
Create 'bugs' database in MySQL:<br />
[bash light="true"]<br />
mysql> CREATE DATABASE bugs;<br />
[&#47;bash]<br />
Grant privileges to 'bugs' user:<br />
[bash light="true"]<br />
mysql> GRANT ALL ON bugs.* TO 'bugs'@'localhost';<br />
[&#47;bash]<br />
Run checksetup.pl to check modules and to create a new copy of localconfig:<br />
[bash light="true"]<br />
$ &#47;usr&#47;share&#47;bugzilla&#47;.&#47;checksetup.pl<br />
[&#47;bash]<br />
Edit your copy of localconfg - change $db_pass to the password you entered for the MySQL user 'bugs' earlier:<br />
[bash light="true"]<br />
$ gedit &#47;etc&#47;bugzilla&#47;localconfig<br />
[&#47;bash]<br />
[bash light="true"]<br />
$db_pass = '{password}';<br />
[&#47;bash]<br />
Run checksetup.pl again to finish setting up Bugzilla:<br />
[bash light="true"]<br />
$ &#47;usr&#47;share&#47;bugzilla&#47;.&#47;checksetup.pl<br />
[&#47;bash]</p>
<p>When prompted to do so specify the Bugzilla administrator's email address, name, and password.</p>
<p>Start apache:<br />
[bash light="true"]<br />
$ &#47;etc&#47;init.d&#47;httpd start<br />
[&#47;bash]<br />
Go to http:&#47;&#47;localhost&#47;bugzilla&#47; in a browser and behold.</p>
<p>If, upon a reboot, mysqld and&#47;or httpd are not running, you can add them to the list of services that run at startup:<br />
[bash light="true"]<br />
$ ntsysv (Or $ &#47;usr&#47;sbin&#47;ntsysv on CentOS)<br />
[&#47;bash]<br />
Arrow up or down to find mysqld and&#47;or httpd.  Hit the space key to select&#47;deselect the service.  When done, hit Tab to get to the Ok or Cancel buttons.</p>
