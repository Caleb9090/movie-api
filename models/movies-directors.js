module.exports = (connection, Sequelize, Movies, Directors) => {
  return connection.define('movies-directors', {
    movieId: {
      type: Sequelize.INTEGER, primaryKey: true, reference: { model: Movies, key: 'id' }
    },
    directorId: {
      type: Sequelize.INTEGER, primaryKey: true, reference: { model: Directors, key: 'id' }
    },
  }, { paranoid: true })
}