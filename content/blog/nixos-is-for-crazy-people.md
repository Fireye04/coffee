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
I did it. My arch partition is gone, I'm running NixOS on my laptop, and it's for the clinically insane. I'm in the process of writing up a blog post on it at the moment, but suffice it to say, if you are not clinically insane, stick with arch. Arch just works. Trust me. If you are not regular insane enough for arch, stick with mint or some fedora spin. Thank me later. 

As for me? I might be clinically insane, because I'm getting things working slowly but surely. NixOS sounds like a straight upgrade from the outside (Namely Arch), but I would caution against this perspective. Rather, there are tradeoffs. 

- Determinism in system state? Upgrade. 
- Effortless rollback? Upgrade. 
- Packaging? Oddly enough, despite the size gap between nixpkgs and the AUR (Nixpkgs unstable is significantly larger by sheer number of packages!), I've actually had a more seamless experience on the AUR! Flakes are nice but they're still experimental and purely community driven, and you can't yet fully rely on them existing for your project that happens to be absent from nixpkgs. (3dslicer, zen browser, nirius, etc...)
- Learning curve? Literal hell. This took me weeks of work, and I don't think I'm even halfway competent at this operating system.
- Literally just running software? Whoa there buddy. You want to run a piece of software? I hope you're ready to dig through wiki pages for hours to get a working fhs environment. Dependencies? I hardly even know her! (Cooked)
- Development? Harder. It's just harder. Dev containers are definitely a thing, but I've had problems testing Niri, as on arch I'd just replace the system version with mine, but on nix you need to figure out a way to package your version somehow... I think.

More ranting to come though.


