const express = require('express')
const models = require('./models')

const app = express()

app.get('/movies', async (request, response) => {
  const movies = await models.Movies.findAll({
    include: [{ model: models.Directors }, { model: models.Genres }]
  })
  return response.send(movies)
})

app.get('/movies/:id', async (request, response) => {
  const movie = await models.Movies.findOne({
    where: { id: request.params.id },
    include: [{ model: models.Directors }, { model: models.Genres }]
  })

  if (movie) {
    return response.send(movie)
  } else {
    return response.sendStatus(404)
  }
})


app.get('/directors/:id', async (request, response) => {
  const director = await models.Directors.findOne({
    where: { id: request.params.id }
  })

  if (director) {
    return response.send(director)
  } else {
    return response.sendStatus(404)
  }
})

app.get('/genres/:name', async (request, response) => {
  const genre = await models.Genres.findOne({
    where: { name: request.params.name }
  })

  if (genre) {
    return response.send(genre)
  } else {
    return response.sendStatus(404)
  }
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

const port = process.env.NODE_ENV === 'production' ? 80 : 1337
app.listen(port, () => { console.log(`Listening on ${port}...`) })

module.exports = app