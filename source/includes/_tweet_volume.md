
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
Content-Length: 3279
ETag: W/"ccf-1919590084"
set-cookie: igloo=s%3AqereGzEhfnTrfjnzX-K5uEIWUOOChENA.2Gk5HIDy3PBTlpmFYpsQaaeq8wUfC5Elvi2%2F%2BBOoybk; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:30:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-07-23T20:31:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-23T20:32:00.000Z",
    "ticker": "AAPL",
    "volume": "5"
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
Content-Length: 70321
ETag: W/"112b1-3775655410"
set-cookie: igloo=s%3AM79SXgRZ-QWbBXDSRt5ymh0YradT4rgr.Y%2FWj3rgsq3KItSWVUBSyOrKEGB5ftgtywcF2PrxsIwM; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:01:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-22T08:02:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-22T08:05:00.000Z",
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
set-cookie: igloo=s%3AlS32JvIjUzGwnQKr18dAuLt4AVrhwnxP.WKqEUwR442hg5%2FwQey9Pm6JesxJdfs%2Fc4SAliY02SGo; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
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
