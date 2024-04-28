"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProFileValidator = void 0;
var _celebrate = require("celebrate");
const updateProFileValidator = exports.updateProFileValidator = {
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string(),
    lastname: _celebrate.Joi.string(),
    dateBirth: _celebrate.Joi.date(),
    cellphone: _celebrate.Joi.string()
  }
};