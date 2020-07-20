"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(req, res) {
      _User["default"].find().then(function (err, users) {
        if (err) {
          res.send(err);
        }

        res.json(users);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;
      var user = new _User["default"]({
        name: data.name,
        email: data.email,
        password: data.password,
        isAdmin: data.isAdmin
      });
      user.save().then(function () {
        res.send({
          status: "ok"
        });
      });
    }
  }, {
    key: "singin",
    value: function singin(req, res) {
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
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;