const request = require('request')
const cheerio = require('cheerio')

request('https://www.imdb.com/chart/moviemeter', function (err, res, body) {
  if (err) {
    console.log('Deu Ruim Cara :(' + err)
    return
  }
  var $ = cheerio.load(body)

})