
# Websockets

In order to communicate with websockets, you must follow these requirements:

By default, all `/real-time/` prefixed `GET` endpoints have support for websockets.

* Use a [socket.io](http://socket.io) API wrapper (or an alternative if available):

  - [Node.js](https://github.com/Automattic/socket.io-client)
  - [Ruby](https://github.com/lyondhill/socket.io-ruby-client)
  - [Python](https://pypi.python.org/pypi/socketIO-client)
  - [Java](https://github.com/Gottox/socket.io-java-client)
  - [Perl](https://metacpan.org/pod/AnyEvent::PocketIO::Client)

* Retrieve a JSON Web Token ("JWT") to be passed as `token` in the request query object

* Bind and/or emit events as necessary


## Websocket Events

> Example using client-side JavaScript (through use of jQuery and socket.io):

```js

(function() {

  /*globals io*/

  function connectSocket(token) {
    var socket = io.connect('https://open.marketprophit.com', {
      query: 'token=' + token,
      secure: true
    })
    socket
    .on('connect', function() {
      console.log('connected and authenticated')
    })
    .emit('subscribe', {
      path: '/real-time/crowd-sentiment',
      method: 'get',
      params: {
        ticker: 'AAPL'
      }
    }, function(err) {
      if (err) return console.error(err)
      console.log(
        'subscribed to: %s %s',
        'GET',
        '/real-time/crowd-sentiment'
      )
    })
    .on('disconnect', function() {
      console.log('disconnected')
    })
    .on('error', function(err) {
      console.error('error', err)
    })
    .on('err', function(err) {
      console.error('err', err)
    })
    .on('res', function(res) {
      console.log('res', res)
    })
    // after 3 minutes unsubscribe us
    setTimeout(function() {
      socket.emit('unsubscribe', {
        path: '/real-time/crowd-sentiment',
        method: 'GET',
        params: {
          ticker: 'APPL'
        }
      }, function(err) {
        if (err) return console.error(err)
        console.log(
          'unsubscribed from: %s %s',
          'GET',
          '/real-time/crowd-sentiment'
        )
      })
    }, 3 * 60 * 1000)
  }

  $(function() {
    $.ajax({
      type: 'POST',
      url: '/jwt',
      dataType: 'json',
      beforeSend: function(xhr) {
        // **NOTE**: NEVER EXPOSE YOUR SECRET API KEY
        // This is just an example to show you that
        // you'd need to do a request to your own
        // server (e.g. create your own /jwt route) which
        // would then query our API server and return a JWT
        // which you'd then return to your client (if any)
        xhr.setRequestHeader(
          'Authorization',
          'Basic ' + btoa('sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:')
        )
      }
    }).done(function(res) {
      connectSocket(res.token)
    })
  })

}())
```

Name | Arguments | Description
---- | --------- | -----------
connect | callback | Connect to websockets
disconnect | callback | Disconnect from websockets
error | callback | Error from websocket connection
err | callback | Error from endpoint currently subscribed to
res | callback | Response from endpoint currently subscribed to
subscribe | name, options, callback | Subscribe to an endpoint
unsubscribe | name, options, callback | Unsubscribe from an endpoint

### Event Arguments

Argument | Type | Description | Required
-------- | ---- | ----------- | --------
name | String | Name of the event | Yes
options | Object | Options to pass to the event | Yes
callback | Function | Returns an error object (if any) | No

#### options

Parameter | Description | Required | Default
--------- | ----------- | -------- | -------
path | Endpoint path (e.g. "/real-time/crowd-sentiment") | yes | none
method | Case insensitive HTTP verb (e.g. "GET") | yes | none
params | Object of parameters to pass to endpoint (e.g. `{ ticker: 'AAPL' }`) | yes | none


#### callback(err)

Returns an error object (if any)

## JSON Web Token ("JWT")

```shell
curl -X POST -u "sk_live_w3Q4bCJVB8xgyeIKJmTC4DS5:" "https://open.marketprophit.com/jwt"
```

> Returns response headers such as:

```bash
HTTP/1.1 200 OK
Vary: Accept
Content-Type: application/json; charset=utf-8
Content-Length: 5204
set-cookie: igloo=s%3A26nr2GfDB6bucwsfkn6JU4XtZoXPHFU0.2mz7TQh2eaxbcZfyMZU2VFbeF8BuNSSBQKvWfx1smDY; Path=/; Expires=Sat, 26 Jul 2014 16:58:05 GMT; HttpOnly
Date: Fri, 25 Jul 2014 16:58:05 GMT
Connection: keep-alive


```

> Returns response such as:

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGkiOiJza19saXZlX3czUTRiQ0pWQjh4Z3llSUtKbVRDNERTNSIsImNvbXBhbnkiOiJNYXJrZXQgUHJvcGhpdCIsImNyZWF0ZWRfYXQiOiIyMDE0LTA3LTIyVDE5OjA1OjE3LjAwMFoiLCJlbWFpbCI6Imhvb2RicmFuZG9uQHlhaG9vLmNvbSIsImZ1bGxfZW1haWwiOiJCcmFuZG9uIEhvb2QgPGhvb2RicmFuZG9uQHlhaG9vLmNvbT4iLCJtZXNzYWdlIjoiKioqIFRoaXMgaXMgTmljayBCYXVnaCBqdXN0IHRlc3Rpbmcgb3V0IHRoaXMgYW5kIHNldHRpbmcgdXAgQnJhbmRvbiB3aXRoIGFuIGFjY291bnQgZm9yIHRlc3RpbmcgdG9kYXkuICoqKiIsIm5hbWUiOiJCcmFuZG9uIEhvb2QiLCJ0cmlhbF9lbmRfYXQiOiIyMDE1LTEyLTAxVDA1OjAwOjAwLjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNC0wNy0yMlQxOTowNToxNy4wMDBaIiwiX192ZXJzaW9ucyI6W3siY3JlYXRlZF9hdCI6IjIwMTQtMDctMjJUMTk6MDU6MTcuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE0LTA3LTIyVDE5OjA1OjE4LjE4MloiLCJmdWxsX2VtYWlsIjoiQnJhbmRvbiBIb29kIDxob29kYnJhbmRvbkB5YWhvby5jb20-IiwiYXBpIjoic2tfbGl2ZV93M1E0YkNKVkI4eGd5ZUlLSm1UQzREUzUiLCJzYWx0IjoiODdkNTlkYjk5MDgxNzg2M2EwMzNhNzA5MzIxODliNGU3OTMxNTVmZDg0YTMwN2ZjZmY2YTk4ZTMyYzViYWMxMiIsImhhc2giOiI4NWJiMzBkMzE5ZTg4NmZkYTA2NzBhM2U5YzA4ZThlYTFiYWMxMzY0MDhkOTIxY2MyNTM1YWJlYTNjNGQ2NzJkNmMwMzIzMGE5ZTVmNDBmZmNkZTU5MzM2ZDQ2MDM2ZDA5ODc3MzRhYWE1OGRkNWYwMTI5M2ZhYTIwMWM3ZGNhZDFlYjBmNmMxNzMyZGU0ZDZjMzY5ZmI1YTRjNmJmYjIzMTBlMTMwNjlhNGY4NjkxZjYyNGNlZWFmMmI2MjIxOTBiNjQwM2MyYTFmMDllODI0MDI2ZWM5MTgzNzk1NzI1MmFjYmZkZGUzZGM0NmQ0NzE4ZWYxMTkzODViMzg1ZjkzZjQwODgyNTUyNTE1MGUzYzQwNTNhYTk2MWJkZTBmNDIyMWVmNmY5NmQ1ZTEzNjM3ODlmZTM4MzVjN2I4ZjI4YjRlM2RiYjM0NjllYzRmYmNhYWQwZDA1ODYyYzFkMWQ0MjcxYmJhY2Y5OTY4ODBlZTQ4MzE4ZDE0YjZmZjc4MGQ0MGY5MjIzNGI2MGMxMDZjNDk2MGIzNTZiNTBlNzA0ZDZkN2NkNDQzOTI5ODY0NWM1MjVkYWZmMDZmY2FhMTI5MWI3MjI0YzNiY2U3NzVkNzk2ZDQwM2NiMzQxMGFlMDY1YjZiMzIwNjQwODYyOTdhN2FhZmI0YzZkMzJmMTcwMGEwYTNiZGRmOTkxNzQ2NDlkMDA2OTQ0YWJiNTliNDQwNTgwN2YyYzQwYTNlMDQ5NzI4NDFkNGE3ZWZjYzJmNDY0MDY5NjA0NjM4YjRlYjFmMTZlZWYyMmY0NjRhZGQ5NjgwYWU2ZGUwOThlMDNhZmJjZjdiNzUwNjUzOTQyNjVmYTU2YTgyODEyZTQ5MjFjZTdiMTI3M2NhNTk4N2RjNzYyM2RkOGFkYTE2NzdkMWUwODYyNTFkNDg1YmM5NzY4Y2MyYTMwMWFlMTQzZmQwODY3OGI3YmY5MDU1ZDg2ZDViMmU4ZTQwMDhhMGIyZWE2MmQ1NzU3YjYyNjdiZmNmYjUzZWM3ZWJjNzI2YmFjOWRmOWQ3N2UxY2UwMzI1MzE2YTQyOWFhNDExMTg1ZGQxMTg3Zjk5NzNiZTQ3MDUwZGIzMTBmMjNkM2EzODdlNzgxYzAwMzA1YmUyN2IyOWFjNDNiNmE1ODIzNzBmMjRlY2E1Yzc1ZWYyNjBiM2Y0YmI4MzM3ZTEzZTE5NGE0ZDdkZGFkYTgxYmMyZjhhZDE0MWJlN2JkNGRiODc2YzZmNzk1ZGM3YTM1MDFjYzQ1NzRiODZjYTBhZTQ2ODAzNjM3ZDMwMWUzMTFkMWEzM2ZiMWVjYzJjZWZmMWM1OGEwMzdlY2U2MjgyNDc5MGI1NzA1N2E3IiwiZW1haWwiOiJob29kYnJhbmRvbkB5YWhvby5jb20iLCJuYW1lIjoiQnJhbmRvbiBIb29kIiwiY29tcGFueSI6Ik1hcmtldCBQcm9waGl0IiwibWVzc2FnZSI6IioqKiBUaGlzIGlzIE5pY2sgQmF1Z2gganVzdCB0ZXN0aW5nIG91dCB0aGlzIGFuZCBzZXR0aW5nIHVwIEJyYW5kb24gd2l0aCBhbiBhY2NvdW50IGZvciB0ZXN0aW5nIHRvZGF5LiAqKioiLCJfaWQiOiI1M2NlYjVlZDg2ODE4YTE5N2JhOGVjMjAiLCJ0aWNrZXJzIjpbXSwidHJpYWwiOnRydWUsImFjdGl2ZSI6ZmFsc2UsImdyb3VwIjoidXNlciIsIm9iamVjdCI6InVzZXIiLCJpZCI6IjUzY2ViNWVkODY4MThhMTk3YmE4ZWMyMCIsIl9fdiI6MH0seyJpZCI6IjUzY2ViNWVkODY4MThhMTk3YmE4ZWMyMCIsIm9iamVjdCI6InVzZXIiLCJncm91cCI6ImFkbWluIiwiYWN0aXZlIjp0cnVlLCJ0cmlhbCI6dHJ1ZSwidGlja2VycyI6W10sIl9fdiI6MSwiX2lkIjoiNTNjZWI1ZWQ4NjgxOGExOTdiYThlYzIwIiwibWVzc2FnZSI6IioqKiBUaGlzIGlzIE5pY2sgQmF1Z2gganVzdCB0ZXN0aW5nIG91dCB0aGlzIGFuZCBzZXR0aW5nIHVwIEJyYW5kb24gd2l0aCBhbiBhY2NvdW50IGZvciB0ZXN0aW5nIHRvZGF5LiAqKioiLCJjb21wYW55IjoiTWFya2V0IFByb3BoaXQiLCJuYW1lIjoiQnJhbmRvbiBIb29kIiwiZW1haWwiOiJob29kYnJhbmRvbkB5YWhvby5jb20iLCJoYXNoIjoiODViYjMwZDMxOWU4ODZmZGEwNjcwYTNlOWMwOGU4ZWExYmFjMTM2NDA4ZDkyMWNjMjUzNWFiZWEzYzRkNjcyZDZjMDMyMzBhOWU1ZjQwZmZjZGU1OTMzNmQ0NjAzNmQwOTg3NzM0YWFhNThkZDVmMDEyOTNmYWEyMDFjN2RjYWQxZWIwZjZjMTczMmRlNGQ2YzM2OWZiNWE0YzZiZmIyMzEwZTEzMDY5YTRmODY5MWY2MjRjZWVhZjJiNjIyMTkwYjY0MDNjMmExZjA5ZTgyNDAyNmVjOTE4Mzc5NTcyNTJhY2JmZGRlM2RjNDZkNDcxOGVmMTE5Mzg1YjM4NWY5M2Y0MDg4MjU1MjUxNTBlM2M0MDUzYWE5NjFiZGUwZjQyMjFlZjZmOTZkNWUxMzYzNzg5ZmUzODM1YzdiOGYyOGI0ZTNkYmIzNDY5ZWM0ZmJjYWFkMGQwNTg2MmMxZDFkNDI3MWJiYWNmOTk2ODgwZWU0ODMxOGQxNGI2ZmY3ODBkNDBmOTIyMzRiNjBjMTA2YzQ5NjBiMzU2YjUwZTcwNGQ2ZDdjZDQ0MzkyOTg2NDVjNTI1ZGFmZjA2ZmNhYTEyOTFiNzIyNGMzYmNlNzc1ZDc5NmQ0MDNjYjM0MTBhZTA2NWI2YjMyMDY0MDg2Mjk3YTdhYWZiNGM2ZDMyZjE3MDBhMGEzYmRkZjk5MTc0NjQ5ZDAwNjk0NGFiYjU5YjQ0MDU4MDdmMmM0MGEzZTA0OTcyODQxZDRhN2VmY2MyZjQ2NDA2OTYwNDYzOGI0ZWIxZjE2ZWVmMjJmNDY0YWRkOTY4MGFlNmRlMDk4ZTAzYWZiY2Y3Yjc1MDY1Mzk0MjY1ZmE1NmE4MjgxMmU0OTIxY2U3YjEyNzNjYTU5ODdkYzc2MjNkZDhhZGExNjc3ZDFlMDg2MjUxZDQ4NWJjOTc2OGNjMmEzMDFhZTE0M2ZkMDg2NzhiN2JmOTA1NWQ4NmQ1YjJlOGU0MDA4YTBiMmVhNjJkNTc1N2I2MjY3YmZjZmI1M2VjN2ViYzcyNmJhYzlkZjlkNzdlMWNlMDMyNTMxNmE0MjlhYTQxMTE4NWRkMTE4N2Y5OTczYmU0NzA1MGRiMzEwZjIzZDNhMzg3ZTc4MWMwMDMwNWJlMjdiMjlhYzQzYjZhNTgyMzcwZjI0ZWNhNWM3NWVmMjYwYjNmNGJiODMzN2UxM2UxOTRhNGQ3ZGRhZGE4MWJjMmY4YWQxNDFiZTdiZDRkYjg3NmM2Zjc5NWRjN2EzNTAxY2M0NTc0Yjg2Y2EwYWU0NjgwMzYzN2QzMDFlMzExZDFhMzNmYjFlY2MyY2VmZjFjNThhMDM3ZWNlNjI4MjQ3OTBiNTcwNTdhNyIsInNhbHQiOiI4N2Q1OWRiOTkwODE3ODYzYTAzM2E3MDkzMjE4OWI0ZTc5MzE1NWZkODRhMzA3ZmNmZjZhOThlMzJjNWJhYzEyIiwiYXBpIjoic2tfbGl2ZV93M1E0YkNKVkI4eGd5ZUlLSm1UQzREUzUiLCJmdWxsX2VtYWlsIjoiQnJhbmRvbiBIb29kIDxob29kYnJhbmRvbkB5YWhvby5jb20-IiwidXBkYXRlZF9hdCI6IjIwMTQtMDctMjJUMTk6MDU6MTcuMDAwWiIsImNyZWF0ZWRfYXQiOiIyMDE0LTA3LTIyVDE5OjA1OjE3LjAwMFoiLCJ0cmlhbF9lbmRfYXQiOiIyMDE1LTEyLTAxVDA1OjAwOjAwLjAwMFoifV0sInRpY2tlcnMiOltdLCJ0cmlhbCI6dHJ1ZSwiYWN0aXZlIjp0cnVlLCJncm91cCI6ImFkbWluIiwib2JqZWN0IjoidXNlciIsImlkIjoiNTNjZWI1ZWQ4NjgxOGExOTdiYThlYzIwIn0.htZ_xCqbdIE7OMlG6JSLbpqHu3AZWCDs8PytE8pKSns"
}
```

>  JSON Web Token (JWT) is a means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is digitally signed or MACed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE). &ndash; [IETF][ietf]

In order to communicate over websockets with Market Prophit API endpoints, you must pass a valid JWT.

The flow of communication with the Market Prophit websocket server is as follows:

1. Retrieve a JWT using your secret API key (do not expose your secret API key)
2. Pass the JWT as part of the request query object while connecting to the Market Prophit websocket server as the param `token`.
3. Every (5) hours from when the JWT was generated, re-generate a new JWT since the previous expires

[ietf]: http://tools.ietf.org/html/draft-jones-json-web-token-10

### HTTP Request

`POST https://open.marketprophit.com/jwt`
