
# Market Prophit Sentiment Z-Score


## Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 12286
ETag: W/"2ffe-3207098607"
set-cookie: igloo=s%3AnomKi-FYi6-ZfV2BnN0M52bc3btX9Yfs.olmxecCwCRlQTVAovbLG0v9aLWWuuZQ8FPASZDm8MQs; Path=/; Expires=Sat, 26 Jul 2014 16:57:58 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:28.000Z",
    "ticker": "AAPL",
    "z_score": "-2.3085548672937373"
  },
  {
    "ts": "2014-07-25T15:58:39.000Z",
    "ticker": "AAPL",
    "z_score": "-2.1740254714159781"
  },
  {
    "ts": "2014-07-25T15:58:50.000Z",
    "ticker": "AAPL",
    "z_score": "-1.8583012888056751"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 220017
ETag: W/"35b71-136852392"
set-cookie: igloo=s%3AJyMB8PBtyMByzo524elpjC3EvQ_2pME7.ogctEdWYMME3tU1g1bIvrCitGrVwjeJf6yB%2FZjUXJGs; Path=/; Expires=Sat, 26 Jul 2014 16:57:58 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:42.000Z",
    "ticker": "AAPL",
    "z_score": "-0.2322404846796725"
  },
  {
    "ts": "2014-07-24T08:01:19.000Z",
    "ticker": "AAPL",
    "z_score": "-1.5472092236959840"
  },
  {
    "ts": "2014-07-24T08:03:58.000Z",
    "ticker": "AAPL",
    "z_score": "2.2519885357574521"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A5Tc_jeOMFGfO3jHiNzzaslRnC8_7bUq1.7PKv16v48iJrhJEPkrkbVlk%2BaGQTeiQxG0i%2Bnw47WVU; Path=/; Expires=Sat, 26 Jul 2014 16:57:58 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
