---
title: "{{ replace .Name "-" " " | title }}"
author: Me
type: post
date:  {{ now.Format "2006-01-02" }}
# optional
lastmod: {{ now.Foramt "2006-01-02" }}
cover:
  src: feature.jpg
  caption: Title image caption *Markdown* **supported**
draft: true
categories:
  - A
  - B
  - C
tags:
  - Hugo
  - Game Development
  - Internet of Things (IoT)
  - Linux
description: Read this interesting post, it's totally worth it.
---

CONTENT

&nbsp;

Source: xyz
