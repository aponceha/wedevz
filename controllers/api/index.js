const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const uploadRoutes = require('./uploadRoutes');



router.use('/projects', projectRoutes);

router.use('/user', userRoutes);

router.use('/upload', uploadRoutes);

module.exports = router;