const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt:{
    type:String,
    
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "/images/default.png",
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});



userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.salt = salt.toString(); // Store the salt in the document
  this.password = await bcrypt.hash(this.password, salt);
  next();
});




module.exports = model("user", userSchema);
