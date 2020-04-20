module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CommonUI/CodeHighlighter.tsx":
/*!*************************************************!*\
  !*** ./components/CommonUI/CodeHighlighter.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_AtomOneDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/AtomOneDark */ "./lib/styles/AtomOneDark.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CodeHighlighter = ({
  value,
  language
}) => {
  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default.a, {
    language: language,
    style: _lib_styles_AtomOneDark__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, value === undefined ? '' : value);
};

/* harmony default export */ __webpack_exports__["default"] = (CodeHighlighter);

/***/ }),

/***/ "./components/CommonUI/RenderMarkdownView.tsx":
/*!****************************************************!*\
  !*** ./components/CommonUI/RenderMarkdownView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeHighlighter */ "./components/CommonUI/CodeHighlighter.tsx");
/* harmony import */ var _lib_styles_prism_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/prism.css */ "./lib/styles/prism.css");
/* harmony import */ var _lib_styles_prism_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_prism_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/styles/githubMarkdown.css */ "./lib/styles/githubMarkdown.css");
/* harmony import */ var _lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const RenderMarkdownView = ({
  html
}) => {
  return __jsx("div", {
    className: "markdown-body"
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: html,
    skipHtml: false,
    escapeHtml: false,
    renderers: {
      code: _CodeHighlighter__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  }));
};

RenderMarkdownView.defaultProps = {
  html: ''
};
/* harmony default export */ __webpack_exports__["default"] = (RenderMarkdownView);

/***/ }),

/***/ "./components/CommonUI/Tag.tsx":
/*!*************************************!*\
  !*** ./components/CommonUI/Tag.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tag = ({
  tagString
}) => __jsx(TagDiv, null, __jsx("span", null, tagString));

const TagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tag__TagDiv",
  componentId: "sc-1h40048-0"
})(["border-radius:1.6rem;background-color:", ";font-weight:600;margin:0.5rem;font-size:1.4rem;padding:0.4rem 1rem;line-height:1.3;height:2rem;"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray4);
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./components/Write/Editor.tsx":
/*!*************************************!*\
  !*** ./components/Write/Editor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function Editor({
  inputValue,
  onChange
}) {
  return __jsx(TextArea, {
    onChange: onChange,
    value: inputValue,
    name: "inputValue"
  });
}, (preProps, nextProps) => preProps.inputValue === nextProps.inputValue));
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "Editor__TextArea",
  componentId: "sc-1unxyh5-0"
})(["width:calc(100% - 1.6rem);height:calc(100% - 1.6rem);font-size:1.6rem;padding:0.8rem;margin-right:1px;background-color:", ";color:#fff;"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray9);

/***/ }),

/***/ "./components/Write/Head.tsx":
/*!***********************************!*\
  !*** ./components/Write/Head.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function Head({
  reqImgUpload,
  postWrite,
  onUpload,
  onChange
}) {
  const backLink = () => {
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
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Head__Title",
  componentId: "io0ez6-0"
})(["width:100%;background-color:", ";height:7rem;button{width:8rem;height:3.4rem;margin-top:1.8rem;margin-left:1rem;background-color:", ";color:", ";font-size:1.6rem;border-radius:4px;border:2px solid ", ";}.file-upload{display:none;}.svg-icon{color:#fff;font-size:3rem;padding-top:2rem;padding-left:1rem;padding-right:1rem;cursor:pointer;}input{background-color:", ";width:calc(100% - 22rem);height:6rem;padding:0.5rem;font-size:3rem;color:#fff;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack);

/***/ }),

/***/ "./components/Write/Preview.tsx":
/*!**************************************!*\
  !*** ./components/Write/Preview.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "showdown");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/githubMarkdown.css */ "./lib/styles/githubMarkdown.css");
/* harmony import */ var _lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_githubMarkdown_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommonUI_RenderMarkdownView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonUI/RenderMarkdownView */ "./components/CommonUI/RenderMarkdownView.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Preview({
  inputValue,
  mdRef,
  onChange
}) {
  const converter = new showdown__WEBPACK_IMPORTED_MODULE_2___default.a.Converter();
  const html = converter.makeHtml(inputValue);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onChange(html);
  }, [html]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    ref: mdRef
  }, __jsx(_CommonUI_RenderMarkdownView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: inputValue
  })));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Preview__Wrapper",
  componentId: "sc-5qj3yb-0"
})(["padding:3rem 1rem;width:calc(50% - 2rem);background-color:white;overflow-y:scroll;word-break:break-all;white-space:normal;margin-left:1px;line-height:1.4;"]);

