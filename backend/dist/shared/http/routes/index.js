"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _users = _interopRequireDefault(require("../../../modules/users/useCases/routes/users.routes"));
var _sessions = _interopRequireDefault(require("../../../modules/users/useCases/routes/sessions.routes"));
var _profile = _interopRequireDefault(require("../../../modules/users/useCases/routes/profile.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use('/users', _users.default);
routes.use('/login', _sessions.default);
routes.use('/profile', _profile.default);
var _default = exports.default = routes;