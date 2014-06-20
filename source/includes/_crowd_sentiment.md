
# Crowd Sentiment


## Crowd Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3043
ETag: W/"be3-3806297770"
Set-Cookie: igloo=s%3AGVPwuBxt43vSp64z0FhJy8qM.LUj9nyFlvqwlDUi7Bn6M3c7Um3UobSGLXpOIMy10PGc; Path=/; Expires=Sat, 21 Jun 2014 17:52:03 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:03 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T16:55:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.0068080911819361
  },
  {
    "ts": "2014-06-20T16:58:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.3348939278065769
  },
  {
    "ts": "2014-06-20T16:59:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.093888664282144
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 362624
ETag: W/"58880-1185380256"
Set-Cookie: igloo=s%3A7oRIDgjFduu5hVVaI5YvDqO5.V8gqT1%2FM63wDaJGs%2BSWXBaL8rKiTTuggPjJHBy6lDAE; Path=/; Expires=Sat, 21 Jun 2014 17:52:16 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-13T21:52:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": -0.218970263119909
  },
  {
    "ts": "2014-06-13T21:53:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.5582556506137026
  },
  {
    "ts": "2014-06-13T21:54:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.2298355260380085
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
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-crowd-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 356
ETag: W/"164-1950519036"
Set-Cookie: igloo=s%3AKk0r2eVXRS61zUFe69EOBGAK.Xt2cVe9GxtFSuhvAD2B16ErW82c2ETudw0oMvrnI1g4; Path=/; Expires=Sat, 21 Jun 2014 17:52:01 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:01 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0281591656736776
  },
  {
    "ts": "2014-06-17T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0094446227383333
  },
  {
    "ts": "2014-06-18T00:00:00.000Z",
    "ticker": "AAPL",
    "average_sentiment": 0.0305598838904364
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
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
