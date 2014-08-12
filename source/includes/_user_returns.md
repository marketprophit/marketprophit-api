
# User Returns


## Ticker Specific User Returns

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-returns"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1784
ETag: W/"6f8-4028804962"
set-cookie: igloo=s%3AZX2eW8nwyIwlefLvzzZToQRimzXg0tpj.WiNqdNBXdHOAhhxwFLaEiM0UMfvgM0ev13fEtcvKK5M; Path=/; Expires=Wed, 13 Aug 2014 21:38:23 GMT; HttpOnly
X-Response-Time: 41922.46063ms
Date: Tue, 12 Aug 2014 21:38:23 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "76867219",
    "user_score": "0.4290218226161255",
    "mp_rank": "264",
    "ticker": "6E",
    "ticker_return": "-0.0001888902305558",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "44824361",
    "user_score": "0.1716032017058580",
    "mp_rank": "1076",
    "ticker": "6E_F",
    "ticker_return": "0.0024301013505508",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "56910769",
    "user_score": "-0.1205962886514924",
    "mp_rank": "3783",
    "ticker": "6J_F",
    "ticker_return": "0.0050026081627963",
    "ticker_rank": "1"
  }
]
```

Returns ticker specific user returns for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Returns by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-returns-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1790
ETag: W/"6fe-772723283"
set-cookie: igloo=s%3AvXJMEFfTP6mTruxVsXsXoi_CSWuVoBbT.MxxjGIAsqRmU%2Fe5ha%2B2ng1%2F9VRwP10A2BnRs32TsbI8; Path=/; Expires=Wed, 13 Aug 2014 21:38:58 GMT; HttpOnly
X-Response-Time: 74143.21016ms
Date: Tue, 12 Aug 2014 21:38:58 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "ticker": "BA",
    "ticker_return": "0.0004170837504172",
    "ticker_rank": "42"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "ticker": "ETN",
    "ticker_return": "-0.0126724077574739",
    "ticker_rank": "69"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "ticker": "FB",
    "ticker_return": "-0.0028441714514621",
    "ticker_rank": "599"
  }
]
```

Ticker specific user returns data for range of given business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-returns-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day



## Ticker Specific User Returns by Ticker

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/ticker-specific-user-returns-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 1712
ETag: W/"6b0-2812379887"
set-cookie: igloo=s%3A04V43-PUnHofqIS0iHJG5DLgRrHzscdJ.XjiTGHMt0sg1hka%2BbfOUGICHnyJaaFFMJNwVStLS1rI; Path=/; Expires=Wed, 13 Aug 2014 21:38:17 GMT; HttpOnly
X-Response-Time: 35620.37097ms
Date: Tue, 12 Aug 2014 21:38:17 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "2196092280",
    "user_score": "0.1100262250232083",
    "mp_rank": "1304",
    "ticker": "AAPL",
    "ticker_return": "0.0206325066945550",
    "ticker_rank": "1"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "263246119",
    "user_score": null,
    "mp_rank": null,
    "ticker": "AAPL",
    "ticker_return": "0.0179763739085772",
    "ticker_rank": "2"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "224613869",
    "user_score": "0.0922994543961169",
    "mp_rank": "1411",
    "ticker": "AAPL",
    "ticker_return": "0.0168187722322255",
    "ticker_rank": "3"
  }
]
```

Ticker specific user returns data for range of given business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-returns-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none



## Sector Specific User Returns

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-returns"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2012
ETag: W/"7dc-1115675420"
set-cookie: igloo=s%3AQUBOJzJSxqgAjr2kaPCHOy2OUAs7gmpX.XwVCzlIZAUj17pQWQBKOVPvJpv9GiI5cDnAQfv9%2F37M; Path=/; Expires=Wed, 13 Aug 2014 21:38:50 GMT; HttpOnly
X-Response-Time: 65264.19082ms
Date: Tue, 12 Aug 2014 21:38:46 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "2631042979",
    "user_score": "0.2949495363587444",
    "mp_rank": "540",
    "sector": "Agriculture",
    "sector_return": "0.0313268694491999",
    "sector_rank": "1",
    "tickers": "ZW_F, CC_F"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "137768351",
    "user_score": "0.4101057469019749",
    "mp_rank": "296",
    "sector": "BasicMaterials",
    "sector_return": "2.1337087087087090",
    "sector_rank": "1",
    "tickers": "BBRD"
  },
  {
    "ts": "2014-08-11T04:00:00.000Z",
    "user_id": "2204135624",
    "user_score": "0.0021204268748031",
    "mp_rank": "2521",
    "sector": "Conglomerates",
    "sector_return": "0.4999999999999998",
    "sector_rank": "1",
    "tickers": "JRRD"
  }
]
```

Returns sector specific user returns for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Returns by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-returns-by-user"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A0_MuVy3UH8bWaIR8knSy9FJaWKV7M8yD.bpkaayE6s%2FjmdnpyOwwmiJi%2BPk1Rxwr4Sqp1gG9C3cQ; Path=/; Expires=Wed, 13 Aug 2014 21:38:49 GMT; HttpOnly
X-Response-Time: 64906.52986ms
Date: Tue, 12 Aug 2014 21:38:46 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "sector": "IndustrialGoods",
    "sector_return": "-0.0122606094624110",
    "sector_rank": "2558",
    "tickers": "ETN, BA"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "sector": "Services",
    "sector_return": "0.0033719008264461",
    "sector_rank": "2043",
    "tickers": "PNRA"
  },
  {
    "ts": "2014-08-04T04:00:00.000Z",
    "user_id": "14216123",
    "user_score": "-0.3510774804019593",
    "mp_rank": "4447",
    "sector": "Technology",
    "sector_return": "0.0001114544281942",
    "sector_rank": "2793",
    "tickers": "TST, FB, XLNX, TWTR"
  }
]
```

Returns sector specific user returns for a given range of business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-returns-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Returns by Sector

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/sector-specific-user-returns-by-sector?sector=Technology"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2052
ETag: W/"804-1016644265"
set-cookie: igloo=s%3AkatUZ0Ykoq9KeXr4mKC4Vtc14X0daITU.QNPJ36PLfqz%2FUkbZIS4pVfRdTAzY73WhLmYmj7XIzig; Path=/; Expires=Wed, 13 Aug 2014 21:39:04 GMT; HttpOnly
X-Response-Time: 79298.98423ms
Date: Tue, 12 Aug 2014 21:39:04 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Sector specific user returns data for range of given business dates for a given sector.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-returns-by-sector`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none
