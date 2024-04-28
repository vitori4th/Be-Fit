"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ListAllUserService {
  async execute() {
    const usersRepository = new _UserRepository.default();
    const users = await usersRepository.findAllUsers();
    if (!users) {
      throw new _AppError.default('Users not found');
    }
    return users;
  }
}
exports.default = ListAllUserService;