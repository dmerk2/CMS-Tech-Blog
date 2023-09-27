const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk();
    if (!postData) {
      res.status(404).json({ message: "No post found" });
    }
    res.json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createPost = await Post.create(req.body);
    if (!createPost) {
      res.status(404).json({ message: "No post found" });
    }
    res.json(createPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletePost) {
      res.status(404).json({ message: "No post found" });
    }
    res.json(deletePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
