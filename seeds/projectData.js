const { Project } = require('../models');

const projectData = [
   {
      id: 1,
      name: "Day Planner",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "1",
      technology_id: 11,
      technology_id: 12,
      technology_id: 1,
      technology_id: 2,
      technology_id: 3,

   },
   {
      id: 2,
      name: "Porfolio Website",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "1",
      technology_id: 2,
      technology_id: 3,

   },
   {
      id: 3,
      name: "Calculator App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "2",
      technology_id: 1,


   },
   {
      id: 4,
      "name": "Note Taker",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "3",
      technology_id: 2,
      technology_id: 3,

   },
   {
      id: 5,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "3",
      technology_id: 5,
      technology_id: 6,

   },
   {
      id: 6,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "3",
      technology_id: 7,
      technology_id: 8,

   },
   {
      id: 7,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "4",
      technology_id: 9,
      technology_id: 10,

   },
   {
      id: 8,
      name: "Weaper App",
      description": "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "4",
      technology_id: 2,
      technology_id: 5,

   },
   {
      id: 9,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "4",
      technology_id: 4,
      technology_id: 11,

   },
   {
      id: 10,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "4",
      technology_id: 9,
      technology_id: 3,

   },
   {
      id: 11,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "5",
      technology_id: 7,
      technology_id: 1,

   },
   {
      id: 12,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "6",
      technology_id: 1,
      technology_id: 8,

   },
   {
      id: 13,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "7",
      technology_id: 2,
      technology_id: 3,

   },
   {
      id: 14,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "8",
      technology_id: 4,
      technology_id: 5,
      technology_id: 1,
      technology_id: 2,

   },
   {
      id: 15,
      name: "Weaper App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      user_id: "9",
      technology_id: 4,
      technology_id: 5,

   }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;