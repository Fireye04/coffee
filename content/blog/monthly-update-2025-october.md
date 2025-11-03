---
date: '2025-11-01T13:08:43-07:00'
draft: false
title: 'Monthly Update 2025 October'
description: October update stuff (or lack thereof)
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '2025-11-01T13:08:43-07:00' 
---

Hey I did almost nothing interesting in october I think. I'm literally only writing this out of moral obligation to keep up the streak. 

## Cabin GDD

I put together a GDD for a new project that I've been contemplating for a while. I'm not sure if I'll actually be doing this anytime soon but I do want to do it at some point. You can check it out [here](/projects/cabin).

## Optimization shenannegans

Do y'all run your entire operating system while gaming? Lame! You're wasting frames! I've run up a series of custom gamescope sessions on my greeter that literally just spin up a gamescope instance running my game of choice, and nothing else. I have the current iteration in my nix config at the moment, but it's still very incomplete. Currently systemd still runs up the same stuff as my main config, so I'm considering making a new user account to limit what systemd ends up running. I really don't need a full pipewire instance here, for example, pulseaudio or even ALSA would work just fine. 

## Drumset 

I got some digital drums so I don't have to emulate drums on a keyboard. Nice! Unfortunately the MIDI integration that this drumset uses isn't interpreted correctly in Ardour, so I'll have to do the signal processing for the MIDI signals into raw XML so that my hi-hat pedal works correctly. That's a project for later, because that's a goddamn pain in the ass. Luckily the thing still works for simple drums, and I don't fully need a hi-hat pedal to play better than on keyboard so I'm content with how it works at the moment. Mostly. 

The only way I can get Ardour to recognize it in the first place is to swap the IO from pipewire into ALSA which is so inconvenient. I'm not sure why pipewire can't handle MIDI input via USB, but who the hell knows. I'll have to look into that as well.

## October Nodeletter

I helped out on the october nodeletter, check it out [here](https://godot.news/archive/the-nodeletter-october-0227)

# Retrospective

The schoolwork this semester has been crazy, so I've been unfathomably busy with that, work, climbing, etc... 

Definitely going to reduce my credits next semester though, as I really need to do more stuff.

# Plans

I'm literally just trying to survive at the moment so I'll just put stuff on pause at the moment. Sucks to do, but I really need to pass this discreet math class lmao.

## Conclusion

Thanks for reading, hope you have more free time than I do haha. Imma go take a hike, have a great day.
