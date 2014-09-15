
# Streaming Intraday Data


## Get Crowd Sentiment

Stream of one minute records for all tickers with data (AVG CROWD SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
crowd-sentiment | every minute | `ts`, `ticker`, `crowd_sentiment`

> Returns response such as (limited `results` for brevity):

```json
{
  "path": "crowd-sentiment",
  "params": {},
  "timestamp": "2014-09-15T05:06:01.321Z",
  "results": [
    {
      "ts": "2014-09-15T09:04:00.000Z",
      "ticker": "ANY",
      "crowd_sentiment": "-0.0337734249681757"
    },
    {
      "ts": "2014-09-15T09:04:00.000Z",
      "ticker": "CMGO",
      "crowd_sentiment": "0.2301403504966760"
    },
    {
      "ts": "2014-09-15T09:04:00.000Z",
      "ticker": "CSCO",
      "crowd_sentiment": "-0.0511838856522857"
    },
    {
      "ts": "2014-09-15T09:04:00.000Z",
      "ticker": "EURAUD",
      "crowd_sentiment": "0.2983217845157061"
    },
    {
      "ts": "2014-09-15T09:04:00.000Z",
      "ticker": "FSD",
      "crowd_sentiment": "0.6361262297611769"
    }
  ]
}
```

## Get User Sentiment

Stream of consolidated one second records for all tickers with data (RAW USER SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
user-sentiment | every second | `ts`, `user_id`, `ticker`, `sentiment`, `user_score`

> Returns response such as (limited `results` for brevity):

```json
{
  "path": "user-sentiment",
  "params": {},
  "timestamp": "2014-09-15T05:00:51.390Z",
  "results": [
    {
      "ts": "2014-09-15T09:00:30.000Z",
      "user_id": "2243075472",
      "ticker": "JABA",
      "sentiment": "0.067644772321236",
      "user_score": "0.0348298733495368"
    }
  ]
}
```

## Get Market Prophit Sentiment

Stream of one second records for all tickers with data (MP SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
market-prophit-sentiment | every second | `ts`, `ticker`, `mp_sentiment`

> Returns response such as (limited `results` for brevity):

```json
{
  "path": "market-prophit-sentiment",
  "params": {},
  "timestamp": "2014-09-15T05:03:05.458Z",
  "results": []
}
```

# Streaming Intraday Bundled Chart Data

Pushes the complete set of user sentiment records for all tickers and users for the most recent full second of data.


## Get Crowd Sentiment Chart Data

Stream of latest consolidated one minute records for all tickers with data.

Path | Frequency | Payload
---- | --------- | -------
crowd-sentiment-chart-data | every minute | `ts`, `ticker`, `crowd_sentiment`, `crowd_sentiment_moving_average`, `crowd_sentiment_z_score`, `crowd_sentiment_z_score_moving_avg`, `volume`, `buzz`

> Returns response such as (limited `results` for brevity):

```json
{
  "path": "crowd-sentiment-chart-data",
  "params": {},
  "timestamp": "2014-09-15T04:58:00.404Z",
  "results": [
    {
      "ts": "2014-09-15T08:56:00.000Z",
      "ticker": "TSLA",
      "crowd_sentiment": "0.6908441588708437",
      "crowd_sentiment_moving_average": "0.0472162020321326",
      "crowd_sentiment_z_score": "-1.4353067630458214",
      "crowd_sentiment_z_score_moving_average": "0.0068693110284658",
      "volume": "1",
      "buzz": "0.7897299690128375"
    }
  ]
}
```

## Get Market Prophit Sentiment Chart Data

Stream of latest consolidated one second records for all tickers with data.

Path | Frequency | Payload
---- | --------- | -------
market-prophit-sentiment-chart-data | every second | `ts`, `ticker`, `mp_sentiment`, `mp_sentiment_moving_average`, `mp_sentiment_z_score`, `mp_sentiment_z_score_moving_avg`

> Returns response such as (limited `results` for brevity):

```json
{
  "path": "market-prophit-sentiment-chart-data",
  "params": {},
  "timestamp": "2014-09-15T05:04:17.963Z",
  "results": []
}
```
