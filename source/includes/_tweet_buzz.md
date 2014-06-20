
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
Content-Length: 2956
ETag: W/"b8c-2243410666"
set-cookie: igloo=s%3A1N_63UFcN-R5HlHpPPyf7aaU6JXEJuBr.jCylVbFwMISWCbjRPH%2BGOe3kIR46PWcky5tGkCvoZK8; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T20:33:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.5123506900150747
  },
  {
    "ts": "2014-06-20T20:34:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.5123506900150747
  },
  {
    "ts": "2014-06-20T20:36:00.000Z",
    "ticker": "AAPL",
    "buzz": 1.0247013800301494
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
Content-Length: 40982
ETag: W/"a016-3529579703"
set-cookie: igloo=s%3AYTkiCwBSPypknxqzr7xDBdu37wgLqaCF.A%2F3PcDpYYPszniu7M0YT3NizuRnE2bM2Hw40YSA3kUg; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-19T08:02:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.5
  },
  {
    "ts": "2014-06-19T08:05:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.5
  },
  {
    "ts": "2014-06-19T08:11:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.5
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AYLJzFaJV8VMt2TFevnEQFcBWW7GozRMC.B3gsFiJ1zc2JZjak%2F7QJF4KoDw%2FzavjP1FoUXUFV6tc; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
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
