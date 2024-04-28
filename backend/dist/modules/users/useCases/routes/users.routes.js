"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));
var _celebrate = require("celebrate");
var _registerUserValidator = require("../validators/registerUserValidator");
var _isAuthenticated = _interopRequireDefault(require("../../../../shared/http/middlewares/isAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const usersRouter = (0, _express.Router)();
const usersController = new _UsersController.default();
usersRouter.post('/', (0, _celebrate.celebrate)(_registerUserValidator.registerUservalidator), usersController.create);
usersRouter.get('/', _isAuthenticated.default, usersController.index);
usersRouter.get('/:id', _isAuthenticated.default, (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().uuid().required()
  }
}), usersController.show);
var _default = exports.default = usersRouter;