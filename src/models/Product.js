import mongoose, {Schema} from "mongoose";
const ProductSchema = new Schema (    {        
	title: String,        
	desc: String,        
	category: String,        
	image: String,        
	price: Number,        
	company: String,        
	rating: Number,        
	numReviews: Number,        
	countInStock: Number    
},    
{        
	timestamps: true    
});
const Product = mongoose.model('Product', ProductSchema);
export default Product;