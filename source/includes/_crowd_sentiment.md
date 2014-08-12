
# Crowd Sentiment


## Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 825
ETag: W/"339-18025870"
set-cookie: igloo=s%3AOiNvVIJJVKfIycMFtC75sk2xe2KFygKc.r7fw8GmmR3khxELHjwKOU35pT5OGhMjS7Gtoh%2B4MVCs; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 86.14622ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:30:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.0563975450790895"
  },
  {
    "ts": "2014-08-12T09:34:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.2663009179498587"
  },
  {
    "ts": "2014-08-12T09:36:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.0793594238824163"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 45391
ETag: W/"b14f-3565202276"
set-cookie: igloo=s%3AbAqo_PAeOplVQvidbXr2wYjeQP7uli9N.go%2BK6LKKtsqq%2Bez0jxwDt56YUsfSRFmxlZRtKOK4Zos; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 107.08076ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T08:03:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.6236535129954819"
  },
  {
    "ts": "2014-08-11T08:30:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.0058248097104295"
  },
  {
    "ts": "2014-08-11T08:36:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.6328037423764221"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AkDq_FnPGnWJpaRs-Bi1OTcGkrmr8TYi7.2Z6Z555LFrQEMG%2FK5Ud%2BkxdiUQRY9JYoXyOvDAvfFfA; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 132.11813ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
