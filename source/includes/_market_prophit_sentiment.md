
# Market Prophit Sentiment


## Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 11477
ETag: W/"2cd5-2034597316"
set-cookie: igloo=s%3Awu9ZbfIH2WlLLWC1IVSQIPtWvr6lyoOI.Qx4ix%2FNSr4Z3OQ3m6%2FV%2FyoMcLWuzbk2V%2Bd%2F4%2FXFlvDI; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:29:35.000Z",
    "ticker": "AAPL",
    "signal_value": "0.2108355391630862"
  },
  {
    "ts": "2014-07-23T20:29:41.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1765603640728640"
  },
  {
    "ts": "2014-07-23T20:30:03.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1694914239749068"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 185636
ETag: W/"2d524-1847507514"
set-cookie: igloo=s%3AALSD2MERD4T3RyxytXJxJteCuMNGbz3B.lWBT4grWhpd6w4Mkleyilka3nzl2YYDOihP2wUGk6Ks; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:06:06.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1547941407480791"
  },
  {
    "ts": "2014-07-22T08:08:16.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1447193382248778"
  },
  {
    "ts": "2014-07-22T08:08:47.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1496200105908318"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Aoti9Hd0MWKmHxMx8NA1D6o7iZEMjnN3H.Nbex6390oF5jlA%2By1bG%2BI4h0B2cvdlpM0lgCGXUNWvM; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
