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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/CommonUI/Hamburger.tsx":
/*!*******************************************!*\
  !*** ./components/CommonUI/Hamburger.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hamburger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Hamburger({
  toggle,
  onToggle
}) {
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
}
const BurgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Hamburger__BurgerIcon",
  componentId: "d3bkbg-0"
})(["position:fixed;top:2rem;right:5rem;width:5rem;height:5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";opacity:0.8;z-index:900;cursor:pointer;&:hover{background-color:", ";}transition:all 500ms;transform:", ";background-color:", ";.burger-line{", ";transition:ease-in 500ms;background-color:white;}@media screen and (max-width:", "){transform:unset;right:2rem;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9, props => props.toggle ? 'translateX(-35rem) rotate(180deg)' : 'translateX(0rem)', props => props.toggle && _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9, props => !props.toggle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.4rem;margin:0.2rem 0;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.15rem;margin:0;"]), _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].small);

/***/ }),

/***/ "./components/CommonUI/Header.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Header.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hamburger */ "./components/CommonUI/Hamburger.tsx");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _Maybe_Maybe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Maybe/Maybe */ "./components/Maybe/Maybe.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Header = ({
  handleToggle,
  toggle,
  isLogged,
  moveRouter
}) => {
  const {
    Link
  } = _routes__WEBPACK_IMPORTED_MODULE_7___default.a;
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

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1q77k7z-0"
})(["width:calc(100% - 10rem);height:6rem;padding-top:10rem;margin:auto;border-bottom:1px solid #ced4da;display:flex;align-items:center;@media screen and (max-width:", "){width:100%;}@media screen and (max-width:", "){padding-top:2rem;}.nav-box{width:100%;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:", "){width:100%;padding:0 2rem;}.blog-name{font-size:2rem;font-weight:900;}.nav{display:flex;justify-content:flex-end;a{font-size:2rem;cursor:pointer;color:", ";& + a{margin-left:1rem;}}@media screen and (max-width:", "){display:none;}}}"], _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, props => props.aColor, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small);
const NavRouter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__NavRouter",
  componentId: "sc-1q77k7z-1"
})([""]);
const SmallNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "Header__SmallNav",
  componentId: "sc-1q77k7z-2"
})(["display:flex;flex-direction:column;visibility:", ";position:fixed;background-color:black;opacity:0.8;width:30rem;height:100%;right:0;top:0;z-index:888;transition:all 500ms;transform:", ";padding-top:20rem;padding-left:5rem;a{color:white !important;width:80%;.bolg-category{font-size:2rem;padding-left:3rem;}}font-size:3rem;@media screen and (max-width:", "){transform:", ";width:calc(100% - 5rem);}"], props => props.toggle ? 'visible' : 'hidden', props => props.toggle ? 'translateX(0rem)' : 'translateX(35rem)', _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, props => props.toggle ? 'translateX()' : 'translateX(100%)');
/* harmony default export */ __webpack_exports__["default"] = (Header);

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

/***/ "./components/Maybe/Maybe.tsx":
/*!************************************!*\
  !*** ./components/Maybe/Maybe.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Maybe = ({
  isVisible,
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isVisible && children);
};

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

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
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
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

  return __jsx(Title, null, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiArrowLeft"], {
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
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiUpload"], {
    className: "svg-icon"
  })), __jsx("button", {
    type: "button",
    onClick: onUpload
  }, "\uC791\uC131\uD558\uAE30"));
}));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Head__Title",
  componentId: "io0ez6-0"
})(["width:100%;background-color:", ";height:7rem;button{width:8rem;height:3.4rem;margin-top:1.8rem;margin-left:1rem;background-color:", ";color:", ";font-size:1.6rem;border-radius:4px;border:2px solid ", ";}.file-upload{display:none;}.svg-icon{color:#fff;font-size:3rem;padding-top:2rem;padding-left:1rem;padding-right:1rem;cursor:pointer;}input{background-color:", ";width:calc(100% - 22rem);height:6rem;padding:0.5rem;font-size:3rem;color:#fff;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray1, _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBlack);

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

/***/ "./containers/Header/HeaderContainer.tsx":
/*!***********************************************!*\
  !*** ./containers/Header/HeaderContainer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CommonUI/Header */ "./components/CommonUI/Header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const HeaderContainer = () => {
  const {
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => ({
    isLogged: state.loginUI.isLogged
  }));
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: toggle,
    1: setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setToggle(!toggle);
  }, [toggle]);

  const moveRouter = () => {
    router.push(`${_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about}`, `${_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about}`);
  };

  return __jsx(_components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLogged: isLogged,
    toggle: toggle,
    handleToggle: handleToggle,
    moveRouter: moveRouter
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

/***/ }),

