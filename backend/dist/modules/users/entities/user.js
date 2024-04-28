"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _crypto = require("crypto");
class User {
  constructor() {
    this.id = void 0;
    this.email = void 0;
    this.cpf = void 0;
    this.role = void 0;
    this.name = void 0;
    this.lastname = void 0;
    this.dateBirth = void 0;
    this.password = void 0;
    this.cellphone = void 0;
    this.token = void 0;
    this.createdAt = void 0;
    this.updatedAt = void 0;
    if (!this.id) {
      this.id = (0, _crypto.randomUUID)();
    }
  }
}
exports.User = User;