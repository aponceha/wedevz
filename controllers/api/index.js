const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
// const cloudinaryRoutes = require('./cloudinaryRoutes');


router.use('/projects', projectRoutes);

router.use('/user', userRoutes);

router.use('/upload', uploadRoutes);

module.exports = router;