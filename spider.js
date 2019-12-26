const request = require('request')
const cheerio = require('cheerio')

request('https://www.imdb.com/chart/moviemeter', function (err, res, body) {
  if (err) {
    console.log('Deu Ruim Cara :(' + err)
    return
  }
  var $ = cheerio.load(body)
  $('.lister-list tr').each(function () {
    var title = $(this).find('.titleColumn a').text().trim()
    var Nota = $(this).find('.imdbRating strong').text().trim()

    console.log('Titulo' + title + 'Nota' + Nota)
  })
})