
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A67TBqm0wkHNiCDbte4XYoeVdBKXG2WbL.tVqHEE0X7ixJIvi3FpTdlzXCe2fmpPik4hbfPYcA3eA; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 99.74597ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 30507
ETag: W/"772b-789534985"
set-cookie: igloo=s%3AkthkmF6IdZyuOyQRRYl5M-ELprmsAJI5.h4EgP5D0cmAP24wdKZJMn6bPJ4q2iNtSXHgP3EBQc6Y; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 606.78549ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T11:46:00.000Z",
    "ticker": "AAPL",
    "moving_average": "1.1558816701940617"
  },
  {
    "ts": "2014-08-11T11:48:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2255139748588991"
  },
  {
    "ts": "2014-08-11T11:59:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.3024422026143718"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


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
set-cookie: igloo=s%3ArlQYAA7V79RBxcPS8WeOgxgz8CK7oSAi.VioO8Bcm36qWO4Vs4lWdFmILbKnWrhJhM9%2FN28HudgM; Path=/; Expires=Wed, 13 Aug 2014 10:07:54 GMT; HttpOnly
X-Response-Time: 102.81947ms
Date: Tue, 12 Aug 2014 10:07:54 GMT
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
