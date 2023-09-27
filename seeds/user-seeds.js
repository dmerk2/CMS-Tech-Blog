const { User } = require("../models");

const userData = [
  {
    username: "Test1",
    email: "test1@gmail.com",
    password: "test1password",
  },
  {
    username: "Test2",
    email: "test2@gmail.com",
    password: "test2password",
  },
  {
    username: "Test3",
    email: "test3@gmail.com",
    password: "test3password",
  },
  {
    username: "Test4",
    email: "test4@gmail.com",
    password: "test4password",
  },
  {
    username: "Test5",
    email: "test5@gmail.com",
    password: "test5password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
