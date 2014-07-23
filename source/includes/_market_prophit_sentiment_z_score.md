
# Market Prophit Sentiment Z-Score


## Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 10828
ETag: W/"2a4c-2788488536"
set-cookie: igloo=s%3AeJxr2RzFL0GLZ9bLojLub-OaPFndR-4f.1%2F0OPY63fUgK0TnzEjBbUsUPoLYPP%2FaQdLdcDLkYx38; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T20:29:35.000Z",
    "ticker": "AAPL",
    "z_score": "1.4666281921092730"
  },
  {
    "ts": "2014-07-23T20:29:41.000Z",
    "ticker": "AAPL",
    "z_score": "1.1426347363010663"
  },
  {
    "ts": "2014-07-23T20:30:03.000Z",
    "ticker": "AAPL",
    "z_score": "1.0798244106675652"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 170073
ETag: W/"29859-42226784"
set-cookie: igloo=s%3A4ci4aL6rOCVlNOcuNVUVsZO-zyjsT0FN.aaAMt40C63Dk9rjehL1eVW5NKTmVh6qmmEKj%2B2LkUkI; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T09:17:05.000Z",
    "ticker": "AAPL",
    "z_score": "-0.6225343035556520"
  },
  {
    "ts": "2014-07-22T09:24:59.000Z",
    "ticker": "AAPL",
    "z_score": "-3.4290732065843934"
  },
  {
    "ts": "2014-07-22T09:58:39.000Z",
    "ticker": "AAPL",
    "z_score": "1.1503850832778924"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A26kdPvHjnhYywCSc6kk0gLERQGCx-mDB.rddo3lzDXhfqJFvL5WvXEtQ%2BrY%2FEepNJyU7ocOa8g2E; Path=/; Expires=Thu, 24 Jul 2014 21:29:20 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:20 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily market prophit sentiment z-score historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
