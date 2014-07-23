
# Tweet Volume


## Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1072
ETag: W/"430-1826996724"
set-cookie: igloo=s%3AMlJYWQL3OhgGjn6_Kbiuu8nRZhmcW7im.5143bMZ%2FfB9PBj7VSZBzQ5czIzCuhAN9SdhLzupcQ%2Fk; Path=/; Expires=Thu, 24 Jul 2014 07:45:13 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:13 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-23T07:05:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  },
  {
    "ts": "2014-07-23T07:06:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-23T07:07:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 70006
ETag: W/"11176-1940814807"
set-cookie: igloo=s%3AmJBh8xZSzpx3bhNhlsNAUg_FvjO7o-0H.bghuRJiYH74Uapxol%2BnoXubDlkDSacwkmAamozWnyCI; Path=/; Expires=Thu, 24 Jul 2014 07:45:15 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:15 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T08:01:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-22T08:02:00.000Z",
    "ticker": "AAPL",
    "volume": "2"
  },
  {
    "ts": "2014-07-22T08:05:00.000Z",
    "ticker": "AAPL",
    "volume": "1"
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Volume

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3ANzU0m0WizHbM9nuANg2zi5GkMNCjbQJV.bkD95GGA4qEdzRsP3t5CcZlILM4BFNCvYUU%2Be18QpOk; Path=/; Expires=Thu, 24 Jul 2014 07:45:15 GMT; HttpOnly
Date: Wed, 23 Jul 2014 07:45:15 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily tweet volume historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
