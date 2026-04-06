---
date: '2026-03-23T13:56:30-07:00'
draft: false
title: "Kai's epic guide to ethical media consumption"
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '2026-03-23T13:56:30-07:00' 
---

This is post one in a two post combo: this one details how you can manage your own media consumption, and the other details how you can start owning your own online identity via creating your own website. Both are targetted at people who know next to nothing about such concepts. 

In this blog post, I'm going to go over a lot of ethical ideas on the internet and how I've found we should use it. I'm also going to be providing a lot of free tools and applications that pretty much anyone my benefit from. If you just want the latter, you can scroll down and go link fishing.

## A case for self-managed media consumption

Profit focused social media and the advent of the algorithmic content feed have been a disaster for the human race. 
If you still happen to use an algorithmic feed regularly, I invite you to ponder 
- a) how much of your time it takes without your explicit permission
- b) what thoughts it makes you think that you would have not thought otherwise and 
- c) whether the result creates a positive impact on your life, or simply serves as a convenient distraction/ cure for boredom.

If you happen to not love where that pondering has led you, that's why I'm making this post. 

This isn't going to be a "burn the entire internet" post, but rather one that hopes to recontextualize the way you percieve it, and hopefully change the way you use it so that it works for you, not the multibillion dollar corporation profiting off your attention and time. 

Do remember as you read this that nobody is perfect. Everyone's going to have a limit whether that's time or technical expertise, or something else, and that's perfectly ok. This kinda stuff isn't linear either. Sometimes you do a bunch of things, then nothing for a while, then undo some stuff, then do some more. As long as you're making your best effort to move toward ethical and beneficial usage, that's what counts.

## Background

### Prologue: Accessing the internet

