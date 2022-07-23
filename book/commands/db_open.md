---
title: db open
version: 0.64.0
usage: |
  Open a database
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> db open (query)```

## Parameters

 -  `query`: SQLite file to be opened

## Examples

Open a sqlite file
```shell
> db open file.sqlite
```