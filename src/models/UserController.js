import UserModel from "../models/User";
import { getToken } from '../util';

class UserController {


	index(req, res) {
		UserModel.find().then((err, users) => {
			if(err) {
				res.send(err);
			}
			res.json(users);
		});
	}

	create(req, res) {
		const data = req.body;
		const user = new UserModel({
			name: data.name,
			email: data.email,
			password: data.password,
			isAdmin: data.isAdmin

		});

		user.save().then(() => {
			res.send({status: "ok"});
		});
	};


	singin(req, res) {
		const signinUser = UserModel.findOne({
		    email: req.body.email,
		    password: req.body.password,
		  });
		if (signinUser) {
		    res.send({
		      _id: signinUser.id,
		      name: signinUser.name,
		      email: signinUser.email,
		      isAdmin: signinUser.isAdmin,
		      token: getToken(signinUser),
		    });
		} 
		else {
		    res.status(401).send({ message: 'Invalid Email or Password.' });
		}
	};

}
	
export default UserController;