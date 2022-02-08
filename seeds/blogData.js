const { Blog } = require("../models");

const blogData = [
  {
    title: "First blog post",
    body: "Branches with pink apricot blossoms against a blue background.",
    post_date: "March 30, 2018",
    user_id: 1,
  },

  {
    title: "First blog post",
    body: "Branches with pink apricot blossoms against a blue background.",
    post_date: "March 30, 2018",
    user_id: 2,
  },

  {
    title: "First blog post",
    body: "Branches with pink apricot blossoms against a blue background.",
    post_date: "March 30, 2018",
    user_id: 3,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
