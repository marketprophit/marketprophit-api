
# Market Prophit Sentiment Z-Score Moving Average


## Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 3627
ETag: W/"e2b-2746514977"
set-cookie: igloo=s%3AbTREj7cvulyiZaHnPrP0tscgErrJzYg_.qzN%2F4REGFAM23TTio4FEX%2BA%2B8ejgBjsAejE7tjUr3J4; Path=/; Expires=Wed, 09 Jul 2014 06:02:08 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:10 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-08T05:07:09.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0838003756891833
  },
  {
    "ts": "2014-07-08T05:07:28.000Z",
    "ticker": "AAPL",
    "signal_value": -0.2996763267093429
  },
  {
    "ts": "2014-07-08T05:08:09.000Z",
    "ticker": "AAPL",
    "signal_value": -0.2905735799714648
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 202988
ETag: W/"318ec-773548502"
set-cookie: igloo=s%3AMuZ3WWxbEy6U1Hi9wRJAVHzM98oxneC6.EcXYHeZuA0DYC3zpnX2knGUkVYYSA0SxJzyEqL%2Fx4yw; Path=/; Expires=Wed, 09 Jul 2014 06:02:08 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-07T08:00:31.000Z",
    "ticker": "AAPL",
    "signal_value": -0.037356084318076
  },
  {
    "ts": "2014-07-07T08:01:47.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0362396260090931
  },
  {
    "ts": "2014-07-07T08:02:00.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0779200104587312
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AKXXReu3takrhnHhmGnR_gPaVlrn014tE.d39D0mKi1IJeuXUV4BfK%2BintdOpl5jnzDFJNnGNPu9I; Path=/; Expires=Wed, 09 Jul 2014 06:02:08 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:11 GMT
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
