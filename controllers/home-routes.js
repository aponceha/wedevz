const router = require("express").Router();

// Render login page
router.get("/login", function (req, res) {
  res.render("login");
});

// Render signup page
router.get("/signup", function (req, res) {
  res.render("signup");
});

// Render profile page
router.get("/profile", function (req, res) {
  res.render("profile");
});

// Render edit page
router.get("/edit", function (req, res) {
  res.render("edit");
});

// Render explore page
router.get("/explore", function (req, res) {
  res.render("explore");
});
