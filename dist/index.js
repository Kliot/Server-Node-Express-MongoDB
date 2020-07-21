"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _util = require("./util");

var _Product = _interopRequireDefault(require("./models/Product"));

var _ProductController = _interopRequireDefault(require("./controllers/ProductController"));

var _User = _interopRequireDefault(require("./models/User"));

var _UserController = _interopRequireDefault(require("./controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import cors from 'cors';
//import data from "./data";
var Product = new _ProductController["default"]();
var User = new _UserController["default"](); //const cors = cors();

var cors = require('cors');

var app = (0, _express["default"])();

 //mongoose.connect("mongodb://localhost/store", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.post('/goods', Product.create);
app.get('/goods', cors(), Product.index);
app.get('/goods/:id', cors(), Product.read);
app["delete"]('/goods/:id', Product["delete"]);
app.put('/goods/:id', Product.update); //app.post('/singin', cors(), User.singin);

app.post('/users', User.create);
app.get('/users', User.index);
app.post('/users/signin', function (req, res) {
  var signinUser = _User["default"].findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: (0, _util.getToken)(signinUser)
    });
  } else {
    res.status(401).send({
      message: 'Invalid Email or Password.'
    });
  }
});
app.listen(8080, function () {
  console.log("Start");
});