/***/ }),

/***/ "./components/Write/SubTItleInput.tsx":
/*!********************************************!*\
  !*** ./components/Write/SubTItleInput.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SubTitleInput = ({
  subTitle,
  onChange
}) => {
  return __jsx(Wrapper, null, __jsx("input", {
    name: "subTitle",
    value: subTitle,
    onChange: onChange,
    placeholder: "\uBD80\uC81C\uB97C \uC785\uB825\uD558\uC138\uC694",
    type: "text"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubTitleInput);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SubTItleInput__Wrapper",
  componentId: "sc-2il8va-0"
})(["width:100%;height:4rem;background-color:", ";input{width:calc(100% - 1.6rem);height:calc(100% - 1.6rem);background-color:inherit;padding:0.8rem;font-size:2rem;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray5);

/***/ }),

/***/ "./components/Write/TagAndImg.tsx":
/*!****************************************!*\
  !*** ./components/Write/TagAndImg.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CommonUI_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonUI/Tag */ "./components/CommonUI/Tag.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TagAndImg = ({
  reqGetImgUrl,
  tag,
  tagArr,
  onChange,
  onAddTag
}) => {
  return __jsx(Wrapper, null, tagArr.map((tagEle, index) => __jsx(_CommonUI_Tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `${tagEle}_${index}`,
    tagString: tagEle
  })), __jsx("input", {
    className: "tag-input",
    placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694",
    name: "tag",
    value: tag,
    onChange: onChange,
    onKeyUp: onAddTag
  }), __jsx("input", {
    type: "file",
    className: "img-upload",
    id: "img-upload",
    onChange: reqGetImgUrl
  }), __jsx("label", {
    htmlFor: "img-upload"
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiImage"], {
    className: "svg-icon"
  })));
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TagAndImg__Wrapper",
  componentId: "sc-1dldmk8-0"
})(["width:100%;height:5rem;display:flex;position:relative;.tag-input{height:4rem;padding:0.5rem;font-size:2rem;}.img-upload{display:none;}.svg-icon{position:absolute;right:0rem;font-size:3rem;padding-top:1rem;padding-left:1rem;padding-right:1.8rem;cursor:pointer;}"]);
/* harmony default export */ __webpack_exports__["default"] = (TagAndImg);

/***/ }),

/***/ "./components/Write/index.ts":
/*!***********************************!*\
  !*** ./components/Write/index.ts ***!
  \***********************************/
/*! exports provided: Editor, Head, Preview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./components/Write/Editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Write/Head.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _Head__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preview */ "./components/Write/Preview.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _Preview__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./config/awsconfig.ts":
/*!*****************************!*\
  !*** ./config/awsconfig.ts ***!
  \*****************************/
/*! exports provided: AWSConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWSConfig", function() { return AWSConfig; });
const AWSConfig = {
  albumBucketName: 'blog-oscar',
  bucketRegion: 'ap-northeast-2',
  IdentityPoolId: 'ap-northeast-2:df63c109-29c3-46e1-8598-a4693415589d'
};

/***/ }),

/***/ "./config/init-firebase.ts":
/*!*********************************!*\
  !*** ./config/init-firebase.ts ***!
  \*********************************/
/*! exports provided: firebaseDB, provider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseDB", function() { return firebaseDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyBLXvVQTnFPYwECmKot63Ww0nTElbPDyfQ",
  authDomain: "myblog-672d0.firebaseapp.com",
  databaseURL: "https://myblog-672d0.firebaseio.com",
  projectId: "myblog-672d0",
  storageBucket: "myblog-672d0.appspot.com",
  messagingSenderId: "899979036711",
  appId: "1:899979036711:web:cd2980d7e7741bc55a6602",
  measurementId: "G-B068HWHPHP"
};
function firebaseDB() {
  // Initialize Firebase
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig); // firebase.analytics();
  }

  return firebase_app__WEBPACK_IMPORTED_MODULE_0__;
}
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider();
/* harmony default export */ __webpack_exports__["default"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"]());

/***/ }),

