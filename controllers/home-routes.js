const router = require('express').Router();
const User = require('../models/User');
const Project = require('../models/Project');

// const cloudinary = require('/utils/cloudinary');

// Cloudinary upload

// Render login page
// res.render("login");


// Render signup page
// res.render("signup");

// // Render profile page
// res.render("profile");

// // Render edit page
// res.render("edit");
router.get('/explore1', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name', 'github', 'user_technology', 'location', 'user_pic'],
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
            ...projectgallery,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET all users for explore page
router.get('/explore', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Project,
                   
                },
               
            ],
        });

        // randomization of array
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


