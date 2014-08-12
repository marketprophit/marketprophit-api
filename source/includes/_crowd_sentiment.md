
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
Content-Length: 913
ETag: W/"391-3060856762"
set-cookie: igloo=s%3Afj5AKmWm8AzpPg6Q9Bb14TJeQRE44upL.T1UjqdZgHkivydkw1TK%2FJ6LHCSznA7KpUBQMlzPzbBQ; Path=/; Expires=Wed, 13 Aug 2014 21:37:30 GMT; HttpOnly
X-Response-Time: 153.75379ms
Date: Tue, 12 Aug 2014 21:37:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:38:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.3671460543121055"
  },
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.1230545641077323"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.1019677038794017"
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
Content-Length: 915
ETag: W/"393-1015435600"
set-cookie: igloo=s%3AFEXNYWO0rjnFuF5Pu34AZweU2kxEJXCD.Z6yfIb5KpOZ%2BNYwtkCmyD%2FTBOYelO2JD8FyGqcPdF4E; Path=/; Expires=Wed, 13 Aug 2014 21:37:53 GMT; HttpOnly
X-Response-Time: 23069.99628ms
Date: Tue, 12 Aug 2014 21:37:53 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:02:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.0049161001114379"
  },
  {
    "ts": "2013-08-11T00:04:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "-0.3131502832203044"
  },
  {
    "ts": "2013-08-11T00:06:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.2879709290970227"
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
Content-Length: 912
ETag: W/"390-748561587"
set-cookie: igloo=s%3AWbKCaYTMska6XSxehHScRT7iTq3X1jCL.yD1UJ1IvMqJOrUK7MLm8vemzq6Fz8Q9YGL1vQG5tc84; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7458.64649ms
Date: Tue, 12 Aug 2014 21:37:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.0655677621539281"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.0839128251237732"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": "0.0380635920137041"
  }
]
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
