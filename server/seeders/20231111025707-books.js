"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        name: "The Hobbit",
        author: "J.R.R Tolkien",
        year_published: 1937,
      },
      {
        name: "Book 1",
        author: "Author 1",
        year_published: 2001,
      },
      {
        name: "Book 2",
        author: "Author 2",
        year_published: 2002,
      },
      {
        name: "Book 3",
        author: "Author 3",
        year_published: 2003,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
