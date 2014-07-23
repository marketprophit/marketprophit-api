
# Market Prophit Sentiment Moving Average


## Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 11713
ETag: W/"2dc1-2528261420"
set-cookie: igloo=s%3A0K1BUJw-KkA2lHY5sFKgIfef4rK71AZh.ePHQe7DPZkiypYejX98737FkTf%2BTRf%2BOU8FHLyyQsh4; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:29:35.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0384726817582387"
  },
  {
    "ts": "2014-07-23T20:29:41.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0411244180260055"
  },
  {
    "ts": "2014-07-23T20:30:03.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0412967805034716"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 189651
ETag: W/"2e4d3-1693399652"
set-cookie: igloo=s%3AS4Ch4rUMTT6pWzkVjGEwnTF9iHJUH-bI.G5u5hNoXYX5YirLuFeQPgm60j%2B7DvQbxGARQBKH1I%2Fs; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:06:06.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1055366816300872"
  },
  {
    "ts": "2014-07-22T08:08:16.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1547941407480791"
  },
  {
    "ts": "2014-07-22T08:08:47.000Z",
    "ticker": "AAPL",
    "moving_average": "0.1497567394864784"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A22i5szKMwoDV_R12__SGkSV41Im9iYSk.EfisA5P9kiSD8n0554BQVCrwsouujXq3C4x94H3c3vI; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
