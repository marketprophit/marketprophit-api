
# Tweet Volume


## Tweet Volume

```shell
curl <%- auth %> "<%= url %>/real-time/tweet-volume?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/tweet-volume?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/tweet-volume?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Volume

```shell
curl <%- auth %> "<%= url %>/historical/tweet-volume?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/tweet-volume?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/tweet-volume?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Volume

```shell
curl <%- auth %> "<%= url %>/historical/daily-tweet-volume?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-tweet-volume?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-tweet-volume?ticker=' + ticker) %>
```

Daily tweet volume historical data

### HTTP Request

`GET <%= url %>/historical/daily-tweet-volume`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | yesterday
end_ts | ISO-8601 timestamp | no | now
