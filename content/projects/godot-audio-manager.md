---
date: "2025-04-09T12:28:22-07:00"
draft: false
title: "Godot Audio Manager"
description: Fork of Godot Dialogue Manager with a focus on support for line-by-line voice over
project_status:
- in_progress
categories:
- project
project_tags:
- foss
- tool
params:
    toc: false
    original: "2025-04-09T12:28:22-07:00"
    tools: Godot
    builds: Linux, Windows, Mac
---

[Godot Audio Manager](https://github.com/Fireye04/godot_audio_manager) is a fork of Nathan Hoad's [Godot Dialogue Manager](https://github.com/nathanhoad/godot_dialogue_manager) that intends to improve the plugin's audio pipeline.

I really love Godot dialogue manager, but it fell flat when trying to voice act for individual lines of dialogue despite having a pretty straightforward compiler pipeline for data transfer between dialogue files and the game's runtime. So I made it myself. Now I can drag an audio file that will be transferred to the dialogue bubble at runtime when the line is triggered. There are a few kinks to work out, and I haven't been able to locate them all through top-level testing, so I'm looking to integrate VA into My Ludum Dare 57 entry, [Nike's House](/projects/nikes-house) as a way to take the thing for a trial run.

### Current Documents

- [Github Repo](https://github.com/Fireye04/godot_audio_manager)
