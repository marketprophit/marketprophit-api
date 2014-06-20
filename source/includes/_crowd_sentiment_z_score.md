
# Crowd Sentiment Z-Score


## Crowd Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3491
ETag: W/"da3-3018583834"
set-cookie: igloo=s%3AD_tlBfZC8FXtOkhyDx9tIWShV5gVu6Gp.u3z5eCaE4O4qqOlu6Gb1ZnbV7ORSDSZ%2F2A0iGDs%2BDWQ; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
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

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 57461
ETag: W/"e075-3925032003"
set-cookie: igloo=s%3AagLbZYE7bsuyINtmIIwPRd7aNX4eDPfu.R1nq22hpPB8hMY%2F0VVeuTjpURedDzsg%2BeLFvBzy3cqU; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3APTBCK3ZnDmrAnm6MBPQyao7nIC8-6_--.TGOEA9kC4dNTYE92RrFx8qT5l0sGUxZ8o%2F3W1Cln940; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
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
