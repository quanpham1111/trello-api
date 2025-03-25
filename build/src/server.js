"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _sorts = require("./utils/sorts.js");
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

var app = (0, _express["default"])();
var hostname = 'localhost';
var port = 8017;
app.get('/', function (req, res) {
  // Test Absolute import mapOrder
  console.log((0, _sorts.mapOrder)([{
    id: 'id-1',
    name: 'One'
  }, {
    id: 'id-2',
    name: 'Two'
  }, {
    id: 'id-3',
    name: 'Three'
  }, {
    id: 'id-4',
    name: 'Four'
  }, {
    id: 'id-5',
    name: 'Five'
  }], ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'], 'id'));
  res.end('<h1>Hello World!</h1><hr>');
});
app.listen(port, hostname, function () {
  // eslint-disable-next-line no-console
  console.log("Hello Trung Quan Dev, I am running at ".concat(hostname, ":").concat(port, "/"));
});