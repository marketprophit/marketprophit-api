
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
Content-Length: 864
ETag: W/"360-200455438"
set-cookie: igloo=s%3ArLtZetJFOSQO_IxItUcXaTvbp8h81eRx.XL4F7HcJubjNz1te9JqRJVDvqwPd8UemRQFA1Eio2ww; Path=/; Expires=Wed, 13 Aug 2014 21:38:16 GMT; HttpOnly
X-Response-Time: 38239.61660ms
Date: Tue, 12 Aug 2014 21:38:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:17.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.3269987433066757"
  },
  {
    "ts": "2014-08-12T20:40:59.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.2835789439773210"
  },
  {
    "ts": "2014-08-12T20:43:09.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.1614869778859951"
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
Content-Length: 864
ETag: W/"360-2817420536"
set-cookie: igloo=s%3AkZsiDndFGDFEEmpRCY5zOd6Ny4HxoV_s.MftJvBZ%2Bt1Pnt7Uvc0PQqBYFr1DsYa%2F9rvjEHuHgifM; Path=/; Expires=Wed, 13 Aug 2014 21:37:55 GMT; HttpOnly
X-Response-Time: 18009.20488ms
Date: Tue, 12 Aug 2014 21:37:49 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-22T14:32:29.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0108788752572931"
  },
  {
    "ts": "2013-11-22T14:32:40.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0107582667275593"
  },
  {
    "ts": "2013-11-22T14:33:11.000Z",
    "ticker": "AAPL",
    "signal_value": "0.0018852081898496"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Market Prophit Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 883
ETag: W/"373-791338734"
set-cookie: igloo=s%3AMR6zJdd_NMnLUZLcXqFBSNX9TbQeKeVP.477cf%2ByJ%2Fu19MhqOxGX%2B9nGVTS1%2F3Aixm%2BaAn%2BPVcPo; Path=/; Expires=Wed, 13 Aug 2014 21:38:16 GMT; HttpOnly
X-Response-Time: 38101.44011ms
Date: Tue, 12 Aug 2014 21:38:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-25T05:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": "0.0352639338098013"
  },
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": "0.0433387814683065"
  },
  {
    "ts": "2013-11-27T05:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": "0.0623340566957021"
  }
]
```

Daily market prophit sentiment historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | last year from previous biz day
end_date | End date range (MM-DD-YYYY) | no | previous business day
