
# Tweet Buzz


## Tweet Buzz

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2577
ETag: W/"a11-947934937"
Set-Cookie: igloo=s%3AxPjwDaai3MseN5g2pulj2aOG.NsiwqZ9zFbWJjWLaFzAkKBGxaQNfw7C5M7O4ZiXtcM8; Path=/; Expires=Sat, 21 Jun 2014 17:52:12 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T16:55:00.000Z",
    "ticker": "AAPL",
    "buzz": 1.537052070045224
  },
  {
    "ts": "2014-06-20T16:58:00.000Z",
    "ticker": "AAPL",
    "buzz": 1.537052070045224
  },
  {
    "ts": "2014-06-20T16:59:00.000Z",
    "ticker": "AAPL",
    "buzz": 2.5617534500753734
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 298401
ETag: W/"48da1-968915940"
Set-Cookie: igloo=s%3ASXfEKQGmV4yrdAn3zxePOtdM.vbGacYgtcfj3nbJpJSOV1gUQx%2B46LL1Gn%2Fa5udDKD6M; Path=/; Expires=Sat, 21 Jun 2014 17:52:31 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:31 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-13T21:52:00.000Z",
    "ticker": "AAPL",
    "buzz": 1.8309278350515537
  },
  {
    "ts": "2014-06-13T21:53:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4577319587628884
  },
  {
    "ts": "2014-06-13T21:54:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4577319587628884
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
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Buzz

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 304
ETag: W/"130-773315700"
Set-Cookie: igloo=s%3AFMX2G3TvVXFNYMnDwGRTb4HP.YTk8s2nWMJ7iIGHsF1t4yddjVZ0t48YGS3dExZ%2FbED4; Path=/; Expires=Sat, 21 Jun 2014 17:52:15 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:15 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T00:00:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.887486189204831
  },
  {
    "ts": "2014-06-17T00:00:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.8406187234700663
  },
  {
    "ts": "2014-06-18T00:00:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.7648110555711183
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
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
