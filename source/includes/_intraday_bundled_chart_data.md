
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
Content-Length: 1020772
ETag: W/"f9364-2096026610"
set-cookie: igloo=s%3Ab8-aaaig8KZQ45EMSqaVgXpd63odlz9v.TdW%2FjbBhkMIa0g%2BT70yPXlqtjnNOXeBJ9uHHrv6fbDA; Path=/; Expires=Thu, 04 Sep 2014 21:05:54 GMT; HttpOnly
X-Response-Time: 35084.21509ms
Date: Wed, 03 Sep 2014 21:05:53 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-26T08:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0096442612293301",
    "crowd_sentiment_moving_average": "0.0472162020321326",
    "crowd_sentiment_z_score": "-1.4353067630458214",
    "crowd_sentiment_z_score_moving_average": "0.0068693110284658",
    "volume": "1",
    "buzz": "0.4655859321335315"
  },
  {
    "ts": "2014-08-26T08:03:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.1814690181269212",
    "crowd_sentiment_moving_average": "0.0393281377346668",
    "crowd_sentiment_z_score": "-1.4353067630458214",
    "crowd_sentiment_z_score_moving_average": "0.0068693110284658",
    "volume": "2",
    "buzz": "0.9311718642670630"
  },
  {
    "ts": "2014-08-26T08:09:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "-0.1409181494437186",
    "crowd_sentiment_moving_average": "0.0570957477836986",
    "crowd_sentiment_z_score": "-1.4353067630458214",
    "crowd_sentiment_z_score_moving_average": "0.0068693110284658",
    "volume": "1",
    "buzz": "0.4655859321335315"
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
Content-Length: 791827
ETag: W/"c1513-244391099"
set-cookie: igloo=s%3A_Ao8-T9ECybFXYft1LBAtg_pCWz6wQZ_.i9m23lTBY1SBO4RWsQJvfJcAWD9ARZPbMn2oluBVdxs; Path=/; Expires=Thu, 04 Sep 2014 21:06:08 GMT; HttpOnly
X-Response-Time: 47849.48164ms
Date: Wed, 03 Sep 2014 21:06:08 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-26T08:21:27.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0640749800780658",
    "mp_sentiment_moving_average": "0.0317689117273811",
    "mp_sentiment_z_score": "1.2924519236334542",
    "mp_sentiment_z_score_moving_average": "0.0068693110284658"
  },
  {
    "ts": "2014-08-26T10:45:02.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0710010821847628",
    "mp_sentiment_moving_average": "0.0317689117273811",
    "mp_sentiment_z_score": "1.2924519236334542",
    "mp_sentiment_z_score_moving_average": "0.0068693110284658"
  },
  {
    "ts": "2014-08-26T11:25:45.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0106183761868529",
    "mp_sentiment_moving_average": "0.0317689117273811",
    "mp_sentiment_z_score": "1.2924519236334542",
    "mp_sentiment_z_score_moving_average": "0.0068693110284658"
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
