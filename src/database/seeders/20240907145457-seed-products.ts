'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {

    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        categoryId: 1,
        name: 'pollo',
        status: true,
      },
      {
        id: 2,
        categoryId: 2,
        name: 'papalays',
        status: true,
      },
      {
        id: 3,
        categoryId: 3,
        name: 'manzana',
        status: true,
      },
      {
        id: 4,
        categoryId: 4,
        name: 'trozos de atun',
        status: true,
      },
      {
        id: 5,
        categoryId: 5,
        name: 'keke',
        status: true,
      },
      
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete('products', {}, {});
  }
};
