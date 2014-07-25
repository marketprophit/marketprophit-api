
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
Content-Length: 3341
ETag: W/"d0d-2378665586"
set-cookie: igloo=s%3ASjxKuoTE1gLESFty6bdacBAxWkl6BPuF.qLdHBp%2FHP5wwkT4bpyU%2Fcp2RCDw%2FsDx8Xusl%2BOsnuEs; Path=/; Expires=Sat, 26 Jul 2014 16:58:03 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:03 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:59:00.000Z",
    "ticker": "AAPL",
    "volume": "3"
  },
  {
    "ts": "2014-07-25T16:00:00.000Z",
    "ticker": "AAPL",
    "volume": "5"
  },
  {
    "ts": "2014-07-25T16:01:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
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
Content-Length: 75228
ETag: W/"125dc-2403796162"
set-cookie: igloo=s%3AS0iH9HbvvyY1-WCEVXFqlQWBYCdYZQvF.LPfsGo%2Bizvg4l%2Buljx6PHXo1tWzQDPG3mC%2FnSCWhUIc; Path=/; Expires=Sat, 26 Jul 2014 16:57:59 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:59 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-24T08:01:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-07-24T08:03:00.000Z",
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
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ABP6hzZdQ6HQkTtMZkqk0w4nbZeef2CaW.AgUDG8JMjDBNGt26FtR2lVRJF8EI2LbLWEwFkIZaySk; Path=/; Expires=Sat, 26 Jul 2014 16:57:59 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:59 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily tweet volume historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
