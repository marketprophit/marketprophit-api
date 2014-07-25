
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
Content-Length: 13387
ETag: W/"344b-2253253502"
set-cookie: igloo=s%3AHYqekU6s1h6gGFj_vZ0P2r7cYv8KpZYD.RuwvxTLIExlAZKHPDKc05ZG9i65WuRStnIzoG%2BzJj70; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:28.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0062994305048289"
  },
  {
    "ts": "2014-07-25T15:58:39.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0023784965367759"
  },
  {
    "ts": "2014-07-25T15:58:50.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0116724101976593"
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
Content-Length: 241759
ETag: W/"3b05f-520284033"
set-cookie: igloo=s%3ASG9bOvnwBJytLNJs-40i9qLX_R9ErizI.m2IoZC8FFfzPgRlU3Zgq1VX97%2Fzied8oPo1SP7XEKZA; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:42.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0400040042738742"
  },
  {
    "ts": "2014-07-24T08:01:19.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0393871011527333"
  },
  {
    "ts": "2014-07-24T08:03:58.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0318148534311287"
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
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AlrVo4OWXZiXGZsB5k5rEOG2tP73rCA4P.1EB7WoCgzaqM75140BhO4t5orGD7l%2F1%2F%2FzVb7svCwF0; Path=/; Expires=Sat, 26 Jul 2014 16:58:00 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:00 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
