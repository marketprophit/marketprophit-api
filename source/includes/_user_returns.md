
# User Returns


## Ticker Specific User Returns

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/ticker-specific-user-returns"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AizZVJkseD4TQwD4d4H0NHNA8zWRbt8nX.VkYY4RxJj7%2BkHbwSx4zYTI8llti0ET%2FbAM5yvltd7Nc; Path=/; Expires=Wed, 09 Jul 2014 06:02:07 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:15 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns ticker specific user returns for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Returns by Ticker

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/ticker-specific-user-returns-by-ticker"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3A0jWg1wClOvu3K2uePoh4A91__pTtIpSM.EBYQv%2BQM4PF2tSkqqattZBtwuzzHC3vV%2B27QQr6MUlg; Path=/; Expires=Wed, 09 Jul 2014 06:02:07 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:15 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Ticker specific user returns data for range of given business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/ticker-specific-user-returns-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none



## Sector Specific User Returns

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-returns"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AtOGlbPz45gbhKmjg3F3r7Q4e6wEjtUWW.PnJiccewH6Rtnih5WHg5iWW4pAhtOniivixrA%2BGJnoQ; Path=/; Expires=Wed, 09 Jul 2014 06:02:07 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:16 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns sector specific user returns for a given business date.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
date | Date (MM-DD-YY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Returns by User

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-returns-by-user"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AOLEXzm93KcmWnpGbxnMxK9yZZLVv_wM6.ywpz8WfL0CMG9JMzOXd7t%2B5hFyYIUJB%2FXQ5bLfTnw2w; Path=/; Expires=Wed, 09 Jul 2014 06:02:07 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:14 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns sector specific user returns for a given range of business dates for a given user id.

### HTTP Request

`GET https://open.marketprophit.com/historical/sector-specific-user-returns-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of ONE_WEEK, TWO_WEEKS, THREE_WEEKS, FOUR_WEEKS) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
sector | Sector (must be one of Agriculture, BasicMaterials, Conglomerates, ConsumerGoods, Currency, Energy, Financial, Healthcare, Index, IndustrialGoods, Livestock, Metals, Other Futures, Services, Technology, Utilities) | no | none



## Sector Specific User Returns by Sector

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/sector-specific-user-returns-by-sector?sector=Technology"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3Ap1NJ7z-eBlypDeBRszuY6wgrbBOP0Sdn.TTzh18cCs3z9O8UgwY6RcsYBXN1se0QBUZ9DQL%2FJ4O8; Path=/; Expires=Wed, 09 Jul 2014 06:02:08 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:14 GMT
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
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none
