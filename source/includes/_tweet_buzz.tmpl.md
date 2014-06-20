
# Tweet Buzz


## Tweet Buzz

```shell
curl <%- auth %> "<%= url %>/real-time/tweet-buzz?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/real-time/tweet-buzz?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/real-time/tweet-buzz?ticker=' + ticker) %>
```

Realtime intraday data

### HTTP Request

`GET <%= url %>/real-time/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none



## Historical Tweet Buzz

```shell
curl <%- auth %> "<%= url %>/historical/tweet-buzz?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/tweet-buzz?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/tweet-buzz?ticker=' + ticker) %>
```

Historical intraday data

### HTTP Request

`GET <%= url %>/historical/tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now


## Daily Tweet Buzz

```shell
curl <%- auth %> "<%= url %>/historical/daily-tweet-buzz?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-tweet-buzz?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-tweet-buzz?ticker=' + ticker) %>
```

Daily tweet buzz historical data

### HTTP Request

`GET <%= url %>/historical/daily-tweet-buzz`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_ts | ISO-8601 timestamp | no | 1 week ago
end_ts | ISO-8601 timestamp | no | now
