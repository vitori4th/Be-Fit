"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../config/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function isAuthenticated(req, _res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new _AppError.default('JWT Token is missing.');
  }
  const [, token] = authHeader.split(' ');
  try {
    const decodeToken = (0, _jsonwebtoken.verify)(token, _auth.default.jwt.secret);
    const {
      sub
    } = decodeToken;
    req.user = {
      id: sub
    };
    return next();
  } catch (_err) {
    throw new _AppError.default('Invalid JWT Token');
  }
}