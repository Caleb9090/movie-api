const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genres')
const MoviesDirectorsModel = require('./movies-directors')
const MoviesGenresModel = require('./movies-genres')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})

const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const MoviesDirectors = MoviesDirectorsModel(connection, Sequelize, Movies, Directors)
const MoviesGenres = MoviesGenresModel(connection, Sequelize, Movies, Genres)

Movies.belongsToMany(Directors, {through: MoviesDirectors})
Movies.belongsToMany(Genres, {through: MoviesGenres})
Directors.belongsToMany(Movies, {through: MoviesDirectors})
Genres.belongsToMany(Movies, {through: MoviesGenres})

module.exports = {
  Movies,
  Directors,
  Genres
}