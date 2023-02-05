const router = require("express").Router();
const { Project } = require("../../models");

// GET all projects
router.get("/", (req, res) => {
  Project.findAll()
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single project
router.get("/:id", (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a new project
router.post("/", (req, res) => {
  Project.create({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    project_technology: req.body.project_technology,
    user_id: req.body.user_id,
    
  })
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE a project
router.put("/:id", (req, res) => {
  Project.update(
    {
      name: req.body.name,
      description: req.body.description,
      link: req.body.link,
      project_technology: req.body.project_technology,
      user_id: req.body.user_id,
      
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a project
router.delete("/:id", (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
