"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _prismaClient = require("../../../../prisma/prismaClient");
var _excludePasswordUser = require("../../../../shared/utils/excludePasswordUser");
class UserRepository {
  async register({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role
  }) {
    const user = await _prismaClient.prismaClient.user.create({
      data: {
        cellphone,
        cpf,
        email,
        dateBirth,
        lastname,
        name,
        password,
        role
      }
    });
    const userWithoutPassword = (0, _excludePasswordUser.excludeFromObject)(user, ['password']);
    return userWithoutPassword;
  }
  async update({
    id,
    cellphone,
    dateBirth,
    lastname,
    name
  }) {
    const user = await _prismaClient.prismaClient.user.update({
      where: {
        id
      },
      data: {
        cellphone,
        dateBirth,
        lastname,
        name
      }
    });
    const userWithoutPassword = (0, _excludePasswordUser.excludeFromObject)(user, ['password']);
    return userWithoutPassword;
  }
  async findByEmail(email) {
    const user = await _prismaClient.prismaClient.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async findById(id) {
    const user = await _prismaClient.prismaClient.user.findUnique({
      where: {
        id
      }
    });
    const userWithoutPassword = (0, _excludePasswordUser.excludeFromObject)(user, ['password']);
    return userWithoutPassword;
  }
  async findByCPF(cpf) {
    const user = await _prismaClient.prismaClient.user.findUnique({
      where: {
        cpf
      }
    });
    return user;
  }
  async findAllUsers() {
    const users = await _prismaClient.prismaClient.user.findMany();
    const usersWithoutPassword = (0, _excludePasswordUser.excludeFromList)(users, ['password']);
    return usersWithoutPassword;
  }
}
exports.default = UserRepository;