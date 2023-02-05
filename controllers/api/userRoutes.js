const { Project, User } = require("../../models");
const router = require("express").Router();

// GET all users
router.get("/", (req, res) => {
  User.findAll({
    include: [
      {
        model: Project,
        attributes: ["id", "name", "description", "link", "project_technology"],
      },
    ],
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single user
router.get("/:id", (req, res) => {
  User.findOne({
    include: [
      {
        model: Project,
        attributes: ["id", "name", "description", "link", "project_technology"],
      },
    ],
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/1", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    employer: req.body.employer,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    github: req.body.github,
    user_technology: req.body.user_technology,
    user_pic: req.body.user_pic,
    age: req.body.age,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    employer: req.body.employer,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    github: req.body.github,
    user_technology: req.body.user_technology,
    user_pic: req.body.user_pic,
    age: req.body.age,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE a user
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LOGIN a user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({ message: "Incorrect email, please try again" });
      return;
    }
    const userPassword = await User.findOne({
      where: { password: req.body.password },
    });
    if (!userPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }
    console.log("out login id;");
    req.session.save(() => {
      console.log("login id;" + userData.id);
      req.session.user_id = userData.id;

      req.session.loggedIn = true;
      res.json({
        user: userData,
        message: "You are now logged in!" + req.session.user_id,
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// LOGOUT a user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