/***/ "./containers/Write/WriteContainerTest.tsx":
/*!*************************************************!*\
  !*** ./containers/Write/WriteContainerTest.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");
/* harmony import */ var _store_modules_postUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/modules/postUI */ "./store/modules/postUI.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WriteContainerTest = ({}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const mdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    postWrite,
    postsList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => ({
    postWrite: state.postUI.postWrite,
    postsList: state.post.postsList
  })); // const handleChange = useCallback(
  // 	(e: React.ChangeEvent<any>) => {
  // 		const { value, name } = e.target;
  // 		dispatch(getValue({ name, value }));
  // 	},
  // 	[ dispatch ]
  // );

  const handleConv = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(html => {
    dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_4__["getValue"])({
      name: 'mdValue',
      value: html
    }));
  }, [dispatch]); // const onUpload = useCallback(async () => {
  // 	const uploadDate = new Date().toISOString();
  // 	const { title, inputValue, mdValue, imgUrl, subTitle, tagArr} = postWrite
  // 	const withoutExp = removeExp(inputValue);
  // 	const dataForUpload: Post = {
  // 		title: title,
  // 		rawContent: inputValue,
  // 		content: withoutExp,
  // 		contentMd: mdValue,
  // 		date: uploadDate,
  // 		imgUrl: imgUrl,
  // 		id: postsList.data[0].id + 1,
  //      subTitle: subTitle,
  //      tagArr: tagArr,
  // 	};
  // 	try {
  // 		dispatch(postAsync.request(dataForUpload));
  // 		Router.push(ROUTES.home, ROUTES.home, { shallow: true });
  // 	} catch (err) {
  // 		throw err;
  // 	}
  // },[ dispatch, postWrite ]
  // );
  // useEffect(
  // 	() => {
  // 		mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  // 	},
  // 	[ postWrite.inputValue ]
  // );
  // useEffect(() => {
  // 	return () => {
  // 		dispatch(resetInputValue());
  // 		checkUser();
  // 	};
  // }, []);

  return __jsx(EditBox, null, __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_3__["Preview"], {
    inputValue: postWrite.inputValue,
    mdRef: mdRef,
    onChange: handleConv
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteContainerTest);
const EditBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WriteContainerTest__EditBox",
  componentId: "sc-1ww7q8q-0"
})(["display:flex;height:94rem;justify-content:space-between;"]);
const EditPart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WriteContainerTest__EditPart",
  componentId: "sc-1ww7q8q-1"
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

/***/ "./lib/styles/responsive.ts":
/*!**********************************!*\
  !*** ./lib/styles/responsive.ts ***!
  \**********************************/
/*! exports provided: breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
const breakpoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '576px',
  xsmall: '360px'
};

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

/***/ "./pages/options.tsx":
/*!***************************!*\
  !*** ./pages/options.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Header/HeaderContainer */ "./containers/Header/HeaderContainer.tsx");
/* harmony import */ var _containers_Write_WriteContainerTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Write/WriteContainerTest */ "./containers/Write/WriteContainerTest.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const options = ({
  isServer
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChangeEmail = e => {
    const {
      value,
      name
    } = e.target;
    setEmail(value);
  };

  const onChangePassword = e => {
    const {
      value,
      name
    } = e.target;
    setPassword(value);
  };

  return __jsx(Wrapper, null, __jsx(_containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_containers_Write_WriteContainerTest__WEBPACK_IMPORTED_MODULE_5__["default"], null), "\uCCB4\uD06C\uCCB4\uD06C");
};

options.getInitialProps = async ctx => {
  const isServer = ctx.req ? 'server' : 'client';
  return {
    isServer
  };
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "options__Wrapper",
  componentId: "sc-1rc8inq-0"
})(["width:100%;height:100rem;margin:auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import Routes from 'next-routes';
// const routes = new Routes();
// routes 
//   .add('about', 'about')
//   .add('post', 'dev/blog/:id')
//   .add('postEdit', 'dev/edit/:id')
//   .add('write', 'write')
// export default routes;
const routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('index', '/'); // // export default routes;

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

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/options.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lchon\Project\blog_front\pages\options.tsx */"./pages/options.tsx");


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

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

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
//# sourceMappingURL=options.js.map