
# Crowd Sentiment Moving Average


## Crowd Sentiment Moving Average

```shell
curl <%- auth %> "<%= url %>/real-time/crowd-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/crowd-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/crowd-sentiment-moving-average?ticker=' + ticker) %>
```

Realtime moving average intraday data

### HTTP Request

`GET <%= url %>/real-time/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment

```shell
curl <%- auth %> "<%= url %>/historical/crowd-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/crowd-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/crowd-sentiment-moving-average?ticker=' + ticker) %>
```

Historical moving average intraday data

### HTTP Request

`GET <%= url %>/historical/crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment

```shell
curl <%- auth %> "<%= url %>/historical/daily-crowd-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-crowd-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-crowd-sentiment-moving-average?ticker=' + ticker) %>
```

Daily crowd sentiment moving average historical data

### HTTP Request

`GET <%= url %>/historical/daily-crowd-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
