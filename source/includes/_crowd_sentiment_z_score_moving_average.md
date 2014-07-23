
# Crowd Sentiment Z-Score Moving Average


## Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4610
ETag: W/"1202-1191679498"
set-cookie: igloo=s%3Al9yOsZaK13E8EWz3LErL4fWhn9WJnk_M.L9t0xKOn7WAs9jFlO5o1UwjmmqdXKW%2FdFLY%2FhLiZ6os; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:30:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0069578314285159"
  },
  {
    "ts": "2014-07-23T20:31:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0284923469316640"
  },
  {
    "ts": "2014-07-23T20:32:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0359426372591669"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 95559
ETag: W/"17547-1554276191"
set-cookie: igloo=s%3A8PtBIhhvGboRgMFfzwXrBM8gjKqjKFNe.9AtOogRnpYvpcpldXSY3zDSg04KJOeAl8388e4lKNDk; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:09:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.9049303386383771"
  },
  {
    "ts": "2014-07-22T08:10:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-1.1721998457240268"
  },
  {
    "ts": "2014-07-22T08:12:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.8141974795381363"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AcU11-DzyLRMb4lBgtZ3oxwK6qj9b38-Z.d%2FmdIZmI3W18S2X8iH0a9gKZzIzFOhzeBA2NN%2FJCC9E; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
