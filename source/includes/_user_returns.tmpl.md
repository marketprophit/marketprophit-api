
# User Returns


## Ticker Specific User Returns

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-returns"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-returns -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-returns') %>
```

Returns ticker specific user returns for a given business date.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
date | Date (MM-DD-YY) | no | previous business day
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none



## Ticker Specific User Returns by User

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-returns-by-user?user_id=<%= userId %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-returns-by-user?user_id=' + userId + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-returns-by-user?user_id=' + userId) %>
```

Ticker specific user returns data for range of given business dates for a given user id.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-returns-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
ticker | 3-4 character long alphanumeric stock ticker symbol | no | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day



## Ticker Specific User Returns by Ticker

```shell
curl <%- auth %> "<%= url %>/historical/ticker-specific-user-returns-by-ticker"
```

> Returns response headers such as:

```bash
<%- curl('/historical/ticker-specific-user-returns-by-ticker -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/ticker-specific-user-returns-by-ticker') %>
```

Ticker specific user returns data for range of given business dates for a given user id.

### HTTP Request

`GET <%= url %>/historical/ticker-specific-user-returns-by-ticker`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
ticker | 3-4 character long alphanumeric stock ticker symbol | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none



## Sector Specific User Returns

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-returns"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-returns -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-returns') %>
```

Returns sector specific user returns for a given business date.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-returns`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
date | Date (MM-DD-YY) | no | previous business day
sector | Sector (must be one of <%= sectors.join(', ') %>) | no | none



## Sector Specific User Returns by User

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-returns-by-user"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-returns-by-user?user_id=' + userId + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-returns-by-user?user_id=' + userId) %>
```

Returns sector specific user returns for a given range of business dates for a given user id.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-returns-by-user`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
user_id | User ID of a Twitter username | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
sector | Sector (must be one of <%= sectors.join(', ') %>) | no | none



## Sector Specific User Returns by Sector

```shell
curl <%- auth %> "<%= url %>/historical/sector-specific-user-returns-by-sector?sector=<%= sector %>"
```

> Returns response headers such as:

```bash
<%- curl('/historical/sector-specific-user-returns-by-sector?sector=' + sector + ' -s -D- -o/dev/null') %>
```

> Returns response such as (limited `results` for brevity):

```json
<%- curl('/historical/sector-specific-user-returns-by-sector?sector=' + sector) %>
```

Sector specific user returns data for range of given business dates for a given sector.

### HTTP Request

`GET <%= url %>/historical/sector-specific-user-returns-by-sector`

### Query Parameters

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
time_frame | Time frame (must be one of <%= timeFrames.join(', ') %>) | no | ONE_WEEK
sector | Sector (must be one of <%= sectors.join(', ') %>) | yes | none
start_date | Start date range (MM-DD-YY) | no | 1 week ago
end_date | End date range (MM-DD-YY) | no | previous business day
user_id | User ID of a Twitter username | no | none
