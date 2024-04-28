"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = require("jsonwebtoken");
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));
var _bcrypt = require("bcrypt");
var _auth = _interopRequireDefault(require("../../../../config/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateSessionsService {
  async execute({
    email,
    password
  }) {
    const userRepository = new _UserRepository.default();
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new _AppError.default('Icorrect email/password combination.', 401);
    }
    const passwordConfirmed = await (0, _bcrypt.compare)(password, user.password);
    if (!passwordConfirmed) {
      throw new _AppError.default('Icorrect email/password combination.', 401);
    }
    const token = (0, _jsonwebtoken.sign)({}, _auth.default.jwt.secret, {
      subject: user.id,
      expiresIn: _auth.default.jwt.expiresIn
    });
    return {
      user,
      token
    };
  }
}
var _default = exports.default = CreateSessionsService;