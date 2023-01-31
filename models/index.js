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
    through: Technology
  });
  
Technology.belongsToMany(User, {
  through: Technology
  });

// Many to Many - Project to technology

Project.belongsToMany(Technology, {
  through: Technology
  });
  
Technology.belongsToMany(Project, {
  through: Technology
  });

module.exports = { User, Project, Technology };
