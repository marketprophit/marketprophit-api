
# Crowd Sentiment


## Crowd Sentiment

```shell
curl <%- auth %> "<%= url %>/real-time/crowd-sentiment?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/crowd-sentiment?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/crowd-sentiment?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl <%- auth %> "<%= url %>/historical/crowd-sentiment?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/crowd-sentiment?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/crowd-sentiment?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Crowd Sentiment

```shell
curl <%- auth %> "<%= url %>/historical/daily-crowd-sentiment?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-crowd-sentiment?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-crowd-sentiment?ticker=' + ticker) %>
```

Daily crowd sentiment historical data

### HTTP Request

`GET <%= url %>/historical/daily-crowd-sentiment`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday
