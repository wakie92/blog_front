webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/CommonUI/Layout.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/modules/loginUI */ "./store/modules/loginUI/index.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */






var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-1nakkc7-0"
})(["width:100%;margin:0 auto;"]);

var Layout = function Layout(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.token) {
      dispatch(Object(_store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"])(true));
    } else {
      dispatch(Object(_store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"])(false));
    }
  }, [props]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_StyledDiv, {
    className: "page-layout"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.1078126f6c2d3ea63126.hot-update.js.map