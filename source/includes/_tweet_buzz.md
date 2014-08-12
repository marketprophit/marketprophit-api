
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
Content-Length: 703
ETag: W/"2bf-2298492888"
set-cookie: igloo=s%3AEv93cSv0MyF8IRcdjlRatjU_NxUdcfZK.LAKLzyn8eLy6ZaPFlqkvNwsQmtFngD41zIQtvODFISw; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 134.20821ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T09:30:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5880859705533946"
  },
  {
    "ts": "2014-08-12T09:34:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5880859705533946"
  },
  {
    "ts": "2014-08-12T09:36:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5880859705533946"
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
Content-Length: 38767
ETag: W/"976f-1213310575"
set-cookie: igloo=s%3ApLZIE2iAR5144EO97INMrwxQYCOJXGOe.OsELv%2BhUBltAH6QtRgFpM4aRTsjMhgpS1nxCoS97qVM; Path=/; Expires=Wed, 13 Aug 2014 10:07:56 GMT; HttpOnly
X-Response-Time: 1314.81389ms
Date: Tue, 12 Aug 2014 10:07:56 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T08:03:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5936491764306357"
  },
  {
    "ts": "2014-08-11T08:30:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5936491764306357"
  },
  {
    "ts": "2014-08-11T08:36:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.5936491764306357"
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
set-cookie: igloo=s%3AQfatJaRJIumrelfOS6W3__7wFHLKkuY2.WS3EuM5%2B60M102ir432kMEcRUVaX1aGMyivKhyy0XNQ; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1335.46904ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
