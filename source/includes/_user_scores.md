
# User Scores


## User Scores

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Al_3eAMFM_hu5bdyMhU4WaBf668t3Evjb.5Dn6U2yNvT8Dz7SVldDXq%2BQSuj4S4UIjpWMYlOv4Je8; Path=/; Expires=Wed, 09 Jul 2014 06:02:09 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:16 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/user-scores-last"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AXsLCIbeQ_KPh3vD3tfXhfhOtsG6OaQPn.31jDLeO4v0JE%2BHDmIEb66FcB5%2Bv79N9TzPNXEgEAMf8; Path=/; Expires=Wed, 09 Jul 2014 06:02:09 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:13 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns all user scores for the most recent business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/user-scores-last`



## Daily User Scores by User

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/daily-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A5zC2QFXUoNwvbLx8yDmrrC-KxxZfR7JG.6%2Fu23SqGLFaiE2a5G2aSO%2FpLeDwS2d21O%2FLkz0cRq5w; Path=/; Expires=Wed, 09 Jul 2014 06:02:10 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:13 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/ticker-specific-user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AV54W8aN2xMkswtRJpfw0VfpBIw0J51P3.hu%2BFi1W3fv77yNGWKdAR4hIm5w43e9KbrfNQePurxpc; Path=/; Expires=Wed, 09 Jul 2014 06:02:10 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:14 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/ticker-specific-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AwjwdmcXqJn9vZriQnWD5IbDMutVor5p7.tMYEwLVCuXlzR7YQZnrsKEsNDI2IDoccFSxaEfsJvls; Path=/; Expires=Wed, 09 Jul 2014 06:02:11 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:16 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/ticker-specific-user-scores-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AaAoIDFUxaFdECX4pTTsN428hlhqrZkkI.XopaBGKmF4Kkz%2F%2Bd6UQlCMsBKNWSNQfEdNsyqPeT1sc; Path=/; Expires=Wed, 09 Jul 2014 06:02:12 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:16 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-scores"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A5U494wjHSV235Ev2boJObxbV3ojM3pMt.hgHy3iGJXHIwKMrahKRwBs3gqmFhbZvRLUBbrTNUJsU; Path=/; Expires=Wed, 09 Jul 2014 06:02:05 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:07 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-scores-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AuD5Obg-lGB-T1Mwbz6mZ5_w0U76JEDKJ.ZPEkvdLu4R6IEW8TmwZVn5TNrop1p4IWEYPJcTiw5Ss; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:07 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-scores-by-sector?sector=Technology"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AzLmggqmuicksh_HNKOD6n-YpDNCojRXA.uL9FwC1Vd2iKUYLGezB6dYGstXl8e8FzsbaaiMHxsik; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:06 GMT
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
