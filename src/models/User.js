import mongoose, {Schema} from "mongoose";
const UserSchema = new Schema (    {       
	name: { type: String, required: true },        
	email: { type: String, required: true, unique: true, index: true, dropDups: true},        
	password: { type: String, required: true },       
	isAdmin: { type: Boolean, required: true, default: false },    
});

const User = mongoose.model('User', UserSchema);
export default User;