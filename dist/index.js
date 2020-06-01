"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _Product = _interopRequireDefault(require("./models/Product"));

var _ProductController = _interopRequireDefault(require("./controllers/ProductController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Product = new _ProductController["default"]();
var app = (0, _express["default"])();

_mongoose["default"].connect("mongodb://localhost/store", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.post('/goods', Product.create);
app.get('/goods', Product.index);
app.get('/goods/:id', Product.read);
app["delete"]('/goods/:id', Product["delete"]);
app.put('/goods/:id', Product.update);
app.listen(3000, function () {
  console.log("Start");
});