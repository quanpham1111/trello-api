"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _asyncExitHook = _interopRequireDefault(require("async-exit-hook"));
var _mongodb = require("./config/mongodb");
var _environment = require("./config/environment");
var _v = require("./routes/v1");
var _errorHandling = require("./middlewares/errorHandling");
var START_SERVER = function START_SERVER() {
  var app = (0, _express["default"])();
  //Enable req.body Json data
  app.use(_express["default"].json());

  //Use API V1
  app.use('/v1', _v.APIs_V1);

  //Midleware xử lý lỗi tập trung
  app.use(_errorHandling.errorHandlingMiddleware);
  app.listen(_environment.env.APP_PORT, _environment.env.APP_HOST, function () {
    // eslint-disable-next-line no-console
    console.log("3.Hello ".concat(_environment.env.AUTHOR, ", I am running at http://").concat(_environment.env.APP_HOST, ":").concat(_environment.env.APP_PORT, "/"));
  });
  (0, _asyncExitHook["default"])(function () {
    console.log('4.Disconnecting from MongoDB Cloud Atlas');
    (0, _mongodb.CLOSE_DB)().then(function () {
      console.log('5. Đã ngắt kết nối tới MongoDB Cloud Atlas');
      process.exit();
    });
  });
};

//Anonymous Async Function
(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        console.log('1.Connecting to MongoDB Atlas...');
        _context.next = 4;
        return (0, _mongodb.CONNECT_DB)();
      case 4:
        console.log('2.Connected to Mongodb Cloud Atlas!');

        //khởi động server backend sau khi connect Database thành công
        START_SERVER();
        _context.next = 12;
        break;
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        console.error(_context.t0);
        process.exit(0);
      case 12:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 8]]);
}))();

//Chỉ khi kết nối tới Database thành công thì mới start server Back-end lên
/*CONNECT_DB()
 .then(() => console.log('Connected to Mongodb Cloud Atlas!'))
 .then(() => START_SERVER())
 .catch(error => {
   console.log(error)
   process.exit(0)
 })*/