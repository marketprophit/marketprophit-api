
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
set-cookie: igloo=s%3Artt7klaUZmeaYz2YiiaxKlhzegBIoT7t.GXtkpN4GNCOOvZ4S5nkL2wREGGWRSJU21i94vStS06o; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
Content-Length: 492891
ETag: W/"7855b-2207717398"
set-cookie: igloo=s%3AI_DmUkeZLYJP0u50Nx9SjXVnUDtik7Ne.dZHyJaIlU%2FlLqQ6YBFwGc0PvShmws2%2Fx2AjYXRR8z6I; Path=/; Expires=Thu, 24 Jul 2014 21:29:25 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:25 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[
  {
    "ts": "2014-07-22T04:00:00.000Z",
    "user_id": "2663617496",
    "score": "0.0875637557941699",
    "mp_rank": "1567"
  },
  {
    "ts": "2014-07-22T04:00:00.000Z",
    "user_id": "2663616672",
    "score": "0.1366606588906953",
    "mp_rank": "1183"
  },
  {
    "ts": "2014-07-22T04:00:00.000Z",
    "user_id": "2659768237",
    "score": "-0.1225859851397952",
    "mp_rank": "3573"
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
set-cookie: igloo=s%3AK_CuUsQveFTTBfrE_zbpvO7v96Gzgpol.RdG9yzB0v0gjq353uCKGAJaBL6p0g8WaOiKnMWU7P70; Path=/; Expires=Thu, 24 Jul 2014 21:29:22 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns user scores for a given range of business dates and user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/daily-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 year ago
end_date | End date range (MM-DD-YY) | no | previous business day
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AC9v-OCGuDU3RdAy7L6ydZEpcsr1_skZv.7s5GhIhAElAyi9JkG4FmBvC2T8szahAtFvuhEBAi7KA; Path=/; Expires=Thu, 24 Jul 2014 21:29:21 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:21 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns ticker specific user scores for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YY) | no | previous business day
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
set-cookie: igloo=s%3Ah4brnxeM7U7O3ex_gGeiwqdmdypUwhaf.7cWVp%2Fcgb03%2BNVnPeiJJl4y3DLKl6wk7YX446fYCLLU; Path=/; Expires=Thu, 24 Jul 2014 21:29:22 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
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
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
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
set-cookie: igloo=s%3A9mtCzaefhJujj1dOr9eDvnmDrKGiAeb9.NtZwK%2FA7pikIDDGB8u6AkvuHZZAU%2FnJfCHVfmIU9jWE; Path=/; Expires=Thu, 24 Jul 2014 21:29:22 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
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
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A-XcMTPINbBtS60EzQEwbTwD06LeLD2q8.7Glr5V3oqI%2F%2B3NnYqP4Lld%2Fm%2BGFrEmd8X4HnlzCnoBU; Path=/; Expires=Thu, 24 Jul 2014 21:29:25 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:25 GMT
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
date | Date (MM-DD-YY) | no | previous business day
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
set-cookie: igloo=s%3A0f1wCM5AXT4sU6jmFTNspgi51YDPFXLn.M4C7pBhFDoKkwlsjNn6QwrJ%2B%2BhNzoLq6gdzeXtaBxNc; Path=/; Expires=Thu, 24 Jul 2014 21:29:23 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:23 GMT
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
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
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
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AIlvtbqIGC6akB4aNGoPDNdRl1vYYQcCv.%2FMEjgr39KRC0c5cId3%2BUMnHJO255ekVco5zYM1BWBNY; Path=/; Expires=Thu, 24 Jul 2014 21:29:23 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:23 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Sector specific user score data for range of given business dates for a given sector.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-scores-by-sector`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none
