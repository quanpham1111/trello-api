"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardValidation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _joi = _interopRequireDefault(require("joi"));
var _ApiError = _interopRequireDefault(require("../utils/ApiError"));
var createNew = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var correctCondition, errorMessage, customError;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          correctCondition = _joi["default"].object({
            title: _joi["default"].string().required().min(3).max(50).trim().strict().messages({}),
            description: _joi["default"].string().required().min(3).max(256).trim().strict()
          });
          _context.prev = 1;
          _context.next = 4;
          return correctCondition.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          //validate dữ liệu xong xuôi thì cho request đi tiếp sang controller
          next();
          _context.next = 12;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          errorMessage = new Error(_context.t0).message;
          customError = new _ApiError["default"](_httpStatusCodes.StatusCodes.UNPROCESSABLE_ENTITY, errorMessage);
          next(customError);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 7]]);
  }));
  return function createNew(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var boardValidation = exports.boardValidation = {
  createNew: createNew
};