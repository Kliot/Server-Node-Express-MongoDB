import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema (
	{
		title: String,
		desc: String
		//price: String,
		//img: String
	},
	{
		timestamps: true
	}
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;