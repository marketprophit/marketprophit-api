
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
Content-Length: 816
ETag: W/"330-3899174977"
set-cookie: igloo=s%3AzLZtn86kDTYpN-XRdYtqx45E9kr74m6n.nQKzGpcalHu5TYPtdgS8%2BFfBlvw%2BhP9ogPYb5jx%2B01M; Path=/; Expires=Wed, 13 Aug 2014 21:37:30 GMT; HttpOnly
X-Response-Time: 222.73015ms
Date: Tue, 12 Aug 2014 21:37:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:38:00.000Z",
    "ticker": "AAPL",
    "z_score": "1.2924519236334542"
  },
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.4138185791093830"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.2696687267340823"
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
Content-Length: 819
ETag: W/"333-3709267225"
set-cookie: igloo=s%3AA-nGKaFBa0mi8z7RKzsOpWpR3ZPrstjP.r%2FLWyghqktXXkyXe03r3fZy%2BIWBtQP2jm4CP43dKtBY; Path=/; Expires=Wed, 13 Aug 2014 21:38:13 GMT; HttpOnly
X-Response-Time: 35176.02233ms
Date: Tue, 12 Aug 2014 21:38:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:07:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.7338374164852608"
  },
  {
    "ts": "2013-08-11T00:08:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.6298024407780379"
  },
  {
    "ts": "2013-08-11T00:09:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.8079052313763703"
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
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 814
ETag: W/"32e-3189631072"
set-cookie: igloo=s%3A4AudOx7G2rDQET3-8sVO89MyRte_GQ2R.Gp3Ds7nuRRVNIWXUTf7lg7T14TBkEnOkQRNyIB6WoEE; Path=/; Expires=Wed, 13 Aug 2014 21:37:37 GMT; HttpOnly
X-Response-Time: 6450.37407ms
Date: Tue, 12 Aug 2014 21:37:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "1.0503527659059142"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "1.5653893143069957"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.1691821954858430"
  }
]
```

Daily crowd sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | last year from previous biz day
end_date | End date range (MM-DD-YYYY) | no | previous business day
