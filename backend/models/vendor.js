const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
	manager_name: {
		type: String,
		required: true
	},
	shop_name: {
		type: String,
		required: true
	},
	contact_number:{
		type: Number,
		required: false
    },
    email:{
		type: String,
		required: false
    },
    opening_time:{
		type: String,
		required: false
	},
	closing_time:{
		type: String,
		required: false
    },
    username:{
        type: String,
		required: true
    },
    password:{
        type: String,
		required: true
    }
    
});

module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
