const mongoose = require("mongoose");
//import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date:{
		type: Date,
		required: false
	}
});

// userSchema.methods.matchPassword = async function (enteredPassword) {
// 	return await bcrypt.compare(enteredPassword, this.password);
//   };
  
//   // will encrypt password everytime its saved
//   userSchema.pre("save", async function (next) {
// 	if (!this.isModified("password")) {
// 	  next();
// 	}
// 	const salt = await bcrypt.genSalt(10);
// 	this.password = await bcrypt.hash(this.password, salt);
//   });
  

module.exports = User = mongoose.model("Users", UserSchema);
