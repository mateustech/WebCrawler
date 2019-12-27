const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

request('http://www.imdb.com/chart/moviemeter', function (err, res, body) {
  if (err) {
    console.log('Deu Ruim Cara :(' + err)
  }
  var $ = cheerio.load(body)
  $('.lister-list tr').each(function () {
    var title = $(this).find('.titleColumn a').text().trim()
    var Nota = $(this).find('.imdbRating strong').text().trim()

    console.log('Titulo ' + title + ' Nota ' + Nota)

    fs.appendFile('imdb.txt', `Titulo ${title} Nota ${Nota}\n`, function (err) {
      if (err) console.log('Error' + err)
    })
  })
})