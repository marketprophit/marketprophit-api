
# User Scores


## User Scores

```shell
curl <%- auth %> "<%= url %>/historical/user-scores"
```

> Returns response headers such as:

```bash
<%- curl('/historical/user-scores -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/user-scores') %>
```

Returns a complete set of historical daily records for a single date.

### HTTP Request

`GET <%= url %>/historical/user-scores`



## User Scores Last

```shell
curl <%- auth %> "<%= url %>/historical/user-scores-last"
```

> Returns response headers such as:

```bash
<%- curl('/historical/user-scores-last -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/user-scores-last') %>
```

Returns all user scores for the most recent business date.

### HTTP Request

`GET <%= url %>/historical/user-scores-last`



## Daily User Scores by User

```shell
curl <%- auth %> "<%= url %>/historical/daily-user-scores-by-user?user_id=<%= userId %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/daily-user-scores-by-user?user_id=' + userId + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/daily-user-scores-by-user?user_id=' + userId) %>
```

Returns user scores for a given range of business dates and user id.

### HTTP Request

`GET <%= url %>/historical/daily-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 year ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-scores"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-scores -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-scores') %>
```

Returns ticker specific user scores for a given business date.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores by User

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-scores-by-user?user_id=<%= userId %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-scores-by-user?user_id=' + userId  + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-scores-by-user?user_id=' + userId) %>
```

Ticker specific user score data for range of given business dates for a given user id.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Scores by Ticker

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-scores-by-ticker?ticker=<%= ticker %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-scores-by-ticker?ticker=' + ticker + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-scores-by-ticker?ticker=' + ticker) %>
```

Ticker specific user score data for range of given business dates for a given ticker.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-scores-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none



## Sector Specific User Scores

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-scores"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-scores -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-scores') %>
```

Returns sector specific user scores for a given business date.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-scores`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
date | Date (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of <%= sectors.join(', ') %>) | no | none



## Sector Specific User Scores by User

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-scores-by-user?user_id=<%= userId %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-scores-by-user?user_id=' + userId + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-scores-by-user?user_id=' + userId) %>
```

Returns sector specific user scores for a given range of business dates for a given user id.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-scores-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
sector | Sector (must be one of <%= sectors.join(', ') %>) | no | none



## Sector Specific User Scores by Sector

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-scores-by-sector?sector=<%= sector %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-scores-by-sector?sector=' + sector + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-scores-by-sector?sector=' + sector) %>
```

Sector specific user score data for range of given business dates for a given sector.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-scores-by-sector`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
sector | Sector (must be one of <%= sectors.join(', ') %>) | yes | none
start_date | Start date range (MM-DD-YYYY) | no | 1 week ago
end_date | End date range (MM-DD-YYYY) | no | previous business day
user_id | User ID of a Twitter username | no | none
