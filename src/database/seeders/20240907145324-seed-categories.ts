'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {

    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'congelados',
        status: true,
        
      },
      {
        id: 2,
        name: 'snacks',
        status: true,
      },
      {
        id: 3,
        name: 'frutas',
        status : true,
      },
      {
        id: 4,
        name: 'enlatados',
        status: true,
      },
      {
        id: 5,
        name: 'panaderia',
        status: true,
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete('categories', {}, {});
  }
};
