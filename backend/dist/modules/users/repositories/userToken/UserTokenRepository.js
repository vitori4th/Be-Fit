"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _prismaClient = require("../../../../prisma/prismaClient");
class UserTokensRepository {
  async findByToken(token) {
    const userToken = await _prismaClient.prismaClient.userToken.findUnique({
      where: {
        token
      }
    });
    return userToken;
  }
  async generate(user_id) {
    const userToken = await _prismaClient.prismaClient.userToken.create({
      data: {
        user_id
      }
    });
    return userToken;
  }
}
var _default = exports.default = UserTokensRepository;