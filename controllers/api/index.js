const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const technologyRoutes = require('./technologyRoutes');

router.use('/projects', projectRoutes);
router.use('/technology', technologyRoutes);
router.use('/user', userRoutes);

module.exports = router;