/***/ "./containers/Common/EditorHeaderContainer.tsx":
/*!*****************************************************!*\
  !*** ./containers/Common/EditorHeaderContainer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modules_postUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/modules/postUI */ "./store/modules/postUI.ts");
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");
/* harmony import */ var _components_Write_SubTItleInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Write/SubTItleInput */ "./components/Write/SubTItleInput.tsx");
/* harmony import */ var _components_Write_TagAndImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Write/TagAndImg */ "./components/Write/TagAndImg.tsx");
/* harmony import */ var _lib_Utils_S3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/Utils/S3 */ "./lib/Utils/S3.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const EditorHeaderContainer = ({
  onChange,
  postWrite,
  onUpload
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const handleTags = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (e.keyCode === 188 && postWrite.tag !== ',') {
      dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_2__["addTagArr"])());
    }
  }, [dispatch, postWrite.tag]);
  const reqImgUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    const bucketData = await Object(_lib_Utils_S3__WEBPACK_IMPORTED_MODULE_6__["addPhoto"])(e);

    if (typeof bucketData === 'string') {
      dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_2__["getValue"])({
        name: 'imgUrl',
        value: bucketData
      }));
    }
  }, [dispatch]);
  const reqGetImgUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    const bucketData = await Object(_lib_Utils_S3__WEBPACK_IMPORTED_MODULE_6__["addPhoto"])(e);

    if (typeof bucketData === 'string') {
      const imgMarkdown = `![](${bucketData})`;
      dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_2__["getValue"])({
        name: 'inputValue',
        value: imgMarkdown
      }));
    }
  }, [dispatch]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_3__["Head"], {
    onUpload: onUpload,
    postWrite: postWrite,
    onChange: onChange,
    reqImgUpload: reqImgUpload
  }), __jsx(_components_Write_SubTItleInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: postWrite.subTitle,
    onChange: onChange
  }), __jsx(_components_Write_TagAndImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    reqGetImgUrl: reqGetImgUrl,
    tag: postWrite.tag,
    tagArr: postWrite.tagArr,
    onChange: onChange,
    onAddTag: handleTags
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorHeaderContainer);

/***/ }),

/***/ "./containers/Write/WriteContainer.tsx":
/*!*********************************************!*\
  !*** ./containers/Write/WriteContainer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");
/* harmony import */ var _store_modules_postUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/modules/postUI */ "./store/modules/postUI.ts");
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Utils/utils */ "./lib/Utils/utils.ts");
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _Common_EditorHeaderContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/EditorHeaderContainer */ "./containers/Common/EditorHeaderContainer.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const WriteContainer = ({}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const mdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    postWrite,
    postsList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => ({
    postWrite: state.postUI.postWrite,
    postsList: state.post.postsList
  }));
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const {
      value,
      name
    } = e.target;
    dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_5__["getValue"])({
      name,
      value
    }));
  }, [dispatch]);
  const handleConv = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(html => {
    dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_5__["getValue"])({
      name: 'mdValue',
      value: html
    }));
  }, [dispatch]);
  const onUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    const uploadDate = new Date().toISOString();
    const {
      title,
      inputValue,
      mdValue,
      imgUrl,
      subTitle,
      tagArr
    } = postWrite;
    const withoutExp = Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_7__["removeExp"])(inputValue);
    const dataForUpload = {
      title: title,
      rawContent: inputValue,
      content: withoutExp,
      contentMd: mdValue,
      date: uploadDate,
      imgUrl: imgUrl,
      id: postsList.data[0].id + 1,
      subTitle: subTitle,
      tagArr: tagArr
    };

    try {
      dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_8__["postAsync"].request(dataForUpload));
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].home, _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].home, {
        shallow: true
      });
    } catch (err) {
      throw err;
    }
  }, [dispatch, postWrite]);

  const checkLogin = () => {
    const tokenObj = sessionStorage.getItem("idToken");
    const isToken = JSON.parse(tokenObj).uid;

    if (!isToken) {
      console.log(isToken);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].home, _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].home, {
        shallow: true
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkLogin();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  }, [postWrite.inputValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_5__["resetInputValue"])());
      Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_7__["checkUser"])();
    };
  }, []);
  return __jsx(EditBox, null, __jsx(EditPart, null, __jsx(_Common_EditorHeaderContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    postWrite: postWrite,
    onChange: handleChange,
    onUpload: onUpload
  }), __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_4__["Editor"], {
    inputValue: postWrite.inputValue,
    onChange: handleChange
  })), __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_4__["Preview"], {
    inputValue: postWrite.inputValue,
    mdRef: mdRef,
    onChange: handleConv
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteContainer);
const EditBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "WriteContainer__EditBox",
  componentId: "sc-1ee72qh-0"
})(["display:flex;height:94rem;justify-content:space-between;"]);
const EditPart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "WriteContainer__EditPart",
  componentId: "sc-1ee72qh-1"
})(["width:calc(50% - 1.6rem);"]);

