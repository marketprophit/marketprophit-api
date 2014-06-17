
// # asynchronously compiles `index.template.md` and to `index.md`

var path = require('path')
var fs = require('fs')

var readdirp = require('readdirp')
var tmpl = path.join(__dirname, 'source', 'index.template.md')
var index = path.join(__dirname, 'source', 'index.md')

var url = process.env.NODE_ENV === 'production' ? 'http://open.marketprophit.com' : 'http://localhost:3000'

var aejs = require('async-ejs').add('curl', function(str, callback) {
  var exec = require('child_process').exec
  exec('curl ' + url + str, {
    maxBuffer: Infinity
  }, function(err, stdout) {
    if (err) return callback(err)
    try {
      stdout = JSON.parse(stdout)
      callback(null, JSON.stringify(stdout.slice(0, 3), null, 2))
    } catch(e) {
      callback(null, stdout)
    }
  })
})

var stream = readdirp({
  root: __dirname,
  fileFilter: '*.tmpl.md'
})

stream.on('data', function(entry) {

  aejs.renderFile(entry.path, {
    ticker: 'AAPL',
    url: url
  }, function(err, result) {
    if (err) throw err
    fs.writeFile(entry.path.replace('.tmpl.md', '.md'), result, function(err) {
      if (err) throw err
    })
  })

})

stream.on('warn', function (err) {
  console.error('non-fatal error', err)
  // optionally call stream.destroy() here in order to abort and cause 'close' to be emitted
})

stream.on('error', function (err) {
  console.error('fatal error', err)
})
