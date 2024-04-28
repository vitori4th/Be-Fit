"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUservalidator = void 0;
var _celebrate = require("celebrate");
const registerUservalidator = exports.registerUservalidator = {
  [_celebrate.Segments.BODY]: {
    cellphone: _celebrate.Joi.string().required(),
    cpf: _celebrate.Joi.number().required(),
    email: _celebrate.Joi.string().email().required(),
    dateBirth: _celebrate.Joi.date().required(),
    lastname: _celebrate.Joi.string().required(),
    name: _celebrate.Joi.string().required(),
    role: _celebrate.Joi.string().optional(),
    password: _celebrate.Joi.string().optional(),
    confirmPassword: _celebrate.Joi.string().valid(_celebrate.Joi.ref('password')).when('password', {
      is: _celebrate.Joi.exist(),
      then: _celebrate.Joi.required()
    })
  }
};