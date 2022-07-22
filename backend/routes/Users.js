var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Buyer = require("../models/buyer");
const Vendor = require("../models/vendor");
const Item = require("../models/item")
//var o=localStorage.getItem("y")

// POST request 
// Login
router.post("/login", (req, res) => {
    const password = req.body.password;
    const username = req.body.username;
    //var n=0;
    //console.log(req.body.username);
    // Find user by email
	Buyer.findOne({ username, password }).then(buyer => {
        if(buyer){
            console.log("password Found");
            var m = {Element: buyer , dum:1};
           // var m2 = localStorage.setItem("n",1)
            res.send(m);
        }
        if(!buyer){
            Vendor.findOne({ username, password }).then(vendor => {
                if(vendor){
                    console.log("password Found");
                    var m = {Element: vendor, dum: 2};
                    //var m2 = localStorage.setItem("n",2)
                    res.send(m);
                }
                else{
                    //var m2 = localStorage.setItem("n",3)
                    return res.status(404).json({
                        error: "password not found",
                     	});
                }
            });
        }

    });
    

    

});

router.post("/buyerpage", (req, res) => {
    // console.log(req.body.username);
     const username = req.body.username1;
     console.log(req.body.username1);
     Buyer.findOne({ username}).then(buyer => {
         if(buyer){
             console.log("password Found");
             var m1 = {Element1: buyer};
            //  var m = localStorage.setItem("n",1)
             res.json(buyer);
         }
         if(!buyer){
             Vendor.findOne({ username }).then(vendor => {
                 if(vendor){
                     console.log("password Found");
                     var m1 = {Element1: vendor};
                    //  var m = localStorage.setItem("n",2)
                     res.json(vendor);
                 }
                 else{
                    // var m = localStorage.setItem("n",3)
                     return res.status(404).json({
                         error: "password not found",
                          });
                 }
             });
         }
 
     });
     
 
     
 
 });

 router.post("/editb", (req, res) => {
     const username = req.body.username1;
     //console.log(req.body.username1);
    //  const newBuyer = {
    //     name: name,
    //     email: email,
    //     date: Date.now(),
    //     age: age,
    //     contact_number: contact_number,
    //     Batch_name: Batch_name,
    //     username: username,
    //     password: password,
    //   };
     Buyer.findOne({ username: username}).then(buyer => {
         if(buyer){
             buyer.username = req.body.username1;
             buyer.password =  req.body.password;
             buyer.name = req.body.name;
             buyer.age = req.body.age;
             buyer.email = req.body.email;
             buyer.contact_number = req.body.contact_number;
             buyer.Batch_name = req.body.Batch_name;
             buyer.save();
             res.json(buyer);
             console.log(buyer);
         }
         if(!buyer){
                     return res.status(404).json({
                         error: "password not found",
                          });
         }
 
     });
     
 
     
 
 });


 router.post("/editv", (req, res) => {
    const username = req.body.username1;
    //console.log(req.body.username1);
    Buyer.findOne({ username}).then(vendor => {
        if(vendor){
            vendor.username = req.body.username;
            vendor.password =  req.body.password;
            vendor.manager_name = req.body.manager_name;
            vendor.shop_name = req.body.shop_name;
            vendor.email = req.body.email;
            vendor.contact_number = req.body.contact_number;
            vendor.opening_time = req.body.opening_time;
            vendor.closing_time = req.body.closing_time;
            vendor.save();
            res.json(vendor);
            console.log(vendor);
        }
        if(!vendor){
                    return res.status(404).json({
                        error: "password not found",
                         });
        }

    });
    

    

});


router.get("/food", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.post("/addfood", (req, res) => {
    const newItem = new Item({
        item_name: req.body.item_name,
        shop_name: req.body.shop_name,
        price: req.body.price,
        rating: req.body.rating,
        veg_or_nonveg: req.body.veg_or_nonveg,
        interests: req.body.interests,
        add_on: req.body.add_on,
    });

    newItem.save()
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;

