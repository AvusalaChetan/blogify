const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const {loginUser,singUpUser} = require('../controllers/auth')

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup",singUpUser);

router.get("/signin", async (req, res) => {
  res.render("signin");
});

router.post("/signin",loginUser);

router.get('/logout',(req,res)=>{
  res.clearCookie('token').redirect('/user/signin')
})
module.exports = router;