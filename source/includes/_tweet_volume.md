
# Tweet Volume


## Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 631
ETag: W/"277-34249800"
set-cookie: igloo=s%3AnzHyxrpuc-cAW7Qdr8h5GIAdWPAFuHHt.b00PBhE4p7lQfBDopuUK6FG01sCA6Gx2QvLAbiLwq5c; Path=/; Expires=Wed, 13 Aug 2014 21:38:05 GMT; HttpOnly
X-Response-Time: 23414.95495ms
Date: Tue, 12 Aug 2014 21:38:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-08-12T20:43:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 631
ETag: W/"277-1857318721"
set-cookie: igloo=s%3AAQNyqOr7DYvrYbqMFQ3fgb0apCYlqSuJ.09vwpYezlcyRH943BVpdMLR%2F3KKeg%2BCs3zTKMmouL3w; Path=/; Expires=Wed, 13 Aug 2014 21:39:07 GMT; HttpOnly
X-Response-Time: 89227.76448ms
Date: Tue, 12 Aug 2014 21:39:07 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:02:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2013-08-11T00:04:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2013-08-11T00:06:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 661
ETag: W/"295-308048723"
set-cookie: igloo=s%3AjxMjrrHXko_sOMA4dtkUMfEonf7gw77d.n5OrYgqcac2Shd8GHiLltGjFsiHT9iE2LU2nc5T6phQ; Path=/; Expires=Wed, 13 Aug 2014 21:38:05 GMT; HttpOnly
X-Response-Time: 23469.32991ms
Date: Tue, 12 Aug 2014 21:38:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "volume": "1300"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "volume": "4019"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "volume": "3246"
  }
]
```

Daily tweet volume historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
