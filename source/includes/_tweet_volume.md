
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
Content-Length: 569
ETag: W/"239-810754165"
set-cookie: igloo=s%3AOtUevvv8dMuWXsdxeX4ZHYvcexG08c1t.vUSVohSqa7Qlzm8M%2FqTqJQDns5uTCflCbtLi0eR22v0; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 165.44277ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:30:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-08-12T09:34:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-08-12T09:36:00.000Z",
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
Content-Length: 31315
ETag: W/"7a53-770085037"
set-cookie: igloo=s%3AaK0Zw-4g6HtRmfE8lVVYx601MiCtwJ5w.R7gYhgMyJg6xAikBrplpysJqWCf3fKhpDzAxX2KNgG8; Path=/; Expires=Wed, 13 Aug 2014 10:07:56 GMT; HttpOnly
X-Response-Time: 1004.13442ms
Date: Tue, 12 Aug 2014 10:07:56 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T08:03:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-08-11T08:30:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-08-11T08:36:00.000Z",
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AtOYSDAiDl4acgnQtcLpgY_GMDflxQMrG.kQR5EUf2aojVXstGMwK8cduIMFyMVReKT%2F%2BR0vkFhYo; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1365.85515ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
