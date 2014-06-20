
# Market Prophit Sentiment Z-Score Moving Average


## Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4869
ETag: W/"1305-3183917410"
Set-Cookie: igloo=s%3A5a2V38irpCzcb0ETUxOMLbuO.AMQoBc388LNhtZy0UfWhvUHiuRznQlVgOm%2FsO6Q%2FELs; Path=/; Expires=Sat, 21 Jun 2014 17:52:07 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:07 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T16:58:15.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2023158335097684
  },
  {
    "ts": "2014-06-20T16:58:17.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2032747902835425
  },
  {
    "ts": "2014-06-20T16:58:54.000Z",
    "ticker": "AAPL",
    "signal_value": 0.231983304253834
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
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 349123
ETag: W/"553c3-1911107334"
Set-Cookie: igloo=s%3AcnlxUxV3JxqhnnlTBqLbAemf.LrmjViDsXa8niQyiKlWRZLF7J3rCT3qHmVFEO%2F%2BBSPc; Path=/; Expires=Sat, 21 Jun 2014 17:52:32 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:32 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-13T21:52:06.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0213048049812653
  },
  {
    "ts": "2014-06-13T21:53:42.000Z",
    "ticker": "AAPL",
    "signal_value": -0.1007951003547617
  },
  {
    "ts": "2014-06-13T21:54:25.000Z",
    "ticker": "AAPL",
    "signal_value": 0.0228590125328268
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
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 345
ETag: W/"159-1909259470"
Set-Cookie: igloo=s%3Ak6LJxz1Rr29XhR6E4kzZibf9.JA52QiIr5Litg5GCEXxvEyxV42AvyZ40MuH%2BxRGS1HI; Path=/; Expires=Sat, 21 Jun 2014 17:52:10 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:10 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0411697014125595
  },
  {
    "ts": "2014-06-17T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0317472777801269
  },
  {
    "ts": "2014-06-18T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0255445882252359
  }
]
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
