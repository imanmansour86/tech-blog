const { Blog } = require("../models");

const blogData = [
  {
    title: "Oranges aren't naturally occurring fruits.",
    body: " oranges are a hybrid of tangerines and pomelos, also known as Chinese grapefruit, and they were originally green",
    post_date: "March 30, 2018",
    user_id: 1,
  },

  {
    title: "OMG",
    body: "One of the earliest uses—perhaps the earliest use—of OMG appeared in a letter to the then-member of Parliament, as The Atlantic reports",
    post_date: "March 30, 2018",
    user_id: 2,
  },

  {
    title: "Cats are actually allergic to humans.",
    body: "Though it's uncommon—since humans bathe more than your typical animal, and don't shed as much hair or skin—some animals can still be allergic to humans",
    post_date: "March 30, 2018",
    user_id: 3,
  },
  {
    title: "High heels were originally worn by men",
    body: "In the 10th century, men in Europe adopted the now-gendered fashion choice of heels to make it easier to ride their horses",
    post_date: "March 30, 2018",
    user_id: 3,
  },
  {
    title: "Stop signs used to be yellow",
    body: "In 1922, the American Association of State Highway Officials met to determine a standard design for stop signs, and that's where they decided on the color—yellow",
    post_date: "March 30, 2018",
    user_id: 3,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
