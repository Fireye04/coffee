---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
description: default
categories: 
- writing
params:
    toc: false
    update: "0001-01-01" 
---
