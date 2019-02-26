#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("@babel/polyfill");

var _run = _interopRequireDefault(require("./run"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return (0, _run.default)(process.argv);
}