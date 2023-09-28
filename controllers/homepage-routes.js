const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    res.render("homepage", { postData, user_id: req.session.user_id });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    console.log("Route GET", req.params.id);
    const onePost = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: "password",
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                exclude: "password",
              },
            },
          ],
        },
      ],
    });
    const post = onePost.get({ plain: true });
    console.log(post);
    return res.render("single-post", { post, user_id: req.session.user_id });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
