"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(demo);

var a = 12;
var b = 5,
    c = 8;

var show = function show() {
  alert(a + b + c);
};

show();

function demo() {
  return regeneratorRuntime.wrap(function demo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          alert('ss');
          _context.next = 3;
          return;

        case 3:
          alert("ssdd");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

demo();

function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data1;
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return new Promise(function (resolve, reject) {
              alert('get data ...');
            });

          case 3:
            data1 = _context2.sent;
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            alert('data request failure');
            throw new Error('wo cuo le?');

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _getData.apply(this, arguments);
}

getData();
