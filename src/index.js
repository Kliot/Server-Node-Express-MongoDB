import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import ProductModel from "./models/Product";
import ProductController from "./controllers/ProductController";
const Product = new ProductController();


const app = express();
mongoose.connect("mongodb://localhost/store", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/goods', Product.create);

app.get('/goods', Product.index);

app.get('/goods/:id', Product.read);

app.delete('/goods/:id', Product.delete);

app.put('/goods/:id', Product.update);


app.listen(3000, function() {
	console.log("Start");
})







