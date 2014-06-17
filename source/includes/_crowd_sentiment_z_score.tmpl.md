
# Crowd Sentiment Z-Score


## Crowd Sentiment Z-Score

```shell
curl "<%= url %>/real-time/crowd-sentiment-z-score?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/crowd-sentiment-z-score?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/crowd-sentiment-z-score?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Crowd Sentiment Z-Score

```shell
curl "<%= url %>/historical/crowd-sentiment-z-score?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/crowd-sentiment-z-score?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/crowd-sentiment-z-score?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Crowd Sentiment Z-Score

```shell
curl "<%= url %>/historical/daily-crowd-sentiment-z-score?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-crowd-sentiment-z-score?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-crowd-sentiment-z-score?ticker=' + ticker) %>
```

Daily crowd sentiment historical data

### HTTP Request

`GET <%= url %>/historical/daily-crowd-sentiment-z-score`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
