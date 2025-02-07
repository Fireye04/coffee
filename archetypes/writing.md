---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
description: default
categories: 
- writing
params:
    toc: false
    original: '{{ .Date }}' 
---
