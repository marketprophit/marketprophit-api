
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
Content-Length: 885
ETag: W/"375-2412754791"
set-cookie: igloo=s%3AnlnfEnSHfvb_CO0vq8z0DlZPL6WI0q4h.2MByLBmfkrx6MTZ1BEd8wjihSflWmgkitBYJgfZrqGs; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7551.68931ms
Date: Tue, 12 Aug 2014 21:37:38 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:38:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0248249992633161"
  },
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0265871292470387"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0222608311400150"
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
Content-Length: 889
ETag: W/"379-2525490719"
set-cookie: igloo=s%3AcEQ_sXoCrzltCQPgf_nV6gB7gvI6xgln.pRxCEA6JoR2df5V11FO%2B%2BoEeBIiUx7LqGZfng%2FIIf6c; Path=/; Expires=Wed, 13 Aug 2014 21:37:36 GMT; HttpOnly
X-Response-Time: 6405.81668ms
Date: Tue, 12 Aug 2014 21:37:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:08:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.7338374164852608"
  },
  {
    "ts": "2013-08-11T00:09:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0520174878536114"
  },
  {
    "ts": "2013-08-11T00:10:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.2346234185563825"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Crowd Sentiment Z-Score Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 881
ETag: W/"371-3237205047"
set-cookie: igloo=s%3AnH9GzRFooLmthJRi9wEVsXbbKPrzOQD1.Yj9vvH0IZU5QraAYJY4jFwZMgza8aUG%2FDTooYt9OB34; Path=/; Expires=Wed, 13 Aug 2014 21:37:37 GMT; HttpOnly
X-Response-Time: 7240.37982ms
Date: Tue, 12 Aug 2014 21:37:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0648624193767667"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2077552673683673"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2298030781046750"
  }
]
```

Daily crowd sentiment z-score moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
