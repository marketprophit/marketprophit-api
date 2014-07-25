
# Crowd Sentiment Z-Score Moving Average


## Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4779
ETag: W/"12ab-761816939"
set-cookie: igloo=s%3AU_ijabAA-YzIBnNhdhKwmkmnfzzwMeVK.H%2FzyUYYRlN%2BibLp2%2Fcd1mMLP9EyvST5ixPJsg1OHXYY; Path=/; Expires=Sat, 26 Jul 2014 16:57:58 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:59:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0422220711580377"
  },
  {
    "ts": "2014-07-25T16:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0269749508619967"
  },
  {
    "ts": "2014-07-25T16:01:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0793082590671081"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 105490
ETag: W/"19c12-3351696619"
set-cookie: igloo=s%3AjvWvZ8PVDH2vs2zXHmzWIObh3dXyoWmk.PhLuUBQN09BK77HA6GKYttCNPJApokR5qBaWJLlfRK4; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0636228582562541"
  },
  {
    "ts": "2014-07-24T08:01:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0171353596011604"
  },
  {
    "ts": "2014-07-24T08:03:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0043212447094358"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AebyEud-p2zaRMXKuMmGaqaQrZolvqD50.t2g8XZ1vMGPlHveUU7tCBiFsT0ZcLQhL77RIh86r1IM; Path=/; Expires=Sat, 26 Jul 2014 16:58:00 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:00 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
