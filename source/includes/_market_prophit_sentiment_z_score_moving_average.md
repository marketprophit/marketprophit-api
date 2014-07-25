
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
Content-Length: 13350
ETag: W/"3426-2045442396"
set-cookie: igloo=s%3AM7PlUUMDnCnrAP281bj_eqq6hjcs9LQQ.iHyFdijpL3JnD%2Bx%2B6DFG1qg8SW8ttoDX%2FpLfKIlHA%2F8; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:28.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2751059380322919"
  },
  {
    "ts": "2014-07-25T15:58:39.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2343235956258067"
  },
  {
    "ts": "2014-07-25T15:58:50.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1928003358492243"
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
Content-Length: 238792
ETag: W/"3a4c8-656450178"
set-cookie: igloo=s%3ASAVeyAs8IpOIkfogESY8RB7u2a5pzsQu.DDC1zPBikDsn8F9I2bYSQQL6r62dWx%2FlgOuWt7nFEis; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:42.000Z",
    "ticker": "AAPL",
    "moving_average": "0.7318982464589436"
  },
  {
    "ts": "2014-07-24T08:01:19.000Z",
    "ticker": "AAPL",
    "moving_average": "0.6811541027148059"
  },
  {
    "ts": "2014-07-24T08:03:58.000Z",
    "ticker": "AAPL",
    "moving_average": "0.4869880239812134"
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
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AnL9BeBTFaRIMs9B75D5MLX-7qea6RneM.OwcJTYaHKQNmp%2B2OvbmKXLVBnXGn%2B8%2BHaRJdPFlQpho; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
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
