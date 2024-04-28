"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _celebrate = require("celebrate");
var _ProfileController = _interopRequireDefault(require("../controllers/ProfileController"));
var _isAuthenticated = _interopRequireDefault(require("../../../../shared/http/middlewares/isAuthenticated"));
var _updateProfileValidator = require("../validators/updateProfileValidator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const profileRouter = (0, _express.Router)();
const profileController = new _ProfileController.default();
profileRouter.use(_isAuthenticated.default);
profileRouter.put('/', (0, _celebrate.celebrate)(_updateProfileValidator.updateProFileValidator), profileController.update);
profileRouter.get('/', profileController.show);
var _default = exports.default = profileRouter;