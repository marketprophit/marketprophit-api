
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
Content-Length: 13072
ETag: W/"3310-4005417567"
set-cookie: igloo=s%3Ad80cZevZoTqYP4U_GDOa3yxtdIvWizKI.PLezJyRb1sY80GgpDA%2FbhacHgcYUMBJGaMIBjOSy5Yc; Path=/; Expires=Sat, 26 Jul 2014 16:57:59 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:57:59 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T15:58:28.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.5416426385944375"
  },
  {
    "ts": "2014-07-25T15:58:39.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.5414254888680098"
  },
  {
    "ts": "2014-07-25T15:58:50.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.4866932872717223"
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
Content-Length: 235268
ETag: W/"39704-2686359017"
set-cookie: igloo=s%3ABXrks-1n5kCD-Abl7a1AVMUrerjAFdmV.dvg59VGriVODG4Ibr3HefVTDZNvnDSM%2BG50KQ6Q0Cvc; Path=/; Expires=Sat, 26 Jul 2014 16:58:03 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:03 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-24T08:00:42.000Z",
    "ticker": "AAPL",
    "signal_value": "0.0282828449721973"
  },
  {
    "ts": "2014-07-24T08:01:19.000Z",
    "ticker": "AAPL",
    "signal_value": "-0.0367255209307690"
  },
  {
    "ts": "2014-07-24T08:03:58.000Z",
    "ticker": "AAPL",
    "signal_value": "0.1427331886560877"
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
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Ak1-_pc0Zsr5WYB8ZrFkXJobxxu0CNwPj.2hLgedBF5wr9oiV%2Fr%2FSpXVCyAl1SR7PbjIkdbXbJVu4; Path=/; Expires=Sat, 26 Jul 2014 16:58:03 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:03 GMT
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
