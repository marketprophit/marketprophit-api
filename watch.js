
// # asynchronously compiles `index.template.md` and to `index.md`

var path = require('path')
var fs = require('fs')
var util = require('util')
var readdirp = require('readdirp')

var tmpl = path.join(__dirname, 'source', 'index.template.md')
var index = path.join(__dirname, 'source', 'index.md')

var url = process.env.NODE_ENV === 'production' ? 'https://open.marketprophit.com' : 'http://localhost:3000'

var apiKey = 'sk_live_fXgDgry814qwakL41KDZin47'
var auth = '-u "' + apiKey + ':"'

var aejs = require('async-ejs').add('curl', function(str, callback) {
  var exec = require('child_process').exec
  exec(util.format('curl -k %s %s%s', auth, url, str), {
    maxBuffer: Infinity
  }, function(err, stdout) {
    if (err) return callback(err)
    try {
      stdout = JSON.parse(stdout)
      if (stdout instanceof Array)
        stdout = stdout.slice(0, 3)
      callback(null, JSON.stringify(stdout, null, 2))
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
    url: url,
    auth: auth,
    apiKey: apiKey,
    userId: '14216123',
    sector: 'Technology',
    timeFrames: [
      'ONE_WEEK',
      'TWO_WEEKS',
      'THREE_WEEKS',
      'FOUR_WEEKS'
    ],
    sectors: [
      'Agriculture',
      'BasicMaterials',
      'Conglomerates',
      'ConsumerGoods',
      'Currency',
      'Energy',
      'Financial',
      'Healthcare',
      'Index',
      'IndustrialGoods',
      'Livestock',
      'Metals',
      'Other Futures',
      'Services',
      'Technology',
      'Utilities'
    ]
  }, function(err, result) {
    if (err) {
      console.error(err)
      process.exit(0)
    }
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
