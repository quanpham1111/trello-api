"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _ApiError = _interopRequireDefault(require("../utils/ApiError"));
var createNew = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            console.log(req.body);
            //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')

            //Điều hướng sang service, có kết quả thì trả về client
            res.status(_httpStatusCodes.StatusCodes.CREATED).json({
              message: 'POST from controller: API create new board'
            });
          } catch (error) {
            next(error);
            //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            // errors: error.message
            //})
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createNew(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var boardController = exports.boardController = {
  createNew: createNew
};