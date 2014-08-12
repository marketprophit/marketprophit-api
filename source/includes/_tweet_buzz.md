
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
Content-Length: 781
ETag: W/"30d-3453040483"
set-cookie: igloo=s%3AqkYTRifAnVGRI7_FUKDsl3qDj84IqE0l.63JF608FdxZutWfd%2B7m4ngIk0t%2FgMwAtoMs8Xx%2B%2FTzo; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15865.47433ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.1761719411067892"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5880859705533946"
  },
  {
    "ts": "2014-08-12T20:43:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.1761719411067892"
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
Content-Length: 781
ETag: W/"30d-3998987039"
set-cookie: igloo=s%3APFo9OrqqC-j6NNkZjHpVzEEdf-qbkbm-.mrR2IyNzzQBYjNMZV1Vowm6rAe2mphHRtBCfEvyqSmo; Path=/; Expires=Wed, 13 Aug 2014 21:39:16 GMT; HttpOnly
X-Response-Time: 91404.59397ms
Date: Tue, 12 Aug 2014 21:39:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:02:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5958289885297187"
  },
  {
    "ts": "2013-08-11T00:04:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.1916579770594373"
  },
  {
    "ts": "2013-08-11T00:06:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5958289885297187"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Tweet Buzz

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 781
ETag: W/"30d-547962439"
set-cookie: igloo=s%3AZWaoKgspyFmRtGrU8fd9BjM0eWd0OzLm.Vu0rwQSu6IQ11AO%2BDhtpJTw7sXJ29eI00ARKiKYmUo4; Path=/; Expires=Wed, 13 Aug 2014 21:38:05 GMT; HttpOnly
X-Response-Time: 23413.11348ms
Date: Tue, 12 Aug 2014 21:38:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.1332221237110470"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "buzz": "2.5277599695744970"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.5415269201662773"
  }
]
```

Daily tweet buzz historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
