
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
Content-Length: 697
ETag: W/"2b9-2599664480"
set-cookie: igloo=s%3A_7OitIyoqHRi2pNytBrlYpcPtcToBa4f.z76SHC4r2wb0zi6xlBnezPgyTUov4oX%2F8jwYMDD0RZQ; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1535.40598ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:51:42.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.3259066607095499"
  },
  {
    "ts": "2014-08-12T09:51:43.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.3923478478567627"
  },
  {
    "ts": "2014-08-12T10:06:16.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.1891888776233052"
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
Content-Length: 41804
ETag: W/"a34c-1693176939"
set-cookie: igloo=s%3AxdtEuhcJvdzrJ5hrYy27hFvvp1-wsI_P.rfyRhDcU98u4hcteThl85mKlevgS4OQllnhDxzO2lSI; Path=/; Expires=Wed, 13 Aug 2014 10:07:56 GMT; HttpOnly
X-Response-Time: 875.09916ms
Date: Tue, 12 Aug 2014 10:07:56 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T09:37:03.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0517360936839325"
  },
  {
    "ts": "2014-08-11T09:37:04.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0517360936839325"
  },
  {
    "ts": "2014-08-11T09:40:02.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0453071618228927"
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
set-cookie: igloo=s%3AadoJrz2Jtc7pyFXFW1i7zh2GF4sM8P7w.KK7dcVICla5LJInhdCISMRnfdIAO5Iev9pEoq1x%2F%2F90; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 124.17597ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
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
