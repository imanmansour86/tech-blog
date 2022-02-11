const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//add a new blog
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      date_created: Date(),
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update new blog
router.put("/:id", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.update(
      {
        ...req.body,
      },
      { where: { id: req.params.id } }
    );

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogtData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogtData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    res.status(200).json(blogtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
