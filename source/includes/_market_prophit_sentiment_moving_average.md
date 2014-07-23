
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
Content-Length: 1039
ETag: W/"40f-3483225430"
set-cookie: igloo=s%3A19Fh8DvdFbI4Lcm8z-VUMnoAY68zaprI.0%2Bl3d6K0eKXw0z%2BwNr0pAvtMjHJ3cW%2BMtv%2BMbBJAnVQ; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
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
Content-Length: 185375
ETag: W/"2d41f-2057771493"
set-cookie: igloo=s%3AgT7-gTEMNGQRhPpopOd0az1unTrZBf-P.p%2FBGMRMFL7b1%2Fi0A0cQhO29XJ6Kric37kl7fqn1B5Qc; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
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
set-cookie: igloo=s%3Ad869TN5My3YAZNh9z4161y636yA3vakj.yVruCGVAUOvgmmdc%2FV%2ByyaMdiKAX0bsGV2H58TeU1cQ; Path=/; Expires=Thu, 24 Jul 2014 07:45:12 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:12 GMT
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
