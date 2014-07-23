
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AUiEAC8ZAVm6g6bdMBLPW9tPcT8ELDtLG.HRcof%2FfWjFhzBd8sq1pLIROlqNOwWuZXmQmqmzed5Qs; Path=/; Expires=Thu, 24 Jul 2014 07:45:16 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 228
ETag: W/"e4-3852162581"
set-cookie: igloo=s%3A9aaJMgiovpBIDgzudPK3o4UPaQeyiwJg.vcD8s2yIsjU1oke%2FOiWewZpM%2BwsRHXDvVXR1PdQQ9LA; Path=/; Expires=Thu, 24 Jul 2014 07:45:16 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'SELECT
  TS,
  USER_ID,
  TICKER,
  SENTIMENT,
  USER_SCORE
FROM UserSentimentDa' at line 2
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
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A9egkQ2zqCz1KcoYArQjUAd4WUifrb99N.OtGyarwEIrMJ4p8MmSCqgFRZJDacc9OmF1KCjcLFl1Q; Path=/; Expires=Thu, 24 Jul 2014 07:45:16 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns a complete range of historical intraday records for a given user based on a date range (start date, end date).

### HTTP Request

`GET https://open.marketprophit.com/historical/user-sentiment-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 month ago
end_date | End date range (MM-DD-YY) | no | previous business day
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
set-cookie: igloo=s%3AddHmkNOt2A3GtB7BroPAQs9-wrGP6rgd.asATchxOarkb0Wk7S06HUEx9AKzIijG77OGSt6PCC6k; Path=/; Expires=Thu, 24 Jul 2014 07:45:16 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-22T04:01:46.000Z",
    "user_id": "15691758",
    "ticker": "AAPL",
    "sentiment": "0.4422646964938051"
  },
  {
    "ts": "2014-06-22T04:02:05.000Z",
    "user_id": "2499887964",
    "ticker": "AAPL",
    "sentiment": "-0.0107047781159852"
  },
  {
    "ts": "2014-06-22T04:02:37.000Z",
    "user_id": "2499887964",
    "ticker": "AAPL",
    "sentiment": "0.0482552051243046"
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
start_date | Start date range (MM-DD-YY) | no | 1 month ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none
