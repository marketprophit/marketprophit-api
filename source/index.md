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
curl "http://localhost:3000/real-time/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2863
ETag: W/"b2f-3051647285"
Date: Sat, 14 Jun 2014 21:32:00 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-14T20:33:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.6137907984964768
  },
  {
    "ts": "2014-06-14T20:35:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.1017819120431372
  },
  {
    "ts": "2014-06-14T20:36:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.2320999942323557
  }
]
```

This endpoint retrieves realtime intraday data.

### HTTP Request

`GET http://localhost:3000/real-time/crowd-sentiment`

### Query Parameters

Parameter | Description
--------- | -----------
ticker | 3-4 character long alphanumeric stock ticker symbol



