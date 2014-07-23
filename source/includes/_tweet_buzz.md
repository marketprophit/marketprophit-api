
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
Content-Length: 1327
ETag: W/"52f-3598988468"
set-cookie: igloo=s%3AqnmfUd0LuW1FBmHFcbqxnXJV9N0fpodj.8MQhskP090uHJPTnU4O10YDtPyiaxZikFC3QzSKrr3s; Path=/; Expires=Thu, 24 Jul 2014 07:45:14 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:14 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T07:05:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3985507246376801"
  },
  {
    "ts": "2014-07-23T07:06:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.7971014492753602"
  },
  {
    "ts": "2014-07-23T07:07:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3985507246376801"
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
Content-Length: 86602
ETag: W/"1524a-187718248"
set-cookie: igloo=s%3AuU1WhVUXens1Lg0ti3ek2-hf2WuJIY_r.rR6uxR5wdlWfE%2FxnqHB58uVG76KdM6v%2F6fCVdGcQKSA; Path=/; Expires=Thu, 24 Jul 2014 07:45:14 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:14 GMT
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
set-cookie: igloo=s%3A_N59f5ACItK55Wq-M9mpJIGZZVXdH2_E.TJTWCCigPcxJtkm6rgf3kd10IvKfiz4nb7tMO2RaEf8; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
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
