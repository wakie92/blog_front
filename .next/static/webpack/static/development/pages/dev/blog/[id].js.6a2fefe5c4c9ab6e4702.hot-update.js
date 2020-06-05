webpackHotUpdate("static\\development\\pages\\dev\\blog\\[id].js",{

/***/ "./components/Utterances/Utterances.tsx":
/*!**********************************************!*\
  !*** ./components/Utterances/Utterances.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var src = "https://utteranc.es/client.js";
var branch = "master";
var repo = "wakie92/blog_comments";

var Utterances = function Utterances() {
  var rootElm = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var utterances = document.createElement("script");
    var config = {
      src: src,
      repo: repo,
      branch: branch,
      label: "comment",
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anoymous",
      async: true
    };

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(config).forEach(function (configKey) {
      utterances.setAttribute(configKey, utterances[configKey]);
    });

    console.log(rootElm);
    rootElm.current.appendChild(utterances);
  }, []);
  return __jsx("div", {
    className: "utternces",
    ref: rootElm
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Utterances);

/***/ })

})
//# sourceMappingURL=[id].js.6a2fefe5c4c9ab6e4702.hot-update.js.map