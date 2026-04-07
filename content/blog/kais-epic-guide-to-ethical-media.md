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

In this blog post, I'm going to go over a lot of ethical ideas on the internet and how I've found we should use it. I'm also going to be providing a lot of free tools and applications that pretty much anyone my benefit from. If you just want the latter, you can scroll down and go link fishing. Otherwise, strap in for a *lot* of yapping. It's gonna be a bumpy ride.

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

There's some stuff that I need to go over before we get into the meat and potatoes, or else you won't know what the hell I'm on about.

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

### Evil Design and Dark Patterns. 

Ever wonder why it takes half a second and a misclick to accidentally sign up for a subscription of some sort, but 3 days' hard labour to cancel? This is an example of a dark pattern. 

A dark pattern is simply a series of design decisions that when put together exploit users into certain, usually profitable behavior. Think of it as a form of psychological manipulation. 
Once you're aware of these, they show up *everywhere*. Those big countdowns on shopping sites. Raising prices on goods then discounting them to make them appear better value for money. 

At some level, a lot of design patterns fall into this category. Think of the algorithmic feed, for example. Some may argue this is a feature, rather than a dark pattern. I would argue that while not necessarily a dark pattern, the constituent components of most algorithmic feeds: data collection for personalization and infinite scroll, among others, combined with the advertising profit motive of most social media companies, almost certainly result in something that is. Something designed to consume as much user time as possible. Something that collects and feeds off user data and optimizes itself to perpetuate that consumption of time even further, as well as market that data to advertisers. Whenever you scroll an algorithmic feed, you're battling a team of engineers and psychologists each paid hundreds of thousands a year to capture your attention, data, and time. If you're aware of it, maybe next time you'll be able to put up a fight.

These properties are not incidental; They're designed.

### Decentralization and Federation

These two ideas frequently come hand in hand, with some caveats. 

#### Decentralization

Decentralization entails the idea that no one entity has full control of something. Something like discord is centralized, where something like email is decentralized: Anyone can run up their own email server, but only discord can run up discord servers. Big email can't tell you to shut down your email server if they don't like what you're sending (your government can, but that's a whole other can of worms). Discord, however, reserves the right to shut down servers for whatever reason and they just can. They own the servers.

Another benefit of decentralization is your capacity to own your own data. Everything you send on a discord server is unencrypted and lives on discord's servers. They can (and do) just read it. Sell it. Hand it to ICE- ***(SUBTLE FORSHADOWING)***. This data can also leak by accident, or by coordinated effort from a third party, which gets significantly more likely the more data there is in one place, and the more valueable that data is. Remember kids, data leaks are a "when". Not an "if". If you want your data to be safe, never give it to anyone in the first place.

#### Federation 

Federation is a property of decentralized networks that's important so that this array of servers all owned by various people can talk to each other. It would be annoying if you could only email people on your same email server, right? 

Broadly speaking, without federation, bob@website.com can only email other people who have their email hosted on website.com, like felix@website.com but not emily@internet.org. 
With federation, now bob can email emily@internet.org on internet.org and also ed@website.com on website.com. Very convenient!

This technology is still getting improved as time goes on, but there are already a good number of modern services that make use of it, such as mastodon (twitter-like social media) and matrix (instant messaging) both of which I'll get into soon. (You can also read me crash out on git servers not having any federation [here](/blog/FEDERATE-GIT/) lol)

#### Sidenote: Technical people

Yeah I know that email example is a little weak in practice. I've found that it serves as a really good explainer for newbies though, as everyone's heard of and used email, and are at least mostly familiar with its ins and outs. 

For you non-technical people reading this because you want to feel included, basically, in theory, email should work as I described, but in practice, if an email isn't coming from a trusted source, most mainstream providers will mark it as spam and thus the recipient may only find it in their [spam](https://www.youtube.com/watch?v=anwy2MPT5RE) folder, or in some cases not at all. This makes self hostng more difficult, but still not impossble. You can use a SMTP relay to get around this problem, but either way you get the idea and this sidenote has probably overstayed its welcome.

### Use is endorsement

When you use something, you're endorsing it. Period. There's a base level of buy-in contained in simply choose to use something, and continue using it. A level that even words to the contrary can't counter, as much as we hope they might. Did you pay money for it? Does it send telemetry to the manufacturer? Does it show you ads? Have you developed a set of skills or expertise in its usage? Do other people see you using it? These, and many many more, are all forms of endorsement. 

