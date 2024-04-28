"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserToken = void 0;
var _crypto = require("crypto");
class UserToken {
  constructor() {
    this.id = void 0;
    this.token = void 0;
    this.user = void 0;
    this.user_id = void 0;
    this.createdAt = void 0;
    this.updatedAt = void 0;
    if (!this.id) {
      this.id = (0, _crypto.randomUUID)();
    }
  }
}
exports.UserToken = UserToken;