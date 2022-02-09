const router = require("express").Router();
const { Blog, User } = require("../models");

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const dBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          //   attributes: ["name"],
        },
      ],
    });

    console.log("dBlogData here", dBlogData);

    const blogs = dBlogData.map((blog) => blog.get({ plain: true }));

    console.log("blogs here", blogs);
    res.render("all", { blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const dBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    console.log("single dBlogData here", dBlogData);

    const blogs = dBlogData.get({ plain: true });

    console.log("single here", blogs);
    res.render("blog", blogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
