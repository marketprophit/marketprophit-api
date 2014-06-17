
# Market Prophit Sentiment


## Market Prophit Sentiment

```shell
curl "http://localhost:3000/real-time/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1680
ETag: W/"690-3934370916"
Date: Tue, 17 Jun 2014 01:04:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-17T00:07:38.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2756518838801662
  },
  {
    "ts": "2014-06-17T00:08:02.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2690865137142361
  },
  {
    "ts": "2014-06-17T00:09:36.000Z",
    "ticker": "AAPL",
    "signal_value": 0.6026579732386114
  }
]
```

Realtime intraday data

### HTTP Request

`GET http://localhost:3000/real-time/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment

```shell
curl "http://localhost:3000/historical/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 552759
ETag: W/"86f37-3313305575"
Date: Tue, 17 Jun 2014 01:04:24 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-10T05:04:19.000Z",
    "ticker": "AAPL",
    "signal_value": 0.092394902588862
  },
  {
    "ts": "2014-06-10T05:06:43.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2065984839074622
  },
  {
    "ts": "2014-06-10T05:07:21.000Z",
    "ticker": "AAPL",
    "signal_value": 0.222871379940262
  }
]
```

Historical intraday data

### HTTP Request

`GET http://localhost:3000/historical/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment

```shell
curl "http://localhost:3000/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 259
ETag: W/"103-1141724048"
Date: Tue, 17 Jun 2014 01:04:18 GMT
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

`GET http://localhost:3000/historical/daily-market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
