
# User Sentiment


## User Sentiment

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/user-sentiment"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AzFHXQSzppkHN0KeDr3lVIqQqwCq3Evyo.WDrieU%2B60PtirIF7VfShTPGtc0sgqs4pKWHwr0YFWRE; Path=/; Expires=Thu, 24 Jul 2014 21:29:25 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:25 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Pushes the complete set of user sentiment records for all tickers and users for the most recent full second of data.

### HTTP Request

`GET https://open.marketprophit.com/real-time/user-sentiment`



## User Sentiment Last Minute

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/real-time/user-sentiment-last-minute?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 500 Internal Server Error
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 39
ETag: W/"27-1680212420"
set-cookie: igloo=s%3AospNbfHah_BRMzIl6om3neIhsfW898RV.foFnn1ScVRkl7Bblkh6xTFiucAXDcfhqeIPm9SgcD1w; Path=/; Expires=Thu, 24 Jul 2014 21:29:22 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
Unknown column 'AAPL' in 'where clause'
```

Returns the complete set of user sentiment records for all tickers and users for the most recent full minute of data.

### HTTP Request

`GET https://open.marketprophit.com/real-time/user-sentiment-last-minute`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none


## User Sentiment by User

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-sentiment-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AfttXg3KNXb1YiH8tDPDMFz1JIUu68JI2.XwIaa6DxFMqHKFWq5J%2F0eJDW%2F2Qrq1phD%2Fk%2FquRxwO0; Path=/; Expires=Thu, 24 Jul 2014 21:29:22 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns a complete range of historical intraday records for a given user based on a date range (start date, end date).

### HTTP Request

`GET https://open.marketprophit.com/historical/user-sentiment-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 month ago
end_date | End date range (MM-DD-YY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## User Sentiment by Ticker

```shell
curl -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/historical/user-sentiment-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 5152961
ETag: W/"4ea0c1-2676318965"
set-cookie: igloo=s%3AIwOmJR74Ah_BzqSdmKMVo5flmTIqngki.mHSoRUEPYwabUDt29%2BHtfoevZYFgjxfqJFxnr6eMbiU; Path=/; Expires=Thu, 24 Jul 2014 21:29:25 GMT; HttpOnly
Date: Wed, 23 Jul 2014 21:29:22 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
```

Returns a complete range of historical intraday records for a given ticker based on a date range (start date, end date)..

### HTTP Request

`GET https://open.marketprophit.com/historical/user-sentiment-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 month ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none
