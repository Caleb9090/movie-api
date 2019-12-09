module.exports = (connection, Sequelize, Movies, Genres) => {
  return connection.define('movies-genres', {
    movieId: {
      type: Sequelize.INTEGER, primaryKey: true, reference: { model: Movies, key: 'id' }
    },
    genreId: {
      type: Sequelize.INTEGER, primaryKey: true, reference: { model: Genres, key: 'id' }
    },
  }, { paranoid: true })
}