---
date: '2025-09-03T12:23:49-07:00'
draft: true
title: 'Nixos Is for Crazy People'
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '2025-09-03T12:23:49-07:00' 
---

Alright, you (nobody) asked for it, and here it is. I've swapped to NixOS as my main operating system from arch, and I have concluded that Nix is for crazy people. 

TLDR: If you're on Arch, and you're not unfathomably insane, stick with arch. Arch just works. Trust me. If you are not regular insane enough for arch, stick with mint or some fedora spin. Thank me later. 

Now. What about me? Well, I might be unfathomably insane, because I'm getting things working slowly but surely. It's definitely not easy and it's definitely a lot more work than arch, but there are a lot of benefits. And I think once I get everything under my belt, those benefits will pay off. Till then I'll be banging my head on various nix wikis and blog posts till I get everything through my skull.

NixOS sounds like a straight upgrade from the outside (Namely Arch), but I would caution against this perspective. Rather, there are tradeoffs. 

- Determinism in system state? Upgrade. 
- Effortless rollback? Upgrade. 
- Packaging? Oddly enough, despite the size gap between nixpkgs and the AUR (Nixpkgs unstable is significantly larger by sheer number of packages!), I've actually had a more seamless experience on the AUR! Flakes are nice but they're still experimental and purely community driven, and you can't yet fully rely on them existing for your project that happens to be absent from nixpkgs. (3dslicer, zen browser, nirius, etc...)
- Learning curve? Literal hell. This took me weeks of work, and I don't think I'm even halfway competent at this operating system.
- Literally just running software? Whoa there buddy. You want to run a piece of software? I hope you're ready to dig through wiki pages for hours to get a working fhs environment. Dependencies? I hardly even know her! (Cooked)
- Development? Harder. It's just harder. Dev containers are definitely a thing, but I've had problems testing Niri, as on arch I'd just replace the system version with mine, but on nix you need to figure out a way to package your version somehow... I think.

More ranting to come though.


