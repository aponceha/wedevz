const sequelize = require('../config/connection');
const { Technology, Project } = require('../models');

// const userData = require('./userData.json');
const projectData = require('./projectData.js');
const technologyData = require('./technologyData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedProject();
    await seedTechnology();

  
  

  process.exit(0);
};

seedDatabase();
