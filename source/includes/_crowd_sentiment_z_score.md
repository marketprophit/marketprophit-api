
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AYndAKjnEu_7w42UIHcM8sqmZvOKFbIHp.3f1Rfos8E4ar7Fo6nKnXhXsYvOA7MBFVuJjRRK4CVis; Path=/; Expires=Wed, 13 Aug 2014 10:07:54 GMT; HttpOnly
X-Response-Time: 98.85232ms
Date: Tue, 12 Aug 2014 10:07:54 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 28457
ETag: W/"6f29-3131687514"
set-cookie: igloo=s%3AKfLYfLMcTTBJCgpbseba16_ltfG_kvP4.cmJIsyFNPHobhu0CQGWXEIOkp2Z8UiOf%2BF82zKppjMs; Path=/; Expires=Wed, 13 Aug 2014 10:07:54 GMT; HttpOnly
X-Response-Time: 132.70490ms
Date: Tue, 12 Aug 2014 10:07:54 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T11:42:00.000Z",
    "ticker": "AAPL",
    "z_score": "1.1558816701940617"
  },
  {
    "ts": "2014-08-11T11:46:00.000Z",
    "ticker": "AAPL",
    "z_score": "-0.7048537204762636"
  },
  {
    "ts": "2014-08-11T11:48:00.000Z",
    "ticker": "AAPL",
    "z_score": "0.4562986581253173"
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
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ATJLU3HoMvJGRynn8-I_YWgWar6FoXQSj.e2Z4z053fqMi8YKCL72un3k%2BgKIJni8nMxpq%2Bhq9tPI; Path=/; Expires=Wed, 13 Aug 2014 10:07:55 GMT; HttpOnly
X-Response-Time: 83.30460ms
Date: Tue, 12 Aug 2014 10:07:55 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily crowd sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
