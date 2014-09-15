
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 886
ETag: W/"376-2319470232"
set-cookie: igloo=s%3A1TGFMRI-veVh8EH8SAmUumjSzzbsUTH9.Kxrk1iAfh6gKw3W1S2phFxXLv9BWJ%2BcCWC1zPjs9MoU; Path=/; Expires=Wed, 13 Aug 2014 21:37:30 GMT; HttpOnly
X-Response-Time: 114.22398ms
Date: Tue, 12 Aug 2014 21:37:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-12T20:38:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0207969133106709"
  },
  {
    "ts": "2014-08-12T20:40:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0065589103823894"
  },
  {
    "ts": "2014-08-12T20:42:00.000Z",
    "ticker": "AAPL",
    "moving_average": "-0.0203041829188076"
  }
]
```

Realtime moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 881
ETag: W/"371-2214411452"
set-cookie: igloo=s%3AFHr5hXCWnF86Jzn5JwTpbGtp4u_tdUjl.qB6eUNwNM%2BZrjLRv0rBX1AX923rU2mTuLNSD02GiWWQ; Path=/; Expires=Wed, 13 Aug 2014 21:38:34 GMT; HttpOnly
X-Response-Time: 63746.49997ms
Date: Tue, 12 Aug 2014 21:38:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-11T00:02:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.3139140224709963"
  },
  {
    "ts": "2013-08-11T00:04:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2752892821760515"
  },
  {
    "ts": "2013-08-11T00:06:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.2099071082431231"
  }
]
```

Historical moving average intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Crowd Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 881
ETag: W/"371-546909383"
set-cookie: igloo=s%3A1OYT-fh0mBZxd55KLa39h37JbMLsmW94.96%2FqONIOZKznN6EwRKZ689pdTfgtS0f5ZgIQCIxamY0; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7491.25694ms
Date: Tue, 12 Aug 2014 21:37:38 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0352639338098013"
  },
  {
    "ts": "2013-11-27T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0393013576390539"
  },
  {
    "ts": "2013-11-29T05:00:00.000Z",
    "ticker": "AAPL",
    "moving_average": "0.0469789239912700"
  }
]
```

Daily crowd sentiment moving average historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | last year from previous biz day
end_date | End date range (MM-DD-YYYY) | no | previous business day
