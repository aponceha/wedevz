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

// Render explore page

// GET all users for explore page
router.get('/', async (req, res) => {
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
        res.render("explore", {
            usergallery,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all projects for explore page
router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name', 'city'],
                },
                
            ],
        });
        const projectgallery = projectData.map((project) => 
            project.get({ plain: true })
        );
        // Render Explore Page
        res.render("explore", {
            projectgallery,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;


