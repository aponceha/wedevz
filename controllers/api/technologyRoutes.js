const { Project, User, Technology } = require("../../models");
const router = require("express").Router();

// GET all technologies
router.get("/", (req, res) => {
  Technology.findAll()
    .then((dbTechnologyData) => res.json(dbTechnologyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single technology
router.get("/:id", (req, res) => {
  Technology.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTechnologyData) => {
      if (!dbTechnologyData) {
        res.status(404).json({ message: "No technology found with this id" });
        return;
      }
      res.json(dbTechnologyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
