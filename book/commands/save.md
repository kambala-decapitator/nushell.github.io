---
title: save
categories: |
  filesystem
version: 0.70.0
filesystem: |
  Save a file.
usage: |
  Save a file.
---

# <code>{{ $frontmatter.title }}</code> for filesystem

<div class='command-title'>{{ $frontmatter.filesystem }}</div>

## Signature

```> save (filename) --raw --append```

## Parameters

 -  `filename`: the filename to use
 -  `--raw`: save file as raw binary
 -  `--append`: append input to the end of the file

## Examples

Save a string to foo.txt in the current directory
```shell
> echo 'save me' | save foo.txt
```

Append a string to the end of foo.txt
```shell
> echo 'append me' | save --append foo.txt
```

Save a record to foo.json in the current directory
```shell
> echo { a: 1, b: 2 } | save foo.json
```
