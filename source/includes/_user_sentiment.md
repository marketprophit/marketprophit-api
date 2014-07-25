
# User Sentiment


## User Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/user-sentiment"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 125
ETag: W/"7d-225856874"
set-cookie: igloo=s%3A27QJq2QhwHHAbUYYjW7cnHMxySui9Rd5.33v4UXGIE3NTcGymQtau4BIJb86GS%2BXg0coBC%2BouM%2F8; Path=/; Expires=Sat, 26 Jul 2014 16:58:05 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-25T20:57:46.000Z",
    "user_id": "2724313540",
    "ticker": "BRYN",
    "sentiment": "0.6202991639475105",
    "user_score": null
  }
]
```

Pushes the complete set of user sentiment records for all tickers and users for the most recent full second of data.

### HTTP Request

`GET https://open.marketprophit.com/real-time/user-sentiment`



## User Sentiment Last Minute

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/user-sentiment-last-minute?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 500 Internal Server Error
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 39
ETag: W/"27-1680212420"
set-cookie: igloo=s%3A6sMPd48v5jbqVJO9lsOVlUk6EdQMxlJk.no%2BZ6gKuTom94pSUM7dr7%2BJNrNzCTL53ECNGx07wp8M; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
Unknown column 'AAPL' in 'where clause'
```

Returns the complete set of user sentiment records for all tickers and users for the most recent full minute of data.

### HTTP Request

`GET https://open.marketprophit.com/real-time/user-sentiment-last-minute`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none


## User Sentiment by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-sentiment-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 500 Internal Server Error
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 87
ETag: W/"57-1119346246"
set-cookie: igloo=s%3AMJFTcR29Vh9O5KvGuO586Co2FhFLT3-9.RHeCf1ViJ8JSKQyPS9Pfp0deSbiOelhpI9vgpoKFw7Q; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
execute command denied to user 'nick'@'%' for routine 'mp_prod.GetTwitterUsernameForId'
```

Returns a complete range of historical intraday records for a given user based on a date range (start date, end date).

### HTTP Request

`GET https://open.marketprophit.com/historical/user-sentiment-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 month ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## User Sentiment by Ticker

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-sentiment-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A3NZzVauDfkzmUsCtezRRecHlwoXW1Etq.oWxE4AagJxGhK9uy8i1gy3A%2F0w7VUvDhqbQWZrmQXok; Path=/; Expires=Sat, 26 Jul 2014 16:58:04 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-24T04:00:02.000Z",
    "user_id": "2478003602",
    "ticker": "AAPL",
    "sentiment": "0.5878476338280815"
  },
  {
    "ts": "2014-06-24T04:08:25.000Z",
    "user_id": "25709609",
    "ticker": "AAPL",
    "sentiment": "0.4435416652294616"
  },
  {
    "ts": "2014-06-24T04:08:30.000Z",
    "user_id": "404613701",
    "ticker": "AAPL",
    "sentiment": "0.1060097344203914"
  }
]
```

Returns a complete range of historical intraday records for a given ticker based on a date range (start date, end date)..

### HTTP Request

`GET https://open.marketprophit.com/historical/user-sentiment-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 month ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none
