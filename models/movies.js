  
module.exports = (connection, Sequelize) => {
    return connection.define('movies', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      title: { type: Sequelize.STRING, },
      runTime: { type: Sequelize.INTEGER, },
      releaseDate: { type: Sequelize.DATE, },
      rating: { type: Sequelize.ENUM('Passed','G','PG','PG-13','R','Approved','Not Rated'), },
    }, {paranoid: true})
  }