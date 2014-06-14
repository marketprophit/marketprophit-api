
// # asynchronously compiles `index.template.md` and to `index.md`

var path = require('path')
var fs = require('fs')

var tmpl = path.join(__dirname, 'source', 'index.template.md')
var index = path.join(__dirname, 'source', 'index.md')

var url = process.env.NODE_ENV === 'production' ? 'http://open.marketprophit.com' : 'http://localhost:3000'

var aejs = require('async-ejs').add('curl', function(str, callback) {
  var exec = require('child_process').exec
  exec('curl ' + url + str, function(err, stdout) {
    if (err) return callback(err)
    try {
      stdout = JSON.parse(stdout)
      callback(null, JSON.stringify(stdout.slice(0, 3), null, 2))
    } catch(e) {
      callback(null, stdout)
    }
  })
})

aejs.renderFile(tmpl, {
  ticker: 'AAPL',
  url: url
}, function(err, result) {

  if (err) throw err

  fs.writeFile(index, result, function(err) {
    if (err) throw err
    console.log('wrote: %s', index)
  })

})
