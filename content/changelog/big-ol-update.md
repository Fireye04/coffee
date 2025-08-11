---
date: "2025-08-10T17:38:26-07:00"
title: "Big Ol Update"
categories:
    - changelog
---

## Fixes

- Fixed an odd spacing bug on mobile
- Reorganized link order (blog over projects)
- Removes word count from projects for clutter cleanup

## Features

- Added TODO list [here](/about)! Automatically assembles itself from this repo's github issues via REST API call.
  - Also auto sorts itself from issue tags
- Split off neighborhood section from my about page. It now lives [here](/neighborhood)!
- Added full guestbook page so full guestbook history can be viewed. Does not yet support pagination, but it is planned.
- Added rainbow links because I can :3

## Backend Updates

- Guestbook entries are now length restricted; Name and website are max 50 characters and message is capped at 250.
- Guestbook now implements rate limits to observe backend good practice.
- Regular use of the backend should not be significantly impacted by the above safety measures, please inform me ASAP if they are causing problems.
- Newsletter now supports music! (I architectured that thing like a beast! Just had to tweak my database and frontend and it just worked!!)
