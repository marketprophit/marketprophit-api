
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
Content-Length: 11794
ETag: W/"2e12-1537834928"
set-cookie: igloo=s%3AfSRjdEJWhizjYjspd8oGEk8he-e1iFlG.%2FnjvAq4I7gcHSjRWU2CQHrrULfn55lf%2FmLpmhkpb8jU; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:29:35.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.2978869608387341"
  },
  {
    "ts": "2014-07-23T20:29:41.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.2707405738703032"
  },
  {
    "ts": "2014-07-23T20:30:03.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.2726322905724377"
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
Content-Length: 184393
ETag: W/"2d049-3737459591"
set-cookie: igloo=s%3ASB-2So2shfCq0oE-ivKheqTV_OooLPZI.5WId7uCl%2BYdlSIuPh1%2FNYAaVs8FaYO8aMvpBvj3TYr0; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T09:24:59.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.6225343035556520"
  },
  {
    "ts": "2014-07-22T09:59:02.000Z",
    "ticker": "AAPL",
    "moving_average": "1.1503850832778924"
  },
  {
    "ts": "2014-07-22T09:59:08.000Z",
    "ticker": "AAPL",
    "moving_average": "1.1063091924919357"
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
set-cookie: igloo=s%3A2ga-6c5FOXa3dCn2KO-drIBBugjg18yU.Zah6cMa7196zWMIlWm%2FRwTSScrfc26hGFxNaSQF%2BBO4; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
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
