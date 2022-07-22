const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
	item_name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	rating:{
		type: String,
		required: false
    },
    veg_or_nonveg:{
		type: String,
		required: false
	},
	add_on: [
		new mongoose.Schema(
		  {
			addon: {
			  type: String,
			  required: false
			},
			price_addon: {
			  type: Number,
			  required: false
			}
		  },
		)
	  ],
    interests:{
		type: String,
		required: false
	},
	shop_name:{
		type: String,
		required: true
	}
    
});

module.exports = Item = mongoose.model("Items", ItemSchema);
