---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '{{ .Date }}' 
---
