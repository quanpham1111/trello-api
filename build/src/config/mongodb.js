"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_DB = exports.CONNECT_DB = exports.CLOSE_DB = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongodb = require("mongodb");
var _environment = require("./environment");
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

//khởi tạo đối tượng trelloDatabaseInstance là null( vì chúng ta chưa connect với database)
var trelloDatabaseInstance = null;

//khởi tạo đối tượng để connect tới mongoDb
var mongoClientInstance = new _mongodb.MongoClient(_environment.env.MONGODB_URI, {
  serverApi: {
    version: _mongodb.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

//kết nối tới database
var CONNECT_DB = exports.CONNECT_DB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return mongoClientInstance.connect();
        case 2:
          trelloDatabaseInstance = mongoClientInstance.db(_environment.env.DATABASE_NAME);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function CONNECT_DB() {
    return _ref.apply(this, arguments);
  };
}();

//đóng kết nối database
var CLOSE_DB = exports.CLOSE_DB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Took part in CLOSE_DB');
          _context2.next = 3;
          return mongoClientInstance.close();
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function CLOSE_DB() {
    return _ref2.apply(this, arguments);
  };
}();

//đảm bảo chỉ gọi GET_DB này sau khi đã kết nối thành công đến MongoDb
var GET_DB = exports.GET_DB = function GET_DB() {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!');
  return trelloDatabaseInstance;
};