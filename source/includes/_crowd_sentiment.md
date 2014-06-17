
# Crowd Sentiment


## Crowd Sentiment

```shell
curl "http://localhost:3000/real-time/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2681
ETag: W/"a79-3003475523"
Date: Tue, 17 Jun 2014 01:04:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-17T00:07:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.7478053746695877
  },
  {
    "ts": "2014-06-17T00:08:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.1728300447416489
  },
  {
    "ts": "2014-06-17T00:09:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.5574118689786793
  }
]
```

Realtime intraday data

### HTTP Request

`GET http://localhost:3000/real-time/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl "http://localhost:3000/historical/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 454649
ETag: W/"6eff9-728414898"
Date: Tue, 17 Jun 2014 01:04:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-10T05:06:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.0926739636427333
  },
  {
    "ts": "2014-06-10T05:07:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.68822041321747
  },
  {
    "ts": "2014-06-10T05:08:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.1052495304217032
  }
]
```

Historical intraday data

### HTTP Request

`GET http://localhost:3000/historical/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl "http://localhost:3000/historical/daily-crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 269
ETag: W/"10d-2604592247"
Date: Tue, 17 Jun 2014 01:04:13 GMT
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

Daily crowd sentiment historical data

### HTTP Request

`GET http://localhost:3000/historical/daily-crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
