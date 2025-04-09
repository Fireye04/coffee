---
date: "2025-04-09T12:28:38-07:00"
draft: false
title: "Godot CLI Parser"
description: Godot addon that facilitates the creation of an end user command line interface for Godot applications.
project_status:
- in_progress
categories:
- project
project_tags:
- foss
- tool
params:
    toc: false
    original: "2025-04-09T12:28:38-07:00"
    tools: Godot
    builds: Linux, Windows, Mac
---

A simple little tool that parses user args and calls custom commands for godot projects. It uses the default CLI tool for godot and simply allows users to define commands that they want end users to have access to, and the plugin takes care of the CLI parsing. It's super simple at the moment, but I'm hoping to allow it to support more complex command arguments later on. Right now I just made it to allow myself to have a CLI entrypoint to DGS hosting because I don't want to boot up a game instance and just to run a server. Was initially created for [Godot-multiplayer](/projects/godot-multiplayer).

### Current Documents

- [Github Repo](https://github.com/Fireye04/godot-cli-parser)
