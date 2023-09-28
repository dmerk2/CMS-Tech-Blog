const { User } = require("../models");

const userData = [
  {
    username: "Test1",
    password: "test1password",
  },
  {
    username: "Test2",
    password: "test2password",
  },
  {
    username: "Test3",
    password: "test3password",
  },
  {
    username: "Test4",
    password: "test4password",
  },
  {
    username: "Test5",
    password: "test5password",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
