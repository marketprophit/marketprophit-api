
# User Sentiment


## User Sentiment

```shell
curl <%- auth %> "<%= url %>/real-time/user-sentiment"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/user-sentiment -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/user-sentiment') %>
```

Pushes the complete set of user sentiment records for all tickers and users for the most recent full second of data.

### HTTP Request

`GET <%= url %>/real-time/user-sentiment`



## User Sentiment Last Minute

```shell
curl <%- auth %> "<%= url %>/real-time/user-sentiment-last-minute?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/user-sentiment-last-minute?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/user-sentiment-last-minute?ticker=' + ticker) %>
```

Returns the complete set of user sentiment records for all tickers and users for the most recent full minute of data.

### HTTP Request

`GET <%= url %>/real-time/user-sentiment-last-minute`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none


## User Sentiment by User

```shell
curl <%- auth %> "<%= url %>/historical/user-sentiment-by-user?user_id=<%= userId %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/user-sentiment-by-user?user_id=' + userId + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/user-sentiment-by-user?user_id=' + userId) %>
```

Returns a complete range of historical intraday records for a given user based on a date range (start date, end date).

### HTTP Request

`GET <%= url %>/historical/user-sentiment-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_ts | Start date range (MM-DD-YYYY) or ISO-8601 timestamp | no | 1 month ago
end_ts | End date range (MM-DD-YYYY) or ISO-8601 timestamp | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## User Sentiment by Ticker

```shell
curl <%- auth %> "<%= url %>/historical/user-sentiment-by-ticker?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/user-sentiment-by-ticker?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/user-sentiment-by-ticker?ticker=' + ticker) %>
```

Returns a complete range of historical intraday records for a given ticker based on a date range (start date, end date)..

### HTTP Request

`GET <%= url %>/historical/user-sentiment-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | Start date range (MM-DD-YYYY) or ISO-8601 timestamp | no | 1 month ago
end_ts | End date range (MM-DD-YYYY) or ISO-8601 timestamp | no | previous business day
user_id | User ID of a Twitter username | no | none
