
# Market Prophit Sentiment


## Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1039
ETag: W/"40f-3483225430"
set-cookie: igloo=s%3A9d_B69g_BfKVzExD_6Q2ISojukrXmaB2.dABvkmdVn2K2Ip8OFEV%2FW0dwH1TOQfXkNhOIZDVxoxk; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T07:06:52.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0206048606067477"
  },
  {
    "ts": "2014-07-23T07:09:32.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.1231130270988458"
  },
  {
    "ts": "2014-07-23T07:09:50.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0995641227974565"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 185375
ETag: W/"2d41f-2057771493"
set-cookie: igloo=s%3APf5csDsoL2uv9gTGbencvPxUL0xGNoFy.vsQL5zorRDtE4ZYnLiXC4dHAgMCyWCfg72imeqApD4Q; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:06:06.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1547941407480791"
  },
  {
    "ts": "2014-07-22T08:08:16.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1447193382248778"
  },
  {
    "ts": "2014-07-22T08:08:47.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1496200105908318"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AZxV-lfAJBs5ZsXjYe0H6zvqS5TVVOQcG.iGjPxchaqlq3YXXeez3ALqLWZvDpBVLjBFI9ysmtdak; Path=/; Expires=Thu, 24 Jul 2014 07:45:13 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:13 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
