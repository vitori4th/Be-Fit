"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidator = void 0;
var _celebrate = require("celebrate");
const loginValidator = exports.loginValidator = {
  [_celebrate.Segments.BODY]: {
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
};