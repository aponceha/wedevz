const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.js');
const projectData = require('./projectData.js');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await userData();
    await projectData();

  process.exit(0);
};

seedDatabase();