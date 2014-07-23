
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4577
ETag: W/"11e1-1045729136"
set-cookie: igloo=s%3AwpXOfu_jEfEwaY4E-c2Ae0BvgpWuORrr.eDOdT9ClCtHkfS7B1n9nCS6dNtZq34n3RLPaCU%2BLcB4; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:30:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0793820892679060"
  },
  {
    "ts": "2014-07-23T20:31:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0736602258918576"
  },
  {
    "ts": "2014-07-23T20:32:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0701047191261842"
  }
]
```

Realtime moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 98288
ETag: W/"17ff0-2389856666"
set-cookie: igloo=s%3Afb4zKm2k09b5ppkkAV04wHIeGe1FvC7f.z4Z7jOC058SjoHvbTHe%2BVINbZ7HLAPdgOO4hve3A6dc; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:01:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1888876267067584"
  },
  {
    "ts": "2014-07-22T08:02:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2025758164667849"
  },
  {
    "ts": "2014-07-22T08:05:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1818539527041055"
  }
]
```

Historical moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AItkU_o2Kj--RPYgc2tPF9Eh4WKG7baWA.8%2B6LhlRb9zAarXH3LNEhbEcwc3%2F51%2Bi%2FFVCG%2Bv7KxMw; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
