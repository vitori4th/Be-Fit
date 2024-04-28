"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d'
  }
};