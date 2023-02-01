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

        // randomization of array
        const usergallery = userData.map((user) => 
            user.get({ plain: true })
        );
        console.log(usergallery);
        // Render Explore Page
        res.render(".", {
            usergallery,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



