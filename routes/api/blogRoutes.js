const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//add a new blog
router.post("/", withAuth, async (req, res) => {
  try {
    const newProject = await Blog.create({
      ...req.body,
      date_created: Date(),
      user_id: req.session.user_id,
    });

    console.log("new created blog", newProject);

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
