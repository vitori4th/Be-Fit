"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _UpdateProfileService = _interopRequireDefault(require("../services/UpdateProfileService"));
var _classTransformer = require("class-transformer");
var _ListUserService = _interopRequireDefault(require("../services/ListUserService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProfileController {
  async show(req, res) {
    const showProfile = new _ListUserService.default();
    const user_id = req.user.id;
    const user = await showProfile.execute({
      id: user_id
    });
    return res.json((0, _classTransformer.instanceToInstance)(user));
  }
  async update(req, res) {
    const user_id = req.user.id;
    const {
      name,
      lastname,
      dateBirth,
      cellphone
    } = req.body;
    const updateProfile = new _UpdateProfileService.default();
    const user = await updateProfile.execute({
      user_id,
      name,
      lastname,
      dateBirth,
      cellphone
    });
    return res.json((0, _classTransformer.instanceToInstance)(user));
  }
}
exports.default = ProfileController;