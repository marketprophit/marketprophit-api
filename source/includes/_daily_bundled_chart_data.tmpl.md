
# Daily Bundled Chart Data

Returns a complete range of historical daily records for a given ticker based on a date range (start date, end date).


## Daily Crowd Sentiment Chart Data

```shell
curl <%- auth %> "<%= url %>/historical/daily-crowd-sentiment-chart-data?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-crowd-sentiment-chart-data?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-crowd-sentiment-chart-data?ticker=' + ticker) %>
```

Historical consolidated daily records

### HTTP Request

`GET <%= url %>/historical/daily-crowd-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago from yesterday (limited to 5 years max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 5 years max start-end range)



## Daily Market Prophit Sentiment Chart Data

```shell
curl <%- auth %> "<%= url %>/historical/daily-market-prophit-sentiment-chart-data?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-market-prophit-sentiment-chart-data?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-market-prophit-sentiment-chart-data?ticker=' + ticker) %>
```

Historical consolidated one second records.

### HTTP Request

`GET <%= url %>/historical/daily-market-prophit-sentiment-chart-data`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago from yesterday (limited to 5 years max start-end range)
end_date | End date range (MM-DD-YYYY) | no | yesterday (limited to 5 years max start-end range)
