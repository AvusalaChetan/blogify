const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const {
  createTokenForUser,
  
} = require("../services/authentication");

//creating user
const singUpUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(500).send("all feilds are require");
  }
  const existingUser = await userModel.findOne({ email: req.body.email });
  if (existingUser) {
    return res
      .status(401)
      .render("signup", { error: "incorrect email or password " });
  }

  const user = await userModel.create({
    fullName,
    email,
    password,
  });
  const token = createTokenForUser(user);
  res.cookie("token", token).redirect("/");

  res.redirect("/");
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send("all fields are required "); // Add return
    }
    const user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(401)
        .render("signin", { error: "incorrect email or password " });

    const isMatch = await bcrypt.compare(password, user.password); // Add await
    if (!isMatch)
      return res
        .status(401)
        .render("signin", { error: "incorrect email or password " });

    const token = createTokenForUser(user);
    res.cookie("token", token).redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { loginUser, singUpUser };
