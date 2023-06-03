---
layout: post
title: "Building a BrewMap - Part 1: The Data"
date: 2023-06-07 13:51:11
background: '/img/posts/banner_image_data.png'
---

# Dude, where's my data?

Drinking the odd beer, and logging it in Untappd has become a holiday ritual,
and unofficial way for me to track where I've been in the world.
A simple question of _How can I see that on a map?_ led me to start this blog, 
attempt some shocking front-end development and generally despair.

Thankfully it was, and for those following along at home, here's that saga. 


## Building the Blog
There are so many excellent options for this.
I plumped for nice and simple [Github Pages](https://pages.github.com/), since it was free,
had good documentation, and I already had an account. 
In theory, I could store all my exciting beer data in the repository, and magically 'do something' with it later.


## An Untappd API?

For those who don't know, [Untappd](https://untappd.com/) is a social network based
around drinking and tagging beer. Visit a pub, drink a beer, and check-in, adding a
rating and other metadata about the experience. That's about it. 

![untappd_brewery_page.png](/img/posts/untappd_brewery_page.png)

Very cool though, it has an API! So I can grab all my personal beer data right? 
Sadly, nope - the API has been disabled for the last year.

![api_down.png](/img/posts/api_down.png)

Ok, we could scrape the site with Selenium. [Definitely doable](https://medium.com/left-join/handling-website-buttons-in-selenium-2bb587af965f),
but it's slow, brittle and gives me flashbacks to writing UI tests in my first job. No thanks.

Final option, data export. For the low, low cost of $54.99 a year (urghh) to become an Insider
you get access to this amazing button. Data, and in either CSV or JSON?! So many choices.

![untappd_export_button.png](/img/posts/untappd_export_button.png)

Once we fork up the cash, and choose the format, and we'll receive this fantastic email. 
Slight lie here, the link has been valid for 6 months and counting (¯\\\_(ツ)_/¯)

<p style="text-align: center;">
    <img alt="untappd_email.jpg" height="auto" src="/img/posts/untappd_email.jpg" width="400"/>
</p>


Awesome, we've now got our export data, ready to power the map. All we have to is export it, download it,
and then push it to the github repo backing the blog. But that's awfully manual, time to automate some steps...
