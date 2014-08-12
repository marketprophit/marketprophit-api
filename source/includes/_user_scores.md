
# User Scores


## User Scores

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 994
ETag: W/"3e2-991096164"
set-cookie: igloo=s%3Aextv1cqokoiVjxpgDcvFfw_ItADbSsGB.OLaevApXHewTeYmisiK2Hv6tfJTv2g5bIitl1DRH3rs; Path=/; Expires=Wed, 13 Aug 2014 21:38:35 GMT; HttpOnly
X-Response-Time: 50920.42047ms
Date: Tue, 12 Aug 2014 21:38:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "1912437001",
    "score": "2.3405694231130942",
    "mp_rank": "1"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "312445120",
    "score": "2.3405694231130942",
    "mp_rank": "2"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "196380949",
    "score": "2.3405694231130942",
    "mp_rank": "3"
  }
]
```

Returns a complete set of historical daily records for a single date.

### HTTP Request

`GET https://open.marketprophit.com/historical/user-scores`



## User Scores Last

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-scores-last"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1038
ETag: W/"40e-1496154372"
set-cookie: igloo=s%3A2hGpxFzu0F9DDfwbxeBfyM5F7HqbmdtY.vmacoIeMf%2FAiuKSfjeoTEhIIgtWwmpg1NYtTQMgiReY; Path=/; Expires=Wed, 13 Aug 2014 21:39:02 GMT; HttpOnly
X-Response-Time: 77848.47744ms
Date: Tue, 12 Aug 2014 21:39:01 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "118840585",
    "score": "-0.2143974594667337",
    "mp_rank": "4444"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "2728758695",
    "score": "-0.0680631214237277",
    "mp_rank": "3291"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "2728774330",
    "score": "-0.3391943186620021",
    "mp_rank": "4955"
  }
]
```

Returns all user scores for the most recent business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/user-scores-last`



## Daily User Scores by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/daily-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AfDNrZN91VOwIoU3eg9pTd34aiGSZ2PVj.OQqa%2B2FIcR9z2GQkt7pTdTsSY5h5h8upDZ%2Fti2LQXYU; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15912.90525ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2013-11-22T05:00:00.000Z",
    "user_id": "14216123",
    "score": "0.0321654952336053",
    "mp_rank": "1374"
  },
  {
    "ts": "2013-11-25T05:00:00.000Z",
    "user_id": "14216123",
    "score": "0.0586937871041895",
    "mp_rank": "1311"
  },
  {
    "ts": "2013-11-26T05:00:00.000Z",
    "user_id": "14216123",
    "score": "0.0586091539884324",
    "mp_rank": "1326"
  }
]
```

Returns user scores for a given range of business dates and user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1827
ETag: W/"723-2263214943"
set-cookie: igloo=s%3A8lmBcHKuQhFyN1NKm4dm5uXguwazxWD8.LvE56ccKP63ujzIZJRt7pliN357KSITUmYOLlomXBi4; Path=/; Expires=Wed, 13 Aug 2014 21:38:30 GMT; HttpOnly
X-Response-Time: 51610.17090ms
Date: Tue, 12 Aug 2014 21:38:30 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "181187043",
    "user_score": "-0.0026369831314982",
    "mp_rank": "2591",
    "ticker": "6E_F",
    "ticker_user_score": "-0.1782710138326910",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "2181334776",
    "user_score": "0.0129599819678115",
    "mp_rank": "2407",
    "ticker": "AA",
    "ticker_user_score": "-0.7452878489777490",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "524732173",
    "user_score": "-0.2173857483249539",
    "mp_rank": "4467",
    "ticker": "AAL",
    "ticker_user_score": "-0.5485664067227436",
    "ticker_rank": "1"
  }
]
```

