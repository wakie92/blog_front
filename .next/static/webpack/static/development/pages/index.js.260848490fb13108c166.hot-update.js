webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/Header/HeaderContainer.tsx":
/*!***********************************************!*\
  !*** ./containers/Header/HeaderContainer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CommonUI/Header */ "./components/CommonUI/Header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var HeaderContainer = function HeaderContainer() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      isLogged: state.loginUI.isLogged
    };
  }),
      isLogged = _useSelector.isLogged;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var handleToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setToggle(!toggle);
  }, [toggle]);

  var moveRouter = function moveRouter() {
    router.push("".concat(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about), "".concat(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about));
  };

  return __jsx(_components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLogged: isLogged,
    toggle: toggle,
    handleToggle: handleToggle
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

/***/ })

})
//# sourceMappingURL=index.js.260848490fb13108c166.hot-update.js.map