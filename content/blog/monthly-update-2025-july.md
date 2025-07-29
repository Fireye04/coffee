---
date: "2025-07-28T15:51:47-07:00"
draft: false
title: "Monthly Update 2025 July"
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: "2025-07-28T15:51:47-07:00"
---

Hello and welcome back to my monthly update series! It actually has a publishing cadence so I actually released a sequel! Wow! I'm getting good at this "doing things" stuff!

Alright, let's go ahead and kick things off.

## Game Developers Together

I finally got the juice to go ahead and finish my webring! I started this months ago and rediscovered the repo a couple weeks back, so I decided to get it working! It took me about a weekend or so, but it's up and running at [gdt.fireye.coffee](https://gdt.fireye.coffee), and you can read my announcement blog post on it [here](/blog/game-devs-together). We're open for applications, baby!

## Nike's House

Work is progressing steadily, but slowly on nike's. I wrote a couple solid paths, but I'm not fully happy with the character voices that I put down so I may have to do some significant editing later on. Further, there's some personality in this game that's starting to shine through, especially in flynn's dialogue options that I'm presenting to the player that I'm starting to like quite a bit. Unfortunately, leaning into this further than I already have would require some nontrivial rewrites in act 1 that I don't necessarily want to commit to, however the disco elysium vibes of these new options is really calling to me like the green goblin mask. Still, I think I want to keep the scope creep to a minimum and keep focusing on the writing. I hope to start up some local writing groups in which I can share what I have with other writers to get feedback on what I have and points of improvement.

However speaking of nike's let's move on to:

## Open source contribs

### Godot dialogue manager

I think i've well and truly got the bug; I was writing for nike's the other day and ended up finding a bug in [godot dialogue manager](https://github.com/nathanhoad/godot_dialogue_manager), which I found a workaround for... then promptly ignored, opting to dive straight into the plugin's source code fixing the bug itself. I made a few other contributions to godot dialogue manager as well, most of them C# oriented.

### Godot engine

I continued testing godot PRs for regressions and reproductions. I don't have any experience with C++, so as a way of getting familiar with the engine source code I figured I'd do some simple testing labour. I poked around in there a bit and tried to fix a bug in custom resource resolution, but C++ just isn't my cup of tea. I do want to keep contributing to godot though, so I reckon I'll go ahead and learn it anyway, It'll just take a bit longer than I'd like.

### Niri WM

Niri has been amazing, and I've loved using it so much that I've started to actively contribute to the project. Yalter, the maintainer, looks a bit cooked in terms of their spare time, which is a shame, however I can only see the project going good places, given they have the capacity to review people's PRs in a reasonable amount of time. I've already submitted one adding a much needed update to hot corners and have fixed another PR's failing testcases, and I'm hoping to expand the hot corners to per-monitor hot corners, when I have time.

## Rust

Further, Niri is written in rust. Oh boy do I looooove rust. I hadn't written rust before this but the level of control it provides at the level of simplicity that it sits at is simply unprecedented. Cargo is immaculate, and the tracebacks it gives me are better than even those of python, which is absolutely bonkers. I will be writing more rust in the future. Rust is good, rust is friend.

## NixOS

It is getting more and more appealing to switch to nixOS as the days go by. It makes the hassle of sysadmin so much more streamlined, and especially when I have two systems to manage, I do NOT want to have to manage two different systems with different environments. And I won't have to ever worry about debugging on a half functional system anymore! Nix just solves everything! The work involved in switching is large though, and I'm not totally convinced that home-manager is a good idea. This is probably because I don't know how it works, however as far as I can tell, it needs all of its options to be manually programmed into it, which is already iffy, and only gets worse the closer someone is to the bleeding edge. If a program I use has an option that I want to toggle, but it isn't in home manager, do I need a dotfile again? If so, now the entire benefit of home manager is busted! More research is forthcoming, but I'll keep y'all updated :3

## Pirate TTRPG

I've started casually working on a little pirate themed TTRPG with [a friend](https://theblipbloop.github.io/). It's still in early stages, so I haven't even made a project for it yet on here, but stay tuned!

## Music

I started doing actual music recording in july! You can find some of the little things I've put out [here](/music), but I'm hoping to do longer and longer releases as I go on. I've been playing around with synths, guitar effects, and I even bought myself an actual pedal the other day. Stay tuned here as well, as I have some stuff in the works that I like quite a bit.

## Spire

I started a campaign of Spire this month! I'm hoping to use it to get a better grip on the system and take that forward into my other designs, but also to tell a good story. I also just want to take this second to reiterate the sheer importance of safety tools and of good communication at your tables. As I wrote in my treehouse game:

> Your priority is to your friendship with these people, not to the text of this document!

Remember that y'all are doing this, as friends, for fun. If your friends are not having fun, you have failed at games. People say you can't win or lose TTRPGs; I disagree.

You win TTRPGs by successfully scheduling sessions.

You lose TTRPGs by disregarding the enjoyment, safety, and wellbeing of your actual friends in favor of literally anything else.

## Climbing

I'm weak! I can barely climb a 5.11c without getting gassed! This must be remedied. I will be hitting the gym much more frequently next month and maybe socialize with people for once.

## Art & Literature

### Burning Chrome, William Gibson

I read through more of William Gibson's burning chrome and it was quite good. I might want to expand the website to allow me to share my favorite media with visitors, but for now, I definitely reccommend giving gibson a read if you are a fan of cyberpunk themes (hypercapitalism, baby). One of the stories I read this month had a beautiful ending that really landed quite well. It said a lot about how we as humans perceive ourselves and expect ourselves to operate on a social stage. Beautifully thought provoking stuff!

### Mythic Bastionland, Chris McDowall

This is a beautifully crafted, short and to the point, TTRPG system about knights. It has 21 pages of precise rules, including one page on aging that makes the system truly unique as far as I've seen, and then proceeds to list a series of knights, seers, and quests for over 200 pages thereafter. Despite being short, this system looks unfathomably robust, and I can't wait to play it.

# Plans

Alright. I didn't do great on last month's plans, only getting around to 1 of the 3 goals I set: That openVPN server is mean, and I completely forgot to update the website, past supporting music publishing.

Nonetheless, I'd still like to get around to both of those things (self-hosted OpenVPN setup, and website updates), as well as continuing work on nike's. I'd also like to do a bit on the treehouse, as that system still needs love, and I can feel it getting close to completion.

Further I might start getting more into electronics repair; I have my LGA1700 test bench and I've already ordered a broken motherboard that I hope to try and fix back up.

## Conclusion

Thanks for reading! I hope to continue doing these, as they serve as great reminders for how I spend my spare time, and what I choose to use it on. The class is definitely eating a lot of the time that I'd be using for stuff like this but I'm still managing to get stuff in. Regardless, I hope you have a great day, and I hope to see you next time. Vaya con queso!
