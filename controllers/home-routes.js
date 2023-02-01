const router = require('express').Router();
const User = require('../models/User');
const Project = require('../models/Project');

// const cloudinary = require('/utils/cloudinary');

// Cloudinary upload

// Render login page
res.render("login");


// Render signup page
res.render("signup");

// Render profile page
res.render("profile");

// Render edit page
res.render("edit");

// Render explore page

// GET all users for explore page
router.get('/explore', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Project,
                    attributes: ['name', 'description', 'link', 'project_technology'],
                },
               
            ],
        });
        const usergallery = userData.map((user) => 
            user.get({ plain: true })
        );
        console.log(usergallery);
        // Render Explore Page
        res.render("./partials/explorepage", {
            usergallery,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Project,
                    attributes: ['name', 'description', 'link', 'project_technology'],
                },
               
            ],
        });
        const usergallery = userData.map((user) => 
            user.get({ plain: true })
        );
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

// GET a single user
router.get('/profile/:id', async (req, res) => {
    try {
      const projectData = await User.findByPk(req.params.id, {
        include: [
            {
                model: Project,
                attributes: ['name', 'description', 'link', 'project_technology'],
            },
           
        ],
      });
  
      const project = projectData.get({ plain: true });
      console.log(project);
      console.log(project.projects);
      res.render('./partials/profile', {
        ...project,
        logged_in: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

router.get('/login', async (req, res) => {
    try {
       
        res.render("./partials/login", {
            
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all projects for explore page
// router.get('/projects/', async (req, res) => {
//     try {
//         const projectData = await Project.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['first_name', 'last_name', 'location'],
//                 },
                
//             ],
//         });
//         const projectgallery = projectData.map((project) => 
//             project.get({ plain: true })
//         );
//         // Render Explore Page
//         res.render("./partials/explorepage", {
//             projectgallery,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });
module.exports = router;


