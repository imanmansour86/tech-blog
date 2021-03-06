const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const dBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = dBlogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//get a blog by id
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const dBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blog = dBlogData.get({ plain: true });

    const dBCommentData = await Comment.findAll({
      where: {
        blog_id: {
          [Op.eq]: blog.id,
        },
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const comments = dBCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("singleblog", {
      blog,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//edit a blog by id
router.get("/blog-edit/:id", withAuth, async (req, res) => {
  try {
    const dBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blog = dBlogData.get({ plain: true });

    res.render("singleblogedit", {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get a blog by username
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dBlogData = await Blog.findAll({
      where: {
        user_id: {
          [Op.eq]: req.session.user_id,
        },
      },
      attributes: { exclude: ["password"] },

      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = dBlogData.map((blog) => blog.get({ plain: true }));

    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const user = userData.get({ plain: true });

    res.render("dashboard", {
      blogs,
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/blog", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render("blog", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

module.exports = router;
