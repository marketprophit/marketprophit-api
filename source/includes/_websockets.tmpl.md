
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
    var socket = io.connect('<%= url %>', {
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
          'Basic ' + btoa('<%= apiKey %>:')
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
curl -X POST <%- auth %> "<%= url %>/jwt"
```

> Returns response headers such as:

```bash
<%- curl('/jwt -X POST -s -D- -o/dev/null') %>
```

> Returns response such as:

```json
<%- curl('/jwt -X POST') %>
```

>  JSON Web Token (JWT) is a means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is digitally signed or MACed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE). &ndash; [IETF][ietf]

In order to communicate over websockets with Market Prophit API endpoints, you must pass a valid JWT.

The flow of communication with the Market Prophit websocket server is as follows:

1. Retrieve a JWT using your secret API key (do not expose your secret API key)
2. Pass the JWT as part of the request query object while connecting to the Market Prophit websocket server as the param `token`.
3. Every (5) hours from when the JWT was generated, re-generate a new JWT since the previous expires

[ietf]: http://tools.ietf.org/html/draft-jones-json-web-token-10

### HTTP Request

`POST <%= url %>/jwt`