I want to begin by pointing out that the device you use to access the internet isn't just a neutral conduit to the internet; 
Rather, it's an incredibly sohisticated amalgamation of hardware and software, all designed by corporate entity for the purpose of profit. 
(The internet isn't a neutral entity either, but I digress)

Not only are modern operating systems designed meticulously for user retention and data collection (especially mobile ones), but even the hardware is getting more invasive and locked down.
Once you realize how many household objects need to ping manufacturer servers, many requiring an end user account, there's no going back. (Windows, anyone?)
Look up the [intel ME](https://en.wikipedia.org/wiki/Intel_Management_Engine) if you want to get really paranoid.

Regardless, this topic is a whole blog post on its own, but I would be remiss if I didn't encourage you to give linux ([Mint](https://www.linuxmint.com/)/ [Fedora](https://fedoraproject.org/)) a try on your current hardware. It's a reasonable, privacy-respecting operating system for many windows and mac users, and, in any case, is a much more attainable goal than swapping all your hardware to RISC-V, or burning your phone with gasoline and casting it into the cursed pit from whence it came.

### Free & Open Source Software

You've probably heard the term "Open Source" thrown around in regards to software, and have correctly ascertained that this means the code that makes the software do things is, well... open. 
Not all public code is open source, though, as open source specifically refers to public code that *anyone* can do *anything* with. 
There are a few things that this *means*, though, that I'm not sure are well understood by the layperson, so I want to give a quick crash course on it now. 

First off, you've used open source software before. You probably use it every day. Youtube uses [FFMPEG](https://ffmpeg.org/) for video transcoding. Pretty much every website uses a [linux](https://kernel.org/)-based server to send you http(s) results, potentially via [Nginx](https://github.com/nginx/nginx) or [Apache](https://github.com/apache/httpd). You know those sketchy youtube to mp3/mp4 downloaders? They're all almost certainly running [yt-dlp](https://github.com/yt-dlp/yt-dlp) behind the scenes. Though for some reason, *cough* advertising *cough*, people don't really know that they can use open source software directly, as well as indirectly. 

FOSS is a model that has its pros and cons, but critically, it returns ownership of the software to the individual. 
If a maintainer power trips and tries to close source the software, the community can simply fork it and move on without them.
From a user perspective, you simply swap over to the new fork, and keep using it like nothing happened, or just stay on the open version. 
If you want a new feature, you can ask, and see what exactly is going on, and how progress is coming. 
If you want to learn how the thing works, or modify it, you can *just do that*. 
If you want to share your changes with everyone else, you can. 

Not everyone will want to take full advantage of the above, but just the comfort alone of knowing that some probably publicly traded company isn't going to totally lose their shit and fuck me over for having learned their software has made the swap well worth it. Fuck you, Unity.

Are open source alternatives perfect? Nope. Depending on what kind of software you're looking for, some open alternatives might require hosting, which is a lot of overhead for the layperson, and others might not yet have certain features or creature comforts of proprietary alternatives. But as much as that's true, I'd also argue some open source software is straight up better everywhere (Hi blender!). All I'm arguing here is to take a look around. It's free, after all!

> "But Kai, it's free! Doesn't that mean it's bad?"

Don't make me get out the spray bottle. Is a community garden bad because it's free? No! People volunteer their time and labour for the sake of building something worthwhile, together. With software, you even have the added bonus that there is functionally no scarcity or marginal cost, and thus minimal adverse effects of free riders. With proprietary software getting more and more enshittified, requiring accounts and internet connections, shamelessly havesting metric tons of user data without permission, moving to subscription models, and generally leveraging users' sunk cost in their platforms for shameless profiteering, does a free and open source alternative really sound that bad? 

Further, just because it is free doesn't mean the work people are doing isn't worth paying for. I'd argue it makes it *more* worth paying for, as you get value out of your money in the form of better software, but *everyone else* gets that value too! And the people spending their spare time and effort making this thing that everyone uses get compensated for that time and effort, so they can dedicate more of that time and effort back into the project. 

Rather backwardly, I suggest that you should instead think about paying for free things! 

### Ads and Adblocking

This blog post is gonna mention a lot about ads. Ads are how the modern internet works. They're why huge corporations like Google and Facebook are able to make a profit by giving so much free shit away. They're also why ai generated slop populates the vast majority of cooking search results these days. Here's my silly opinion on ads:

You should block every single one from ever reaching your eyes, and, god forbid, your thoughts. If you ever think about an ad or engage with an ad, the corporation the bought that ad is getting their money's worth. You can't get that time or mental energy back; It has already been bought and paid for. This, I would argue, is *bad*.

If you feel guilty about blocking ads, as that takes money from individuals, you should determine exactly how much time and attention those ads were taking from your life, give your time and sanity some monetary value, and pay creators you care about directly via donations, merch, subscriptions, kofi/patreon, etc... Even if this is just a couple bucks, it's almost certainly orders of magnitude more than they get from you watching ads on their content, and likely gives them a larger portion of the money as well, as they can choose a platform that allows them a better cut. 

I'd also like to point out that viewing ads is a net negative for you as an individual, as it allows corporations to directly influence you and your thoughts. Further, in the age of targetted advertising, viewing ads makes you more valueable to corporations, and thus more profitable to advertise to. Who would you rather serve an ad to, someone who makes an effort to block them and might not see it, or someone who doesn't? Yep, you simply looking at ads is making corporations money. They're definitely thankful, but not thankful enough to give you a cut.

This sentiment has been echoed ad-nauseum, but if you're getting a corporate product with ads for free, you're the product. Ads make you a product. Every single social media service is working night and day not to make the experience of using their platforms better, but rather to make it more addictive. They only make money when you're on the platform; ergo, the longer they can keep you on there, the more money they make. The logic holds with news. That cooking example I mentioned earlier. The longer you stay on the page, the more ads you see, thus the content is influenced to be longer, more verbose, in order to keep you on that page. You want to game that youtube algorithm as a creator? Make content that keeps people watching youtube and you'll do fine. Youtube will make sure of it.

This culminates in a rot that has spread across the internet. Most people are not creating to create. Writing to write. The very things that you as the internet denizen are here to experience are being corrupted by the very thing that brings you them for free. They are not. This is the cost.

In summary: pay for free things and fuck ads.

#### Sidenote: Individual sponsorships

Some of you may be wondering about individual sponsorships that advertisers will give directly to individuals, as opposed to large, platform-wide campaigns that you see on google ads or whatever.

I don't want to make any statments regarding what exactly those agreements may or may not contain as I assume it's largely individualized, however I do want to refer you to the above idea on skipping them and just giving the creator money directly. Same deal here. I would rather a creator be able to sustain themselves without having to resort to corporate sponsorships than otherwise, though I do understand that many cannot. 

Notably, these too taint the creative output of the individual. Take something as small as referral links. If you're a computer hardware reviewer, are you going to rank a device without a referral link higher than one with a referral link, even if you know you'll get less money? Even if everything does have referral links, will you be more inspired to create buyers guides for more expensive products if the kickback is higher? If a corporation has sent you a thing, are you more likely to review it than otherwise?

## Fixing the internet: A Guide

### General web browsing

First, get an adblocker. [Ublock Origin](https://github.com/gorhill/uBlock) is open source and incredibly powerful. Chromium based browsers (Chrome, edge, opera, brave, vivaldi, etc...) do not support the full version due to google being monopolistic assholes, but firefox-based ones (Firefox, Librewolf, Zen, Waterfox, etc...) do. There is a Lite version that supports chromium, which I would recommend if you're committed to a chromium browser. 

Chromium makes up an immense amount of the web browser market (everything that's not firefox and saf\*ri), and it's completely controlled by google, so I'd recommend using firefox or a firefox fork, which is only *Partially* controlled by google. Baby steps, people.

Some browser suggestions: 
- [Librewolf](https://librewolf.net/) - Don't wanna think about it? Do this one.
- [Waterfox](https://www.waterfox.com/) - Has some really neat features, such as tree style tabs.
- [Zen](https://github.com/zen-browser/desktop) - Beta, lets you "glance" at a window and quick return to the original webpage.
- [Firefox](https://firefox.com) - It works!

### Conventional Social Media

#### Youtube

If you, like me, still use youtube because you're a slave to long-form video content (hbomberguy release the adobe essay please i'm fiending for it), the following modifications can improve your quality of life considearably. 

Ublock should take care of the injected ads, but [Sponsor Block](https://github.com/ajayyy/SponsorBlock) takes care of the embedded ones (eg: "This video is sponsored by...") by simply crowdsourcing sponsor timings and fast-forwarding through them automatically. 

Hate youtube shorts? Do the things grab your face and eat an entire afternoon, after which you don't remember a single thing you watched? [Improve Youtube](https://github.com/code-charity/youtube) lets you mod them out completely. 

It also lets you make a couple more important modifications to youtube as a whole: removing the algorithmic feeds. Look, I love endless videoslop as much as the next person but at some point enough is enough. I need to have a semblance of ownership over the news, entertainment, and content that I consume. The main edits here are as follows: 
- I completely remove the homepage and replace it with the subscription timeleine. If I want something to show up on my feed, I'll subscribe to its creator. Novel idea, I know. (especially considering youtube has been moving away from algorithmically showing you videos from your subscribed channels if you don't click on them consistently enough). 
- I've also killed the recommended sidebar and endscreen so that I don't get recommended more videos after the one I've picked. 
These changes combine to a platform with clear end points. If a video's over, it's over. If I've run out of subscribed content, then I can't keep watching youtube. Simple as that.

If you use youtube on your phone, you'll notice the app doesn't benefit from browser addons, unless you want to use the web app, which is not great. For android users, you can actually patch a custom youtube app via [revanced](https://github.com/revanced/revanced-manager). This allows you to make most of the above modifications, in the app. Including the adblock and sponsorblock. Waiter waiter! 3 bajillion dollars to the revanced team please!

#### 
