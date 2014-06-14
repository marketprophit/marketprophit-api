---
title: Market Prophit API

language_tabs:
  - shell

toc_footers:
  - <i>Developer Keys Coming Soon</i>

includes:
  - response_formats
  - errors

search: true
---

# Introduction

Welcome to the Market Prophit API!  You can use our API to access Market Prophit API endpoints, which can get information on crowd sentiment, market prophit sentiment, z-scores, moving averages, tweet volume, and/or tweet buzz in our database.

We have language bindings only in Shell right now.  You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Crowd Sentiment

## Get Crowd Sentiment

```shell
curl "<%= url %>/real-time/crowd-sentiment?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/crowd-sentiment?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/crowd-sentiment?ticker=' + ticker) %>
```

This endpoint retrieves realtime intraday data.

### HTTP Request

`GET <%= url %>/real-time/crowd-sentiment`

### Query Parameters

Parameter | Description
--------- | -----------
ticker | 3-4 character long alphanumeric stock ticker symbol