/***/ }),

/***/ "./lib/Routes/Routes.ts":
/*!******************************!*\
  !*** ./lib/Routes/Routes.ts ***!
  \******************************/
/*! exports provided: ROUTES, PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH", function() { return PATH; });
const ROUTES = {
  about: '/about',
  home: '/',
  devBlog: '/dev/blog',
  editBlog: '/dev/edit',
  write: '/write'
};
let PATH;

(function (PATH) {
  PATH["ABOUT"] = "about";
  PATH["HOME"] = "home";
  PATH["DEV_BLOG"] = "devBlog";
  PATH["EDIT_BLOG"] = "editBlog";
  PATH["WRITE"] = "write";
})(PATH || (PATH = {}));

/***/ }),

/***/ "./lib/Utils/S3.ts":
/*!*************************!*\
  !*** ./lib/Utils/S3.ts ***!
  \*************************/
/*! exports provided: addPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoto", function() { return addPhoto; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_awsconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/awsconfig */ "./config/awsconfig.ts");


const {
  albumBucketName,
  bucketRegion,
  IdentityPoolId
} = _config_awsconfig__WEBPACK_IMPORTED_MODULE_1__["AWSConfig"];
const paramKey = 'blog-oscar/images/';
aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.region = bucketRegion; // 리전

aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.credentials = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.CognitoIdentityCredentials({
  IdentityPoolId: IdentityPoolId
});
aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({
  region: bucketRegion,
  credentials: new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});
const addPhoto = async e => {
  const file = e.target.files[0];
  const upload = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: `${paramKey}${file.name}`,
      Body: file,
      ACL: 'public-read'
    }
  });
  const result = upload.promise();
  const url = result.then(data => {
    alert('사진이 등록되었습니다.');
    return data.Location;
  }, err => {
    alert(`${err.message}`);
  });
  return url;
};

/***/ }),

/***/ "./lib/Utils/asyncUtils.ts":
/*!*********************************!*\
  !*** ./lib/Utils/asyncUtils.ts ***!
  \*********************************/
/*! exports provided: asyncState, transformToArray, handleAsyncActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncState", function() { return asyncState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToArray", function() { return transformToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAsyncActions", function() { return handleAsyncActions; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const asyncState = {
  initial: initialData => ({
    loading: false,
    data: initialData || null,
    error: null
  }),
  loading: data => ({
    loading: true,
    data: data || null,
    error: null
  }),
  success: data => ({
    loading: false,
    data,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};
function transformToArray(asyncActionCreator) {
  const {
    request,
    success,
    failure
  } = asyncActionCreator;
  return [request, success, failure];
}
const handleAsyncActions = (type, key) => {
  return (state, action) => {
    const [request, success, failure] = transformToArray(type).map(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["getType"]);

    switch (action.type) {
      case request:
        return _objectSpread({}, state, {
          [key]: asyncState.loading()
        });

      case success:
        return _objectSpread({}, state, {
          [key]: asyncState.success(action.payload)
        });

      case failure:
        return _objectSpread({}, state, {
          [key]: asyncState.error(action.payload)
        });

      default:
        return state;
    }
  };
};

/***/ }),

/***/ "./lib/Utils/createAsyncSaga.ts":
/*!**************************************!*\
  !*** ./lib/Utils/createAsyncSaga.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAsyncSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);


function isPayloadAction(action) {
  return action.payload !== undefined;
}

function createAsyncSaga(asyncActionCreator, promiseCreator) {
  return function* saga(action) {
    try {
      const result = isPayloadAction(action) ? yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(promiseCreator, action.payload) : yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(promiseCreator);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(asyncActionCreator.success(result));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(asyncActionCreator.failure(e));
    }
  };
}

/***/ }),

/***/ "./lib/Utils/utils.ts":
/*!****************************!*\
  !*** ./lib/Utils/utils.ts ***!
  \****************************/
