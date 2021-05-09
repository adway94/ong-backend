"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("organizations", "contactFacebook", {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      queryInterface.addColumn("organizations", "contactLinkedin", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("organizations", "contactTwitter", {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("organizations");
  },
};
