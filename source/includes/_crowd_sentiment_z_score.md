
# Crowd Sentiment Z-Score


## Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4318
ETag: W/"10de-2795663840"
set-cookie: igloo=s%3AizKPbuTaK-RtVpakdcYrBuY_KEOzCQNX.BsJfhQgeQI%2FfP8ySnjvF8WPdp3GuL9x6LC6k5l%2BcQNQ; Path=/; Expires=Sat, 26 Jul 2014 16:58:06 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.0381929759844908"
  },
  {
    "ts": "2014-07-25T15:59:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.7620999821050081"
  },
  {
    "ts": "2014-07-25T16:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.4018408493151008"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 97133
ETag: W/"17b6d-2158680327"
set-cookie: igloo=s%3AD0GtUDdpFLX_Dwk8zbzbxPPXjqVpDiPs.jpQPIAeU7X7J4DE%2FuXTWYBI3YU1WWfV4aZ%2BG2gR1FZA; Path=/; Expires=Sat, 26 Jul 2014 16:57:56 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:56 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.2331002710244123"
  },
  {
    "ts": "2014-07-24T08:01:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.2890198739388908"
  },
  {
    "ts": "2014-07-24T08:03:00.000Z",
    "ticker": "AAPL",
    "z_score": "-1.3892588290627323"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AIYwRmRgoiI0z_AaX9wJWPvo-fh0EwpQt.CFaUoTmrQfA6YOKp3Ftvy308x9qNG8wGV8RicvG1Llk; Path=/; Expires=Sat, 26 Jul 2014 16:57:58 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
