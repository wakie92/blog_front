webpackHotUpdate("static\\development\\pages\\dev\\blog\\[id].js",{

/***/ "./components/CommonUI/Hamburger.tsx":
/*!*******************************************!*\
  !*** ./components/CommonUI/Hamburger.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hamburger = function Hamburger(_ref) {
  var toggle = _ref.toggle,
      onToggle = _ref.onToggle;
  return __jsx(BurgerIcon, {
    colors: _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"],
    breakpoints: _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"],
    toggle: toggle,
    onClick: onToggle
  }, __jsx("div", {
    className: "burger-line"
  }), __jsx("div", {
    className: "burger-line"
  }), __jsx("div", {
    className: "burger-line"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);
var BurgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Hamburger__BurgerIcon",
  componentId: "d3bkbg-0"
})(["position:fixed;top:2rem;right:5rem;width:5rem;height:5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";opacity:0.8;z-index:900;cursor:pointer;&:hover{background-color:", ";}transition:all 500ms;transform:", ";background-color:", ";.burger-line{", ";transition:ease-in 500ms;background-color:white;}@media screen and (max-width:", "){transform:unset;right:2rem;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9, function (props) {
  return props.toggle ? 'translateX(-35rem) rotate(180deg)' : 'translateX(0rem)';
}, function (props) {
  return props.toggle && _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9;
}, function (props) {
  return !props.toggle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.4rem;margin:0.2rem 0;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.15rem;margin:0;"]);
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].small);

/***/ })

})
//# sourceMappingURL=[id].js.6693fc40a753f8c4c0dc.hot-update.js.map