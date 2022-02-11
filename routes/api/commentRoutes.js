const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//add a new comment
router.post("/", withAuth, async (req, res) => {
  console.log("new comment created", req.body);
  try {
    const newComment = await Comment.create({
      ...req.body,
      date_created: Date(),
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get all comments

router.get("/", async (req, res) => {
  try {
    const dBCommentData = await Comment.findAll({
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

    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
