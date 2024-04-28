"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _CreateSessionService = _interopRequireDefault(require("../services/CreateSessionService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SessionsController {
  async create(req, res) {
    const {
      email,
      password
    } = req.body;
    const createSession = new _CreateSessionService.default();
    const user = await createSession.execute({
      email,
      password
    });
    return res.json((0, _classTransformer.instanceToInstance)(user));
  }
}
exports.default = SessionsController;