const { User } = require("../models");

const userData = [
  {
    name: "Mike",
    email: "mike@gmail.com",
    password: "password",
  },
  {
    name: "Sam",
    email: "sam@gmail.com",
    password: "password",
  },
  {
    name: "Sara",
    email: "sara@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
