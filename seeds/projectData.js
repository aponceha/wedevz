const { Project } = require('../models');

const projectData = [
   {
      id: 1,
      name: "Day Planner",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "1",
      

   },
   {
      id: 2,
      name: "Porfolio Website",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"Javascript",
      user_id: "1",

   },
   {
      id: 3,
      name: "Calculator App",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "2",
   },
   {
      id: 4,
      "name": "Note Taker",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "3",
   },
   {
      id: 5,
      name: "Weaper App5",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"Express js",
      user_id: "3",
   },
   {
      id: 6,
      name: "Weaper App6",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "3",

   },
   {
      id: 7,
      name: "Weaper App7",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "4",

   },
   {
      id: 8,
      name: "Weaper App8",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "4",
   },
   {
      id: 9,
      name: "Weaper App9",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "4",

   },
   {
      id: 10,
      name: "Weaper App10",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "4",
   },
   {
      id: 11,
      name: "Weaper App11",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "5",

   },
   {
      id: 12,
      name: "Weaper App12",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "6",

   },
   {
      id: 13,
      name: "Weaper App13",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "7",

   },
   {
      id: 14,
      name: "Weaper App14",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "8",

   },
   {
      id: 15,
      name: "Weaper App15",
      description: "App that retrieves what time of day it is, displays an agenda and allows users to write in scheduled meetings and events.",
      link: "github/cparsons/dayplanner.com",
      project_technology:"HTML",
      user_id: "9",

   }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;