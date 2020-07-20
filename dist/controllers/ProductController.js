"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductController = /*#__PURE__*/function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, [{
    key: "index",
    value: function index(req, res) {
      _Product["default"].find().then(function (err, products) {
        if (err) {
          res.send(err);
        }

        res.json(products);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;
      var product = new _Product["default"]({
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
      product.save().then(function () {
        res.send({
          status: "ok"
        });
      });
    }
  }, {
    key: "read",
    value: function read(req, res) {
      _Product["default"].findById({
        _id: req.params.id
      }).then(function (product) {
        if (!product) {
          res.send({
            error: "not found"
          });
        }

        res.json(product);
      });
    }
  }, {
    key: "update",
    value: function update(req, res) {
      _Product["default"].findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, function (err) {
        if (err) {
          res.send(err);
        }

        res.json({
          status: "update"
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      _Product["default"].remove({
        _id: req.params.id
      }).then(function (product) {
        if (product) {
          res.json({
            status: "delete"
          });
        } else {
          res.json({
            status: "error"
          });
        }
      });
    }
  }]);

  return ProductController;
}();

var _default = ProductController;
exports["default"] = _default;