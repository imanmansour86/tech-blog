const sequelize = require("../config/connection");
const seedBlog = require("./blogData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUser();

  process.exit(0);
};

seedAll();
