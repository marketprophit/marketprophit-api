
# Market Prophit Sentiment Z-Score


## Market Prophit Sentiment Z-Score

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 4869
ETag: W/"1305-3183917410"
Set-Cookie: igloo=s%3AM7MAkUhuyqeZFXQt4XxHmozl.%2BwrN%2FOoFsCp761NPyFZRVtZXIg0V7cks%2BeQ%2FwN5fpmw; Path=/; Expires=Sat, 21 Jun 2014 17:52:01 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:01 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T16:58:15.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2023158335097684
  },
  {
    "ts": "2014-06-20T16:58:17.000Z",
    "ticker": "AAPL",
    "signal_value": 0.2032747902835425
  },
  {
    "ts": "2014-06-20T16:58:54.000Z",
    "ticker": "AAPL",
    "signal_value": 0.231983304253834
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 349123
ETag: W/"553c3-1911107334"
Set-Cookie: igloo=s%3AA1TOFDNa3zO1JbZGCHnW4PIN.GF3JgdRl5Dbh1K%2B186%2Fj6weyOA2toI0C%2BSUTJXkQL%2Bc; Path=/; Expires=Sat, 21 Jun 2014 17:52:19 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:19 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-13T21:52:06.000Z",
    "ticker": "AAPL",
    "signal_value": -0.0213048049812653
  },
  {
    "ts": "2014-06-13T21:53:42.000Z",
    "ticker": "AAPL",
    "signal_value": -0.1007951003547617
  },
  {
    "ts": "2014-06-13T21:54:25.000Z",
    "ticker": "AAPL",
    "signal_value": 0.0228590125328268
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-market-prophit-sentiment-z-score?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 345
ETag: W/"159-1909259470"
Set-Cookie: igloo=s%3AgyWRPFhMoVbiuCKb3BArbVBs.V5v3lCQKkS%2B4PPA%2Fxzo1qqAU983%2B4M2JiXwMEa5vwfw; Path=/; Expires=Sat, 21 Jun 2014 17:52:04 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0411697014125595
  },
  {
    "ts": "2014-06-17T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0317472777801269
  },
  {
    "ts": "2014-06-18T00:00:00.000Z",
    "ticker": "AAPL",
    "average_signal": 0.0255445882252359
  }
]
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
