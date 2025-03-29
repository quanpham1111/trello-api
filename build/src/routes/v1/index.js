"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIs_V1 = void 0;
var _express = _interopRequireDefault(require("express"));
var _httpStatusCodes = require("http-status-codes");
var _boardRoute = require("./boardRoute");
var Router = _express["default"].Router();

//check APIs V1 /status
Router.get('/status', function (req, res) {
  res.status(_httpStatusCodes.StatusCodes.OK).json({
    message: 'APId v1 ready to use.',
    code: _httpStatusCodes.StatusCodes.OK
  });
});

//Board APIs
Router.use('/boards', _boardRoute.boardRoute);
var APIs_V1 = exports.APIs_V1 = Router;