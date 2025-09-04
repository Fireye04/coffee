---
date: '2025-09-03T12:26:12-07:00'
draft: false
title: 'FEDERATE GIT!!!'
description: My argument for a federated git.
categories:
- blog
blog-tags:
- default
params:
    toc: true 
    original: '2025-09-03T12:26:12-07:00' 
---

## Background

In the modern day, git servers are a must. Even on the smallest of solo projects, one can greatly benefit by using a git server to host it, collaborative projects are nigh impossible without git servers, and more importantly, git servers are the backbone of the vast majority of open source development. And among git servers, github is by far the most prominent, which is moderately saddening given that the main location in which most open source development occurs is not open source itself. This isn't without reason, though. Free hosting, baked in support for issues, forks, pull requests, and anything else one might need to work in a git repository, and even free and easy access to github actions which are unfathomably powerful CI-CD tools. And at the same time, willingly or not, all the code hosted on it is also almost certaintly being used as free real estate for the microsoft AI teams to train off. It's been pushing copilot nonstop, and will likely only get worse from here. 

Self hosted git repos like sourcehut, gitlab, gittea, and many others serve as a great alternative, given you have the skills, know how, and/or resources to run one up. However they do have their downsides, as I'll get into later on.

## The Problem!

So what does one do when they want to switch off github to an alternative? Well you find and host a new git server! It's just that easy! Jokes aside, if you've used github at all, setting up a new git server and migrating is nontrivial on its own. However, that's not all. Like it or not, everything else will still be on github. So now you'll still have to use github to contribute to most other projects, but now your own projects will suffer from the reduced traffic of not being on github due to its sheer size. Some choose to mirror their repos, which tries to reach a best of both worlds approach, but suffers from the partitioning of the community, and more often than not the mirror becomes higher traffic than the actual repo! 

All this to say, you have been for all practical purposes cut off from the vast majority of the open source community. This, needless to say, sucks. Self hosing should certaintly provide more freedom, but also MORE connection to the community, not less. Open source is made and broken by its community, and this problem desperately needs some sort of solution, as looking at, well... microsoft, github will continue to enshittify, and if we don't solve this problem, we risk either being trapped on github or losing a whole bunch of traffic to open source communities. 

## The Solution

**We need global git federation.** 

I'm propoing Mastodon's ActivityPub but for git development. On Mastodon you can live on server A but still get information from server B. We need this for git servers. I like to joke that git is my social media, but in this sense it really needs to be copying off social media's homework. I've said this already but open source development *lives off its community*. Thus, we need to be pushing to expand these communities, making it easier to get involved in open source and reducing barriers to entry. As one does more open source work over git, one naturally gravitates towards wanting their own git server, as it's freer and it gives the user back more control of their software. I completely agree that more people should be self hosting, which is why this means so much to me. We NEED to make this a no-brainer decision, but as it stands, all it really serves to do is separate an individual from the very communities that would otherwise help them. We need to **FEDERATE GIT!**

I found a few tidbits on gittea potentially implementing something along these lines, but everything I found dried up around 2022, and even if gittea, or any other git server provider for the matter, had implemented a perfect  federation model, the issue of cross-provider federation persists until a critical mass of other providers also subscribe to the same federation protocol. As nice as it would be, one provider having federation does not fundimentally solve this problem. 

The onus, instead, should fall directly on git. Git itself needs to define a server federation protocol, to clear up all confusion among the server providers and push all of them to adopt it so that they can claim to support the full git protocol, federation and all. The added benefit of course is that there's no toiling over which protocol to use or how to implement it, there's only whether or not they can implement the official one, which makes actual implementation much more straightforward.

## What should it look like?

Actual implementation should certaintly be left up to the designers, but from a user perspective here's what I would like to see:

I run up a git server. I can define the visibility of all my repos, ranging from private to local to global. My global projects show up on github and other git servers, and I can search others' global projects in this way as well. I can create issues, comments, and pull requests on others' servers and vice versa. Forking a repo on another server creates a fork on my server. Critically, If I have a gittea server (host) and someone on github (remote) leaves an issue, the issue should be created on my server! There should be no duplication, and the host server should have full authority. The remote server's job is to display my repo to users and make API calls to my server when an action is performed on the remote. Rather personally, I'd also want a global subscriptions/watch/star list, so that I can watch or star repos across servers and get updates on new releases, comments, issues, PRs, and the like, regardless of server. Heck, built in RSS functionality could handle that last one just fine. (I know that a lot, if not all, git servers support RSS, however I'd like to see a first party reader as well so that you don't need to be an RSS nerd to use it. Eg: Click the star button, and your account on your home server is automatically subscribed to that repo's update feed.)

## In summary

We should be splitting off github more but the communal nature of open source is harmed by this fracturing of the community, as beneficial as self hosting may be. We need a way to preserve that community in the process. We need towork to make that happen. 

Thank you for reading and go forth and spread the good word of git federation!
