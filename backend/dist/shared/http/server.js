"use strict";

require("reflect-metadata");
require("express-async-errors");
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));
var _celebrate = require("celebrate");
var _AppError = _interopRequireDefault(require("../errors/AppError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)());
_dotenv.default.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
console.log(process.env.NODE_ENV);
app.use(_express.default.json());
app.use(_routes.default);
app.use((0, _celebrate.errors)());
app.use((error, _request, response, _next) => {
  if (error instanceof _AppError.default) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
app.listen(3333, () => console.log(`Server is running on 3333`));