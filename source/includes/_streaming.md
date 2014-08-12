
# Streaming Intraday Data


## Get Crowd Sentiment

Stream of one minute records for all tickers with data (AVG CROWD SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
crowd-sentiment | every minute | `ts`, `ticker`, `crowd_sentiment`


## Get User Sentiment

Stream of consolidated one second records for all tickers with data (RAW USER SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
user-sentiment | every second | `ts`, `user_id`, `ticker`, `sentiment`, `user_score`


## Get Market Prophit Sentiment

Stream of one second records for all tickers with data (MP SENTIMENT).

Path | Frequency | Payload
---- | --------- | -------
market-prophit-sentiment | every second | `ts`, `ticker`, `mp_sentiment`



# Streaming Intraday Bundled Chart Data

Pushes the complete set of user sentiment records for all tickers and users for the most recent full second of data.


## Get Crowd Sentiment Chart Data

Stream of latest consolidated one minute records for all tickers with data.

Path | Frequency | Payload
---- | --------- | -------
crowd-sentiment-chart-data | every minute | `ts`, `ticker`, `crowd_sentiment`, `crowd_sentiment_moving_average`, `crowd_sentiment_z_score`, `crowd_sentiment_z_score_moving_avg`, `volume`, `buzz`


## Get Market Prophit Sentiment Chart Data

Stream of latest consolidated one second records for all tickers with data.

Path | Frequency | Payload
---- | --------- | -------
market-prophit-sentiment-chart-data | every second | `ts`, `ticker`, `mp_sentiment`, `mp_sentiment_moving_average`, `mp_sentiment_z_score`, `mp_sentiment_z_score_moving_avg`
