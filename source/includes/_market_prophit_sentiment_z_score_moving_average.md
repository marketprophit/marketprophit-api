
# Market Prophit Sentiment Z-Score Moving Average


## Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 3711
ETag: W/"e7f-2052060010"
set-cookie: igloo=s%3AjIz0qxkP0peflDu1DkDRRr52TJTS9Z7H.8TaU5dTYxCm7mmYADzdvqc2XABIlgU8rmhiaNkvUVcQ; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
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

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 54049
ETag: W/"d321-2783425350"
set-cookie: igloo=s%3ARRhXAIfG-U00fwzAd6JxGP-mcBu6x7yR.caHOFWzrKGI62B47QviK%2BWV0ZujNL%2FLPSKPK1PXpnys; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
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

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ALh3RQxKoHZkkITocG2iWZ8Y77sipduZI.jH0SVkKcSn0sg1Lr%2BELPxURJChESCmi6OALbY5L71ZA; Path=/; Expires=Sat, 21 Jun 2014 21:31:37 GMT; HttpOnly
Date: Fri, 20 Jun 2014 21:31:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
