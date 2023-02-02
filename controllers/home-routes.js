const router = require('express').Router();
const User = require('../models/User');
const Project = require('../models/Project');


// GET all projects for explore page
router.get("/exploreportfolio", async (req, res) => {
    try {
      const projectData = await Project.findAll({
        include: [
          {
            model: User,
            attributes: [
              "first_name",
              "last_name",
              "github",
              "user_technology",
              "location",
              "user_pic",
            ],
          },
        ],
      });
  
      // randomization of array
      const projectgallery = projectData.map((project) =>
        project.get({ plain: true })
      );
      console.log(projectgallery);
      // Render Explore Page
      res.render("./partials/exploreportfolio", {
        projectgallery,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET all users for explore page
  router.get("/", async (req, res, withAuth) => {
    try {
      const userData = await User.findAll({
        include: [
          {
            model: Project,
          },
        ],
      });
  
      // randomization of array
      const usergallery = userData.map((user) => user.get({ plain: true }));
      console.log(usergallery);
      // Render Explore Page
      res.render("./partials/homepage", {
        usergallery,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get("/profile", async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [
          {
            model: Project,
            attributes: ["name", "description", "link", "project_technology"],
          },
        ],
      });
      const usergallery = userData.map((user) => user.get({ plain: true }));
      console.log(usergallery);
      // Render Explore Page
      res.render("./partials/profile", {
        usergallery,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get("/login", async (req, res) => {
    try {
      res.render("./partials/login", {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  