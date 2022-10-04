---
title: open-df
version: 0.69.1
usage: |
  Opens csv, json, arrow, or parquet file to create dataframe
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> open-df (file) --lazy --type --delimiter --no-header --infer-schema --skip-rows --columns```

## Parameters

 -  `file`: file path to load values from
 -  `--lazy`: creates a lazy dataframe
 -  `--type {string}`: File type: csv, tsv, json, parquet, arrow. If omitted, derive from file extension
 -  `--delimiter {string}`: file delimiter character. CSV file
 -  `--no-header`: Indicates if file doesn't have header. CSV file
 -  `--infer-schema {number}`: Number of rows to infer the schema of the file. CSV file
 -  `--skip-rows {number}`: Number of rows to skip from file. CSV file
 -  `--columns {list<string>}`: Columns to be selected from csv file. CSV and Parquet file

## Examples

Takes a file name and creates a dataframe
```shell
> open test.csv
```