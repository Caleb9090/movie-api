'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('directors', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      name: { type: Sequelize.STRING, },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })
  },


  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('directors')
  }
}