/*! exports provided: formatDate, setItem, getItem, removeExp, logoutFn, checkUser, loginEmail */
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_init_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/init-firebase */ "./config/init-firebase.ts");


const formatDate = dateData => {
  const formatted = new Date(dateData);
  const year = formatted.getFullYear();
  let month = formatted.getMonth() + 1;
  let day = formatted.getDate();
  month = Number(month) < 10 ? `0${month}` : month;
  day = Number(day) < 10 ? `0${day}` : day;
  return `${year}년 ${month}월 ${day}일`;
};
const setItem = (key, obj) => {
  return sessionStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(obj));
};
const getItem = key => {
  return sessionStorage.getItem(JSON.parse(key));
};
const removeExp = str => {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  if (regExp.test(str)) {
    const result = str.replace(regExp, '');
    return result;
  }

  return str;
};
const logoutFn = () => {
  _config_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut().then(function () {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  }).catch(function (error) {// An error happened.
  });
};
const checkUser = async () => {
  const user = await _config_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
  return user;
};
const loginEmail = (email, password) => {
  const result = _config_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(email, password).then(res => {
    const token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(res.user);

    sessionStorage.setItem("idToken", token);
    return res;
  }).catch(err => console.log(err));
  return result;
};

/***/ }),

/***/ "./lib/api/apis.ts":
/*!*************************!*\
  !*** ./lib/api/apis.ts ***!
  \*************************/
/*! exports provided: GetPostsList, PutPost, PostUpdate, GetPost, DeletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsList", function() { return GetPostsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutPost", function() { return PutPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostUpdate", function() { return PostUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPost", function() { return GetPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _config_init_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/init-firebase */ "./config/init-firebase.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const db = Object(_config_init_firebase__WEBPACK_IMPORTED_MODULE_7__["firebaseDB"])().firestore();
const blogDB = db.collection("blogDB");
const GetPostsList = async cnt => {
  // const user = firebase.auth().currentUser
  const query = blogDB.orderBy("date", "desc").limit(cnt);
  const response = await query.get().then(querySnapshot => {
    return querySnapshot.docs.map(data => {
      const ele = _objectSpread({}, data.data(), {
        id: data.id
      });

      return ele;
    });
  }).catch(e => console.log(e));
  return response;
};
const PutPost = async ({
  post,
  id
}) => {
  const query = blogDB.doc(id);
  const response = await query.set(post).then(res => {
    return 'success';
  }).catch(err => {
    return err;
  });
  return response.data;
};
const PostUpdate = async data => {
  const response = await blogDB.add(data).then(res => {
    return res.id;
  }).catch(err => {
    return err;
  });
  return response;
};
const GetPost = async index => {
  const query = blogDB.doc(index);
  const response = await query.get().then(doc => {
    return {
      res: _objectSpread({}, doc.data(), {
        id: doc.id
      }),
      resId: doc.id
    };
  });
  return response;
};
const DeletePost = async id => {
  const query = blogDB.doc(id);
  const response = await query.delete().then(() => {
    return 'success';
  }).catch(err => {
    return err;
  });
  return response;
};

/***/ }),

