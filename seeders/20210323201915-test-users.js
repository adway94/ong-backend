"use strict";

const bcrypt = require("bcrypt");
let consts = require("../constant/const");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Usuario1",
          lastName: "Test",
          email: "adminUser1@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario2",
          lastName: "Test",
          email: "adminUser2@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario3",
          lastName: "Test",
          email: "adminUser3@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario4",
          lastName: "Test",
          email: "adminUser4@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario5",
          lastName: "Test",
          email: "adminUser5@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario6",
          lastName: "Test",
          email: "adminUser6@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario7",
          lastName: "Test",
          email: "adminUser7@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario8",
          lastName: "Test",
          email: "adminUser8@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario9",
          lastName: "Test",
          email: "adminUser9@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario10",
          lastName: "Test",
          email: "adminUser10@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 1,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular1",
          lastName: "Test",
          email: "regularUser1@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular2",
          lastName: "Test",
          email: "regularUser2@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular3",
          lastName: "Test",
          email: "regularUser3@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular4",
          lastName: "Test",
          email: "regularUser4@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular5",
          lastName: "Test",
          email: "regularUser5@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular6",
          lastName: "Test",
          email: "regularUser6@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular7",
          lastName: "Test",
          email: "regularUser7@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular8",
          lastName: "Test",
          email: "regularUser8@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular9",
          lastName: "Test",
          email: "regularUser9@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "UsuarioRegular10",
          lastName: "Test",
          email: "regularUser@test.com",
          // Important: Password not encrypted yet!
          password: bcrypt.hashSync("123456", consts.SALT_ROUNDS),
          roleId: 2,
          organizationId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
