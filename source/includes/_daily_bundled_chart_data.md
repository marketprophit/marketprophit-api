
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
Content-Length: 2965
ETag: W/"b95-3643403431"
set-cookie: igloo=s%3AE7BEtjmNQdjOgw_VAAWFwyb088UBMixC.7P9brP4UEq%2FxMPlBQOuGhGeky%2B0BSMh2R2MgO0DO9Vc; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7594.65826ms
Date: Tue, 12 Aug 2014 21:37:38 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-08-12T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0655677621539281",
    "crowd_sentiment_moving_average": "0.0248213637577311",
    "crowd_sentiment_z_score": "1.0503527659059142",
    "crowd_sentiment_z_score_moving_average": "0.0648624193767667",
    "volume": "1300",
    "buzz": "1.1332221237110470"
  },
  {
    "ts": "2013-08-13T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0839128251237732",
    "crowd_sentiment_moving_average": "0.0314445999397785",
    "crowd_sentiment_z_score": "1.5653893143069957",
    "crowd_sentiment_z_score_moving_average": "0.2077552673683673",
    "volume": "4019",
    "buzz": "2.5277599695744970"
  },
  {
    "ts": "2013-08-14T04:00:00.000Z",
    "ticker": "AAPL",
    "crowd_sentiment": "0.0380635920137041",
    "crowd_sentiment_moving_average": "0.0322217702426695",
    "crowd_sentiment_z_score": "0.1691821954858430",
    "crowd_sentiment_z_score_moving_average": "0.2298030781046750",
    "volume": "3246",
    "buzz": "1.5415269201662773"
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
Content-Length: 2067
ETag: W/"813-3199862359"
set-cookie: igloo=s%3Af3Mb1lczObH_noSCLzKSSWKnt9DKV-TY.LG23iTRLpsij1DE65s4fX4PF%2BcS4Yvc8MMkpiunenCk; Path=/; Expires=Wed, 13 Aug 2014 21:37:38 GMT; HttpOnly
X-Response-Time: 7345.31196ms
Date: Tue, 12 Aug 2014 21:37:38 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-25T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0352639338098013",
    "mp_sentiment_moving_average": null,
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0433387814683065",
    "mp_sentiment_moving_average": "0.0352639338098013",
    "mp_sentiment_z_score": null,
    "mp_sentiment_z_score_moving_average": null
  },
  {
    "ts": "2013-11-27T05:00:00.000Z",
    "ticker": "AAPL",
    "mp_sentiment": "0.0623340566957021",
    "mp_sentiment_moving_average": "0.0393013576390539",
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
