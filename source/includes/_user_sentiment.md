
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
set-cookie: igloo=s%3A5B_kmCSGwSW9xx6ybxg-ZT1Je1GhFG7Z.V0HumQfJ2rj2Po02NT0LH1k0YAotTx131UVsGLJfcUM; Path=/; Expires=Thu, 04 Sep 2014 21:06:37 GMT; HttpOnly
X-Response-Time: 74437.35592ms
Date: Wed, 03 Sep 2014 21:06:37 GMT
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
Content-Length: 279
ETag: W/"117-4213572241"
set-cookie: igloo=s%3ANj_eGZXUhSiaBlbEyRuLif5omiQHMwBb.UEBcE%2BgdJ3zEYggHX3xMO17wPeAFOq2mC3yY3fo%2FEfQ; Path=/; Expires=Thu, 04 Sep 2014 21:06:27 GMT; HttpOnly
X-Response-Time: 55484.97377ms
Date: Wed, 03 Sep 2014 21:06:26 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-09-04T01:04:50.000Z",
    "user_id": "16732770",
    "ticker": "AAPL",
    "sentiment": "-0.1779961001799503",
    "user_score": "-0.2758648199349465"
  },
  {
    "ts": "2014-09-04T01:04:57.000Z",
    "user_id": "21917683",
    "ticker": "AAPL",
    "sentiment": "0.3824375192808119",
    "user_score": "0.0167956882209607"
  }
]
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
Content-Length: 315
ETag: W/"13b-3610139013"
set-cookie: igloo=s%3AaRb2_t7SMnQuw2-dZx7G8bnF1PYYTZCh.D1GPHXaCs%2BFQKXXXue1NA54RoLtLoawEVZ5BfsbxCQk; Path=/; Expires=Thu, 04 Sep 2014 21:06:31 GMT; HttpOnly
X-Response-Time: 70468.29455ms
Date: Wed, 03 Sep 2014 21:06:31 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-08T20:23:28.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "-0.7557448993700525"
  },
  {
    "ts": "2014-08-11T22:50:07.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "0.0676227002719756"
  },
  {
    "ts": "2014-08-22T02:36:06.000Z",
    "user_id": "14216123",
    "ticker": "AAPL",
    "sentiment": "-0.0362879863185483"
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
