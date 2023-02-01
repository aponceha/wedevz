const User = require('./User');
const Project = require('./Project');


User.hasMany(Project, {
  foreignKey: 'project_id',
});

Project.belongsTo(User, {
  foreignKey: 'project_id',
});

  

module.exports = { User, Project };
