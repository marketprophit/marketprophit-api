
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl "http://localhost:3000/real-time/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2147
ETag: W/"863-1914113589"
Date: Tue, 17 Jun 2014 00:07:02 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T23:08:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.8149697415548554
  },
  {
    "ts": "2014-06-16T23:09:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.2057233327523651
  },
  {
    "ts": "2014-06-16T23:11:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.2654409791205912
  }
]
```

Realtime moving average intraday data

### HTTP Request

`GET http://localhost:3000/real-time/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl "http://localhost:3000/historical/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 454745
ETag: W/"6f059-1919415900"
Date: Tue, 17 Jun 2014 00:07:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-10T04:06:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.0547738272972733
  },
  {
    "ts": "2014-06-10T04:07:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.3146097069007635
  },
  {
    "ts": "2014-06-10T04:09:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.4427044086014045
  }
]
```

Historical moving average intraday data

### HTTP Request

`GET http://localhost:3000/historical/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl "http://localhost:3000/historical/daily-crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 269
ETag: W/"10d-2604592247"
Date: Tue, 17 Jun 2014 00:07:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-11T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.0146300328022747
  },
  {
    "ts": "2014-06-12T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0009795515308338
  },
  {
    "ts": "2014-06-13T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0415217342487728
  }
]
```

Daily crowd sentiment moving average historical data

### HTTP Request

`GET http://localhost:3000/historical/daily-crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
