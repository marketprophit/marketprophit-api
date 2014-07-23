
# Tweet Buzz


## Tweet Buzz

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4057
ETag: W/"fd9-3740951416"
set-cookie: igloo=s%3AcRq20bPBa1mr9VaWKOjdsDVsVE8MMOGT.TlvjmHNJhE6%2FYNoAvQqhqYjhMB%2FsT4fCngopAKYzHBU; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:30:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3985507246376801"
  },
  {
    "ts": "2014-07-23T20:31:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.7971014492753602"
  },
  {
    "ts": "2014-07-23T20:32:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.9927536231884004"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Buzz

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 86992
ETag: W/"153d0-2007604489"
set-cookie: igloo=s%3AloWCUo2IkzwXxi2OgF4nO32qjMrFNVuc.yPCC3003ZOuQJS%2BJ%2Fxq5H%2BGU%2FYO9hIwbH3fNGiZOojM; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:01:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.8755109109802572"
  },
  {
    "ts": "2014-07-22T08:02:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.8755109109802572"
  },
  {
    "ts": "2014-07-22T08:05:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.4377554554901286"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Buzz

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AqxRAjOLLEAb8rp_T8NqC4-R2By-N4r5w.HCqJ9a3j%2FpzTyUEA3VU0bg1uzFxBb9aKq71xvvpNk%2FY; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily tweet buzz historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
