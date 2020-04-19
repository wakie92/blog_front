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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CommonUI/Hamburger.tsx":
/*!*******************************************!*\
  !*** ./components/CommonUI/Hamburger.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Hamburger = ({
  toggle,
  onToggle
}) => {
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
  isLogged
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

/***/ "./components/Posts/Post/LoadingPost.tsx":
/*!***********************************************!*\
  !*** ./components/Posts/Post/LoadingPost.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingPost; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/styles/global */ "./lib/styles/global.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/**@jsx jsx */


function LoadingPost({}) {
  const loadingPostArr = new Array(30);
  const ele = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(WrpperProps, {
    gray1: _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "image-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "thumb-nail"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "li-article"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "post-info"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    className: "title",
    style: {
      width: '100%'
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    className: "title",
    style: {
      width: '30%'
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "date-comment"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "date"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "commetns"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "pre-content"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: '100%'
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: '100%'
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: '80%'
    }
  }))));

  for (let i = 0; i < 30; i += 1) {
    loadingPostArr.push(ele);
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loadingPostArr);
}

var _StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "LoadingPost___StyledLi",
  componentId: "mpkgp2-0"
})(["border-radius:4px;box-shadow:0px 4px 8px 8px rgba(0,0,0,0.05);.li-article{padding:1rem 1.5rem;margin:1rem 0;height:18rem;.post-info{height:12rem;border-bottom:1px solid ", ";margin-bottom:1rem;.title{background-color:", ";height:2.5rem;border-radius:5px;margin-bottom:0.5rem;}.date-comment{display:flex;justify-content:space-between;.date{background-color:", ";width:60%;height:1.5rem;border-radius:5px;margin-bottom:2rem;margin-top:1.5rem;}}}.pre-content{div{height:1.5rem;background-color:", ";margin-bottom:0.5rem;border-radius:5px;}}}.image-container{overflow:hidden;border-radius:4px 4px 0 0;height:18rem;display:flex;justify-content:center;align-items:center;.thumb-nail{border-radius:4px;width:calc(100% - 1rem);height:calc(100% - 1rem);background-color:", ";}}"], p => p._css, p => p._css2, p => p._css3, p => p._css4, p => p._css5);

const WrpperProps = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_StyledLi, {
  _css: props.gray1,
  _css2: props.gray1,
  _css3: props.gray1,
  _css4: props.gray1,
  _css5: props.gray1
}, props.children);

/***/ }),

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/Utils/utils */ "./lib/Utils/utils.ts");
/* harmony import */ var _Maybe_Maybe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Maybe/Maybe */ "./components/Maybe/Maybe.tsx");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tags */ "./components/Posts/Post/Tags.tsx");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/styles/responsive */ "./lib/styles/responsive.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/**@jsx jsx */






function Post({
  title,
  preContent,
  date,
  onClick,
  imgUrl,
  tagArr
}) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(WrpperProps, {
    onClick: onClick,
    imgUrl: imgUrl,
    dateColor: _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].gray4
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "image-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    alt: "",
    className: "thumb-nail",
    src: imgUrl
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "li-article"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "post-info"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    className: "title"
  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Maybe_Maybe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isVisible: tagArr
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tagArr: tagArr
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "date"
  }, Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(date))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "pre-content"
  }, preContent)));
}

