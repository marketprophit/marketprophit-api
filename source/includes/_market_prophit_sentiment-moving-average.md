
# Market Prophit Sentiment Moving Average


## Market Prophit Sentiment Moving Average

```shell
curl "http://localhost:3000/real-time/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1350
ETag: W/"546-3662688451"
Date: Tue, 17 Jun 2014 00:03:40 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T23:09:04.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0457700325406263
  },
  {
    "ts": "2014-06-16T23:11:54.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0096458811042668
  },
  {
    "ts": "2014-06-16T23:20:13.000Z",
    "ticker": "AAPL",
    "signal_value": 0.3084449874675196
  }
]
```

Realtime intraday data

### HTTP Request

`GET http://localhost:3000/real-time/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Moving Average

```shell
curl "http://localhost:3000/historical/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 552427
ETag: W/"86deb-2899773075"
Date: Tue, 17 Jun 2014 00:03:49 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-10T04:10:11.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0528645140580159
  },
  {
    "ts": "2014-06-10T04:10:19.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0469021204147224
  },
  {
    "ts": "2014-06-10T04:10:44.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0275175807742509
  }
]
```

Historical intraday data

### HTTP Request

`GET http://localhost:3000/historical/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Moving Average

```shell
curl "http://localhost:3000/historical/daily-market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 259
ETag: W/"103-1141724048"
Date: Tue, 17 Jun 2014 00:03:41 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-11T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0356911343533835
  },
  {
    "ts": "2014-06-12T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0471416486440535
  },
  {
    "ts": "2014-06-13T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0489442351852518
  }
]
```

Daily market prophit sentiment historical data

### HTTP Request

`GET http://localhost:3000/historical/daily-market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
