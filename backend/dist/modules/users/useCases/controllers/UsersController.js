"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));
var _classTransformer = require("class-transformer");
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UsersController {
  async create(request, response) {
    const {
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password,
      role,
      confirmPassword
    } = request.body;
    const createUser = new _CreateUserService.default();
    const user = await createUser.execute({
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password,
      role,
      confirmPassword
    });
    return response.json((0, _classTransformer.instanceToInstance)(user));
  }
  async show(request, response) {
    const {
      id
    } = request.params;
    const userRepository = new _UserRepository.default();
    const user = await userRepository.findById(id);
    return response.json((0, _classTransformer.instanceToInstance)(user));
  }
  async index(_request, response) {
    const userRepository = new _UserRepository.default();
    const users = await userRepository.findAllUsers();
    return response.json((0, _classTransformer.instanceToInstance)(users));
  }
}
exports.default = UsersController;