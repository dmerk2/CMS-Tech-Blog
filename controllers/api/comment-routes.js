const router = require("express").Router();
const { Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User }],
    });
    res.json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found" });
    }
    res.json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createComment = await Comment.create(req.body);
    if (!createComment) {
      res.status(404).json({ message: "No comment found" });
    }
    res.json(createComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteComment) {
      res.status(404).json({ message: "No comment found" });
    }
    res.json(deleteComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
