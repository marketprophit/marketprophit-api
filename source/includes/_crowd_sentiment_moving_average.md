
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4692
ETag: W/"1254-173775143"
set-cookie: igloo=s%3AUiUJXYFaYM-PLBL6hpqhcVwT6bZwhirs.93p6%2Byec%2Fvr4v7w5zd49H5vvPC32WTFtqWvYJ%2F1V4Wk; Path=/; Expires=Sat, 26 Jul 2014 16:58:01 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:01 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0227069672439365"
  },
  {
    "ts": "2014-07-25T15:59:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0322101906932733"
  },
  {
    "ts": "2014-07-25T16:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0200766331601287"
  }
]
```

Realtime moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 105756
ETag: W/"19d1c-2555125685"
set-cookie: igloo=s%3Ay3Q9SvJEQ4QfKp-a3JFDz8QcaLTAh76m.sagTLEEfkipoBEY%2Bczk7Ero4opRvx80mLpLASS5PGwI; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0399686846889795"
  },
  {
    "ts": "2014-07-24T08:01:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0310668258857226"
  },
  {
    "ts": "2014-07-24T08:03:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0275633260416567"
  }
]
```

Historical moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ArpELUOWOZmnhQqDGjEIc8_FEMxaECk53.55d%2F5NBcsdpS6za8r10yEN88rdZzm2dVdyVH57Iyn1k; Path=/; Expires=Sat, 26 Jul 2014 16:57:57 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
