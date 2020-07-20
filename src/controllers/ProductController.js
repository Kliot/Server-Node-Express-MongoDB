import ProductModel from "../models/Product"

class ProductController {
	
	index(req, res) {
		ProductModel.find().then((err, products) => {
			if(err) {
				res.send(err);
			}
			res.json(products);
		});
	}

	create(req, res) {
		const data = req.body;
		const product = new ProductModel({
			title: data.title,
			desc: data.desc,
	      	category: data.category,
	      	image: data.image,
	      	price: data.price,
	      	company: data.company,
	      	rating: data.rating,
	      	numReviews: data.numReviews,
	      	countInStock: data.countInStock
		});

		product.save().then(() => {
			res.send({status: "ok"});
		});
	}

	read(req, res) {
		ProductModel.findById({ _id: req.params.id }).then(product => {
			if(!product) {
				res.send({ error: "not found" });
			}

			res.json(product);
		});
	};

	update(req, res) {
		ProductModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
			if(err) {
				res.send(err);
			}

			res.json({status: "update"});
		});
	};

	delete(req, res) {
		ProductModel.remove({
			_id: req.params.id
		}).then(product => {
			if(product) {
				res.json({ status: "delete"});
			} else {
				res.json({status: "error"});
			}
		});
	};

}

export default ProductController;