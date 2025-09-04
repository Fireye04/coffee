---
date: '2025-09-02T11:29:35-07:00'
draft: false
title: 'Monthly Update 2025 August'
description: The August monthly update.
categories:
- blog
blog-tags:
- default
params:
    toc: true
    original: '2025-09-02T11:29:35-07:00' 
---

Welcome to the august monthly update! We're a bit late on this one, but not without reason.

## Eldritch Wager

I Made a game! The brackeys game jam came around and I ended up decideing to make something simple because I could. Check it out [here](/projects/eldritch-wager)!

This is generally why I missed the monthly update deadline I've set for myself, as I was neck deep in this game jam. (Now I'm neck deep in homework catchup, as uni started last week, but que sera sera).

## NixOS

I did it. My arch partition is gone, I'm running NixOS on my laptop, and it's for the clinically insane. I'm in the process of writing up a blog post on it at the moment, but suffice it to say, if you are not clinically insane, stick with arch. Arch just works. Trust me. If you are not regular insane enough for arch, stick with mint or some fedora spin. Thank me later. 

As for me? I might be clinically insane, because I'm getting things working slowly but surely. NixOS sounds like a straight upgrade from the outside (Namely Arch), but I would caution against this perspective. Rather, there are tradeoffs. 

- Determinism in system state? Upgrade. 
- Effortless rollback? Upgrade. 
- Packaging? Oddly enough, despite the size gap between nixpkgs and the AUR (Nixpkgs unstable is significantly larger by sheer number of packages!), I've actually had a more seamless experience on the AUR! Flakes are nice but they're still experimental and purely community driven, and you can't yet fully rely on them existing for your project that happens to be absent from nixpkgs. (3dslicer, zen browser, nirius, etc...)
- Learning curve? Literal hell. This took me weeks of work, and I don't think I'm even halfway competent at this operating system.
- Literally just running software? Whoa there buddy. You want to run a piece of software? I hope you're ready to dig through wiki pages for hours to get a working fhs environment. Dependencies? I hardly even know her! (Cooked)
- Development? Harder. It's just harder. Dev containers are definitely a thing, but I've had problems testing Niri, as on arch I'd just replace the system version with mine, but on nix you need to figure out a way to package your version somehow... I think.

More ranting to come though.

## Federate Git

[FEDERATE GIT DO IT DO IT DO IT RAAAAHHHHHHH](/blog/FEDERATE-GIT) :3

## Website update

I got a huge website update out in which I was able to knock out a whole bunch of quality of life improvements for the website that you can view [here](/changelog/big-ol-update). I'm super happy with this though! 

## Clear Thoughts

I also did a bit of writing, as I felt inspired to do something short to dip my toes back in. Cyberpunk is good, cyberpunk is friend. Check it out [here](/writing/clear-thoughts)!

## Motherboard repair

Tried to fix a motherboard! Unfortunately the debug lights are concerningly not doing light things (completely dark) but I do get board power (pretty RGB) and power on works in at least some capacity (we get fanspin, but no video out). Looking to get a motherboard speaker to see if we're getting beep codes in any respect. If anyone has any idea what could be happening please please please let me know!

## Open source contribs

### Godot engine

I'm now working on the official Godot nodeletter! Check out the latst entry [here](https://godot.news/archive/copy-of-the-nodeletter-august-9020)!

If anyone reading has anything they want potentially featured in there, please reach out to `kai@fireye.coffee`!

### Niri WM

Multiple monitor hot corners are functonal! If I have time I'll see if I can add custom actions on hot corner but As it stands I really just want that PR merged (Yalter notice meeeeee). PR can be found [here](https://github.com/YaLTeR/niri/pull/2108).

# Retrospective

So. You may have noticed a couple things are absent. Oops. First and foremost, Nike's. I still want to work on it, I just didn't have the time. Don't worry it will happen, I will fight god (adhd) to make it happen. Further, I didn't do enogh music this month. Expect more of that going forward. OpenVPN is still T Posing over my sobbing corpse as per usual, and the treehouse did not progress at all. Cooked.

On the other hand, I did get that website update out, I started working on that motherboard fix, and I embarked on the long painful NixOS journey, so not a total loss!

# Plans

Here's the list:
- Nike's 
- Treehouse
- OpenVPN setup
- Motherboard fixing
- Music
- NixOS Blog post.

Let's see how I do.

## Conclusion

Thanks again for reading, see ya soon!