The reason I want to hammer this one home is that I hear a lot of people excusing their use of problematic technology, and heck, a lot of other stuff this way. "I don't support elon but I'm just on twitter for this random ass meme account." "I support trans people, but i just bought this harry potter merch for the nostalgia." "I don't support the bigotry, but I'm just using hyprland for the animations." (Just use [Niri](https://github.com/niri-wm/niri), you're welcome). 

Shade aside, we should stop excusing our unethical behavior like this. Rather, recognize yourself as an imperfect entity, acknowledge the flaws and drawbacks to your specific technology use, and try to make them better, one step at a time. Because, again, nobody is perfect, and I wholeheartedly include myself in this group.

I jokingly listed a few examples above, but in theory, a hermit could come along out of the mountains and declare my usage of a laptop computer as unethical due to its sourcing involving the exploitation of labourers around the world, that my purchase and usage of it is a direct endorsement of that system, and **they'd be right.** 

#### Ok so everything sucks, got it. What now?

Now you figure out what's feasable for you to do, right now, that will make it a little bit better. Then you do it. And you keep doing it. That's the only way any of this gets any better. A shit ton of people doing little things, a bit at a time.

I don't know what the future holds, but I know it'll be better if everyone did their best to put in a bit of work here and there, little by lttle, over a long period of time. 

#### Sidenote: Not there yet.

Please don't beat yourself up if you can't do any of this. I've been there. Sometimes you're just not in a place where you can worry about big stuff, and you just have to focus on putting one foot in front of the other. That's alright too. It won't help anyone to burn yourself out worrying about this shit on top of your own garbage. Focus on yourself right now, and hopefully you too will eventually have the luxury of worrying about ethics. 

### Extracting from an embedded platform 101

When thinking about social media platforms, the idea of one or another being "embedded" is almost a socially accepted default. Try to take ten steps into your local music scene without seeing an instagram page, I dare you.

The idea of an embedded social media platform is one in which the majority of the userbase is currently on. One that becomes less socially accceptable to not have, and one in which a large body of social interaction takes place. This is convenient for users as it's a bit of a hassle to move between platforms, however it's also really profitable for corporations. They can do whatever they want! What are you going to do? leave? LOL!

Needless to say, this natural FOMO buildup is ruthlessly profited off, due to the incredibly inelastic demand. (Read: Corporations take advantage of you via ruthless advertising and data collection , and they just can as a result of you socially being unable to leave). But leave we must. 

#### I don't want to, your honor!

> "But Kai! All of my friends are on {{nondescript platform name here}}! If I didn't have it, I would DIE!"

First off, calm down. Perhaps you've built up a lot of social infrastructure on said platform and would suffer negative social consequenses for leaving. Which is a fair point! 
But if you think about it, isn't that itself a problem? Would you be able to reach the people you care about if the platform went down? Or you account got banned? 

Even if you're unable to fully leave, doesn't mean you can't start moving towards the door. Using both the embedded platform and a more ethical alternative simultaneously is, in fact an option! This, in turn makes it easier for other people to leave as well, as they can follow your lead. 

And honestly, in my experience, poking around different software can be really fun! Looking at different ways that people tried to approach design problems, different UI, different performance, all puts all of your other experience in context. You now have one more data point to look at the world of software with. 

## Wrangling the modern internet: A Guide

### General web browsing

First, get an adblocker. [Ublock Origin](https://github.com/gorhill/uBlock) is open source and incredibly powerful. Chromium based browsers (Chrome, edge, opera, brave, vivaldi, etc...) do not support the full version due to google being monopolistic assholes, but firefox-based ones (Firefox, Librewolf, Zen, Waterfox, etc...) do. There is a Lite version that supports chromium, which I would recommend if you're committed to a chromium browser. 

Chromium makes up an immense amount of the web browser market (everything that's not firefox and saf\*ri), and it's completely controlled by google, so I'd recommend using firefox or a firefox fork, which is only *Partially* controlled by google. Baby steps, people.

Some browser suggestions: 
- [Librewolf](https://librewolf.net/) - Don't wanna think about it? Do this one.
- [Waterfox](https://www.waterfox.com/) - Has some really neat features, such as tree style tabs.
- [Zen](https://github.com/zen-browser/desktop) - Beta, lets you "glance" at a window and quick return to the original webpage.
- [Firefox](https://firefox.com) - It works!

### Conventional Social Media

This one's gonna be tough. People are little gremlins about their social media of choice so telling people to stop using something is about as helpful as eating sand. Won't stop me from trying though! (omnomnomnomnom)

### Youtube

If you, like me, still use youtube because you're a slave to long-form video content (hbomberguy release the adobe essay please i'm fiending for it), the following modifications can improve your quality of life considearably. 

Ublock should take care of the injected ads, but [Sponsor Block](https://github.com/ajayyy/SponsorBlock) takes care of the embedded ones (eg: "This video is sponsored by...") by simply crowdsourcing sponsor timings and fast-forwarding through them automatically. 

Hate youtube shorts? Do the things grab your face and eat an entire afternoon, after which you don't remember a single thing you watched? [Improve Youtube](https://github.com/code-charity/youtube) lets you mod them out completely. 

It also lets you make a couple more important modifications to youtube as a whole: removing the algorithmic feeds. Look, I love endless videoslop as much as the next person but at some point enough is enough. I need to have a semblance of ownership over the news, entertainment, and content that I consume. The main edits here are as follows: 
- I completely remove the homepage and replace it with the subscription timeleine. If I want something to show up on my feed, I'll subscribe to its creator. Novel idea, I know. (especially considering youtube has been moving away from algorithmically showing you videos from your subscribed channels if you don't click on them consistently enough). 
- I've also killed the recommended sidebar and endscreen so that I don't get recommended more videos after the one I've picked. 
These changes combine to a platform with clear end points. If a video's over, it's over. If I've run out of subscribed content, then I can't keep watching youtube. Simple as that.

If you use youtube on your phone, you'll notice the app doesn't benefit from browser addons, unless you want to use the web app, which is not great. For android users, you can actually patch a custom youtube app via [revanced](https://github.com/revanced/revanced-manager). This allows you to make most of the above modifications, in the app. Including the adblock and sponsorblock. Waiter waiter! 3 bajillion dollars to the revanced team please!

#### Alternatives

Youtube is a tough one to replace due to the heavy infrastructure that video upload and playback requires. Nonetheless, [Peertube](https://joinpeertube.org/), a FOSS alternative, has risen to the occasion. It's not a full youtube replacement yet, but functionally it works, so now it just needs to build the userbase. As an added bonus, it's also federated, which means you can host your own peertube instance and have everything hosted on your own hardware, while also optinoally communicating with other people doing the same.

You can actually find my peertube account [here](https://makertube.net/c/fireye.coffee)! (Thanks a bunch to makertube for letting me onto their server!). 

### Discord

We got complacent with discord. For a while, they provided a free service without ads, and maintained it sanely. Take it from someone whose first baby steps into programming was making little discord bots in discord.py: That discord is dead. It has been gutted by the forces of capital and thrown in a ditch to rot, save for its skin, which is now worn by its killers.

Now, a [former blizzard executive and McKinsey consultant](https://en.wikipedia.org/wiki/Humam_Sakhnini) sits in charge of the corporation, charged with driving value for investors in the company's looming [IPO](https://www.reuters.com/business/chat-platform-discord-confidentially-file-us-ipo-bloomberg-news-reports-2026-01-06/). They've [reduced](https://www.dexerto.com/tech/discord-lowers-free-upload-limit-to-10mb-storage-management-is-expensive-2887809/) the free upload file size limit. They've introduced deeply integrated [ads](https://discord.com/blog/discord-orbs) into their platform, to great effect, and concerningly little backlash. They've been trying to insert themselves as critical game infrastructure in the form of their [social SDK](https://discord.com/developers/social-sdk). And are using the metric tons of data users give them to, at the very least, [give directly to ICE](https://www.nytimes.com/2026/02/13/technology/dhs-anti-ice-social-media.html) (which is *very bad* actually), and even train predictive models off of-- "we have an internal system that works to accurately determine your age." ([Stanislav Vishnevskiy](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing), discord CTO) How does it do that discord? Please elaborate! 

Speaking of, let's get into age verification, shall we? They've kept user government ID photos that they claim to delete "within sixty days after the age appeal ticket is closed" ([source](https://support.discord.com/hc/en-us/articles/5431812448791-How-long-Discord-keeps-your-information)) as showcased by the recent [data breach](https://cybersecuritynews.com/discord-data-breach-sensitive-data/) that exposed government IDs of at least 70,000 people who submitted one to discord. (Yes I am aware the breach was from a subcontractor. No, I do not care. Corporations should be held fully accountable and liable for vetting and overseeing their subcontractors, period.) And this was before the whole recent mandatory verification thing!  Now they're rolling out [global age verification](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing) without governmental obligation in a vast number of the areas it will apply. For what purpose? If I had to guess, I'd say brand safety going into the IPO. Accusations of grooming and CSAM on your platform scare investors, so you need a convenient defense to hide behind while doing nothing to actually help the situation. And No, collecting a bunch of high value data on children in a convenient little bundle for hackers, and creating further stratification between adults and children where groomers can simply choose to move to childrens' spaces is NOT helping kids. 

Further, the companies that they've been using to verify peoples' ages since this new initiative are hardly ideal. Persona, an age ID company funded upwards of [$200 million](https://withpersona.com/blog/series-d) by [Epstien lister](https://www.thenation.com/article/society/peter-thiel-jeffrey-epstein-democracy), [Palantir founder and chairman](https://en.wikipedia.org/wiki/Palantir#Controversies), and overall [slime bucket](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Peter Thiel, (or more specifically his VC fund), has been temporarily used by discord for verification purposes as a "test". The simple fact that they're even entertaining the idea of giving childrens' goverment IDs to a company so closely tied with someone on the epstien list IS NOT GOOD.

K-ID, their main age verification provider, however, has the vaguest nothing-burger-ass data retention policy: "We store [user data] as long as you use our Services, or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, enforce our agreements, and comply with applicable laws." ([source](https://k-id.com/privacy-policy#item9)). That could mean literally any length of time. Their backing is also pretty hilariously bad, having drawn a notable ~[$45 million](https://www.forbes.com/sites/mattgardner1/2024/06/25/k-id-closes-45-million-series-a-in-quest-for-child-safety-in-gaming/) from [nationalistic defense nuts](https://a16z.com/defense-reform/) and investors in [automomous millitary robotics](https://www.capitaly.vc/blog/how-andreessen-horowitz-is-transforming-u-s-defense-tech-in-2025) andressen horowitz.

A few of the above links were helpfully sourced from [this rogue article](https://www.rogue.site/news/do-not-give-your-id-to-discord/) on the subject, which I would recommend reading as well.

TL;DR? Fuck Discord! 





### Twitter-likes

You don't need me to tell you twitter is not good. I think we all collectively know this by now. If you need some reminders other than the nazi running the show and the whole mecha hitler/ infinite CSAM generator things, here's a relatively recent [Last Week Tonight Episode](https://www.youtube.com/watch?v=p7ZG_xWYLzI) and a [Benn Jordan Video](https://youtu.be/GZ5XN_mJE8Y?si=PVcaiaMntopHy4SE) that highlight some pretty major problems with the platform. And while those may be macro issues and you're just one silly little guy, your presence still lends backing to the platform's decisions and adds to the platform's power. If you agree the world would be a better place if everyone sane simultaneously stopped using twitter, I would urge you to consider being the change you want to see in the world, taking the hit, and leaving yourself. Or event just shopping around. It costs nothing to have multiple accounts. 

#### Mastodon

More and more, I've been convinced that open source, decentralized, federated social media is the only way forward. And no project is more emblematic of that ideal than [mastodon](https://joinmastodon.org/). 

Anyone can run up a mastodon server and federate it to the rest of them, or keep it local. This makes the community, communal. It involves people that exist on the platform as well as those who run it. This also makes it less prone to evil design and dark patterns.

#### Bluesky

TODO

### Github

Ok ok I know no sane layperson is going to be thinking about github in their spare time, so feel free to skip this one if you just don't care.

Since I've gotten further into FOSS, github has become something of a bastion. A stupid percentage of FOSS projects use github as a collaborative platform, and as such, I'm complelled to be on there as well, and for a time did so happily. 

## The Indie Web: An Introduction

### Surfing the Indie Web

### RSS: Content Consumption as God Intended


