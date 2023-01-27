const User = require('./User');
const Project = require('./Project');
const Technology = require('./Technology');

User.hasMany(Project, {
  foreignKey: 'project_id',
});

Project.belongsTo(User, {
  foreignKey: 'project_id',
});
// Many to Many - user to technology

User.belongsToMany(Technology, {
    foreignKey: 'technology_id',
  });
  
Technology.belongsToMany(User, {
    foreignKey: 'technology_id',
  });

// Many to Many - Project to technology

Project.belongToMany(Technology, {
    foreignKey: 'technology_id',
  });
  
Technology.belongsToMany(Project, {
    foreignKey: 'technology_id',
  });

module.exports = { User, Project, Technology };