var _StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "Post___StyledLi",
  componentId: "sc-1oyzum2-0"
})(["border-radius:4px;box-shadow:0px 4px 8px 8px rgba(0,0,0,0.05);cursor:pointer;.li-article{padding:1rem 1.5rem;height:", ";padding-top:2rem;.post-info{min-height:12rem;border-bottom:1px solid ", ";.title{max-height:11.5rem;overflow:hidden;word-break:break-all;}.tags{border-radius:1.6rem;background-color:#ccc;margin:0.5rem;padding:0.5rem;line-height:1.5;}.date{color:", ";font-size:1.5rem;margin-bottom:2rem;}}.pre-content{margin-top:1.5rem;color:#868e96;font-size:1.5rem;overflow:hidden;max-height:", ";line-height:1.9;word-break:break-word;}}.image-container{overflow:hidden;border-radius:4px 4px 0 0;height:18rem;cursor:pointer;display:", ";img{object-fit:cover;height:100%;width:100%;border-radius:4px 4px 0 0;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);&:hover{transform:scale(1.1);-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transition:0.3s;-webkit-transition:0.3s;-moz-transition:0.3s;-ms-transition:0.3s;-o-transition:0.3s;}}}@media screen and (max-width:", "){.image-container{height:15rem;}.li-article{height:22rem;}}@media screen and (max-width:", "){.image-container{display:none;}.li-article{height:27rem;}}@media screen and (max-width:", "){.li-article{height:20rem;.post-info{border-bottom:none;}.pre-content{max-height:6rem;}}}"], p => p._css, p => p._css3, p => p._css4, p => p._css5, p => p._css6, p => p._css7, p => p._css8, p => p._css9);

const WrpperProps = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_StyledLi, {
  onClick: props.onClick,
  _css: props.imgUrl ? '29rem' : '47rem',
  _css2: props.imgUrl ? '12rem' : '13rem',
  _css3: props.dateColor,
  _css4: props.dateColor,
  _css5: props.imgUrl ? '15rem' : '32rem',
  _css6: !props.imgUrl && 'none',
  _css7: _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].xlarge,
  _css8: _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].large,
  _css9: _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].medium
}, props.children);

/***/ }),

/***/ "./components/Posts/Post/Tags.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Tags.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonUI_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommonUI/Tag */ "./components/CommonUI/Tag.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tags = ({
  tagArr
}) => {
  return __jsx(Wrapper, null, tagArr.map((tagEle, index) => __jsx(_CommonUI_Tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `${tagEle}_${index}`,
    tagString: tagEle
  })));
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tags__Wrapper",
  componentId: "sc-1xipq7o-0"
})(["display:flex;flex-wrap:wrap;"]);
/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./components/Posts/PostList/PostList.tsx":
/*!************************************************!*\
  !*** ./components/Posts/PostList/PostList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Post_PostContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/Post/PostContainer */ "./containers/Post/PostContainer.tsx");
/* harmony import */ var _Post_LoadingPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post/LoadingPost */ "./components/Posts/Post/LoadingPost.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostList = ({
  postsList
}) => {
  const {
    data,
    loading
  } = postsList;
  if (loading) return __jsx(_Post_LoadingPost__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  const list = data.map(item => __jsx(_containers_Post_PostContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: item.title,
    preContent: item.subTitle,
    date: item.date,
    tagArr: item.tagArr,
    imgUrl: item.imgUrl,
    id: item.id,
    key: `card-${String(item.date)}-${item.title}`
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, list);
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./components/Posts/PostsLayout.tsx":
/*!******************************************!*\
  !*** ./components/Posts/PostsLayout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _PostList_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostList/PostList */ "./components/Posts/PostList/PostList.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostsLayout = ({
  postsList
}) => __jsx(Layout, null, __jsx("ul", null, __jsx(_PostList_PostList__WEBPACK_IMPORTED_MODULE_3__["default"], {
  postsList: postsList
})));

/* harmony default export */ __webpack_exports__["default"] = (PostsLayout);
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "PostsLayout__Layout",
  componentId: "b4of9u-0"
})(["width:90%;margin:3rem auto;ul,li,ol{list-style:none;}ul{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(50rem,auto);grid-gap:2.5rem;@media screen and (max-width:", "){grid-template-columns:repeat(3,1fr);grid-auto-rows:45rem;}@media screen and (max-width:", "){grid-template-columns:repeat(2,1fr);grid-auto-rows:30rem;}@media screen and (max-width:", "){grid-template-columns:repeat(1,1fr);grid-auto-rows:23rem;}}"], _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].xlarge, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].large, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].medium);

