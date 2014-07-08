
# Tweet Buzz


## Tweet Buzz

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2509
ETag: W/"9cd-364826469"
set-cookie: igloo=s%3AeNhGb1mOGrbwsd7VmtbQ_jHzzo4Wg574.3dOR9Ai36nLoxfcQytYEoC%2FYBuQH%2FiEaws%2FDNqm91Y0; Path=/; Expires=Wed, 09 Jul 2014 06:02:05 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-08T05:04:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4684647302904527
  },
  {
    "ts": "2014-07-08T05:06:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.9369294605809053
  },
  {
    "ts": "2014-07-08T05:07:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.9369294605809053
  }
]
```

Realtime intraday data

### HTTP Request

`GET https://open.marketprophit.com/real-time/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Buzz

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 84467
ETag: W/"149f3-2663769506"
set-cookie: igloo=s%3ASedQL7A2Yuf7Jjcqw9gyiVc9vcL_oBq5.n0hKJKEwya3sJlnA%2Bx8Z77dX4KT%2BYAkCVk2WvzSkOFI; Path=/; Expires=Wed, 09 Jul 2014 06:02:05 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:07 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-07T08:00:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4875405485107623
  },
  {
    "ts": "2014-07-07T08:01:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4875405485107623
  },
  {
    "ts": "2014-07-07T08:02:00.000Z",
    "ticker": "AAPL",
    "buzz": 0.4875405485107623
  }
]
```

Historical intraday data

### HTTP Request

`GET https://open.marketprophit.com/historical/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Buzz

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-tweet-buzz?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AQkEXyVJwt76SiFy6zq5ZVW401lLbgKPY.8usYwQ4TWD1HmjtOkwWp3br0eyskjpOGakOioGlm8u4; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:07 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Daily tweet buzz historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
