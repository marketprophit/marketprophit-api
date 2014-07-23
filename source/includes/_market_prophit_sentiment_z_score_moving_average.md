
# Market Prophit Sentiment Z-Score Moving Average


## Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1039
ETag: W/"40f-3483225430"
set-cookie: igloo=s%3A3JHEgwH2xK4SJN76bW9CR8YGlrhXwGM0.K24ThPHKQjeDgSjdmjd6m8h12biXuBCQbL4Bcara9Fg; Path=/; Expires=Thu, 24 Jul 2014 07:45:13 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:13 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T07:06:52.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0206048606067477"
  },
  {
    "ts": "2014-07-23T07:09:32.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.1231130270988458"
  },
  {
    "ts": "2014-07-23T07:09:50.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0995641227974565"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 185375
ETag: W/"2d41f-2057771493"
set-cookie: igloo=s%3AB5c1FIcMgWlCD_R7lnsIcpL0c3rJ0yXg.fGLdLkFD2IohG2PVrIlUZpimwq18Svtn4ynVJ1vm5og; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
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

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A3n92n1tl83wNIhAdUCOrCyajJcon2Sn0.Iy7LKqm4AFvgySGU82zy0y%2BtyZU2BsqLOhBMTXy79lM; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
