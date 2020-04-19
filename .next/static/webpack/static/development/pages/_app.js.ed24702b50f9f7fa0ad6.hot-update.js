webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/modules/index.ts":
/*!********************************!*\
  !*** ./store/modules/index.ts ***!
  \********************************/
/*! exports provided: default, rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _postUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postUI */ "./store/modules/postUI.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./store/modules/post/index.ts");
/* harmony import */ var _post_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/reducers */ "./store/modules/post/reducers.ts");
/* harmony import */ var _loginUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginUI */ "./store/modules/loginUI/index.ts");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  postUI: _postUI__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _post_reducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  loginUI: _loginUI__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);
function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_post__WEBPACK_IMPORTED_MODULE_4__["postSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_4__["updateSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_4__["getOnePostSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_4__["putSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_4__["deleteSaga"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./store/modules/loginAsync/actions.ts":
false,

/***/ "./store/modules/loginAsync/index.ts":
false,

/***/ "./store/modules/loginAsync/reducers.ts":
false,

/***/ "./store/modules/loginAsync/saga.ts":
false,

/***/ "./store/modules/loginAsync/types.ts":
false

})
//# sourceMappingURL=_app.js.ed24702b50f9f7fa0ad6.hot-update.js.map