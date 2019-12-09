'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('genres', [
      { name: 'Science fiction' },
      { name: 'Drama' },
      { name: 'Fantasy' },
      { name: 'Comedy' },
      { name: 'Romantic comedy' },
      { name: 'Epic' },
      { name: 'Biography' },
      { name: 'Screwball comedy' },
      { name: 'Comedy-drama' },
      { name: 'Western' },
      { name: 'Musical' },
      { name: 'Romance' },
      { name: 'Mystery' },
      { name: 'Film noir' },
      { name: 'Black comedy' },
      { name: 'Adventure' },
      { name: 'Horror' },
      { name: 'Thriller' },
      { name: 'Musical comedy' },]
    )
  },


  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('genres')
  }
}
