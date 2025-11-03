---
date: '2025-11-03T11:15:50-07:00'
draft: false
title: 'Cabin'
description: GDD for an open source webfishing inspired little game
project_status: 
- in_progress 
categories:
- project
project_tags:
- default
params:
    toc: true
    original: '2025-11-03T11:15:50-07:00' 
    tools: default
    builds: None
---

Notice: This is an incomplete GDD attempting to represent a complete version of this game, most of which is likely not happening for a while, if at all. For a complete roadmap on what is actually realistically planned, see the "Roadmap" at the bottom of this document.
## Elevator Pitch

Design, build, and decorate a cabin with friends, strangers, (or alone) in a community-focused, labour intensive, cozy architecture construction sim.

## Quick Summary

- Design cabins, collect resources, craft resources into items, place items into designs. 
- Host worlds to the public and make new friends or keep it to a controlled friend group. 
	- Make your own designs or work together on the same designs for additional productivity
- Webfishing inspired
- 3d low poly art style
	- COZY COZY COZY VERY COZY
- lofi-style music
	- perhaps some country/ folk vibes as well
- Low stakes survival for productivity boosts.
	- Eat food, drink water, Maintain comfort, & remain inspired 

## Game Philosophy

- Players should be pushed to do things together, rather than split up
	- Avoid "Minecraft Syndrome" in which everyone playing 'together' promptly split up and spend hours of gameplay without ever seeing each other
- Players should be rewarded for idle time, and spending that time with others as much as they are for active construction
	- Aim for Webfishing players sitting around a pond, friends at a campfire vibes, or sitting and watching the sunset 
- The Journey is as important as the destination
	- The fun of the game is watching something you and your friends put time and effort into grow into something neat.
	- something something friends along the way
- Immersion
	- Yes. 
## Core Systems

### Multiplayer

- Server authority is determined by world ownership
	- Creator is designated the owner of the world and given full permissions
	- Owner can designate roles and permissions to other members
	- Ideally, If you're running a world, you can control and designate pretty much every permission there is. 
	- Defaults (for public lobbies):
		- Owners can ban anyone at any time
		- Strangers joining can fully impact world (gather resources, craft items, place objects) but not architecture their own buildings until given proper roles.
	- Technical implementation:
		- Server-client model
		- Server hosted on Owner's PC or elsewhere, remotely controllable by owner.
		- Further Specifics TBD
- Full world rollback/ history within local save files
	- Use git as backend
		- We're open source so we can just use git (GPLv2) as a part of our source code mwahahahaha
	- Serialize world generation and track diffs
		- Ideally users can specify how much history they want to keep and rollback if necessary
		- This is a tough problem, but I want people to be able to open their worlds to the public without worrying about griefing.
	- Allow for in game merge conflict resolution (pipe dream)
		- display world state through spectator-mode viewport, and allow users to toggle between diffs (a/ b/ both/ neither) and see their outcomes & accept their preferred outcome.
		- Allow two offline players to play on the same world then resolve any conflicts after booting back online. 
			- Offline changes should automatically be uploaded to central world if user is trusted, however merge conflict resolution uploads should require confirmation from owner/admin by default.
		- Without this, offline play on a world will be limited to the world owner. 
			- Could also stop-gap an "offline token" that can be handed around among players that gives sole permission to play offline.
		- More importantly, allow bans to roll back griefers' actions with minimal impact to the work of others. 
			- eg: if you ban a griefer and rollback the past in game day, everyone loses progress. If you just roll back the griefer's behavior that risks breaking stuff (eg: they placed something that someone else placed stuff on) Merge conflict resolution gives a best of both worlds approach.
		- Not coming on release, but I do want to design with it in mind.
- Land claims? 
	- Unsure about this feature but it might be nice to have for some people. 
		- Off by default
	- Allow players to claim land.
		- prevents other players from editing claimed land
	- Scope creep: whitelists/ blacklists
	- Owner can still edit claimed land but will be informed that they are doing so.
### Resource Gathering

- Resources must be gathered by hand by aid of simple tools. 
	- Plant and cultivate trees and crops
		- requires seeds, water, and time.
		- hoe/dig earth, place seed, and wait.
		- process is sped up if watered regularly.
	- Chop trees with axes and saws for wood (two player saw minigame anyone?)
		- Trees must be felled, then cut up into carry-able pieces to take back home for crafting later.
	- Mine rocks with picks for stone and other minerals
		- similarly, rocks must be broken into carryable chunks with a pick then hauled home
	- Forage for food and other assorted items.
		- take a walk and gather up what you find along the way
	- Gather water
		- use a bucket to deliver water from a stream to your cabin
		- store it in a barrel to store it for longer
