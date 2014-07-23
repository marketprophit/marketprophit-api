
# Crowd Sentiment Z-Score


## Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4242
ETag: W/"1092-794600393"
set-cookie: igloo=s%3AIH3G71xQBOry8zTZJYHWCGfIwsXUNgPx.OjEb%2By6yBDnFDdavCkwstXpnNZ4D4cjfdpwivWv9ARg; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:30:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.0050948467471814"
  },
  {
    "ts": "2014-07-23T20:31:00.000Z",
    "ticker": "AAPL",
    "z_score": "-1.0830262708446063"
  },
  {
    "ts": "2014-07-23T20:32:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.3785038072296589"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 88202
ETag: W/"1588a-2482970011"
set-cookie: igloo=s%3AuC7L_ZhGxmnx077EWVi92WVaLp7_f4bM.b%2BoaYEyI9im04jByoR6ISbjIZ4znKfUBja41d%2FHSVzk; Path=/; Expires=Thu, 24 Jul 2014 21:29:19 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:08:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.9049303386383771"
  },
  {
    "ts": "2014-07-22T08:09:00.000Z",
    "ticker": "AAPL",
    "z_score": "-1.4394693528096765"
  },
  {
    "ts": "2014-07-22T08:10:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.0981927471663552"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Ag2mv0B33qPU4XgUL6SY1YCIOUmlzW7lb.znlCrEZbLQgIHUG%2BvOZDdOg4aZ5SxyNK%2FXNNoWRi%2FsA; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
