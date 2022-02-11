const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Very interesting information",
    user_id: 1,
    blog_id: 1,
    date_created: "March 30, 2018",
  },
  {
    comment_text: "I didn't know that",
    user_id: 2,
    blog_id: 2,
    date_created: "March 30, 2018",
  },

  {
    comment_text: "I will use this in the future!",
    user_id: 3,
    blog_id: 3,
    date_created: "March 30, 2018",
  },
];

const seedBlog = () => Comment.bulkCreate(commentData);

module.exports = seedBlog;
