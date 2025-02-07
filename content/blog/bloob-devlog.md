---
date: '2025-02-04T15:00:37-07:00'
draft: false
title: 'Bloob Devlog'
description: An insight into my intentions as the developer behind the memories of bloob's most controversial mechanic
categories:
- blog
blog_tags:
- devlog
params:
    toc: true
    original: '2025-02-04T15:00:37-07:00' 
---

After finishing [The Memories of bloob](https://fireye.itch.io/the-memories-of-bloob) and sending it to friends for playtesting, I got a lot of interesting feedback while watching people play through the thing and talk about it afterwards. One of the most interesting pieces of feedback, however, was the general distaste for the Quicktime feature. Let's talk about it.

## On Quicktime

First off, quicktime is old. Not like old old, just regular old. It has a spot in a lot of antequated games as a lazy attempt to engage players during cutscenes, throwing a fail state on failure, then forcing players to restart the whole scene. On the whole, this use of quicktime is generally awful for player experience, and especially so for acessibility. 

To be completely clear, this was not the way quicktime was designed in Bloob. The execution was not perfect, the game being made in under a week and all, however, I still think that many players didn't look past the veneer of a cheap quicktime event and actually engeage with bloob's core message, which I want to try and remedy. 

## How did Bloob do it?

First off, Bloob is inherently a narrative game. Not reading dialogue is not a good way to enjoy your time with the piece. Bloob was primarily written as something closer to a short story than a jam game, though it does fall under the latter definition and as such is written off as a piece with throwaway dialogue (as many jam games are) by most players, which is a damn shame. 

Bloob's implementation of quicktime was designed with the idea of "pain in the ass, but still more than doable" as the core design intention. The user is prompted to prepare to spam by the system, then is let loose, and spams buttons for 15 seconds or until they lose. Notably, the term "Suppress the memory!" is displayed right below the bar. 

## Taking advantage of the gamer brain

For some odd reason, the combination of a shrinking green bar getting replaced with bright red and a timer ticking down makes the gamer brain short circut and just spam the prompted buttons. "Winning is good right? I can't let the bar reach 0, I'll lose!"

And knowingly or not, the player has just made a decision. Simply doing nothing, and thus not suppressing the memory is within the option sphere, yet players simply don't even consider it, which is frankly fascinating! But this whole minigame boils down to a simple success/ fail. Did you suppress the memory or not? This naturally leads into the following question: 

## Why disguise the decision?

The exact same outcome could've been reached with a simple dialogue branch. "Do you want to suppress the memory? Yes | No". Why disguise it behind a weird antequated minigame? 

Bloob tells a story of suppression, escapism and refusal to live life, choosing to live in memories instead. When you're in that headspace you don't simply decide to stop, to click that "No". The player shouldn't have that luxury either. Offering a Yes/ No decision to the player is, in my eyes, antethetical to the entire premise of the game. 

## Quicktime instead?

On the other hand, the way that a quicktime event hacks the player's brain works almost too well. On earlier builds of the game, players would just rush through the game without realizing that you could fail a quicktime event! It wasn't even an option that occurred to them, which is a beautiful paralell to the game's themes, however I did want the player to realize that something was wrong, so I added dialogue that better flags the idea of something being off, and tried to be more overt in my communication of these themes. Even so, i'm aware that some players just play through it and assume the discrepancies in dialogue and go "huh that was weird" then go on with their day, and I think I'm ok with that. 

## Final notes

Thanks for reading! I apprecieate your time, reading my ramblings on a little thing I made. Have a great day.
