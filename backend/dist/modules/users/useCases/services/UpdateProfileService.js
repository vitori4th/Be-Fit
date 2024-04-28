"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _UserRepository = _interopRequireDefault(require("../../repositories/user/UserRepository"));
var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UpdateProfileService {
  async execute({
    user_id,
    name,
    lastname,
    dateBirth,
    cellphone
  }) {
    const userRepository = new _UserRepository.default();
    const user = await userRepository.findById(user_id);
    if (!user) {
      throw new _AppError.default('User not found');
    }
    user.name = name;
    user.lastname = lastname;
    user.cellphone = cellphone;
    user.dateBirth = dateBirth;
    const userUpdated = await userRepository.update(user);
    return userUpdated;
  }
}
var _default = exports.default = UpdateProfileService;