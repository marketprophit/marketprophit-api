
# Market Prophit Sentiment Z-Score


## Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3711
ETag: W/"e7f-2052060010"
set-cookie: igloo=s%3Ai1euPRq8VHD-h33pHbMwXz2BS1RhyK0U.W1eWu%2FbfRPgmO5xElPYOyW28nbqCbGCxKXJ9RvXiRLo; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T20:33:11.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0543010136564139
  },
  {
    "ts": "2014-06-20T20:34:23.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0571513850755214
  },
  {
    "ts": "2014-06-20T20:36:57.000Z",
    "ticker": "AAPL",
    "signal_value": 0.1043207781430794
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 54049
ETag: W/"d321-2783425350"
set-cookie: igloo=s%3AHqWPd7svWT7VWMfZosOIA1ve2zleUljl.ubzA0r%2BPd%2BaNT%2BeMzWOuKxphCsTEyVhnHAdCP7ArT78; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-19T09:06:11.000Z",
    "ticker": "AAPL",
    "signal_value": 0.1181247445904003
  },
  {
    "ts": "2014-06-19T10:05:54.000Z",
    "ticker": "AAPL",
    "signal_value": 0.0346113939633265
  },
  {
    "ts": "2014-06-19T10:06:10.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0721557976368264
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AkFCaAMBB4F34pA7hbDuk8GW3qxsZbgKM.7FbW1Tid2jvQqBllpxfcfw6SS6AJbtz56K5Xd54aC0E; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
