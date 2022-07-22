// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);
var express = require("express");
var router = express.Router();

// Load User model
const Buyer = require("../models/buyer");


// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newBuyer = new Buyer({
        name: req.body.name,
        email: req.body.email,
        contact_number: req.body.contact_number,
        age: req.body.age,
        Batch_name: req.body.Batch_name,
        username: req.body.username,
        password: req.body.password
    });

    newBuyer.save()
        .then(buyer => {
            res.status(200).json(buyer);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});






// POST request 
// Login
// router.post("/login", (req, res) => {
// 	const email = req.body.email;
// 	// Find user by email
// 	User.findOne({ email }).then(user => {
// 		// Check if user email exists
// 		if (!user) {
// 			return res.status(404).json({
// 				error: "Email not found",
// 			});
//         }
//         else{
//             res.send("Email Found");
//             return user;
//         }
// 	});
// });

module.exports = router;

