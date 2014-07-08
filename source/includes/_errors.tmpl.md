# Errors

The Market Prophit API uses the following error codes:

## Codes

Code | Name | Description
---- | ---- | -----------
400 | Bad Request | Missing a required parameter and/or invalid parameter provided
401 | Unauthorized | Invalid API key
403 | Forbidden | Restricted endpoint
404 | Not Found | Requested endpoint does not exist
406 | Not Acceptable | Invalid response format requested
500 | Internal Server Error | Internal problem, try again later

## Types

Type | Description
---- | -----------
invalid_request_error | An invalid request was made
api_error | An error with the Market Prophit API occured
