const express = require("express");
const AuthController = require("../controllers/AuthController");
const checkLogin = require("../middleware/auth");
const router = express.Router();
module.exports = () => {
  router.post("/auth/register", AuthController.register);
  router.post("/auth/login", AuthController.login);
  router.get("/verify-login", checkLogin, (req, res) => {
    res.status(200).send("Access to private route passed");
  });
  return router;
};
