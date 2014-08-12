
# Market Prophit Sentiment Moving Average


## Market Prophit Sentiment Moving Average

```shell
curl <%- auth %> "<%= url %>/real-time/market-prophit-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/market-prophit-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/market-prophit-sentiment-moving-average?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Market Prophit Sentiment Moving Average

```shell
curl <%- auth %> "<%= url %>/historical/market-prophit-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/market-prophit-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/market-prophit-sentiment-moving-average?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday


## Daily Market Prophit Sentiment Moving Average

```shell
curl <%- auth %> "<%= url %>/historical/daily-market-prophit-sentiment-moving-average?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-market-prophit-sentiment-moving-average?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-market-prophit-sentiment-moving-average?ticker=' + ticker) %>
```

Daily market prophit sentiment moving average historical data

### HTTP Request

`GET <%= url %>/historical/daily-market-prophit-sentiment-moving-average`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | last year from previous biz day
end_ts | ISO-8601 timestamp | no | yesterday