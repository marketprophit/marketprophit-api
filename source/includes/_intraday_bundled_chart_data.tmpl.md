
# Intraday Bundled Chart Data

Returns a complete range of historical intraday records for a given ticker based on a date range (start date, end date).


## Crowd Sentiment Chart Data

```shell
curl <%- auth %> "<%= url %>/historical/crowd-sentiment-chart-data?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/crowd-sentiment-chart-data?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/crowd-sentiment-chart-data?ticker=' + ticker) %>
```

Historical consolidated one minute records

### HTTP Request

`GET <%= url %>/historical/crowd-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago from yesterday (limited to 7 days max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 7 days max start-end range)



## Market Prophit Sentiment Chart Data

```shell
curl <%- auth %> "<%= url %>/historical/market-prophit-sentiment-chart-data?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/market-prophit-sentiment-chart-data?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/market-prophit-sentiment-chart-data?ticker=' + ticker) %>
```

Historical consolidated one second records.

### HTTP Request

`GET <%= url %>/historical/market-prophit-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago from yesterday (limited to 7 days max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 7 days max start-end range)
