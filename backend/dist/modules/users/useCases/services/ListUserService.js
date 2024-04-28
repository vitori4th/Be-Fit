"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ListUserService {
  async execute({
    id
  }) {
    const usersRepository = new _UserRepository.default();
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new _AppError.default('User not found');
    }
    return user;
  }
}
exports.default = ListUserService;