/***/ "./lib/styles/AtomOneDark.ts":
/*!***********************************!*\
  !*** ./lib/styles/AtomOneDark.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const atomOneDark = {
  'hljs': {
    'display': 'block',
    'overflowX': 'auto',
    'overflowY': 'hidden',
    'padding': '1.5em',
    'color': '#abb2bf',
    'background': '#282c34',
    'fontSize': '1.5rem',
    'borderRadius': '1rem'
  },
  'hljs-comment': {
    'color': '#5c6370',
    'fontStyle': 'italic'
  },
  'hljs-quote': {
    'color': '#5c6370',
    'fontStyle': 'italic'
  },
  'hljs-doctag': {
    'color': '#c678dd'
  },
  'hljs-keyword': {
    'color': '#c678dd'
  },
  'hljs-formula': {
    'color': '#c678dd'
  },
  'hljs-section': {
    'color': '#e06c75'
  },
  'hljs-name': {
    'color': '#e06c75'
  },

  /**/
  'hljs-selector-tag': {
    'color': '#e06c75'
  },
  'hljs-deletion': {
    'color': '#e06c75'
  },
  'hljs-subst': {
    'color': '#e06c75'
  },
  'hljs-literal': {
    'color': '#56b6c2'
  },
  'hljs-string': {
    'color': '#98c379'
  },
  'hljs-regexp': {
    'color': '#98c379'
  },
  'hljs-addition': {
    'color': '#98c379'
  },
  'hljs-attribute': {
    'color': '#98c379'
  },
  'hljs-meta-string': {
    'color': '#98c379'
  },
  'hljs-built_in': {
    'color': '#e6c07b'
  },
  'hljs-class .hljs-title': {
    'color': '#e6c07b'
  },
  'hljs-attr': {
    'color': '#d19a66'
  },
  'hljs-variable': {
    'color': '#d19a66'
  },
  'hljs-template-variable': {
    'color': '#d19a66'
  },
  'hljs-type': {
    'color': '#d19a66'
  },
  'hljs-selector-class': {
    'color': '#d19a66'
  },
  'hljs-selector-attr': {
    'color': '#d19a66'
  },
  'hljs-selector-pseudo': {
    'color': '#d19a66'
  },
  'hljs-number': {
    'color': '#d19a66'
  },
  'hljs-symbol': {
    'color': '#61aeee'
  },
  'hljs-bullet': {
    'color': '#61aeee'
  },
  'hljs-link': {
    'color': '#61aeee',
    'textDecoration': 'underline'
  },
  'hljs-meta': {
    'color': '#61aeee'
  },
  'hljs-selector-id': {
    'color': '#61aeee'
  },
  'hljs-title': {
    'color': '#61aeee'
  },
  'hljs-emphasis': {
    'fontStyle': 'italic'
  },
  'hljs-strong': {
    'fontWeight': 'bold'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (atomOneDark);

/***/ }),

/***/ "./lib/styles/githubMarkdown.css":
/*!***************************************!*\
  !*** ./lib/styles/githubMarkdown.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/styles/global.tsx":
/*!*******************************!*\
  !*** ./lib/styles/global.tsx ***!
  \*******************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const colors = {
  defaultBlack: '#343a40',
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  violet9: '#5f3dc4',
  mainThemeColor: 'rgba(255, 255, 255, 0.88)',
  whiteL1: '#c6cbd1',
  whiteL2: '#dfe2e5',
  whiteL3: '#f6f8fa',
  whiteColor: '#1f1f1f',
  markdownCodeColor: '#c2cab9'
};

/***/ }),

/***/ "./lib/styles/prism.css":
/*!******************************!*\
  !*** ./lib/styles/prism.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/write.tsx":
/*!*************************!*\
  !*** ./pages/write.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Write_WriteContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Write/WriteContainer */ "./containers/Write/WriteContainer.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/modules/post */ "./store/modules/post/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "write__Wrapper",
  componentId: "sc-1tn9w2k-0"
})(["width:100%;height:100rem;margin:auto;"]);

const Write = ({}) => {
  return __jsx(Wrapper, null, __jsx(_containers_Write_WriteContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

Write.getInitialProps = async ({
  store,
  isServer
}) => {
  if (isServer) {
    await store.dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_3__["getPostsListAsync"].request(30));
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ }),

/***/ "./store/modules/post/actions.ts":
/*!***************************************!*\
  !*** ./store/modules/post/actions.ts ***!
  \***************************************/
/*! exports provided: DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR, EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_ERROR, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, GET_POSTS_LIST, GET_POSTS_LIST_SUCCESS, GET_POSTS_LIST_ERROR, GET_POST, GET_POST_SUCCESS, GET_POST_ERROR, deletePostAsync, getPostsListAsync, postAsync, putPostAsync, getPostAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_ERROR", function() { return DELETE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST", function() { return EDIT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_SUCCESS", function() { return EDIT_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_ERROR", function() { return EDIT_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_ERROR", function() { return UPDATE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST", function() { return GET_POSTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST_SUCCESS", function() { return GET_POSTS_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST_ERROR", function() { return GET_POSTS_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST", function() { return GET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return GET_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_ERROR", function() { return GET_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostAsync", function() { return deletePostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsListAsync", function() { return getPostsListAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAsync", function() { return postAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putPostAsync", function() { return putPostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostAsync", function() { return getPostAsync; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

const DELETE_POST = 'post/DELETE_POST';
const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS';
const DELETE_POST_ERROR = 'post/DELETE_POST_ERROR';
const EDIT_POST = 'post/EDIT_POST';
const EDIT_POST_SUCCESS = 'post/EDIT_POST_SUCCESS';
const EDIT_POST_ERROR = 'post/EDIT_POST_ERROR';
const UPDATE_POST = 'post/UPDATE_POST';
const UPDATE_POST_SUCCESS = 'post/UPDATE_POST_SUCCESS';
const UPDATE_POST_ERROR = 'post/UPDATE_POST_ERROR';
const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
const GET_POSTS_LIST_SUCCESS = 'post/GET_POSTS_LIST_SUCCESS';
const GET_POSTS_LIST_ERROR = 'post/GET_POSTS_LIST_ERROR';
const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_ERROR = 'post/GET_POST_ERROR';
const deletePostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR)();
const getPostsListAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(GET_POSTS_LIST, GET_POSTS_LIST_SUCCESS, GET_POSTS_LIST_ERROR)();
const postAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR)();
const putPostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_ERROR)();
const getPostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(GET_POST, GET_POST_SUCCESS, GET_POST_ERROR)();

/***/ }),

