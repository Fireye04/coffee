---
date: '2026-03-23T13:56:30-07:00'
draft: false
title: "Kai's epic guide to ethical technology"
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: true
    original: '2026-03-23T13:56:30-07:00' 
---

This is post one in a two post combo: this one details how you can manage your own technology use, and the other details how you can start owning your own online identity via creating your own website. Both are targeted at people who know next to nothing about such concepts. 

In this blog post, I'm going to go over a lot of ethical ideas on the internet and how I've found we should use it. I'm also going to be providing a lot of free tools and applications that pretty much anyone my benefit from. If you just want the latter, you can scroll down and go link fishing. Otherwise, strap in for a *lot* of yapping. It's gonna be a bumpy ride.

## A case for self-managed media consumption

Profit focused social media and the advent of the algorithmic content feed have been a disaster for the human race. 
If you still happen to use an algorithmic feed regularly, I invite you to ponder 
- a) how much of your time it takes without your explicit permission
- b) what thoughts it makes you think that you would have not thought otherwise and 
- c) whether the result creates a positive impact on your life, or simply serves as a convenient distraction/ cure for boredom.

If you happen to not love where that pondering has led you, that's why I'm making this post. 

This isn't going to be a "burn the entire internet" post, but rather one that hopes to re-contextualize the way you perceive it, and hopefully change the way you use it so that it works for you, not the multi-billion dollar corporation profiting off your attention and time. 

Do remember as you read this that nobody is perfect. Everyone's going to have a limit whether that's time or technical expertise, or something else, and that's perfectly OK. This kinda stuff isn't linear either. Sometimes you do a bunch of things, then nothing for a while, then undo some stuff, then do some more. As long as you're making your best effort to move toward ethical and beneficial usage, that's what counts.

## Background

There's some stuff that I need to go over before we get into the meat and potatoes, or else you won't know what the hell I'm on about.

### Free & Open Source Software

You've probably heard the term "Open Source" thrown around in regards to software, and have correctly ascertained that this means the code that makes the software do things is, well... ]pen. 
Not all public code is open source, though, and open source specifically refers to public code that *anyone* can do *anything* with. 
There are a few things that this *means*, though, that I'm not sure are well understood by the layperson, so I want to give a quick crash course on it now. 

