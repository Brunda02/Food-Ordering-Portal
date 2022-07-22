const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contact_number:{
		type: String,
		required: false
    },
    age:{
		type: String,
		required: false
    },
    Batch_name:{
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

module.exports = Buyer = mongoose.model("Buyers", BuyerSchema);
