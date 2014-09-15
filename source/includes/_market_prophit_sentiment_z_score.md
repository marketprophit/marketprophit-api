
# Market Prophit Sentiment Z-Score


## Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 813
ETag: W/"32d-4134144347"
set-cookie: igloo=s%3AWWBfykqtJdN3bJQtZCHUqyZFIsjmyjPJ.5Okpp8DG%2FHpXtINndJv1kHxXpQPFmGgAd%2Bfhy%2FkSikg; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7353.80293ms
Date: Tue, 12 Aug 2014 21:37:38 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:59.000Z",
    "ticker": "AAPL",
    "z_score": "-1.0713766961862381"
  },
  {
    "ts": "2014-08-12T20:43:09.000Z",
    "ticker": "AAPL",
    "z_score": "-0.5087398426143930"
  },
  {
    "ts": "2014-08-12T21:01:59.000Z",
    "ticker": "AAPL",
    "z_score": "0.4786645856414883"
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
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 816
ETag: W/"330-628605541"
set-cookie: igloo=s%3AI4WqEl_XPu0KN4yAdYmEgJl9Az-QYDtU.tAKrFDmjGOJtUmRuOgkFtEJdisZm70vvx24xCQe%2BHa8; Path=/; Expires=Wed, 13 Aug 2014 21:38:02 GMT; HttpOnly
X-Response-Time: 21057.09100ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-22T14:49:24.000Z",
    "ticker": "AAPL",
    "z_score": "1.0834075938524095"
  },
  {
    "ts": "2013-11-22T14:50:02.000Z",
    "ticker": "AAPL",
    "z_score": "-0.2955902319399066"
  },
  {
    "ts": "2013-11-22T14:50:35.000Z",
    "ticker": "AAPL",
    "z_score": "-0.5534541101165534"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 820
ETag: W/"334-3791395631"
set-cookie: igloo=s%3AqF-D_5gHyX-jo18U-9AdysdHUI3I0vlN.GCpd2aJn8ZWMOXvFmeGG0xr4oZPg3ECWALrWuEC8N6M; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15991.27487ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-12-10T05:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.2897166169738399"
  },
  {
    "ts": "2013-12-11T05:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "-1.3816770364071458"
  },
  {
    "ts": "2013-12-12T05:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "-2.8879537044819480"
  }
]
```

Daily market prophit sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | last year from previous biz day
end_date | End date range (MM-DD-YYYY) | no | previous business day
