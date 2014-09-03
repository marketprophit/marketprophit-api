
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AATpcO23gHCkhlvR-K2gXTXbFuug38I7s.e4rlLU4t4Mt72YZlEv6JrbeDX%2BuKKfJhyQuSIK%2BL1DE; Path=/; Expires=Thu, 04 Sep 2014 21:06:37 GMT; HttpOnly
X-Response-Time: 74538.73302ms
Date: Wed, 03 Sep 2014 21:06:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "2775681704",
    "score": "2.0001421921325333",
    "mp_rank": "1"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "1235173028",
    "score": "1.3150460972868192",
    "mp_rank": "2"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "1342526569",
    "score": "1.2986772979449543",
    "mp_rank": "3"
  }
]
```

Returns a complete set of historical daily records for a single date.

### HTTP Request

`GET https://open.marketprophit.com/historical/user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
date | Date (MM-DD-YYYY) | no | previous business day


## User Scores Last

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-scores-last"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 347428
ETag: W/"54d24-3942949263"
set-cookie: igloo=s%3AWqhFT-iaDBaTVtYRb0MSWluoODgY_mG9.IKV4BevKvReJ03eqFDv%2Fs83lQOm8lA2d3glqHGI5FhI; Path=/; Expires=Thu, 04 Sep 2014 21:06:02 GMT; HttpOnly
X-Response-Time: 41915.65650ms
Date: Wed, 03 Sep 2014 21:06:00 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "118840585",
    "score": "0.1943254240169530",
    "mp_rank": "810"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "408677509",
    "score": "0.2186445835267166",
    "mp_rank": "744"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "399673647",
    "score": "0.0131685023390215",
    "mp_rank": "1734"
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
set-cookie: igloo=s%3AbJBMuvhtiFPGeIfrfFr-qFhNqsFrxPwI.0ZSSsp8fhwVICqscFaI%2BpMg%2Fcff6Uz%2BYtFar39AbxIA; Path=/; Expires=Thu, 04 Sep 2014 21:07:02 GMT; HttpOnly
X-Response-Time: 90719.95637ms
Date: Wed, 03 Sep 2014 21:07:02 GMT
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Az36zBqtp0u-CMMHvHmDve6P5O_YAIr8d.phr4xYXWN3alyvbi8oB2smhNa4Z5sPWVZYiPEjGDIJM; Path=/; Expires=Thu, 04 Sep 2014 21:06:06 GMT; HttpOnly
X-Response-Time: 35236.41063ms
Date: Wed, 03 Sep 2014 21:06:06 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 716582
ETag: W/"aef26-3851160489"
set-cookie: igloo=s%3AKP84Uv-Pnvw9nYNp1UkG92gioVmWlXni.wFJ71Nw7TylMltKtBHuZU27aLRVngLQw5Uu3UqFGy7o; Path=/; Expires=Thu, 04 Sep 2014 21:06:46 GMT; HttpOnly
X-Response-Time: 83719.51932ms
Date: Wed, 03 Sep 2014 21:06:37 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "246134345",
    "user_score": "0.0249420818533537",
    "mp_rank": "1670",
    "sector": "Agriculture",
    "sector_user_score": "0.5885757038418225",
    "sector_rank": "1",
    "tickers": "ZW_F, CT_F, CC_F, ZS_F, ZC_F"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "120004341",
    "user_score": "0.1943121648507866",
    "mp_rank": "811",
    "sector": "BasicMaterials",
    "sector_user_score": "1.8568091196540009",
    "sector_rank": "1",
    "tickers": "EMES, PKD"
  },
  {
    "ts": "2014-09-02T04:00:00.000Z",
    "user_id": "192759988",
    "user_score": "0.0286673252697910",
    "mp_rank": "1650",
    "sector": "Conglomerates",
    "sector_user_score": "0.4335308787167536",
    "sector_rank": "1",
    "tickers": "REE"
  }
]
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
set-cookie: igloo=s%3AYaTm-3GSeiBU-nfhyz09kqhV4IBRcHjA.SvZf2RdfmhAQAkkgafITCC8FQh0ZYGhGe9gA9hCFAf4; Path=/; Expires=Thu, 04 Sep 2014 21:06:37 GMT; HttpOnly
X-Response-Time: 74861.60121ms
Date: Wed, 03 Sep 2014 21:06:37 GMT
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
