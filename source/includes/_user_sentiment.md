
# User Sentiment


## User Sentiment

```shell
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/user-sentiment"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AdkQ-Jei8Od1o8eMl94FVCirx7ddSimHI.RUgQgwEh5cqLFsnkBikDZGh7xefeg7dOV61O91XHQcw; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:07 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/real-time/user-sentiment-last-minute?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AOFRyRooxnPvBOmcTlj1Cc6sOzo2-I9ef.xFdjgfYtHDUvWRFH5jFDZhnBAXnweW8R8wCdS0f2o%2BU; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:09 GMT
Connection: keep-alive


```

> Returns response such as (limited `results` for brevity):

```json
[]
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/user-sentiment-by-user?user_id=14216123"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-223132457"
set-cookie: igloo=s%3AGsRxqBL_mthrQniE8rBEUbTVqqBDvrpW.qipXj%2BShURszR9pRoPg4g9%2Bh8wog%2BaY8oc1GZh5pShA; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:09 GMT
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
curl -u "sk_live_fXgDgry814qwakL41KDZin47:" "https://open.marketprophit.com/historical/user-sentiment-by-ticker?ticker=AAPL"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept, Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 4452014
ETag: W/"43eeae-2928580455"
set-cookie: igloo=s%3AGOpKQj0KxTUPIWa7gEYSASgi-CJWfYvn.xk9xBkQiTekbly2Jg%2BZyhKcYarBcBPU23%2FZ73MQD72c; Path=/; Expires=Wed, 09 Jul 2014 06:02:06 GMT; HttpOnly
Date: Tue, 08 Jul 2014 06:02:37 GMT
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
