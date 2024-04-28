"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prismaClient = void 0;
var _client = require("@prisma/client");
const prismaClient = exports.prismaClient = new _client.PrismaClient({
  log: ['query', 'info', 'warn', 'error']
});