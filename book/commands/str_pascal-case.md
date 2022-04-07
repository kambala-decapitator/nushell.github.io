---
title: str pascal-case
layout: command
version: 0.60.1
usage: |
  converts a string to PascalCase
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> str pascal-case ...rest```

## Parameters

 -  `...rest`: optionally convert text to PascalCase by column paths

## Examples

convert a string to PascalCase
```shell
> 'nu-shell' | str pascal-case
```

convert a string to PascalCase
```shell
> 'this-is-the-first-case' | str pascal-case
```

convert a string to PascalCase
```shell
> 'this_is_the_second_case' | str pascal-case
```

convert a column from a table to PascalCase
```shell
> [[lang, gems]; [nu_test, 100]] | str pascal-case lang
```