webpackHotUpdate("static\\development\\pages\\dev\\blog\\[id].js",{

/***/ "./components/Posts/PostView/PostView.tsx":
/*!************************************************!*\
  !*** ./components/Posts/PostView/PostView.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./components/Posts/PostView/index.ts");
/* harmony import */ var _Utterances_Utterances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utterances/Utterances */ "./components/Utterances/Utterances.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostView(_ref) {
  var postData = _ref.postData,
      isLogged = _ref.isLogged,
      setEditMode = _ref.setEditMode,
      editMode = _ref.editMode,
      reqDeletePost = _ref.reqDeletePost;
  var loading = postData.loading;
  var _postData$data$res = postData.data.res,
      date = _postData$data$res.date,
      title = _postData$data$res.title,
      imgUrl = _postData$data$res.imgUrl,
      rawContent = _postData$data$res.rawContent,
      id = _postData$data$res.id;
  if (loading) return null;
  return __jsx(Layout, null, __jsx("div", {
    className: "wrapper"
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["PostHeader"], {
    date: date,
    isLogged: isLogged,
    id: id,
    setEditMode: setEditMode,
    reqDeletePost: reqDeletePost
  }), __jsx(___WEBPACK_IMPORTED_MODULE_3__["PostContent"], {
    title: title,
    imgUrl: imgUrl,
    rawContent: rawContent
  }), __jsx(_Utterances_Utterances__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}
var Layout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostView__Layout",
  componentId: "sc-1sxi1s2-0"
})(["width:calc(100% - 10rem);margin:auto;min-height:70rem;padding:2rem;margin-top:20rem;@media screen and (max-width:", "){width:calc(100% - 4rem);}"], _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].medium);

/***/ }),

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
//# sourceMappingURL=[id].js.5d3224a14dfbf852255b.hot-update.js.map