First off, you've used open source software before. You probably use it every day. Youtube uses [FFMPEG](https://ffmpeg.org/) for video transcoding. Pretty much every website uses a [linux](https://kernel.org/)-based server to send you http(s) results, potentially via [Nginx](https://github.com/nginx/nginx) or [Apache](https://github.com/apache/httpd). You know those sketchy youtube to mp3/mp4 downloaders? They're all almost certainly running [yt-dlp](https://github.com/yt-dlp/yt-dlp) behind the scenes. Though for some reason, *cough* advertising *cough*, people don't really know that they can use open source software directly, as well as indirectly. 

FOSS is a model that has its pros and cons (that's a blog post for a later time), but critically, it returns ownership of the software to the individual, and it's a damn lot better than the proprietary alternative. 
If a maintainer power trips and tries to close source the software, the community can simply fork it and move on without them.
From a user perspective, you simply swap over to the new fork, and keep using it like nothing happened, or just stay on the open version. 
If you want a new feature, you can ask, and see what exactly is going on, and how progress is coming. 
If you want to learn how the thing works, or modify it, you can *just do that*. 
If you want to share your changes with everyone else, you can. 
It's like an entire area of industry completely free of garbage copyright systems-- it's beautiful.

Not everyone will want to take full advantage of the above, but just the comfort alone of knowing that some probably publicly traded company isn't going to totally lose their shit and fuck me over for having learned their software has made the swap well worth it. Fuck you, Unity.

Are open source alternatives perfect? Nope. Depending on what kind of software you're looking for, some open alternatives might require hosting, which is a lot of overhead for the layperson, and others might not yet have certain features or creature comforts of proprietary alternatives. But as much as that's true, I'd also argue some open source software is straight up better everywhere (Hi blender!). All I'm arguing here is to take a look around. It's free, after all!

> "But Kai, it's free! Doesn't that mean it's bad?"

Don't make me get out the spray bottle. Is a community garden bad because it's free? No! People volunteer their time and labor for the sake of building something worthwhile, together. With software, you even have the added bonus that there is functionally no scarcity or marginal cost, and thus minimal adverse effects of free riders. With proprietary software getting more and more enshittified, requiring accounts and internet connections, shamelessly harvesting metric tons of user data without permission, moving to subscription models, and generally leveraging users' sunk cost in their platforms for shameless profiteering, does a free and open source alternative really sound that bad? 

Further, just because it is free doesn't mean the work people are doing isn't worth paying for. I'd argue it makes it *more* worth paying for, as you get value out of your money in the form of better software, but *everyone else* gets that value too! And the people spending their spare time and effort making this thing that everyone uses get compensated for that time and effort, so they can dedicate more of that time and effort back into the project. 

Rather backwardly, I suggest that you should instead think about paying for free things! 

### Ads and Adblocking

This blog post is gonna mention a lot about ads. Ads are how the modern internet works. They're why huge corporations like Google and Facebook are able to make a profit by giving so much free shit away. They're also why LLM generated slop populates the vast majority of cooking search results these days. Here's my silly opinion on ads:

You should block every single one from ever reaching your eyes, and, god forbid, your thoughts. If you ever think about an ad or engage with an ad, the corporation the bought that ad is getting their money's worth. You can't get that time or mental energy back; It has already been bought and paid for. This, I would argue, is *bad*.

If you feel guilty about blocking ads, as that takes money from individuals, you should determine exactly how much time and attention those ads were taking from your life, give your time and sanity some monetary value, and pay creators you care about directly via donations, merch, subscriptions, kofi/patreon, etc... Even if this is just a couple bucks, it's almost certainly orders of magnitude more than they get from you watching ads on their content, and likely gives them a larger portion of the money as well, as they can choose a platform that allows them a better cut. 

I'd also like to point out that viewing ads is a net negative for you as an individual, as it allows corporations to directly influence you and your thoughts. Further, in the age of targeted advertising, viewing ads makes you more valuable to corporations, and thus more profitable to advertise to. Who would you rather serve an ad to, someone who makes an effort to block them and might not see it, or someone who doesn't? Yep, you simply looking at ads is making corporations money. They're definitely thankful, but not thankful enough to give you a cut.

This sentiment has been echoed ad-nauseam, but if you're getting a corporate product with ads for free, you're the product. Ads make you a product. Every single social media service is working night and day not to make the experience of using their platforms better, but rather to make it more addictive. They only make money when you're on the platform; ergo, the longer they can keep you on there, the more money they make. The logic holds with news. That cooking example I mentioned earlier. The longer you stay on the page, the more ads you see, thus the content is influenced to be longer, more verbose, in order to keep you on that page. You want to game that youtube algorithm as a creator? Make content that keeps people watching youtube and you'll do fine. Youtube will make sure of it.

This culminates in a rot that has spread across the internet. Most people are not creating to create. Writing to write. The very things that you as the internet denizen are here to experience are being corrupted by the very thing that brings you them for free. They are not. This is the cost.

In summary: pay for free things and fuck ads.

#### Sidenote: Individual sponsorships

Some of you may be wondering about individual sponsorships that advertisers will give directly to individuals, as opposed to large, platform-wide campaigns that you see on google ads or whatever.

I don't want to make any statements regarding what exactly those agreements may or may not contain as I assume it's largely individualized, however I do want to refer you to the above idea on skipping them and just giving the creator money directly. Same deal here. I would rather a creator be able to sustain themselves without having to resort to corporate sponsorships than otherwise, though I do understand that many cannot. 

Notably, these too taint the creative output of the individual. Take something as small as referral links. If you're a computer hardware reviewer, are you going to rank a device without a referral link higher than one with a referral link, even if you know you'll get less money? Even if everything does have referral links, will you be more inspired to create buyers guides for more expensive products if the kickback is higher? If a corporation has sent you a thing, are you more likely to review it than otherwise?

### Evil Design and Dark Patterns. 

Ever wonder why it takes half a second and a misclick to accidentally sign up for a subscription of some sort, but 3 days' hard labor to cancel? This is an example of a dark pattern. 

A dark pattern is simply a series of design decisions that when put together exploit users into certain, usually profitable behavior. Think of it as a form of psychological manipulation. 
Once you're aware of these, they show up *everywhere*. Those big countdowns on shopping sites. Raising prices on goods then discounting them to make them appear better value for money. 

At some level, a lot of design patterns fall into this category. Think of the algorithmic feed, for example. Some may argue this is a feature, rather than a dark pattern. I would argue that while not necessarily a dark pattern, the constituent components of most algorithmic feeds: data collection for personalization and infinite scroll, among others, combined with the advertising profit motive of most social media companies, almost certainly result in something that is. Something designed to consume as much user time as possible. Something that collects and feeds off user data and optimizes itself to perpetuate that consumption of time even further, as well as market that data to advertisers. Whenever you scroll an algorithmic feed, you're battling a team of engineers and psychologists each paid hundreds of thousands a year to capture your attention, data, and time. If you're aware of it, maybe next time you'll be able to put up a fight.

These properties are not incidental; They're designed.

### LLMs and Generative Models

I was initially going to tackle this topic, but after too many days of work, I have concluded its scope is simply too big to include in this post. When finished, I will add a link to the finished product here.

### Decentralization and Federation

These two ideas frequently come hand in hand, with some caveats. 

#### Decentralization

Decentralization entails the idea that no one entity has full control of something. Something like discord is centralized, where something like email is decentralized: Anyone can run up their own email server, but only discord can run up discord servers. Big email can't tell you to shut down your email server if they don't like what you're sending (your government can, but that's a whole other can of worms). Discord, however, reserves the right to shut down servers for whatever reason and they just can. They own the servers.

Another benefit of decentralization is your capacity to own your own data. Everything you send on a discord server is un-encrypted and lives on discord's servers. They can (and do) just read it. Sell it. Hand it to ICE- ***(SUBTLE FORESHADOWING)***. This data can also leak by accident, or by coordinated effort from a third party, which gets significantly more likely the more data there is in one place, and the more valuable that data is. Remember kids, data leaks are a "when". Not an "if". If you want your data to be safe, never give it to anyone in the first place.

#### Federation 

Federation is a property of decentralized networks that's important so that this array of servers all owned by various people can talk to each other. It would be annoying if you could only email people on your same email server, right? 

Broadly speaking, without federation, bob@website.com can only email other people who have their email hosted on website.com, like felix@website.com but not emily@internet.org. 
With federation, now bob can email emily@internet.org on internet.org and also ed@website.com on website.com. Very convenient!

This technology is still getting improved as time goes on, but there are already a good number of modern services that make use of it, such as mastodon (twitter-like social media) and matrix (instant messaging) both of which I'll get into soon. (You can also read me crash out on git servers not having any federation [here](/blog/FEDERATE-GIT/) lol)

#### Sidenote: Technical people

Yeah I know that email example is a little weak in practice. I've found that it serves as a really good explainer for newbies though, as everyone's heard of and used email, and are at least mostly familiar with its ins and outs. 

For you non-technical people reading this because you want to feel included, basically, in theory, email should work as I described, but in practice, if an email isn't coming from a trusted source, most mainstream providers will mark it as spam and thus the recipient may only find it in their [spam](https://www.youtube.com/watch?v=anwy2MPT5RE) folder, or in some cases not at all. This makes self hosting more difficult, but still not impossible. You can use a SMTP relay to get around this problem, but either way you get the idea and this sidenote has probably overstayed its welcome.

### Use is endorsement

When you use something, you're endorsing it. Period. There's a base level of buy-in contained in simply choose to use something, and continue using it. A level that even words to the contrary can't counter, as much as we hope they might. Did you pay money for it? Does it send telemetry to the manufacturer? Does it show you ads? Have you developed a set of skills or expertise in its usage? Do other people see you using it? These, and many many more, are all forms of endorsement. 

> "But Kai these issues are so big and pervasive! And I'm just one silly little guy, what's one more little silly guy?"

Your presence still lends backing to the platform's decisions and adds to the platform's power. If you agree the world would be a better place if everyone sane simultaneously stopped doing something, I would urge you to consider being the change you want to see in the world, taking the hit, and stopping yourself. Or even just shopping around for alternatives.

The reason I want to hammer this one home is that I hear a lot of people excusing their use of problematic technology, and heck, a lot of other stuff this way. "I don't support Elon but I'm just on twitter for this random ass meme account." "I support trans people, but i just bought this harry potter merch for the nostalgia." "I don't support the bigotry, but I'm just using hyprland for the animations." (Just use [Niri](https://github.com/niri-wm/niri), you're welcome). 

Shade aside, we should stop excusing our unethical behavior like this. Rather, recognize yourself as an imperfect entity, acknowledge the flaws and drawbacks to your specific actions, and try to make them better, one step at a time. Because, again, nobody is perfect, and I wholeheartedly include myself in this group.

I jokingly listed a few examples above, but in theory, a hermit could come along out of the mountains and declare my usage of a laptop computer as unethical due to its sourcing involving the exploitation of laborers around the world, that my purchase and usage of it is a direct endorsement of that system, and **they'd be right.** 

Friends of mine have made very good points that I completely agree with about the ethical benefits of [biking](https://enemyhideout.com/) as opposed to driving, or [vegetarianism](https://theblipbloop.github.io/) as opposed to supporting the meatpacking industry. I currently continue to do both; I couldn't go climbing as frequently or live my current day-to-day without a car, and would probably starve to death without the protein input that meat provides.

#### OK so everything sucks, got it. What now?

Now you figure out what's feasible for you to do, right now, that will make it just a little bit better, a little more ethical. Then you do it. And you keep doing it. That's the only way any of this gets any better. A shit ton of people doing little things, a bit at a time. 

For me, that might involve taking my bike out instead of my car on Mondays. Or taking an afternoon to look for more accessible meat substitutions that I can start integrating into my day to day. I don't know what the future holds, but I know it'll be better if everyone did their best to put in a bit of work here and there, little by little, over a long period of time. 

These little step-by-step improvements will be inconvenient; That's the point. <abbr title="if I just blasted a joker image into your brain, sorry, not sorry lol">We live in a society</abbr> that has normalized a lot of unethical practices and ideas that will have made themselves a mainstay within our lives, due simply to the adoption-by-default that just happens within these kinds of group structures. Over the course of our lives, it is our job and responsibility as individuals to, at the very least, deconstruct them, question them, and when necessary, deem them unethical. From there we can gauge the degree to which that breach of ethics exists, and finally, at long last, make a truly educated decision as to whether the pros outweigh the cons, and what actions you may be able to take from there to minimize cons and maximize pros. Maybe you do decide to change nothing, but at least you can do so knowing you have made an informed decision. 

There's another good Smashing Frames [post](https://tante.cc/2026/02/20/acting-ethical-in-an-imperfect-world/) on this, that I'd also recommend. You don't need to agree with everything in there to get a lot out of it; It's a very thought-provoking piece.

#### Sidenote: Not there yet.

Please don't beat yourself up if you can't do any of this. I've been there. Sometimes you're just not in a place where you can worry about big stuff, and you just have to focus on putting one foot in front of the other. That's alright too. It won't help anyone to burn yourself out worrying about this shit on top of your own garbage. Focus on yourself right now, and hopefully you too will eventually have the luxury of worrying about ethics. 

### Extracting from an embedded platform 101

When thinking about social media platforms, the idea of one or another being "embedded" is almost a socially accepted default. Try to take ten steps into your local music scene without seeing an Instagram page, or using the internet without seeing a discord server. I dare you.

The idea of an embedded social media platform is one in which the majority of the user base is currently on. One that becomes less socially acceptable to not have, and one in which a large body of social interaction takes place. This is convenient for users as it's a bit of a hassle to move between platforms, however it's also really profitable for corporations. They can do whatever they want! What are you going to do? Leave? LOL!

Needless to say, this natural FOMO buildup is ruthlessly profited off, due to the incredibly inelastic demand. (Read: Corporations take advantage of you via ruthless advertising and data collection , and they just can as a result of you socially being unable to leave). But leave we must. 

#### I don't want to, your honor!

> "But Kai! All of my friends are on {{nondescript platform name here}}! If I didn't have it, I would DIE!"

First off, calm down. Perhaps you've built up a lot of social infrastructure on said platform and would suffer negative social consequences for leaving. Which is a fair point! 
But if you think about it, isn't that itself a problem? Would you be able to reach the people you care about if the platform went down? Or you account got banned? 

Even if you're unable to fully leave, doesn't mean you can't start moving towards the door. Using both the embedded platform and a more ethical alternative simultaneously is, in fact an option! This in turn makes it easier for other people to leave as well, as they can follow your lead. 

### Art and Politics

> "Stop making games/movies/music/art political!"

I've heard something along these lines too many times. Politics dictates the world we live in. Any artistic piece is inherently in conversation with the political, even and especially if its creators have the privilege to "ignore" politics. This is simply a political argument for the status quo, but still a political argument nonetheless.

Recently, a Lebanese game developer called into my ethics class and showcased his [game](https://qbits.itch.io/thistopia) that he made in a game jam. Among other things, the game engages with the impacts of war on everyday people, specifically children, who make up the game's two protagonists. Under the material conditions that Lebanon has been under, especially in [recent times](https://www.usatoday.com/story/news/world/2026/04/09/israel-bombing-lebanon-iran-war/89531679007/), how can any art made under these conditions be anything but political? Should the game have been about something completely unrelated, such as a goofy platformer of some sort, how can that be seen as anything other than a distraction or respite from the political hardships that its creators must face every day? 

Many of us in more privileged environments have gotten in the habit of conveniently ignoring this, and idealizing the absence of politics in art. This absence simply doesn't exist, and instead serves as a convenient way for us to avoid difficult conversations and ideas, simply by including them as we wish in our definition of what happens to be "political" and what doesn't. After all if I can include something in my definition of "political," and frame being "political" as being bad, then I can simply dismiss the idea wholesale without engaging or contemplating it. This, of course, is simply a badly disguised argument for the status quo; If no outwardly "political" arguments are permissible, then the only option that remains is to continue with things the way they are, which of course is a political argument in and of itself.

#### Sidenote: Art and Diversity

One of the main targets of this rhetorical strategy that I've seen recently is diversity, with many proponents therein appealing to some nebulous idea of merit in place of efforts to diversify, which are deemed political and thus bad. In a neutral society, I completely agree that merit should be the sole deciding factor in something such as employment. However, we must make an effort to realize that the society we live in is not a neutral one, but one built to benefit its creators: Cis, het, white, able, and especially, rich, men. These biases cannot simply be glazed over or hand-waved away. On gender alone, we see depressingly few women and non-binary people make their way into male-dominated fields even today, not because they are any less capable, but rather because the environment is a hostile one. If you've ever talked to someone who has a female-presenting voice who plays competitive shooters, you *will* hear horror stories. 

Diversity is a beautiful thing. Different perspectives and life experiences can introduce unique ideas into art that would not have existed otherwise. Much of the art we hold dear is a direct result of a diverse creative environment. We grow as individuals as we learn from others' way of existing as human beings, and everyone is better off for it. 

Efforts of diversity seek not to undermine the idea of merit, but rather the bias of society. Heck, pretty much the only way to get a non-evil career these days, especially in games, is to know someone. If the people in industry are already mostly cis, het, white, able, rich men, what is the proportion of their networks that also hold many of these features as well? When hiring strangers, how likely are they to associate with and "like" someone also possessing these traits, as opposed to someone who does not? This dynamic perpetuates itself. People hire others like them, and those others go on to do the same. No systems designate or spell out this bias; it's simply human nature to prefer similarity over diversity. The goal is simply to work against this bias.

## Wrangling modern tech: A Guide

I did not set out to write a hit piece, but I have started and cannot be stopped. If you wish to skip the turmoil, you need not read this whole section. 

Each header not only contains a justification for its inclusion, but also a list of alternatives, and most importantly, even steps that can be taken on said platform if you're unwilling to leave in full. I'll also broadly go over major corporations, or as I'll be referring to them: megacorps, in the space. And yes, it is always ethically OK to deadname corporations. 

Someone stop me from ever doing this ever again :3

### Megacorp | Apple

Due to my focus on Free and Open technology in this essay, I will not be touching much on apple. I genuinely have few complaints with the quality of their hardware or their software, but my disdain for their products focuses purely on their anti-consumer, anti-ownership design practices. If I cannot flash [custom firmware](https://libreboot.org/) or uninstall the bootloader on a computer I have purchased with my own money, I do not own the computer. If I cannot take apart and repair or upgrade a computer I have purchased with my own money, I do not own the computer. And the term "Computer" in this context applies to mobile devices as well.

I'm being a bit hyperbolic, and perhaps you don't see the value in these things, but I've seen many apple users complain about the failings of the "Liquid Glass" design philosophy (especially as far as legibility goes), as well as ludicrous repair costs, on top of the already ludicrous hardware costs, all of which would be significantly better off if apple had to compete in any meaningful way without locking its users into its ecosystem. No apple, even in the modern day RAM hellscape, 16GB of DDR5 does not cost \$400. It currently costs [half that](https://pcpartpicker.com/trends/price/memory/#ram.ddr5.4800.2x16384) (\$200), and should cost an eighth of that ($50). 

Of course, Many apple users have knowingly traded ownership for convenience, which is a decision I respect, though would urge you to potentially reconsider, regarding the broader context of this essay.

If you wish to remain on apple, you can likely still use linux through the [asahi project](https://asahilinux.org/), in full, or in part alongside MacOS. (Though notably, to the best of my understanding, this only piggybacks off the MacOS bootloader, as the thing can't boot anything other than MacOS. Weird!).

#### Alternatives

Mac hardware alternatives are numerous. I own a framework, and generally like what they do, other than the fact that they continue to donate to hyprland, which I find [issue with](https://drewdevault.com/blog/FDO-conduct-enforcement/). Most x86_64 computers will work fine (Read: most things that come with windows installed). If you like battery life and don't mind compatibility issues, arm computers exist as well, which is the same tech that runs modern macs (which also suffer from the same compatibility problems). 

If you're crazy like me, you might find interest in the open standard [RISC-V](https://riscv.org/) instruction set. Quick architecture summary: x86 is bad and proprietary, arm is good but proprietary, risc-v is good and open. Unfortunately, the more open you get the less things work as you'd want them to >:( (If I can save enough money, expect me to burn some on a RISC-V board and try to load NixOS on it)

As far as software alternatives go, if you want to avoid the windows dumpster fire, I'd recommend something like [Fedora Workstation](https://fedoraproject.org/workstation/), which runs a similar UI to MacOS.

For mobile devices, you'd think I'd say android. [You'd be wrong](https://keepandroidopen.org/). 

Instead, I recommend smashing your phone with a hammer repeatedly, dousing it with gasoline, lighting it on fire, then flinging it into oncoming traffic, off a bridge, or into the fiery magma of mount doom at your earliest convenience.

### Megacorp | Google (aka: Alphabet)

Google's strangle hold on the internet cannot be understated. The term "de-googling" and the sheer difficulty therein pretty succinctly summarizes what we're up against here. 

### Chrome 

Chromium, the engine behind chrome, makes up an immense amount of the web browser market (pretty much everything that's not firefox and saf\*ri), and it's completely controlled by google who are in the process of making ad blockers and content blockers [less effective](https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)#filtering-capabilities-which-cant-be-ported-to-mv3). [Ublock Origin](https://github.com/gorhill/uBlock) is open source and incredibly powerful (stop reading and go install it now if you haven't already), however Chromium based browsers (Chrome, edge, opera, brave, vivaldi, etc...) do not support the full version due to this. 

There is a [Lite version](https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)#filtering-capabilities-which-cant-be-ported-to-mv3) of ublock that supports chromium, which I would recommend if you're committed to a chromium browser. If you wish to do more without fully swapping off chromium, you can use an open source chromium implementation such as [Ungoogled Chromium](https://ungoogled-software.github.io/about/) or [Qutebrowser](https://qutebrowser.org/).

#### Alternatives

Firefox! It's not perfect; It's primarily [funded by google](https://en.wikipedia.org/wiki/Mozilla_Corporation#Finances) in order to keep the default search engine as Google, but it's still not unilaterally controlled by google, which does make it better in my book.

Some firefox-based browser suggestions: 
- [Librewolf](https://librewolf.net/) - Don't wanna think about it? Do this one. 
- [Waterfox](https://www.waterfox.com/) - Has some really neat features, such as tree style tabs.
- [Zen](https://github.com/zen-browser/desktop) - Beta, lets you "glance" at a window and quick return to the original webpage.
- [Firefox](https://firefox.com) - It works!

If you want to do something privately, I wholeheartedly recommend having the [Tor Browser](https://www.torproject.org/download/) on hand. It's free, and does almost everything a VPN does, but better. The real privacy threat these days isn't IP addresses, but rather browser fingerprinting, which Tor works to mitigate. It sounds intimidating, but in reality it just does its thing, is a bit slower than your average browser, and does what you tell it to.

### Google, the search engine

Believe it or not, these are different from your browser! A search engine is a website; a browser is the program that runs on your computer to show you websites.

Unfortunately, google pays pretty much every major browser to make Google the default search engine. And now, google unhelpfully presents bullshit as the first result, which most people will simply read and take at face value. That combined with the number of ads that google is shoving into their results, and their recent use of LLMs to [rewrite headlines](https://www.techrepublic.com/article/news-google-search-rewriting-headlines-ai/), the case for swapping off remains strong.

There are browser addons that allow modification of google search results, such as the helpfully named [google AI overviews blocker](https://github.com/zbarnz/Google_AI_Overviews_Blocker). But I'm sure more exist.

#### Alternatives

I'd recommend [Startpage](https://www.startpage.com/) or [Duckduckgo](https://duckduckgo.com) for the layperson.

For the power users [LibreY](https://github.com/Ahwxorg/librey/) and [SearXNG](https://docs.searxng.org/) might be worth a shot. I think I might run up an instance of the former on my homelab soonish. There's also [Marginalia Search](https://github.com/MarginaliaSearch/MarginaliaSearch), which is a [surprise tool that will help us later](https://knowyourmeme.com/memes/its-a-surprise-tool-that-will-help-us-later). **Subtle foreshadowing**

### Gmail & Email

I foreshadowed this one earlier, but email is notoriously centralized, despite being an open protocol, due simply to the fact that major providers that host most everyday peoples' emails have broadly agreed to be assholes about it. Gmail is definitely the worst offender here, though Microsoft outlook is almost certainly doing this as well. Email is also notoriously insecure, and can be read by your email provider, and used for LLM training, advertising, etc... There's not much you can do about this, as only certain email providers allow any form of encryption, let alone end-to-end encryption, and any attempt to communicate with someone who doesn't use such systems will inevitably leak data. Regardless, more people using secure and privacy-respecting email hosting is only a good thing, and I would still recommend swapping.

If you can't swap off Gmail at the moment, look at [toggling off](https://www.androidauthority.com/turn-off-gemini-ai-gmail-3528662/) LLM features, though I can't speak to this doing anything other than ticking off the user-facing features. As far as I can tell, outlook has no such toggle.

Another thing you can do is try using an open source email client like [Thunderbird](https://www.thunderbird.net/en-US/) so you can minimize the direct access they have to your computer, though, this doesn't address the concerns with content on the server being read.

#### Alternatives

As far as free alternatives go, [Tuta](https://tuta.com) offers 1GB for free, with 20GB for ~3€ per month. [Proton](https://proton.me/mail) has a similar 1GB plan, however also has [A few problems](https://makertube.net/w/5x3Wt1EQqCbbfFKTmCvj3S), enough that I don't necessarily endorse it, though it's definitely better than Google. [Fastmail](https://www.fastmail.com/) is a pretty solid paid option from what I can tell as well.

I personally will be looking at self hosting my own email server through [Mailcow](https://mailcow.email/) and routing traffic through an SMTP relay, though this looks to be a cripplingly technical endeavor, so I wouldn't recommend it to the faint of heart.

### Android, the OS

The mobile market is genuinely the most horrific wasteland of corporate abuse I've yet to come upon in technology. Android sits at a cool [67%](https://gs.statcounter.com/os-market-share/mobile/worldwide) market share. (not one word. I will kill you.) The rest are iOS, which, no surprise, already suffer from the following lacks of freedom. 

Android may be based upon the Linux kernel, but has diverged and become an incredibly closed environment as compared to other linux distributions, which it doesn't even consider itself anymore. The AOSP (Android Open Source Project) has moved much of its development [behind closed doors](https://www.androidauthority.com/google-android-development-aosp-3538503/), and much of mainline android is [closed source](https://source.android.com/docs/setup/about/faqs), and not included in the AOSP, and rather added on top of it through proprietary services such as google play services. These include pretty [vital elements](https://fossbytes.com/google-play-services-necessity/) of the operating system.

Further, many android phones have disabled rooting entirely, and even bootloader access is being fully prohibited (as I recently discovered with my piece of shit Samsung), and many more are installing hardware level trips that will permanently disable applications on rooted devices. These actions are plain malicious, aimed at discouraging and preventing reclamation of ownership, and locking users into controlled environments. It's becoming more and more likely that you'll have to buy a phone that specifically allows you to own it than just owning a device as a result of having purchased it. If this was the case for desktop computers, every PC would operate like a console. This would be unacceptable. Yet on a small computer (a phone), it's perfectly fine. It's genuinely insane how normalized this kind of behavior has become.

And worst of all, soon [you will need google's express permission to simply run applications on the device that you have bought with your own money](https://keepandroidopen.org/). This is literally the "[isn't there someone you forgot to ask?](https://imgflip.com/memegenerator/491117364/isnt-there-someone-you-forgot-to-ask)" meme, but for running shit on a device you supposedly own, running a supposedly "open source" operating system. Of course the onus of registration goes to the developer and not the user, making it so much easier for the average person to handwave, but this is some 1984 shit. If I want to run some shitty C code I wrote in an afternoon, or code that someone that does not wish to dox themselves to google wrote, on a thing that I own, I should not have to ask google pretty please to let me go and do that. I should not have to ping google servers and wait 24 hours to turn off this behavior, which is something they can simply remove quietly later on to little backlash. This is a horrifying level of power that one company is demanding over 67% of all mobile devices globally. 

TL;DR? As with apple, I recommend smashing your phone with a hammer repeatedly, dousing it with gasoline, lighting it on fire, then flinging it into oncoming traffic, off a bridge, or into the fiery magma of mount doom at your earliest convenience.

I'm being a bit facetious. You have a few more options here, but they all have asterisks, which is what drives my genuine hatred for the mobile form factor. First off if you *can* root your phone, do it, and install something like [/e/os](https://e.foundation/e-os/), which replaces the proprietary google play services with the open source [microG](https://github.com/microg/GmsCore/wiki). Alternatively, if you have a phone that supports [grapheneos](https://grapheneos.org/) I'd definitely recommend giving it a try. The maintainers are a bit... Prickly, but the software itself looks incredibly well-hardened. 

#### Alternatives

Honestly? At this point a flip phone, or forgoing a phone entirely might be the best option here for non-technical users. Pretty much everything is android, and everything non-android comes with cringe-inducing drawbacks, as almost every modern mobile device is made specifically for android.

The obvious caveat is linux phones. Compared to the AOSP, these are comparatively early in development, and many require specific hardware. [PostmarketOS](https://postmarketos.org/) looks promising, but is not nearly polished enough for the layperson. Devices like the [Fairphone](https://www.fairphone.com/the-fairphone-gen-6) and [Pine phone](https://pine64.org/devices/pinephone/) have promise, but are still too niche to benefit from economies of scale, among [other usability problems](https://www.youtube.com/watch?v=fCKMxzz9cjs) that frequently derive from young projects. In time, I'm sure the situation will improve, however at the moment, we're pretty much cooked.

Personally, when I find the time in my god-forsaken life, I'm going to assemble a custom [cyberdeck](https://en.wikipedia.org/wiki/Cyberdeck) and throw NixOS on it. Then, I think you know exactly what I'm going to do with my phone.

### Google maps

Google Maps, or apple's alternative for that matter, are pretty much a mainstay in most peoples' day to day. Unfortunately that does give incredibly precise location data directly to google. I will concede that the utility of sharing location data with the Megacorp is not zero; you do get traffic statistics out of it. But do understand you are *selling* your data in exchange for this service. 

Google has also begun to pretty aggressively advertise within maps. Have you heard it say "Turn left at the <abbr title="I read moby dick in high school and get crippling flashbacks whenever this god forsaken coffee chain is brought up.">Starbucks</abbr>," replacing the coffee chain with any given store? I'd bet money that many of those callouts, if not all of them, are paid sponsorships. I also wouldn't trust the reviews on there either, as businesses have been manipulating those systems like crazy for years. Not to mention the sheer bloat of the software itself. It takes concerningly long to launch, and overheats my phone concerningly often, for what should be a simple map.

Honestly at a more fundamental level, I'd argue that tools like google maps are doing the same thing to our sense of direction as LLMs are to our capacity to think. Maybe we should consider relying on them less often, just in general. Try going to a place without navigation every now and again. Turn it on if you miss a turn or get lost. 

#### Alternatives

When I really need a map, I've been using [Comaps](https://www.comaps.app/) which is based on the splendid [Open Street Map](https://www.openstreetmap.org/) project. It's handled pretty much anything I've thrown at it thus far. The main downside is that it's not perfect about listing stores and such, and keeping those listings up to date. The good news is that if you know something about a place, you can easily contribute that information back to openstreetmap and make the community project just a little bit better for everyone else. I'd recommend it!

### Youtube

It's genuinely insane how monopolized the video hosting market is as a result of youtube. Video hosting is not an easy problem, nor is it a cheap one, but just because one platform is giving out free shit, should we allow them to dominate the market, shoving ever more ads, shorts, and slop into it?

If you, like me, still use youtube because you're a slave to long-form video content (hbomberguy release the adobe essay please I'm fiending for it), the following modifications can improve your quality of life considerably. 

Ublock should take care of the injected ads, but [Sponsor Block](https://github.com/ajayyy/SponsorBlock) takes care of the embedded ones (eg: "This video is sponsored by...") by simply crowdsourcing sponsor timings and fast-forwarding through them automatically. 

Hate youtube shorts? Do the things grab your face and eat an entire afternoon, after which you don't remember a single thing you watched? [Improve Youtube](https://github.com/code-charity/youtube) lets you mod them out completely. 

It also lets you make a couple more important modifications to youtube as a whole: removing the algorithmic feeds. Look, I love endless videoslop as much as the next person but at some point enough is enough. I need to have a semblance of ownership over the news, entertainment, and content that I consume. The main edits here are as follows: 
- I completely remove the homepage and replace it with the subscription timeline. If I want something to show up on my feed, I'll subscribe to its creator. Novel idea, I know. (especially considering youtube has been moving away from algorithmically showing you videos from your subscribed channels if you don't click on them consistently enough). 
- I've also killed the recommended sidebar and endscreen so that I don't get recommended more videos after the one I've picked. 
These changes combine to a platform with clear end points. If a video's over, it's over. If I've run out of subscribed content, then I can't keep watching youtube. Simple as that.

If you use youtube on your phone, you'll notice the app doesn't benefit from browser addons, unless you want to use the web app, which is not great. For android users, you can actually patch a custom youtube app via [revanced](https://github.com/revanced/revanced-manager). This allows you to make most of the above modifications, in the app. Including the adblock and sponsorblock. Waiter waiter! 3 bajillion dollars to the revanced team please!

Want to go even further? Check out [invidious](https://invidious.io/) which does away with the classic youtube frontend entirely.

#### Alternatives

Youtube is a tough one to replace due to the heavy infrastructure that video upload and playback requires. Nonetheless, [Peertube](https://joinpeertube.org/), a FOSS alternative, has risen to the occasion. It's not a full youtube replacement yet, but functionally it works, so now it just needs to build the userbase. As an added bonus, it's also federated, which means you can host your own peertube instance and have everything hosted on your own hardware, while also optionally communicating with other people doing the same.

You can actually find my peertube account [here](https://makertube.net/c/fireye.coffee)! (Thanks a bunch to makertube for letting me onto their server!). 

### Discord

We got complacent with discord. For a while, they provided a free service without ads, and maintained it sanely. Take it from someone whose first baby steps into programming was making little discord bots in discord.py; That discord is dead. It has been gutted by the forces of capital and thrown in a ditch to rot, save for its skin, which is now worn by its killers.

Now, a [former blizzard executive and McKinsey consultant](https://en.wikipedia.org/wiki/Humam_Sakhnini) sits in charge of the corporation, charged with driving value for investors in the company's looming [IPO](https://www.reuters.com/business/chat-platform-discord-confidentially-file-us-ipo-bloomberg-news-reports-2026-01-06/). They've [reduced](https://www.dexerto.com/tech/discord-lowers-free-upload-limit-to-10mb-storage-management-is-expensive-2887809/) the free upload file size limit. They've introduced deeply integrated [ads](https://discord.com/blog/discord-orbs) into their platform, to great effect, and concerningly little backlash. They've been trying to insert themselves as critical game infrastructure in the form of their [social SDK](https://discord.com/developers/social-sdk). And are using the metric tons of un-encrypted data users give them to, at the very least, [give directly to ICE](https://www.nytimes.com/2026/02/13/technology/dhs-anti-ice-social-media.html), and even train predictive models off of-- "we have an internal system that works to accurately determine your age." ([Stanislav Vishnevskiy](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing), discord CTO) How does it do that discord? Please elaborate! 

Speaking of, let's get into age verification, shall we? They've kept user government ID photos that they claim to delete "within sixty days after the age appeal ticket is closed" ([source](https://support.discord.com/hc/en-us/articles/5431812448791-How-long-Discord-keeps-your-information)) as showcased by the recent [data breach](https://cybersecuritynews.com/discord-data-breach-sensitive-data/) that exposed government IDs of at least 70,000 people who submitted one to discord. (Yes I am aware the breach was from a subcontractor. No, I do not care. Corporations should be held fully accountable and liable for vetting and overseeing their subcontractors, period.) And this was before the whole recent mandatory verification thing!  

Now they're rolling out sweeping [global age verification](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing) largely without governmental obligation. For what purpose? If I had to guess, I'd say brand safety going into the IPO. Accusations of grooming and CSAM on your platform scare investors, so you need a convenient defense to hide behind while doing nothing to actually help the situation. And No, collecting a bunch of high value data on children in a convenient little hackable bundle, and creating further stratification between adults and children where groomers can simply choose to move to childrens' spaces is NOT helping kids. 

Further, the companies that they've been using to verify peoples' ages since this new initiative are hardly ideal. Persona, an age ID company funded upwards of [$200 million](https://withpersona.com/blog/series-d) by [Epstien lister](https://www.thenation.com/article/society/peter-thiel-jeffrey-epstein-democracy), [Palantir founder and chairman](https://en.wikipedia.org/wiki/Palantir#Controversies), and overall [slime bucket](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Peter Thiel, (or more specifically his VC fund), has been temporarily used by discord for verification purposes as a "test". The simple fact that they're even entertaining the idea of giving childrens' government IDs to a company so closely tied with someone on the epstien list IS NOT GOOD.

K-ID, their main age verification provider, however, has the vaguest nothing-burger-ass data retention policy: "We store [user data] as long as you use our Services, or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, enforce our agreements, and comply with applicable laws." ([source](https://k-id.com/privacy-policy#item9)). That could mean literally any length of time. Their backing is also pretty hilariously bad, having drawn a notable ~[$45 million](https://www.forbes.com/sites/mattgardner1/2024/06/25/k-id-closes-45-million-series-a-in-quest-for-child-safety-in-gaming/) from [nationalistic defense nuts](https://a16z.com/defense-reform/) and investors in [autonomous military robotics](https://www.capitaly.vc/blog/how-andreessen-horowitz-is-transforming-u-s-defense-tech-in-2025) andressen horowitz.

A few of the above links were helpfully sourced from [this rogue article](https://www.rogue.site/news/do-not-give-your-id-to-discord/) on the subject, which I would recommend reading as well.

TL;DR? Fuck Discord! 

If you wish to continue using discord in full or in part, I would recommend using [vencord](https://vencord.dev/) or another client mod to prevent discord from having clientside access to your computer. If possible, try uninstalling any native apps and just accessing it via web. 

It's a worse experience, and that's the point. The added friction makes using the platform more difficult, and as such I can move towards using it less. I personally lost a lot of time and energy constantly sifting through notifications and getting distracted by pings (That shit is literally just a skinner box istg), so having to consciously make my way to the website irregularly when I choose to was incredibly helpful. I also set clear digital boundaries with friends and told them that I would no longer be reliably reachable over discord. If someone wishes to contact me urgently, I have offered everyone I care about my contact information via text and signal. 

#### Alternatives

I can solidly recommend the [matrix protocol](https://matrix.org/) (specifically the [element client](https://element.io/en)) as something that's been put through its paces. It's got pretty much every feature out there. 

If you're in the mood to try something younger, [fluxer](https://fluxer.app/) has pretty much feature parity with discord, (sans a mobile app, for the moment), and has a solid roadmap; I'm pretty optimistic about its direction.

Additionally, if you only really need group chats, I've found [signal](https://signal.org/) really well designed, and generally use it for as much as I can, especially after leaving discord.

For communities, L + self-host [discourse](https://www.discourse.org/). It's not a chat platform. That's what makes it great. Instant messaging for online communities was a mistake. Need vc? That's what [Jitsi](https://jitsi.org/) and [Mumble](https://www.mumble.info/) are for. Reject modernity; return to forum.

### Tik Tok

TODO

### Megacorp | Amazon

TODO

### Twitch

TODO

#### Alternatives

### Twitter

You don't need me to tell you twitter is not good. I think we all collectively know this by now. If you need some reminders other than the nazi running the show and the whole mecha hitler/ infinite CSAM generator things, here's a relatively recent [Last Week Tonight Episode](https://www.youtube.com/watch?v=p7ZG_xWYLzI) that highlights some pretty major problems with the platform. 

I personally have never used twitter, so I can't help very much as far as usage goes, but general social media etiquette concepts as discussed elsewhere in this piece should apply here. I've seen [nitter](https://nitter.net/about) tossed around as an alternative frontend, but I have no experience with it, so I can't speak to its quality.

#### Alternatives

More and more, I've been convinced that open source, decentralized, federated social media is the only way forward. And no project is more emblematic of that ideal than [mastodon](https://joinmastodon.org/). Give mastodon a shot; look around for good servers, they're like little communities scattered around. I'm [here](https://peoplemaking.games/@fireye) on peoplemaking.games. The best part is whichever one you choose, you can still talk to the entire rest of the network. This is how digital spaces should work. 

[Bluesky](https://bsky.app/) definitely exists. It's technically open source, though it's very centralized in its design, and it's developers are taking [VC money](https://bsky.social/about/blog/03-19-2026-series-b) to scale it, which doesn't exactly give me the warm fuzzies. More people (and bots) are on it than mastodon though, so if you care about that, then this might be the way to go. 

### Megacorp | Facebook

These fuckers explicitly allow [trans slurs](https://theintercept.com/2025/01/09/facebook-instagram-meta-hate-speech-content-moderation/) on their platforms. Like that shit was *written out* on *training material*. Their [hateful conduct policy](https://transparency.meta.com/policies/community-standards/hateful-conduct/) also kindly allows us to be discriminated against, and called mentally ill. Fun!

They've also intentionally [stopped investigations](https://www.reuters.com/investigations/meta-is-earning-fortune-deluge-fraudulent-ads-documents-show-2025-11-06/) into scam ads on their platforms due to the profit motive. 

Even their most "private" application, Whatsapp (which implements the [Signal](https://signal.org) protocol, lol), collects [pretty much everything](https://www.whatsapp.com/legal/privacy-policy) that's *not* your message contents, and uses it to train content serving models for the algorithmic feed as well as profile your account to sell to advertisers. That privacy policy is *rough*.

As far as continued use goes, Facebook as a company is really locked down, so any attempts at recreating alternative frontends have died as far as I can tell. As with anything else, a good compromise can be found in deleting apps and using simple web applications within your browser. 

#### Alternatives

For Instagram, which I see as the biggest hurdle here, there's a great, mastodon-based, FOSS alternative called [Pixelfed](https://pixelfed.org/).

For any messaging functionality, I'd defer to [Signal](https://signal.org).

It bears repeating that this kind of platform is one of the more entrenched ones, as most people are only on it because their friends are as well. If you skimmed that section above, definitely give it a read.

### Megacorp | Microslop

I want to flag that Microsoft is a priority target of the [bds boycott](https://bdsmovement.net/news/boycott-microsofts-xbox) due to their azure cloud services provided to the Israeli military for the [surveillance and genocide of innocent civilians](https://www.theguardian.com/world/2025/aug/06/microsoft-israeli-military-palestinian-phone-calls-cloud).

TODO

### Windows

The device you use to access the internet isn't just a neutral conduit to the internet; 
Rather, it's an incredibly sophisticated amalgamation of hardware and software, all designed by corporate entity for the purpose of profit. 
(The internet isn't a neutral entity either, but I digress)

Not only are modern operating systems designed meticulously for user retention and data collection (especially mobile ones), but even the hardware is getting more invasive and locked down.
Once you realize how many household objects need to ping manufacturer servers, many requiring an end user account, there's no going back. 
Look up the [intel ME](https://en.wikipedia.org/wiki/Intel_Management_Engine) if you want to get really paranoid.

If you still need to use windows, in full or in part (dual booting is a great option for bi(OS)-curious individuals!), I'd recommend looking at the [winutil](https://github.com/ChrisTitusTech/winutil) framework to make the thing even a little bit usable.

#### Alternatives

This topic is a whole blog post on its own, but I would be remiss if I didn't encourage you to give linux ([Mint](https://www.linuxmint.com/)/ [Fedora](https://fedoraproject.org/)) a try on your current hardware. It's a reasonable, privacy-respecting operating system that serves as a perfectly viable alternative for many windows and [mac](https://asahilinux.org/) users, and, in any case, is a much more attainable goal than swapping all your hardware to RISC-V (my beloved), or burning your phone with gasoline and casting it into the cursed pit from whence it came.

### Github

OK OK I know no sane layperson is going to be thinking about github in their spare time, so feel free to skip this one if you just don't care.

Since I've gotten further into FOSS, github has become something of a bastion. A stupid percentage of FOSS projects use github as a collaborative platform, and as such, I'm compelled to be on there as well, and for a time did so happily. 

These days it's a monopoly on the FOSS ecosystem held in place by Microsoft. That's why we haven't seen [federation](/blog/FEDERATE-GIT) take off for code forges. It's simply more convenient for Microsoft that everyone be platform locked to github. It's effectively holding the community hostage. Want traffic? Use github.

And given the aforementioned [boycott](https://bdsmovement.net/news/boycott-microsofts-xbox), I have been making an effort to leave.

#### Alternatives

[Codeberg](https://codeberg.org/) is perfect if you just need something to work and you're cool with your code being public. [git.gay](https://git.gay) seems silly as well, but I can't speak to their uptime.

I personally have a [forgejo](https://forgejo.org/) server on my homelab that I use for private projects (read: a dwarf fortress game I'm playing with a friend)

### Minecraft

Yeah. It hurts me too, but it's Microsoft and it's literally called out on the [fucking boycott page](https://bdsmovement.net/news/boycott-microsofts-xbox). 

#### Alternatives

The worst part is that there's a thriving open source competitor to Minecraft called [lunati](https://www.luanti.org/en/). It's like right there, people! Then again, we play Minecraft for the nostalgia, not the gameplay, so perhaps this one's a harder sell than I give it credit for. 

### Life 360

*SCREAMING*

TODO

#### Alternatives

### Dating apps

I don't see this one talked about a lot, but it's personally a little horrifying how normalized these have become. Skirting over the many problems with objectifying people that plague these platforms, they also suffer from the same corporate greed that runs social media companies. Keeping people on-platform is how they make money. Doing their literal job is the antithesis to the point of their existence. They just need to jingle some keys in front of you to give you hope every now and then, and ka-bam, instant money printer. It also feels pretty icky to me how they play with social dynamics for profit, though in fairness, pretty much any profit-focused social media company will also be doing this.

#### Alternatives

The death of third spaces fucking sucks, but that doesn't mean we need to stop trying. Local maker spaces, events, and hobby/user groups still exist, they're just a bit harder to find. Go outside and talk to strangers. Set up a recurring board game night at your place. Make a community, a support system. Asking friends to set you up on dates isn't normalized anymore, but you can still try.

Bottom line, there are things you can do to meet people. It's not as easy as I hear it used to be, but nothing ever is. We still have to try.

### Smart TVs

OK this is a bit of a weird one, but oh my god those TV operating systems are fucking evil. Burn them all.

TODO: Netflix are assholes

#### Alternatives

Get a mini computer, throw something like the upcoming kde [plasma bigscreen](https://plasma-bigscreen.org/) on it, and plug it into your TV, and use the thing like a big monitor. 

Or alternatively...

### Routers

TODO 

Hey. Did you know you can block all ads on your home wifi? Go take a look at the [pi-hole](https://pi-hole.net/) project.

### Conclusion

This was probably pretty depressing up to now. Not to worry, this post gets better!

## The Indie Web: An Introduction

Did that last section give you crippling depression about the horrors of modern technology and our collective overreliance on them, as they've slowly but surely co-opted our support systems and  to rely upon them

### Surfing the Indie Web

### RSS: Content Consumption as God Intended


