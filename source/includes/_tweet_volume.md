
# Tweet Volume


## Tweet Volume

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2014
ETag: W/"7de-1351849824"
set-cookie: igloo=s%3AorWj7BMoAtmAF2vOqK2jXrGpL91nPobr.RG5O3fE8FVZitToIpOWFWrZjHj3kV9CsSxAPxBjQk1s; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:09 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-08T05:04:00.000Z",
    "ticker": "AAPL",
    "volume": 1
  },
  {
    "ts": "2014-07-08T05:06:00.000Z",
    "ticker": "AAPL",
    "volume": 2
  },
  {
    "ts": "2014-07-08T05:07:00.000Z",
    "ticker": "AAPL",
    "volume": 2
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 68025
ETag: W/"109b9-1495726735"
set-cookie: igloo=s%3At43uBSQb5SN5jBQnIDd8SKdgFEFYOeq5.yWXSMDqDnv23s9x%2BploVXVYSX8P70rgvYI5U6m00tCY; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:14 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-07T08:00:00.000Z",
    "ticker": "AAPL",
    "volume": 1
  },
  {
    "ts": "2014-07-07T08:01:00.000Z",
    "ticker": "AAPL",
    "volume": 1
  },
  {
    "ts": "2014-07-07T08:02:00.000Z",
    "ticker": "AAPL",
    "volume": 1
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A8RTwb7qyU8e_pktldDgpbvjMlW6A9Vy7.7DPSCyZLvlAezL%2BoeHnWmsTBNm8assSqD7BfObp2D8Q; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:09 GMT
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
