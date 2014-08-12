
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
Content-Length: 709
ETag: W/"2c5-3544042483"
set-cookie: igloo=s%3AC-Lkhru08MY9dnf1tq1-Ldf0bQ0XOdAn.3VRAQl69WxEGpRQ%2BwSBsqazvH5S7upquAWLZ%2BybDEJg; Path=/; Expires=Wed, 13 Aug 2014 10:07:54 GMT; HttpOnly
X-Response-Time: 85.02410ms
Date: Tue, 12 Aug 2014 10:07:54 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:34:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0563975450790895"
  },
  {
    "ts": "2014-08-12T09:36:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1049516864353846"
  },
  {
    "ts": "2014-08-12T09:40:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0435146496627843"
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
Content-Length: 43548
ETag: W/"aa1c-504963124"
set-cookie: igloo=s%3ASVA7grEVBWxfaxZ_2i8xPwRqXuCsz3OF.vCfpM2u63Gsm2aXcipIvqijoKpNbF1xdd1Bi3gtVoAw; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1590.94514ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T08:03:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1081331944208557"
  },
  {
    "ts": "2014-08-11T08:30:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.6236535129954819"
  },
  {
    "ts": "2014-08-11T08:36:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0058248097104295"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


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
set-cookie: igloo=s%3Aioz7cwfIx_eT6D8eqcGJsLBXyvdjCc9A.DpxUf5WnQHNBNeZcqhd%2FyKS%2FLJCC2ihAPwI%2FD3LHow4; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1538.80559ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
