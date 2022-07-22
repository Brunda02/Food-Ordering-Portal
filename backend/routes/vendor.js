// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);
var express = require("express");
var router = express.Router();


const Vendor = require("../models/vendor");


router.post("/register", (req, res) => {
    const newVendor = new Vendor({
        manager_name: req.body.manager_name,
        shop_name: req.body.shop_name,
        contact_number: req.body.contact_number,
        email: req.body.email,
        opening_time: req.body.opening_time,
        closing_time: req.body.closing_time,
        username: req.body.username,
        password: req.body.password
    });

    newVendor.save()
        .then(vendor => {
            res.status(200).json(vendor);
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

