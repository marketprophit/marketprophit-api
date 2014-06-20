
# Crowd Sentiment Z-Score Moving Average


## Crowd Sentiment Z-Score Moving Average

```shell
curl <%- auth %> "<%= url %>/real-time/crowd-sentiment-z-score-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/crowd-sentiment-z-score-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/crowd-sentiment-z-score-moving-average?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score Moving Average

```shell
curl <%- auth %> "<%= url %>/historical/crowd-sentiment-z-score-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/crowd-sentiment-z-score-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/crowd-sentiment-z-score-moving-average?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score Moving Average

```shell
curl <%- auth %> "<%= url %>/historical/daily-crowd-sentiment-z-score-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-crowd-sentiment-z-score-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-crowd-sentiment-z-score-moving-average?ticker=' + ticker) %>
```

Daily crowd sentiment z-score moving average historical data

### HTTP Request

`GET <%= url %>/historical/daily-crowd-sentiment-z-score-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
