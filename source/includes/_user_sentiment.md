
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
Content-Length: 617
ETag: W/"269-952293755"
set-cookie: igloo=s%3A5B_kmCSGwSW9xx6ybxg-ZT1Je1GhFG7Z.V0HumQfJ2rj2Po02NT0LH1k0YAotTx131UVsGLJfcUM; Path=/; Expires=Thu, 04 Sep 2014 21:06:37 GMT; HttpOnly
set-cookie: igloo=s%3AOEhhiCZ8NxeN4dC_U58v0XjlRUYqrBaD.NwUisBEbpXYK5TgYtw3Zctw6E3tDuXgbtRWoCf5eHaE; Path=/; Expires=Sat, 13 Sep 2014 05:22:35 GMT; HttpOnly
X-Response-Time: 110.22766ms
Date: Fri, 12 Sep 2014 05:22:35 GMT
Connection: keep-alive

```

> Returns response such as (limited `results` for brevity):


```json
[
  {
    "ts": "2014-09-12T09:22:16.000Z",
    "user_id": "306380230",
    "ticker": "ABBV",
    "sentiment": "-0.2588996033555621",
    "user_score": "-0.0302670281535698"
  },
  {
    "ts": "2014-09-12T09:22:16.000Z",
    "user_id": "306380230",
    "ticker": "BKW",
    "sentiment": "-0.2125797315247087",
    "user_score": "-0.0302670281535698"
  },
  {
    "ts": "2014-09-12T09:22:16.000Z",
    "user_id": "306380230",
    "ticker": "CQB",
    "sentiment": "-0.2175806295716652",
    "user_score": "-0.0302670281535698"
  },
  {
    "ts": "2014-09-12T09:22:16.000Z",
    "user_id": "306380230",
    "ticker": "MDT",
    "sentiment": "-0.2143790834311274",
    "user_score": "-0.0302670281535698"
  },
  {
    "ts": "2014-09-12T09:22:16.000Z",
    "user_id": "306380230",
    "ticker": "MYL",
    "sentiment": "-0.2509134584133897",
    "user_score": "-0.0302670281535698"
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
start_ts | Start date range (MM-DD-YYYY) or ISO-8601 timestamp | no | 1 month ago
end_ts | End date range (MM-DD-YYYY) or ISO-8601 timestamp | no | previous business day
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
start_ts | Start date range (MM-DD-YYYY) or ISO-8601 timestamp | no | 1 month ago
end_ts | End date range (MM-DD-YYYY) or ISO-8601 timestamp | no | previous business day
user_id | User ID of a Twitter username | no | none
