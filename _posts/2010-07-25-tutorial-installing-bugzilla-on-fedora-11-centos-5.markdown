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
---
So a buddy of mine, <a href="http://www.linkedin.com/pub/charles-glisan/">Charlie Glisan</a>, was having issues installing Bugzilla on Fedora 11 and CentOS 5 a while back. After hours of strife, and finally getting the software up and running,  he decided he would write detailed instructions on how to accomplish the install. He doesn't have a blog himself and thought that it might be helpful to others out there that are trying to accomplish the same goal to have the instructions available, so he asked if I would like to post the instructions on my blog.

I am always a fan of finding helpful information out on the interwebs, so I am posting his instructions, verbatim, in hopes that they are helpful to a few struggling souls. If you have any questions, or find errors, please post them in the comments below and we will try to get to them as quickly as possible.

### Installing Bugzilla on Fedora 11 &amp; CentOS 5

Log in as root or su:

```
$ su
(enter root password)
```

For CentOS only, add the EPEL repository (which contains Bugzilla):

```
$ rpm -Uvh http://download.fedora.redhat.com/pub/epel/5/i386/epel-release-5-3.noarch.rpm
```

Install Bugzilla:

```
$ yum install bugzilla
```

Install MySQL:

```
$ yum install mysql-server
```

Install Apache:

```
$ yum install httpd
```

Start the the MySQL service:

```
$ /etc/init.d/mysqld start
```

Set password for the root user in MySQL:

```
$ mysqladmin -u root password {password}
```

Log into MySQL:

```
$ mysql -u root -p
```

Create 'bugs' user in MySQL:

```
mysql> CREATE USER 'bugs'@'localhost' IDENTIFIED BY '{password}';
```

Create 'bugs' database in MySQL:

```
mysql> CREATE DATABASE bugs;
```

Grant privileges to 'bugs' user:

```
mysql> GRANT ALL ON bugs.* TO 'bugs'@'localhost';
```

Run checksetup.pl to check modules and to create a new copy of localconfig:

```
$ /usr/share/bugzilla/./checksetup.pl
```

Edit your copy of localconfg - change $db_pass to the password you entered for the MySQL user 'bugs' earlier:

```
$ gedit /etc/bugzilla/localconfig

$db_pass = '{password}';
```

Run checksetup.pl again to finish setting up Bugzilla:

```
$ /usr/share/bugzilla/./checksetup.pl
```

When prompted to do so specify the Bugzilla administrator's email address, name, and password.

Start apache:

```
$ /etc/init.d/httpd start
```

Go to http://localhost/bugzilla/ in a browser and behold.

If, upon a reboot, mysqld and/or httpd are not running, you can add them to the list of services that run at startup:

```
$ ntsysv (Or $ /usr/sbin/ntsysv on CentOS)
```

Arrow up or down to find mysqld and/or httpd.  Hit the space key to select/deselect the service.  When done, hit Tab to get to the Ok or Cancel buttons.