- Gathered Resources must be stored if not immediately used.
	- can just be littered on the ground, organized in piles or placed in specific storage structures
- Inventory limited to tools and small items.
	- Larger items must be carried
	- multiple people can carry items in order to move faster.
### Construction

- Players with appropriate permissions will be able to architecturally design buildings which will display as a incorporeal wireframe.
	- Object placement systems similar to no man's sky or satisfactory
	- Individual pieces can be placed onto this wireframe by anyone, building up the design piece by peice.
- Grid-based design.
	- Non-physics based.
		- Shit will float (I'm not that crazy)
	- Figure out some way to combine object colliders when placed together to avoid performance nightmares
	- Allow breaking off the grid for tryhards
		- Optional, try to design systems with space to add this later on though
	- Allow certain items to define custom subgrids that are prioritized over the world grid.
		- Enables storage mechanisms (eg: packed wooden plank storage)
	- Allow item-based grid focusing
		- eg: by default building items should be placed on the world grid, but decorations should be placed on a subgrid
		- Subgridded items should be children of the object with the grid
### Crafting

- Players can craft simple items into more complex ones.
	- Whoa mama wooden planks
		- [Holy fuck](https://www.youtube.com/watch?v=YrJas4_L4Wo)
	- Resources into tools
	- iron ore into nails [beautiful](https://en.wikipedia.org/wiki/File:Forging_a_nail._Vala%C5%A1sk%C3%A9_muzeum_v_p%C5%99%C3%ADrod%C4%9B.webm)
	- cooking food
	- making instruments and trinkets (Whittling minigame?)
- Generally, inputs -> minigame -> outputs
	- More people make minigames easier/faster
	- Broad strokes, spiritfarer crafiting, but higher fidelity
- Crafting types
	- Raw crafting
		- Similar to the minecraft crafting table in your personal inventory
		- useful for crafting small stuff as you go
	- Station crafting
		- Requires a workbench or an item of some sort.
		- More involved, & more difficult
		- Allows creation of more specialized items or just bulk versions of hand crafted options.

### Survival & Vibes

- Players will have a series of statistics that all contribute to a greater productivity stat. The more these statistics are looked after, the faster your movement speed, crafting speed, gathering speed etc...
	- Hunger- Eat food, bar goes up
	- Thirst- Drink water, bar goes up
	- Comfort- Increase by investing time and effort into improving quality of life
	- Inspiration- Increase by crafting things or taking a second to stop and smell the roses
- No big punishments for not maintaining stats, just lower productivity and some visual effects 
- day night cycle
	- Nightfall results in drastically reduced visibility and productivity
	- Encourages players to gather around a campfire in the night time
	- Alternatively, add a "campfire boost" that greatly increases productivity as a function of other players in the area when they visit a campfire.
- Most actions should be significantly easier with multiple people rather than just one. 
	- More than 2x easier; it should not be META for 2 people to do the same thing separately rather than work together on the same thing.

## Monetization

- Game will be free and open source (GPL probably, due to git dependency)
	- This game will be made for communities. Friends who want a place to hang out, and strangers looking for new friends alike. 
	- I'd like it to also be made by a community.
	- If you find value in the game, give back by working on the project yourself.
- Additionally, players can optionally pay for feature bounties to fund project development
	- eg: if you want fishing mechanics, you can put $20 on that bounty that will be paid to the developer who completes that feature.
	- Official bounty channels might additionally take a small cut off bounties to help fund the main project.
- Finally, donations will be accepted as well.

# Roadmap
## Tech Demo

- Host-able multiplayer
	- Bare minimum to make it work.
	- No perms, no online discoverability
- Tier 1 save system
	- built on git
	- should be hyperscaleable to handle the mountain of features that I'm going to throw at it down the line
- Resource gathering
	- just wood
- Crafting recipies
	- wood -> planks
	- planks -> stairs, flooring, walls, roof, doors.
- Construction system
	- Only implementing world grid, no subgrids
- Productivity stat
	- determined by Inspiration and campfire mechanics.
	- No Comfort, hunger or thirst yet

## Minimum Viable Product 

TBD
## 1.0.0 Release

TBD

