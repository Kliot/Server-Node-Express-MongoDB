import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import config from './config';
import { getToken } from './util';
//import cors from 'cors';
//import data from "./data";

import ProductModel from "./models/Product";
import ProductController from "./controllers/ProductController";
const Product = new ProductController();

import UserModel from "./models/User";
import UserController from "./controllers/UserController";
const User = new UserController();

//const cors = cors();

var cors = require('cors');

const app = express();


mongoose.connect("mongodb+srv://admin:LzleozMrsHvfH5tL@cluster0-qofod.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
//mongoose.connect("mongodb://localhost/store", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/goods', Product.create);

app.get('/goods', cors(), Product.index);

app.get('/goods/:id', cors(), Product.read);

app.delete('/goods/:id', Product.delete);

app.put('/goods/:id', Product.update);

//app.post('/singin', cors(), User.singin);

app.post('/users', User.create);

app.get('/users', User.index);

app.post('/users/signin', (req, res) => {
  const signinUser =  UserModel.findOne({
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
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});




app.listen(8080, function() {
	console.log("Start");
})







