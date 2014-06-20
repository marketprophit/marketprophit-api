
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3491
ETag: W/"da3-3018583834"
set-cookie: igloo=s%3Ap3LKUMAG7KunQBz5AYBT-7KJMWMqOZYi.nWa19fxlYCz%2Bt29nTIswx9WCXnZk1%2F%2B7mbc9fxQA%2F48; Path=/; Expires=Sat, 21 Jun 2014 21:31:36 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:36 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T20:33:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.4648223986509972
  },
  {
    "ts": "2014-06-20T20:34:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.1045909036267269
  },
  {
    "ts": "2014-06-20T20:36:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0412393088152574
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 57461
ETag: W/"e075-3925032003"
set-cookie: igloo=s%3AH3wNzmUK9iZjr9wo1rq2-ptGI1mWXMiT.%2FsaDIaRvkjQhSU%2FNH7tYJACRKTeBnOVF8Scva3y24ww; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-19T08:02:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.1169283165310861
  },
  {
    "ts": "2014-06-19T08:05:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.2735787703082803
  },
  {
    "ts": "2014-06-19T08:11:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.2626316532746197
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ARoBfpW0zC1Gga0KYg5Nt-0oqN3Nc1vCP.hwmZScOanm7lp1C6VxcIg2975Gt4BnU73rCuTXNeETo; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
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
