
# Market Prophit Sentiment


## Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 3627
ETag: W/"e2b-2746514977"
set-cookie: igloo=s%3A7xFJACrvSXxoDpNQ7-MMACiHd4FhIOhf.SONo603ZJ53XoFjCqfLFLxxwifzMWsi7raAhOEbFIYk; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:09 GMT
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

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 202988
ETag: W/"318ec-773548502"
set-cookie: igloo=s%3A6vyPdMYJ10ri_al6M1becbySUH24yNfU.GpJ%2FrzAJK%2FGsyUbIiqPfqgz%2F7OvqTmwsD%2BIFt1Glhjg; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:20 GMT
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

`GET https://open.marketprophit.com/historical/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AFClZwW4y2P-UZUBEDgKLST9YQd4bVa2I.tSNCcVYIHft%2FHL2AtL2%2Bmbv4TraaJFVFRmOv29xDeKY; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:08 GMT
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