Returns ticker specific user scores for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AYa76R3z31jf7PVNLRHsKo5UC0GuEzRKO.luvmKCWDvuMtiBr%2BNVJStGS%2FiibpW4WD36q1ZTvtUz4; Path=/; Expires=Wed, 13 Aug 2014 21:37:57 GMT; HttpOnly
X-Response-Time: 15861.59238ms
Date: Tue, 12 Aug 2014 21:37:57 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Ticker specific user score data for range of given business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores by Ticker

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-scores-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1824
ETag: W/"720-3302940062"
set-cookie: igloo=s%3AZgZnQlWwvtfL8ESds9V5SgmackVE9GiV.tzanGK32LpfPH4pbwS6WWLrdsZWrB0vKtepkjxmzE60; Path=/; Expires=Wed, 13 Aug 2014 21:38:46 GMT; HttpOnly
X-Response-Time: 61663.02357ms
Date: Tue, 12 Aug 2014 21:38:46 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "39546678",
    "user_score": "0.0407264434623135",
    "mp_rank": "1914",
    "ticker": "AAPL",
    "ticker_user_score": "1.7242398853672622",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "2377574335",
    "user_score": "0.3268222653142548",
    "mp_rank": "454",
    "ticker": "AAPL",
    "ticker_user_score": "0.9824404578760511",
    "ticker_rank": "2"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "2305140048",
    "user_score": "0.4816157091344744",
    "mp_rank": "222",
    "ticker": "AAPL",
    "ticker_user_score": "0.7152576774099989",
    "ticker_rank": "3"
  }
]
```

Ticker specific user score data for range of given business dates for a given ticker.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-scores-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none



## Sector Specific User Scores

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2198
ETag: W/"896-417811687"
set-cookie: igloo=s%3AxrJCgeKK1VokGSyjTOEpcREhqwMCAyDN.bQIIwIDYOgOGo%2B3DUfOfAe4aRyVOXbDls0wfCoqxB5k; Path=/; Expires=Wed, 13 Aug 2014 21:38:49 GMT; HttpOnly
X-Response-Time: 64912.86781ms
Date: Tue, 12 Aug 2014 21:38:46 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns sector specific user scores for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Scores by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AIuNGog8AUIwqqQX19LsL7FIeEYSZziU-.bWo3K0%2BPdakC7UEgLHSa8zxOd%2FWlvUsSxPDl4vBC1NQ; Path=/; Expires=Wed, 13 Aug 2014 21:38:05 GMT; HttpOnly
X-Response-Time: 23579.81890ms
Date: Tue, 12 Aug 2014 21:38:05 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns sector specific user scores for a given range of business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Scores by Sector

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-scores-by-sector?sector=Technology"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2423
ETag: W/"977-3529212674"
set-cookie: igloo=s%3AojzT2NRF-3qzO3hNJiOEB27TfUAW3_mW.OYKiNuaSvFfdyKv%2Bi5YjTGyk7Ua7OBTyXfEvMT8NrbI; Path=/; Expires=Wed, 13 Aug 2014 21:38:07 GMT; HttpOnly
X-Response-Time: 26034.28419ms
Date: Tue, 12 Aug 2014 21:38:07 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "37555599",
    "user_score": "0.2773472237216517",
    "mp_rank": "601",
    "sector": "Technology",
    "sector_user_score": "1.1098795221983464",
    "sector_rank": "1",
    "tickers": "CAMT, TWTR, GLUU"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "2663504725",
    "user_score": "0.0272548262575489",
    "mp_rank": "2068",
    "sector": "Technology",
    "sector_user_score": "1.0571590376076569",
    "sector_rank": "2",
    "tickers": "VRSN, TRNS, SWIR, AWAY, MRVL, VRNS, SSYS, ADI, UTEK, CHT"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "729002623",
    "user_score": "-0.1134195828181402",
    "mp_rank": "3521",
    "sector": "Technology",
    "sector_user_score": "0.9056044706983220",
    "sector_rank": "3",
    "tickers": "NYBD, HPNN"
  }
]
```

Sector specific user score data for range of given business dates for a given sector.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-scores-by-sector`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none
