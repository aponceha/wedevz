const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
// const cloudinaryRoutes = require('./cloudinaryRoutes');


router.use('/projects', projectRoutes);

router.use('/user', userRoutes);

router.use('/editprofile', profileRoutes);
// router.use('/up', cloudinaryRoutes);

module.exports = router;