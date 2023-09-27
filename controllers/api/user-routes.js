const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: "post" }],
    });
    if (!userData) {
      res.status(404).json({ message: "No user found" });
    }
    res.json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createUser = await User.create(req.body);
    if (!createUser) {
      res.status(404).json({ message: "No user found" });
    }
    res.json(createUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteUser) {
      res.status(404).json({ message: "No user found" });
    }
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
