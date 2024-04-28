"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
var _bcrypt = require("bcrypt");
var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));
var _excludePasswordUser = require("../../../../shared/utils/excludePasswordUser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateUserService {
  async execute({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role,
    confirmPassword
  }) {
    const userRepository = new _UserRepository.default();
    const emailExists = await userRepository.findByEmail(email);
    if (emailExists) {
      throw new _AppError.default('Email addres already used.');
    }
    const cpfExists = await userRepository.findByCPF(cpf);
    if (cpfExists) {
      throw new _AppError.default('CPF already used.');
    }
    if (password !== confirmPassword) {
      throw new _AppError.default('Passwords do not match.');
    }
    const hashedPassword = await (0, _bcrypt.hash)(password, 8);
    const user = {
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password: hashedPassword,
      role
    };
    const userCreated = await userRepository.register(user);
    const userWithoutPassword = (0, _excludePasswordUser.excludeFromObject)(userCreated, ['password']);
    return userWithoutPassword;
  }
}
exports.default = CreateUserService;