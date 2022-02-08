const sequelize = require("../config/connection");
const seedBlog = require("./blogData");
const seedUser = require("./userData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUser();

  await seedComment();

  process.exit(0);
};

seedAll();
