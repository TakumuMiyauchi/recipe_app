// スキーマの接続 mongooseでの接続
import {Schema, model} from "mongoose";

const recipeSchema =Schema({
	name: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	memo: {
		type: String,
		required: false,
	},
}, {timestamps: true});

const recipe = model("recipes", recipeSchema);
export default recipe;
