
# Market Prophit Sentiment Moving Average


## Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 890
ETag: W/"37a-3487263693"
set-cookie: igloo=s%3A48b4MFGLRHu2mHL60mHKSw2QV5k9M4cH.usSXpHsXqObu9AfWz20c9DO%2Ff0tnjCy%2F1SShlbT98yo; Path=/; Expires=Wed, 13 Aug 2014 21:38:06 GMT; HttpOnly
X-Response-Time: 28466.26857ms
Date: Tue, 12 Aug 2014 21:38:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:17.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0343214563403923"
  },
  {
    "ts": "2014-08-12T20:40:59.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0018105636243144"
  },
  {
    "ts": "2014-08-12T20:43:09.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0274258709291332"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 885
ETag: W/"375-4254437911"
set-cookie: igloo=s%3AXeHNYA92HaPSX5WXvCyl3vMnebfrLXaJ.Rs0lfaE2wuJt7uglBNVX2uJe%2B5%2BZKTQEF024QqSpTJ0; Path=/; Expires=Wed, 13 Aug 2014 21:38:42 GMT; HttpOnly
X-Response-Time: 58064.30439ms
Date: Tue, 12 Aug 2014 21:38:42 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-22T14:32:40.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0108788752572931"
  },
  {
    "ts": "2013-11-22T14:33:11.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0108185709924262"
  },
  {
    "ts": "2013-11-22T14:34:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0065839779316676"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 881
ETag: W/"371-546909383"
set-cookie: igloo=s%3AyXwG0pn0z8vN6qPixLcRE8TJqnxD2pZy.fmq6LVj3N4z56ml56jRIRps121UbQUyKw%2FXBFkLQlf4; Path=/; Expires=Wed, 13 Aug 2014 21:39:01 GMT; HttpOnly
X-Response-Time: 76726.16608ms
Date: Tue, 12 Aug 2014 21:39:01 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0352639338098013"
  },
  {
    "ts": "2013-11-27T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0393013576390539"
  },
  {
    "ts": "2013-11-29T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0469789239912700"
  }
]
```

Daily market prophit sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
