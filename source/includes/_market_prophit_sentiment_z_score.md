
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AZBrLgK_kDUBYb6ZEPKzovKYg_ppqjSmB.35d4doyYd9Mp1ffwuQpkON1EJ3RIHrx59EBQn%2Fb48bw; Path=/; Expires=Wed, 13 Aug 2014 10:07:56 GMT; HttpOnly
X-Response-Time: 793.06801ms
Date: Tue, 12 Aug 2014 10:07:56 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 31726
ETag: W/"7bee-716870568"
set-cookie: igloo=s%3AxksIcVvIPCU6uAl1guzuYbphyL0X7byI.tembp6y7yo78GL2xR2cV%2FhUzpI6JqvXbCv6LQLBsTX4; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 662.30276ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T09:51:36.000Z",
    "ticker": "AAPL",
    "z_score": "-0.4469812129044528"
  },
  {
    "ts": "2014-08-11T09:53:50.000Z",
    "ticker": "AAPL",
    "z_score": "-0.5684189810952880"
  },
  {
    "ts": "2014-08-11T09:54:05.000Z",
    "ticker": "AAPL",
    "z_score": "-0.6457769166012428"
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AqGIjq3UasGmpkdbZKSKTaJ3QT1NZr0OW.JkiDY7ULMP5NxzMYwrHrVN7Wj4kCZCi90DfOWuJ%2BMZI; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 90.25026ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
