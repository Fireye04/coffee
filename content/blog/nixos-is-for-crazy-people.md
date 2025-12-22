---
date: '2025-09-03T12:23:49-07:00'
draft: true
title: 'Nixos Is for Crazy People: A beginners experience'
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '2025-09-03T12:23:49-07:00' 
---

Alright, you (nobody) asked for it, and here it is. I've swapped to NixOS as my main operating system from arch, and I have concluded that Nix is for crazy people. I also happen to still be happily running it ~6 months later. Let's get into it.

## Setup

Imagine, if you will, me waking up, configuring nixos, going about my day, configuring nixos, and going to sleep...
For two weeks.
(Now, this did include a full port of every single significant arch dotfile into nix's homemanager, which was no easy task.)

### The learning curve

Believe me when I say the nixos learning curve hits you like a goddamn brick. 

The official docs seem written for experienced users, unlike arch, so you end up totally confused. 
You just want a simple config that works, but everyone keeps saying things about flakes, but flakes are marked as unstable???
Everyone also keeps talking about homemanager, what the fuck is that? Do you need it?

At this point I can say that you should certainly use both.
Also here's a competent guide to actually getting everything working in a sane way: https://nixos-and-flakes.thiscute.world/
*kisses your forhead* Everything's gonna be alright, buddy.

### What's a flake?

Flakes are experimental features of nix that allow users to define the nix equivalent of a function.
These are widely used in the nix community to provide additional support for programs that don't exist in nixpkgs yet, add native homemanager configuration for certain programs, provide out of the box configuration for certain programs (for example, [nix-citizen](https://github.com/LovingMelody/nix-citizen) provided me a fully optimized SC/wine installation without any config on my end!), and much more.

The best way to manage your system config on nixos these days is by defining a flake to act as an entrypoint. This allows you to define other flakes as "inputs" (read:parameters), that you can feed into your "outputs" (read: other function calls).

### What's homemanager

This is what you use to manage userspace, including dotfiles!
Many programs are included by default, many more have a supporting flake, and worst comes to worst, homemanager lets you just place raw files wherever you want in your user's ~ directory. 
Quite splendid.

This is super neat, as it allows you to make almost everything about your system, down to the user-specific configuration and customization, completely reproducable. *chef's kiss*

## Initial impressions

I was a bit cooked early on, as you can tell from my original ranting [back in august](/blog/monthly-update-2025-august).
However, now that I've got the bulk of the learning curve behind me, even the downsides I saw back then have faded with time and I continue to reap the incredible benefits of this beautiful operating system. 
Here's how things currently stand:

- FHS environments? One shell command away. 
- Never having a broken system? Incredible.
- Being able to have certain programs on stable branches and others on unstable? Immaculate.
- Full state control? YES PLEASE
- System rollback? Hell yeah.
- System duplication? god yes.
- Development? Crazy easy once I figured out how nix develop worked. And now, no more "It works on my machine" state garbage to worry about.
- Packaging? Nixpkgs+Flakes pretty evenly rival the Arch repos+AUR. I think the AUR does edge out flakes in quality due to the size of the community, and the extra features that flakes must maintain in addition to simple packaging, but that's balanced out by the sheer dedication that nix developers have to nixpkgs, which definitely tops the native arch repos in my opinion.

## So should I use it?

Depends! How much do you value the benefits of nixOS?
If you really like the way that arch gets out of your way and lets you just do stuff, you might not love nix. 
Nix has opinions, and not following those is totally possible, but does make your life a little harder. 
System config does take a little bit longer, but none of it is "OH GOD I FUCKED SOMETHING AND I NEED TO FIX IT NOW."
There are ups and downs.

Nix is still a tradeoff. If you think you'll get real value out of the benefits, I'd say do it. But if you're happy where you are and don't feel like subjecting yourself to a silly amount of head-banging, you really don't need to!

If you're an operating system nerd (derogatory) like me, i'd definitely recommend it though, it's such a goddamn enigma, hahaha.

## Tips & tricks

Here's some nix specific stuff i figured out that I'd find super useful if I were learning from scratch again.

#### My Big notes

- Set up git in your /etc/nixos folder. very very handy.
- In userspace I'll use a quick `sudo -i` to get root access to /etc/nixos for painless editing
- This website is god https://search.nixos.org/packages?channel=unstable&
- This website is also god for homemanager https://mynixos.com/ (Omg god yuri :3)
- Like running raw binary files like a goddamned maniac, but can't figure out how? Looks like you didn't read [this page](https://nixos-and-flakes.thiscute.world/best-practices/run-downloaded-binaries-on-nixos#running-downloaded-binaries-on-nixos) on the guide I posted above, silly!
- `nix-shell -p package-name` lets you test out a package in a temporary shell without actually enabling it system-wide! Super neat!
- `nix develop` is also god for all you devs out there dealing with dependency hell (God polycule; shit is getting real, y'all)
- And finally, `nix-collect-garbage` actually frees storage space of unused packages (but also clears out old versions of stuff so you can't roll back to them anymore without another download)


#### Shell Shortcuts

- I have `ninit` mapped to `cd /etc/nixos;nvim .`
- `gupdate` to `git add --all; git commit -m "rev"; git push; sudo nixos-rebuild switch` (still haven't gotten the time to make a bash script with dynamic commit names, whoops) 
- `nixupdate` to `git branch -d update; git checkout -B update; git add --all; git commit -m "update"; git push; sudo nix flake update; sudo nixos-rebuild switch`
