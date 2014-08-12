
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
set-cookie: igloo=s%3AfKLdqodPjlDYdjaY9KigLDpNQxQ4qoKB.GRVc4zb%2FC8dWurKegLufS72GWrwZ%2Brj4nG2Oy%2BTlmTY; Path=/; Expires=Wed, 13 Aug 2014 21:38:46 GMT; HttpOnly
X-Response-Time: 61607.66209ms
Date: Tue, 12 Aug 2014 21:38:46 GMT
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
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AYeY555_HpXHnKc48dl8bZDdn447DrcnY.pzu2rrS3HHU%2FHi8L3eGpQ3oWe3E1FwdeaXVFeqSCg0U; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15939.51409ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 523
ETag: W/"20b-1534407351"
set-cookie: igloo=s%3AJltmjgDjlIwvATHsDRZSaVkHAK8hHTEu.OPZvmq1C%2BDgZSniQ3ZSjRFOQscOYh5zTRPa8sm7kxnM; Path=/; Expires=Wed, 13 Aug 2014 21:38:58 GMT; HttpOnly
X-Response-Time: 74126.22450ms
Date: Tue, 12 Aug 2014 21:38:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-12T15:04:38.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "0.1316784390279158"
  },
  {
    "ts": "2014-07-18T21:55:03.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "0.0542175301491523"
  },
  {
    "ts": "2014-07-21T16:26:47.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "0.1106782438503441"
  }
]
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
set-cookie: igloo=s%3ArZ6AP--i8WCcohJGeJ4mUiysyoXBRTiZ.wWmehGVq1sINRYooopRK%2FXbhWPeO3MciUKtGfHXlN3I; Path=/; Expires=Wed, 13 Aug 2014 21:37:54 GMT; HttpOnly
X-Response-Time: 13135.91561ms
Date: Tue, 12 Aug 2014 21:37:54 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-11T04:01:15.000Z",
    "user_id": "2485561232",
    "ticker": "AAPL",
    "sentiment": "-0.4564643833340774"
  },
  {
    "ts": "2014-07-11T04:01:43.000Z",
    "user_id": "2541107853",
    "ticker": "AAPL",
    "sentiment": "-0.3055079719965658"
  },
  {
    "ts": "2014-07-11T04:02:50.000Z",
    "user_id": "2484874556",
    "ticker": "AAPL",
    "sentiment": "0.1006008721400263"
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
