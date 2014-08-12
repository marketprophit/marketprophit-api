
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
Content-Length: 624
ETag: W/"270-1431827967"
set-cookie: igloo=s%3A3bRn_OtU6ejh3p4XCBiEdsV84_NfBwcr.M%2FRoNMuS3DKHpUpSo5%2B1vMbSWocQhhw%2FpIV3wo2f3no; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 87.97006ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:51:43.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.3259066607095499"
  },
  {
    "ts": "2014-08-12T10:06:16.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.3591272542831563"
  },
  {
    "ts": "2014-08-12T10:06:32.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.3024811287298726"
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
Content-Length: 42226
ETag: W/"a4f2-3832764985"
set-cookie: igloo=s%3AX0A0PEhwCChSaMZe1byo08zPlCm4wjze.CPqpHtxoJ5sw20rMNrct95Sr6o6uBXxbHgo2WV7g7F8; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 150.63365ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T09:37:04.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0517360936839325"
  },
  {
    "ts": "2014-08-11T09:40:02.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0517360936839325"
  },
  {
    "ts": "2014-08-11T09:51:08.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0495931163969192"
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
set-cookie: igloo=s%3AK6Wi6Of-PdYLKU88Cpr1BKbi3fj2y1ye.mDwRN3hkR0VKK8%2FdnZIXoucXBSeSqOBQ5KgcGmVUxb8; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1482.92940ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