/***/ "./store/modules/post/index.ts":
/*!*************************************!*\
  !*** ./store/modules/post/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./store/modules/post/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/modules/post/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_POST_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_LIST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_LIST_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POST_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["deletePostAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostsListAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["getPostsListAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["postAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putPostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["putPostAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["getPostAsync"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/modules/post/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["default","DELETE_POST","DELETE_POST_SUCCESS","DELETE_POST_ERROR","EDIT_POST","EDIT_POST_SUCCESS","EDIT_POST_ERROR","UPDATE_POST","UPDATE_POST_SUCCESS","UPDATE_POST_ERROR","GET_POSTS_LIST","GET_POSTS_LIST_SUCCESS","GET_POSTS_LIST_ERROR","GET_POST","GET_POST_SUCCESS","GET_POST_ERROR","deletePostAsync","getPostsListAsync","postAsync","putPostAsync","getPostAsync","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./store/modules/post/saga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["updateSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["postSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnePostSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["getOnePostSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["putSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["deleteSaga"]; });






/***/ }),

/***/ "./store/modules/post/reducers.ts":
/*!****************************************!*\
  !*** ./store/modules/post/reducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../lib/Utils/asyncUtils */ "./lib/Utils/asyncUtils.ts");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./store/modules/post/actions.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const initialState = {
  postsList: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].initial(),
  reqPost: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].initial(),
  post: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].initial()
};
const post = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_8__["createReducer"])(initialState, {
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POSTS_LIST"]]: state => _objectSpread({}, state, {
    postsList: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].loading()
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POSTS_LIST_SUCCESS"]]: (state, action) => {
    return _objectSpread({}, state, {
      postsList: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].success(action.payload)
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POSTS_LIST_ERROR"]]: (state, action) => _objectSpread({}, state, {
    postsList: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].error(action.payload)
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["UPDATE_POST"]]: state => _objectSpread({}, state, {
    reqPost: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].loading()
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["UPDATE_POST_SUCCESS"]]: (state, action) => _objectSpread({}, state, {
    reqPost: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].success(action.payload)
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["UPDATE_POST_ERROR"]]: (state, action) => _objectSpread({}, state, {
    reqPost: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].error(action.payload)
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POST"]]: state => _objectSpread({}, state, {
    post: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].loading()
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POST_SUCCESS"]]: (state, action) => _objectSpread({}, state, {
    post: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].success(action.payload)
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_9__["GET_POST_ERROR"]]: (state, action) => _objectSpread({}, state, {
    post: _lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["asyncState"].error(action.payload)
  })
}); // refactoring code

const test = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_8__["createReducer"])(initialState).handleAction(Object(_lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["transformToArray"])(_actions__WEBPACK_IMPORTED_MODULE_9__["getPostsListAsync"]), Object(_lib_Utils_asyncUtils__WEBPACK_IMPORTED_MODULE_7__["handleAsyncActions"])(_actions__WEBPACK_IMPORTED_MODULE_9__["getPostsListAsync"], 'postsList'));
/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./store/modules/post/saga.ts":
/*!************************************!*\
  !*** ./store/modules/post/saga.ts ***!
  \************************************/
