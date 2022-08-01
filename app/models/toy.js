const mongoose = require('mongoose');
// toy is a subdocument, so NOT a model
// toy will be part of the toys array for specific pets
// no need to import model from mongoose

const toySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		isSqueaky: {
			type: Boolean,
            default: false,
			required: true,
		},
		condition: {
			type: String,
            enum: ['new', 'used', 'disgusting'],
            default: 'new',
		},
	},
	{
		timestamps: true,
	},
);

module.exports = toySchema
