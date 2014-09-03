
# Daily Bundled Chart Data

Returns a complete range of historical daily records for a given ticker based on a date range (start date, end date).


## Daily Crowd Sentiment Chart Data

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-chart-data?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 74862
ETag: W/"1246e-4172623629"
set-cookie: igloo=s%3AWQUKfl4Ky4LhMjrafNqTe22rfSCA2SGu.P0lTZLprIB39wBXe%2BK0jmcvQP8FYjeqKsgy8owQdbc8; Path=/; Expires=Thu, 04 Sep 2014 21:05:48 GMT; HttpOnly
X-Response-Time: 28156.28194ms
Date: Wed, 03 Sep 2014 21:05:47 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-09-03T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "-0.0126064047303888",
    "crowd_sentiment_moving_average": "0.0372128063117339",
    "crowd_sentiment_z_score": "-1.4353067630458214",
    "crowd_sentiment_z_score_moving_average": "0.0068693110284658",
    "volume": "1114",
    "buzz": "0.9207910178289327"
  },
  {
    "ts": "2013-09-04T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0651780828663888",
    "crowd_sentiment_moving_average": "0.0334003281410289",
    "crowd_sentiment_z_score": "0.8884218438623824",
    "crowd_sentiment_z_score_moving_average": "-0.1095109573098801",
    "volume": "1659",
    "buzz": "1.1353296784216074"
  },
  {
    "ts": "2013-09-05T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0087030297466099",
    "crowd_sentiment_moving_average": "0.0367511563869996",
    "crowd_sentiment_z_score": "-0.7912412280133767",
    "crowd_sentiment_z_score_moving_average": "-0.0321145941304713",
    "volume": "1056",
    "buzz": "0.8940075442868701"
  }
]
```

Historical consolidated daily records

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago from yesterday (limited to 5 years max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 5 years max start-end range)



## Daily Market Prophit Sentiment Chart Data

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-chart-data?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 46292
ETag: W/"b4d4-3643036842"
set-cookie: igloo=s%3AuCX0DQWvaj1V0JXHLrlVapzyI_C3DJOW.KkZaDtKd4VKMTJGyTgbJnvC9J6nriB1Y8DiIPMp8uMQ; Path=/; Expires=Thu, 04 Sep 2014 21:05:54 GMT; HttpOnly
X-Response-Time: 34462.14427ms
Date: Wed, 03 Sep 2014 21:05:53 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-25T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0317689117273811",
    "mp_sentiment_moving_average": null,
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0423878809037944",
    "mp_sentiment_moving_average": "0.0317689117273811",
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2013-11-27T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0482955213890253",
    "mp_sentiment_moving_average": "0.0370783963155878",
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  }
]
```

Historical consolidated one second records.

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago from yesterday (limited to 5 years max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 5 years max start-end range)
