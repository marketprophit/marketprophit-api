
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
Content-Length: 4135
ETag: W/"1027-3517710615"
set-cookie: igloo=s%3A_6IGHKAD7jpG26T59e8p-p-riGTtlGcQ.Jey0tBIGZd6jyCDbH1h0f%2B2PKJRLLqyY2qsKC%2FZozTM; Path=/; Expires=Sat, 26 Jul 2014 16:58:03 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:03 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:59:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.1707491082045078"
  },
  {
    "ts": "2014-07-25T16:00:00.000Z",
    "ticker": "AAPL",
    "buzz": "1.9512485136741797"
  },
  {
    "ts": "2014-07-25T16:01:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3902497027348360"
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
Content-Length: 93133
ETag: W/"16bcd-804391441"
set-cookie: igloo=s%3ACoXNso3wkgCw4nE9GlZLuc6AbUVORLgL.M3jYkNJoGWRdvSZY%2Bzjh60zqofOAaehkPK6bDrykGmk; Path=/; Expires=Sat, 26 Jul 2014 16:58:03 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:03 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.7838606030647600"
  },
  {
    "ts": "2014-07-24T08:01:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3919303015323800"
  },
  {
    "ts": "2014-07-24T08:03:00.000Z",
    "ticker": "AAPL",
    "buzz": "0.3919303015323800"
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
set-cookie: igloo=s%3ASjM6cQbMYX9Mbo5fics215TSOJ4mQPvy.UTwsgYbpLyelPkC0IVKG9RScowWI6RxFN0FLE8RxNFs; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
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
