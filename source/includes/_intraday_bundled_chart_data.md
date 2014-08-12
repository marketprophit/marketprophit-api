
# Intraday Bundled Chart Data

Returns a complete range of historical intraday records for a given ticker based on a date range (start date, end date).


## Crowd Sentiment Chart Data

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/crowd-sentiment-chart-data?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2601
ETag: W/"a29-1091945016"
set-cookie: igloo=s%3Advr3T0DaycGTPjqP6LwB--4urmF7dFwS.yQi6WponT7WtDuFk2iBMXqLDRAIs1%2Br0ZxApGP%2Bra1E; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 19593.50319ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T08:16:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.2154580407610848",
    "crowd_sentiment_moving_average": "-0.1868513275494073",
    "crowd_sentiment_z_score": null,
    "crowd_sentiment_z_score_moving_average": null,
    "volume": "1",
    "buzz": "0.5467389933139909"
  },
  {
    "ts": "2014-08-04T08:37:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "-0.1296460259691510",
    "crowd_sentiment_moving_average": "0.2154580407610848",
    "crowd_sentiment_z_score": null,
    "crowd_sentiment_z_score_moving_average": null,
    "volume": "2",
    "buzz": "1.0934779866279818"
  },
  {
    "ts": "2014-08-04T08:58:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0002490458659954",
    "crowd_sentiment_moving_average": "-0.1296460259691510",
    "crowd_sentiment_z_score": null,
    "crowd_sentiment_z_score_moving_average": null,
    "volume": "1",
    "buzz": "0.5467389933139909"
  }
]
```

Historical consolidated one minute records

### HTTP Request

`GET https://open.marketprophit.com/historical/crowd-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago from yesterday (limited to 7 days max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 7 days max start-end range)



## Market Prophit Sentiment Chart Data

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-chart-data?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2067
ETag: W/"813-68892940"
set-cookie: igloo=s%3AmzhEEP4DInZTJZ5nE8lJnK-UwS-tt52a.jAfH7%2BaxcDqcr1nVRVV8GKsm07Eux3ISyaQ1OhIu6OE; Path=/; Expires=Wed, 13 Aug 2014 21:38:30 GMT; HttpOnly
X-Response-Time: 52537.98909ms
Date: Tue, 12 Aug 2014 21:38:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T13:53:15.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "-0.0531251643690848",
    "mp_sentiment_moving_average": null,
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2014-08-04T13:53:49.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "-0.0531251643690848",
    "mp_sentiment_moving_average": "-0.0531251643690848",
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2014-08-04T13:55:05.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "-0.0531251643690848",
    "mp_sentiment_moving_average": "-0.0531251643690848",
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  }
]
```

Historical consolidated one second records.

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago from yesterday (limited to 7 days max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 7 days max start-end range)
