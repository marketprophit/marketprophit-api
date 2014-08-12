
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
set-cookie: igloo=s%3AFrZFaPQEkMDpMWEmbqLh-ALmzRLv0NE5.bec%2F2d2xe3df60BqBTBqLucIDX7mHQxyR62dePIB2ZA; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1517.17479ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
set-cookie: igloo=s%3AgAvDgBv34-Oanqjl4-dqsmyPl_85k2uh.wFGya%2BD%2Futo3cRPbjvOZH%2Bm9GcjA4Is8k14KdvJo1LA; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1553.17598ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AsfLaWb7Dky4Vacr-JarG4KsTmQB2C6Gj.t28EvyEc2OFp7o%2BMo0D4h36V2Qp1UlsacLBpSh1Y6VY; Path=/; Expires=Wed, 13 Aug 2014 10:07:57 GMT; HttpOnly
X-Response-Time: 1706.89541ms
Date: Tue, 12 Aug 2014 10:07:57 GMT
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
Content-Length: 5024206
ETag: W/"4ca9ce-2098979112"
set-cookie: igloo=s%3A3DNzydHYb6TCQeSdLniS2YNKDtBtlhAh.clNR6yhHxXrCl%2FoUd%2FMOIqd8Lug1l%2BpQEbjBBKnH0nE; Path=/; Expires=Wed, 13 Aug 2014 10:08:11 GMT; HttpOnly
X-Response-Time: 16237.79669ms
Date: Tue, 12 Aug 2014 10:08:11 GMT
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
