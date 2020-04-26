webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/Utils/utils.ts":
/*!****************************!*\
  !*** ./lib/Utils/utils.ts ***!
  \****************************/
/*! exports provided: formatDate, setItem, getItem, removeExp, logoutFn, checkUser, loginEmail, checkLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExp", function() { return removeExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFn", function() { return logoutFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginEmail", function() { return loginEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_init_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/init-firebase */ "./config/init-firebase.ts");




var formatDate = function formatDate(dateData) {
  var formatted = new Date(dateData);
  var year = formatted.getFullYear();
  var month = formatted.getMonth() + 1;
  var day = formatted.getDate();
  month = Number(month) < 10 ? "0".concat(month) : month;
  day = Number(day) < 10 ? "0".concat(day) : day;
  return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(day, "\uC77C");
};
var setItem = function setItem(key, obj) {
  return sessionStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(obj));
};
var getItem = function getItem(key) {
  return sessionStorage.getItem(JSON.parse(key));
};
var removeExp = function removeExp(str) {
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  if (regExp.test(str)) {
    var result = str.replace(regExp, '');
    return result;
  }

  return str;
};
var logoutFn = function logoutFn() {
  _config_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(function () {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  })["catch"](function (error) {// An error happened.
  });
};
var checkUser =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var user;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

          case 2:
            user = _context.sent;
            return _context.abrupt("return", user);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkUser() {
    return _ref.apply(this, arguments);
  };
}();
var loginEmail = function loginEmail(email, password) {
  var result = _config_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(email, password).then(function (res) {
    var token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(res.user);

    sessionStorage.setItem("idToken", token);
    return res;
  })["catch"](function (err) {
    return console.log(err);
  });
  return result;
};
var checkLogin = function checkLogin() {
  var tokenObj = get.getItem("idToken");
  var isToken = JSON.parse(tokenObj);
  return isToken; // if (!isToken) {
  // 	console.log(isToken);
  // 	Router.push(ROUTES.home, ROUTES.home, { shallow: true });
  // }
};

/***/ })

})
//# sourceMappingURL=index.js.3248633d5b3a6fa040a9.hot-update.js.map