/***/ }),

/***/ "./components/Posts/index.ts":
/*!***********************************!*\
  !*** ./components/Posts/index.ts ***!
  \***********************************/
/*! exports provided: PostsLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostsLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostsLayout */ "./components/Posts/PostsLayout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsLayout", function() { return _PostsLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./configs/init-firebase.ts":
/*!**********************************!*\
  !*** ./configs/init-firebase.ts ***!
  \**********************************/
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
  return __jsx(_components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLogged: isLogged,
    toggle: toggle,
    handleToggle: handleToggle
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

/***/ }),

/***/ "./containers/Post/PostContainer.tsx":
/*!*******************************************!*\
  !*** ./containers/Post/PostContainer.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _components_Posts_Post_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Posts/Post/Post */ "./components/Posts/Post/Post.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PostContainer = ({
  title,
  preContent,
  date,
  id,
  imgUrl,
  tagArr
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    pushRoute
  } = _routes__WEBPACK_IMPORTED_MODULE_3___default.a.Router;
  const reqGetPost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    try {
      dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_4__["getPostAsync"].request(id)); // router.push(`${ROUTES.devBlog}/${id}`, `${ROUTES.devBlog}/${id}`);

      pushRoute(`post`, {
        id
      });
    } catch (e) {
      throw e;
    }
  }, [dispatch]);
  return __jsx(_components_Posts_Post_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: title,
    preContent: preContent,
    date: date,
    tagArr: tagArr,
    imgUrl: imgUrl,
    onClick: () => reqGetPost(id)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostContainer);

/***/ }),

/***/ "./containers/Post/PostListContainer.tsx":
/*!***********************************************!*\
  !*** ./containers/Post/PostListContainer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Posts */ "./components/Posts/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const limitCnt = 30;

const PostListContainer = () => {
  const {
    postsList,
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    post,
    loginUI
  }) => ({
    postsList: post.postsList,
    isLogged: loginUI.isLogged
  }));
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const reqGetPostsList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    try {
      dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_3__["getPostsListAsync"].request(limitCnt));
    } catch (e) {
      throw e;
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('dfdfdf');

    if (!postsList.data) {
      reqGetPostsList();
    }
  }, []);
  return __jsx(_components_Posts__WEBPACK_IMPORTED_MODULE_4__["PostsLayout"], {
    postsList: postsList
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostListContainer);

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
/* harmony import */ var _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/init-firebase */ "./configs/init-firebase.ts");


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
  _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut().then(function () {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  }).catch(function (error) {// An error happened.
  });
};
const checkUser = async () => {
  const user = await _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
  return user;
};
const loginEmail = (email, password) => {
  const result = _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(email, password).then(res => {
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
/* harmony import */ var _configs_init_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/init-firebase */ "./configs/init-firebase.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const db = Object(_configs_init_firebase__WEBPACK_IMPORTED_MODULE_7__["firebaseDB"])().firestore();
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Header/HeaderContainer */ "./containers/Header/HeaderContainer.tsx");
/* harmony import */ var _containers_Post_PostListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Post/PostListContainer */ "./containers/Post/PostListContainer.tsx");
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Utils/utils */ "./lib/Utils/utils.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('index [useeffect]');
    Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_4__["checkUser"])();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_containers_Post_PostListContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

Home.getInitialProps = async ({
  store,
  isServer
}) => {
  if (isServer) {
    await Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_4__["checkUser"])();
    console.log('home');
    await store.dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_1__["getPostsListAsync"].request(30));
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

routes.add('index', '/').add('about', '/about').add('post', 'dev/blog/:id').add('postEdit', 'dev/edit/:id').add('write', 'write'); // export default routes;

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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lchon\Project\blog_front\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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
//# sourceMappingURL=index.js.map