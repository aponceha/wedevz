const router = require("express").Router();
const { User } = require("../../models");
//const withAuth = require('../../utils/auth');


// UPDATE a profile
router.post("/:id", (req, res) => {
  console.log("router inside post")
  try {
    console.log("router put")
  User.update(
    {
      first_name: req.body.fname,
      last_name: req.body.lname,
      description: req.body.description,
      location: req.body.location,
      employer: req.body.employer,
      age: req.body.age,
      user_technology: req.body.user_technology,
      education: req.body.education,
      github: req.body.github
      
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      console.log("test put route");
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
} catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
