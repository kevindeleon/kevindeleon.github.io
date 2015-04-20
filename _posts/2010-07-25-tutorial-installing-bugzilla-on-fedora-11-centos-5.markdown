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
So a buddy of mine, <a href="http://www.linkedin.com/pub/charles-glisan/">Charlie Glisan</a>, was having issues installing Bugzilla on Fedora 11 and CentOS 5 a while back. After hours of strife, and finally getting the software up and running, he decided he would write detailed instructions on how to accomplish the install. He doesn't have a blog himself and thought that it might be helpful to others out there that are trying to accomplish the same goal to have the instructions available, so he asked if I would like to post the instructions on my blog.

I am always a fan of finding helpful information out on the interwebs, so I am posting his instructions, verbatim, in hopes that they are helpful to a few struggling souls. If you have any questions, or find errors, please post them in the comments below and we will try to get to them as quickly as possible.

### Installing Bugzilla on Fedora 11 &amp; CentOS 5

Log in as root or su:  
{% highlight bash %}
$ su
(enter root password)
{% endhighlight %}

For CentOS only, add the EPEL repository (which contains Bugzilla):  
{% highlight bash %}
$ rpm -Uvh http://download.fedora.redhat.com/pub/epel/5/i386/epel-release-5-3.noarch.rpm
{% endhighlight %}

Install Bugzilla:  
{% highlight bash %}
$ yum install bugzilla
{% endhighlight %}

Install MySQL:  
{% highlight bash %}
$ yum install mysql-server
{% endhighlight %}

Install Apache:  
{% highlight bash %}
$ yum install httpd
{% endhighlight %}

Start the the MySQL service:  
{% highlight bash %}
$ /etc/init.d/mysqld start
{% endhighlight %}

Set password for the root user in MySQL:  
{% highlight bash %}
$ mysqladmin -u root password {password}
{% endhighlight %}

Log into MySQL:  
{% highlight bash %}
$ mysql -u root -p
{% endhighlight %}

Create 'bugs' user in MySQL:  
{% highlight bash %}
mysql> CREATE USER 'bugs'@'localhost' IDENTIFIED BY '{password}';
{% endhighlight %}

Create 'bugs' database in MySQL:  
{% highlight bash %}
mysql> CREATE DATABASE bugs;
{% endhighlight %}

Grant privileges to 'bugs' user:  
{% highlight bash %}
mysql> GRANT ALL ON bugs.* TO 'bugs'@'localhost';
{% endhighlight %}

Run checksetup.pl to check modules and to create a new copy of localconfig:  
{% highlight bash %}
$ /usr/share/bugzilla/./checksetup.pl
{% endhighlight %}

Edit your copy of localconfg - change $db_pass to the password you entered for the MySQL user 'bugs' earlier:  
{% highlight bash %}
$ gedit /etc/bugzilla/localconfig

$db_pass = '{password}';
{% endhighlight %}

Run checksetup.pl again to finish setting up Bugzilla:  
{% highlight bash %}
$ /usr/share/bugzilla/./checksetup.pl
{% endhighlight %}

When prompted to do so specify the Bugzilla administrator's email address, name, and password.

Start apache:  
{% highlight bash %}
$ /etc/init.d/httpd start
{% endhighlight %}

Go to http://localhost/bugzilla/ in a browser and behold.

If, upon a reboot, mysqld and/or httpd are not running, you can add them to the list of services that run at startup:  
{% highlight bash %}
$ ntsysv (Or $ /usr/sbin/ntsysv on CentOS)
{% endhighlight %}

Arrow up or down to find mysqld and/or httpd. Hit the space key to select/deselect the service. When done, hit Tab to get to the Ok or Cancel buttons.

