webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CommonUI/Header.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Header.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hamburger */ "./components/CommonUI/Hamburger.tsx");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _Maybe_Maybe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Maybe/Maybe */ "./components/Maybe/Maybe.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Header = function Header(_ref) {
  var handleToggle = _ref.handleToggle,
      toggle = _ref.toggle,
      isLogged = _ref.isLogged;
  var Link = _routes__WEBPACK_IMPORTED_MODULE_7___default.a.Link;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    aColor: _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9,
    breakpoints: _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"]
  }, __jsx("div", {
    className: "nav-box"
  }, __jsx("a", {
    href: _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].home,
    className: "blog-name"
  }, "\uAC74\uB9DD\uC99D \uAC1C\uBC1C\uC790 \uAE30\uB85D\uC9C0"), __jsx(SmallNav, {
    toggle: toggle
  }, __jsx("a", {
    href: _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].about
  }, __jsx("span", null, "About"))), __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggle: toggle,
    onToggle: handleToggle
  }), __jsx("div", {
    className: "nav"
  }, __jsx(_Maybe_Maybe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isVisible: isLogged
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].write
  }, "write")))))));
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1q77k7z-0"
})(["width:calc(100% - 10rem);height:6rem;padding-top:10rem;margin:auto;border-bottom:1px solid #ced4da;display:flex;align-items:center;@media screen and (max-width:", "){width:100%;}@media screen and (max-width:", "){padding-top:2rem;}.nav-box{width:100%;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:", "){width:100%;padding:0 2rem;}.blog-name{font-size:2rem;font-weight:900;}.nav{display:flex;justify-content:flex-end;a{font-size:2rem;cursor:pointer;color:", ";& + a{margin-left:1rem;}}@media screen and (max-width:", "){display:none;}}}"], _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, function (props) {
  return props.aColor;
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small);
var NavRouter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__NavRouter",
  componentId: "sc-1q77k7z-1"
})([""]);
var SmallNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Header__SmallNav",
  componentId: "sc-1q77k7z-2"
})(["display:flex;flex-direction:column;visibility:", ";position:fixed;background-color:black;opacity:0.8;width:30rem;height:100%;right:0;top:0;z-index:888;transition:all 500ms;transform:", ";padding-top:20rem;padding-left:5rem;a{color:white !important;width:80%;.bolg-category{font-size:2rem;padding-left:3rem;}}font-size:3rem;@media screen and (max-width:", "){transform:", ";width:calc(100% - 5rem);}"], function (props) {
  return props.toggle ? 'visible' : 'hidden';
}, function (props) {
  return props.toggle ? 'translateX(0rem)' : 'translateX(35rem)';
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, function (props) {
  return props.toggle ? 'translateX()' : 'translateX(100%)';
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.08b15d5766cb0f4facfa.hot-update.js.map