const { User } = require("../models");

const userData = [
  {
    name: "Mike",
  },
  {
    name: "Sam",
  },
  {
    name: "Sara",
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