/*! exports provided: updateSaga, postSaga, getOnePostSaga, putSaga, deleteSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSaga", function() { return updateSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSaga", function() { return postSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnePostSaga", function() { return getOnePostSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putSaga", function() { return putSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSaga", function() { return deleteSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/modules/post/actions.ts");
/* harmony import */ var _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/api/apis */ "./lib/api/apis.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/Utils/createAsyncSaga */ "./lib/Utils/createAsyncSaga.ts");




const deletePostSaga = Object(_lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_0__["deletePostAsync"], _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__["DeletePost"]);
const putPostSaga = Object(_lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_0__["putPostAsync"], _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__["PutPost"]);
const postUpdateSaga = Object(_lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_0__["postAsync"], _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__["PostUpdate"]);
const getPostsListSaga = Object(_lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_0__["getPostsListAsync"], _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__["GetPostsList"]);
const getPostSaga = Object(_lib_Utils_createAsyncSaga__WEBPACK_IMPORTED_MODULE_3__["default"])(_actions__WEBPACK_IMPORTED_MODULE_0__["getPostAsync"], _lib_api_apis__WEBPACK_IMPORTED_MODULE_1__["GetPost"]);
function* updateSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"], postUpdateSaga);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_LIST"], getPostsListSaga);
}
function* getOnePostSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST"], getPostSaga);
}
function* putSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_POST"], putPostSaga);
}
function* deleteSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST"], deletePostSaga);
}

/***/ }),

/***/ "./store/modules/post/types.ts":
/*!*************************************!*\
  !*** ./store/modules/post/types.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/modules/postUI.ts":
/*!*********************************!*\
  !*** ./store/modules/postUI.ts ***!
  \*********************************/
/*! exports provided: addTagArr, getValue, resetInputValue, setInputValues, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTagArr", function() { return addTagArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetInputValue", function() { return resetInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputValues", function() { return setInputValues; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const SET_INPUT_VALUES = 'post/SET_INPUT_VALUES';
const INPUT_VALUE = 'post/INPUT_VALUE';
const RESET_INPUT_VALUE = 'post/RESET_INPUT_VALUE';
const ADD_TAG_ARR = 'post/ADD_TAG_ARR';
const addTagArr = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createAction"])(ADD_TAG_ARR)();
const getValue = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createAction"])(INPUT_VALUE, ({
  name,
  value
}) => ({
  name,
  value
}))();
const resetInputValue = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createAction"])(RESET_INPUT_VALUE)();
const setInputValues = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createAction"])(SET_INPUT_VALUES, ({
  title,
  inputValue,
  mdValue,
  imgUrl,
  subTitle,
  tagArr,
  tag
}) => ({
  title,
  inputValue,
  mdValue,
  imgUrl,
  tagArr,
  subTitle,
  tag
}))();
const actions = {
  getValue,
  resetInputValue,
  setInputValues,
  addTagArr
};
const initialState = {
  postWrite: {
    title: '',
    inputValue: '',
    mdValue: '',
    subTitle: '',
    imgUrl: null,
    tagArr: [],
    tag: ''
  }
};
const post = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createReducer"])(initialState, {
  [SET_INPUT_VALUES]: (state, action) => {
    return _objectSpread({}, state, {
      postWrite: action.payload
    });
  },
  [RESET_INPUT_VALUE]: (state, action) => {
    return _objectSpread({}, state, {
      postWrite: {
        title: '',
        inputValue: '',
        mdValue: '',
        subTitle: '',
        imgUrl: null,
        tagArr: [],
        tag: ''
      }
    });
  },
  [INPUT_VALUE]: (state, {
    payload: {
      name,
      value
    }
  }) => {
    return _objectSpread({}, state, {
      postWrite: _objectSpread({}, state.postWrite, {
        [name]: value
      })
    });
  },
  [ADD_TAG_ARR]: (state, action) => {
    const {
      tagArr,
      tag
    } = state.postWrite;
    const addTagArr = tagArr.concat(tag.replace(',', ''));
    return _objectSpread({}, state, {
      postWrite: _objectSpread({}, state.postWrite, {
        tagArr: addTagArr,
        tag: ''
      })
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/write.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lchon\Project\blog_front\pages\write.tsx */"./pages/write.tsx");


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "showdown":
/*!***************************!*\
  !*** external "showdown" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "typesafe-actions":
/*!***********************************!*\
  !*** external "typesafe-actions" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ })

/******/ });
//# sourceMappingURL=write.js.map