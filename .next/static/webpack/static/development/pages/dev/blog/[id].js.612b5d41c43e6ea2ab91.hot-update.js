webpackHotUpdate("static\\development\\pages\\dev\\blog\\[id].js",{

/***/ "./components/Write/Head.tsx":
/*!***********************************!*\
  !*** ./components/Write/Head.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function Head(_ref) {
  var reqImgUpload = _ref.reqImgUpload,
      postWrite = _ref.postWrite,
      onUpload = _ref.onUpload,
      onChange = _ref.onChange;

  var backLink = function backLink() {
    history.back();
  };

  return __jsx(Title, null, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiArrowLeft"], {
    onClick: backLink,
    className: "svg-icon"
  }), __jsx("input", {
    placeholder: "\uC81C\uBAA9",
    name: "title",
    onChange: onChange,
    value: postWrite.title
  }), __jsx("input", {
    type: "file",
    className: "file-upload",
    id: "file-upload",
    onChange: reqImgUpload
  }), __jsx("label", {
    htmlFor: "file-upload"
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiUpload"], {
    className: "svg-icon"
  })), __jsx("button", {
    type: "button",
    onClick: onUpload
  }, "\uC791\uC131\uD558\uAE30"));
}));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Head__Title",
  componentId: "io0ez6-0"
})(["width:100%;background-color:", ";height:7rem;button{width:8rem;height:3.4rem;margin-top:1.8rem;margin-left:1rem;background-color:", ";color:", ";font-size:1.6rem;border-radius:4px;border:2px solid ", ";}.file-upload{display:none;}.svg-icon{color:#fff;font-size:3rem;padding-top:2rem;padding-left:1rem;padding-right:1rem;cursor:pointer;}input{background-color:", ";width:calc(100% - 22rem);height:6rem;padding:0.5rem;font-size:3rem;color:#fff;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack);

/***/ })

})
//# sourceMappingURL=[id].js.612b5d41c43e6ea2ab91.hot-update.js.map