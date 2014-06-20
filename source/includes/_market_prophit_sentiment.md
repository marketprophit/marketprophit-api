
# Market Prophit Sentiment


## Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3711
ETag: W/"e7f-2052060010"
set-cookie: igloo=s%3ApPpd8KwV3PO1A2iyjXljl-5CyUrQUjFJ.BAgXdw8D3vAYMkCZfZ%2FWeO%2FH1nNcMqVf%2BQYE9RMBeDY; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
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

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 54049
ETag: W/"d321-2783425350"
set-cookie: igloo=s%3AKFF0XWqvfKC0PeaKf2SzQp_WkeoMCXH0.FBYat7IIsv9PmMO51ipPt0%2FOxA0MxN3O6a9lqs0zfBc; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
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

`GET https://open.marketprophit.com/historical/market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AL5-uXqpLFKUQI_zVAQctvc85H8lDsfzK.BbxpA4zQw7HOIN4DXFYPLWmygd4Neqhsggc%2BkMUs6SY; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
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
