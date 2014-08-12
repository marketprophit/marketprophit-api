
# Market Prophit Sentiment Z-Score Moving Average


## Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 885
ETag: W/"375-1801421241"
set-cookie: igloo=s%3A2n3glcbdKRuNp8S5QeKuqvWeY31hJAz8.7je2gACehVUffe4ANxGIJGqSwaJiBLBcuon2a3XvX4M; Path=/; Expires=Wed, 13 Aug 2014 21:38:14 GMT; HttpOnly
X-Response-Time: 37079.56527ms
Date: Tue, 12 Aug 2014 21:38:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:40:59.000Z",
    "ticker": "AAPL",
    "moving_average": "0.3496555355758420"
  },
  {
    "ts": "2014-08-12T20:43:09.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1917630653800553"
  },
  {
    "ts": "2014-08-12T21:01:59.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.7900582694003155"
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
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 885
ETag: W/"375-1400004794"
set-cookie: igloo=s%3AzCGPmJ6Z0zMlPkwa2P2HDJgb_eVVitqw.tdC32c4X0pFaCXUS78TU%2Fbn634JluENPto8qd80bZu0; Path=/; Expires=Wed, 13 Aug 2014 21:38:09 GMT; HttpOnly
X-Response-Time: 27931.95247ms
Date: Tue, 12 Aug 2014 21:38:09 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-22T14:50:02.000Z",
    "ticker": "AAPL",
    "moving_average": "1.0834075938524095"
  },
  {
    "ts": "2013-11-22T14:50:35.000Z",
    "ticker": "AAPL",
    "moving_average": "0.3939086809562514"
  },
  {
    "ts": "2013-11-22T14:50:41.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0781210839319831"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Market Prophit Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 891
ETag: W/"37b-1536825688"
set-cookie: igloo=s%3AmZX1syKsOw2zRb4esvx4TrSMTRIQvWag.%2BORlWotsiTpNpKfURSQOi8i8cc%2BvbwebC%2B8RYjN%2BCqA; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15934.11625ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-12-11T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.2897166169738399"
  },
  {
    "ts": "2013-12-12T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.8356968266904928"
  },
  {
    "ts": "2013-12-13T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-1.5197824526209778"
  }
]
```

Daily market prophit sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
