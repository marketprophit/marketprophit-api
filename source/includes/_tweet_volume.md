
# Tweet Volume


## Tweet Volume

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2075
ETag: W/"81b-570321403"
Set-Cookie: igloo=s%3Ag59FTg2KOxB4wdBpO5Gz2oKU.KVM4q%2FfZ7Ex2VsTYgizIASacKTFPpnThzuGPqEBt2xA; Path=/; Expires=Sat, 21 Jun 2014 17:52:09 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:09 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-20T16:55:00.000Z",
    "ticker": "AAPL",
    "volume": 3
  },
  {
    "ts": "2014-06-20T16:58:00.000Z",
    "ticker": "AAPL",
    "volume": 3
  },
  {
    "ts": "2014-06-20T16:59:00.000Z",
    "ticker": "AAPL",
    "volume": 5
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
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 247608
ETag: W/"3c738-1942467220"
Set-Cookie: igloo=s%3AvysI6wFMk4GfG8U3zG4Slol2.YqZtPsgvuFt8y1YZHwrhfTbv%2FuKlam2o0Jh3turtnqM; Path=/; Expires=Sat, 21 Jun 2014 17:52:10 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:10 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-13T21:52:00.000Z",
    "ticker": "AAPL",
    "volume": 4
  },
  {
    "ts": "2014-06-13T21:53:00.000Z",
    "ticker": "AAPL",
    "volume": 1
  },
  {
    "ts": "2014-06-13T21:54:00.000Z",
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
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Volume

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-tweet-volume?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 257
ETag: W/"101-875479837"
Set-Cookie: igloo=s%3Ac4AIcGTvmMTXSTD06a4hArqN.LbNiA2kFa38Zr7Iq2aj%2FFLVSDvavJYwi7GUmAqELDNY; Path=/; Expires=Sat, 21 Jun 2014 17:52:06 GMT; HttpOnly
Date: Fri, 20 Jun 2014 17:52:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-06-16T00:00:00.000Z",
    "ticker": "AAPL",
    "volume": 1452
  },
  {
    "ts": "2014-06-17T00:00:00.000Z",
    "ticker": "AAPL",
    "volume": 1129
  },
  {
    "ts": "2014-06-18T00:00:00.000Z",
    "ticker": "AAPL",
    "volume": 1099
  }
]
```

Daily tweet volume historical data

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
