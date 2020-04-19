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

/***/ "./components/CommonUI/Footer.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Footer.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx(FooterEle, null);
};

const FooterEle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterEle",
  componentId: "f7jz8d-0"
})(["width:100%;height:10rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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

/***/ "./components/Intro/Intro.tsx":
/*!************************************!*\
  !*** ./components/Intro/Intro.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyInfo */ "./components/Intro/MyInfo.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Intro() {
  return __jsx(Layout, null, __jsx("h1", null, "About"), __jsx(_MyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Intro__Layout",
  componentId: "sc-11scps0-0"
})(["width:90%;margin:auto;"]);

/***/ }),

/***/ "./components/Intro/MyInfo.tsx":
/*!*************************************!*\
  !*** ./components/Intro/MyInfo.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var _infomd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infomd */ "./components/Intro/infomd.ts");
/* harmony import */ var _lib_styles_notion_markdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/styles/notion-markdown.css */ "./lib/styles/notion-markdown.css");
/* harmony import */ var _lib_styles_notion_markdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_notion_markdown_css__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MyInfo() {
  return __jsx(Wrapper, {
    gray2: _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__["colors"].gray2
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: _infomd__WEBPACK_IMPORTED_MODULE_3__["test"]
    }
  }));
}
;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MyInfo__Wrapper",
  componentId: "j9tp3t-0"
})(["margin:0 auto;width:90rem;min-height:30rem;border-radius:1rem;padding:2rem;background-color:#fff;line-height:1.5;"]);

/***/ }),

/***/ "./components/Intro/index.ts":
/*!***********************************!*\
  !*** ./components/Intro/index.ts ***!
  \***********************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro */ "./components/Intro/Intro.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return _Intro__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Intro/infomd.ts":
/*!************************************!*\
  !*** ./components/Intro/infomd.ts ***!
  \************************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
const test = `
<article id="21ff3909-db49-4bb8-ab2c-4ef66ff340f6" class="page sans"><div class="page-body"><p id="92dcf464-adf5-4456-a519-a8b9406cf55b" class="">
</p><h1 id="92e73078-7d6f-488e-8e7f-ea53abe8c7cf" class="">WHO</h1><hr id="7cd28e80-f661-4aaa-97f9-5bed90a42672"/><div id="05c92270-9a99-4d1c-a8e5-04fb4089a8e2" class="column-list"><div id="f40d2719-2c49-4941-9ac8-6cf531bc6e6f" style="width:12.5%" class="column"><p id="5036f0fe-0fd8-457a-99ca-476078ebaece" class="">이름          </p><p id="32172771-589a-4f32-8fa6-603a7f23e84a" class="">생년월일         </p><p id="a05eae24-e042-4988-ab89-0de80a015a91" class="">연락처       </p></div><div id="57b6c72e-847f-469a-a764-9abc7b55a2f0" style="width:87.5%" class="column"><p id="b5293602-cd98-4cae-86fb-fddc8682b0d6" class="">이창훈</p><p id="84519e14-b6a0-450a-9312-2f75cfb3061d" class="">1992.04.11</p><p id="661f5bc8-3e42-4c27-a32b-bb77bd5c4e23" class="">010-5547-0034  /  wakie9292@gmail.com / <a href="https://github.com/wakie92">github</a></p></div></div><p id="a5bd0d76-a630-4ac3-b11a-ff328f9db91d" class="">
</p><p id="5b7c0c30-d384-4dd3-a067-fdc3d602bdc2" class="">
</p><h1 id="11ca92b2-b0f6-4abc-95b4-33eff9b0a3b4" class="">Skill</h1><hr id="a3ecc120-c854-4ca7-aa28-091fa377aaab"/><div id="e0a8145c-bb69-4df4-b46a-a77ac1b0993c" class="column-list"><div id="49a1f588-995e-4bf4-be78-650ac1dfad16" style="width:56.25%" class="column"><p id="376b2f42-698e-456c-ac11-6829af2d907b" class="">  <mark class="highlight-teal_background">          </mark>  : 주로 사용하고 있음</p><p id="83df0e1c-6c70-4354-9750-2d906af09ee2" class="">  <mark class="highlight-red_background">          </mark>  : 개발에 사용해본 경험</p></div><div id="1ee0d4c5-ac3d-4053-b5b0-ca4836732232" style="width:43.75000000000001%" class="column"><p id="8672ee7d-b91b-46db-9426-8338958de7de" class="">  <mark class="highlight-yellow_background">          </mark>  : 익히는 중</p><p id="846cee7d-7090-4fec-8b4b-d2b05fecf725" class="">  <mark class="highlight-gray_background">          </mark>  : 사용해본 정도 </p></div></div><h3 id="4a1cf03b-f35a-4bab-ac9d-612b71c9c80d" class="">Back-end</h3><hr id="4402d2bc-0d38-48e2-8dcf-c43ad17d6c01"/><div id="800290de-008c-49db-9f2e-68cea740f381" class="column-list"><div id="c629d01c-7f42-426b-9eba-e1a27e1ff0e9" style="width:25%" class="column"><p id="9a317f9c-f8c8-445a-bb11-a8de9b8b5852" class=""><mark class="highlight-gray_background">NodeJS</mark> </p></div><div id="5c1977c9-ac7d-463f-9ee0-5566c12cc764" style="width:25%" class="column"><p id="8e9e4750-2c44-4db4-85ef-098539d635d1" class=""><mark class="highlight-gray_background">Express</mark></p></div><div id="629ca4c0-0095-47d3-aa21-1fdc3317bc8f" style="width:25%" class="column"><p id="208ad6c9-7e51-4426-b89f-2819f44409da" class=""><mark class="highlight-gray_background">RDS</mark></p></div><div id="50d03fc4-8b2b-4ba7-ac10-def3fa7357c7" style="width:25%" class="column"><p id="c26420d8-9e00-4199-a700-87f86632a175" class=""><mark class="highlight-red_background">S3</mark></p></div></div><h3 id="cb95a62a-9612-43f3-bda8-2d5d380f2ba7" class="">Front-end</h3><hr id="5fde05e4-5017-4f33-8707-092c512f6eff"/><div id="2f064f26-ebe8-4573-b38b-89d0b56e5c0f" class="column-list"><div id="7e2f7ec5-c774-4abf-b122-8993e1792977" style="width:25.000000000000007%" class="column"><p id="98325d68-1a2f-4ccc-8901-b666e3675740" class=""><mark class="highlight-teal_background">Javascript</mark></p></div><div id="c23221d7-2011-4bd3-93be-5c120d0e74df" style="width:25.000000000000007%" class="column"><p id="1ee6fc58-20e1-4e88-ab75-3dcc56eb7920" class=""><mark class="highlight-teal_background">React</mark></p></div><div id="8f2a4271-db58-48d3-9f35-29afd1fcf8a6" style="width:25.000000000000007%" class="column"><p id="d3734553-740b-43cb-bb62-5e2698ee095f" class=""><mark class="highlight-teal_background">HTML/CSS</mark></p></div><div id="30cb2445-a65f-4b6c-9a76-6d01881e015c" style="width:25.000000000000007%" class="column"><p id="7ac9e646-87cb-4e91-9272-400f34ef5374" class=""><mark class="highlight-yellow_background">Typescript</mark></p></div></div><h3 id="f335e918-78ef-4d6d-95f5-b4ee14aab77d" class="">DB</h3><hr id="8c76d808-a1f4-42de-8f3a-26a916213274"/><p id="aeeead7e-5f51-4562-96ec-0f5286710ceb" class=""><mark class="highlight-gray_background">MySql</mark></p><h3 id="030342be-67df-4788-8a5b-58004f21fda1" class="">ETC</h3><hr id="9a1d0c15-da43-485e-9fed-1bde7b9c25d4"/><p id="d8fca34d-713e-42dc-9629-842985a156e0" class=""><mark class="highlight-teal_background">Git/Github</mark></p><p id="7335803e-799a-48af-b590-88308129bd2d" class="">
</p><p id="34f9db93-ef26-4ac2-83d0-a86ba6ade55e" class="">
</p><h1 id="f299e325-0aaf-44c6-83cf-01aab0929d35" class="">Experience</h1><hr id="5ee23cc7-73ac-406b-af41-bd022c83fc99"/><div id="8aaebcaa-b5a3-4fd4-ab3d-c2bafb683fe4" class="column-list"><div id="ba67e412-ae02-4b1e-8d12-5846d100be33" style="width:31.25%" class="column"><h3 id="0161cc7e-0a3b-4399-aa93-031fddba0431" class=""><mark class="highlight-gray">2019.08 ~ 2020.02</mark></h3><h3 id="401181b9-5e5f-4c06-94e7-4d8348dc4507" class="">아웃라이어 (Outlier)</h3></div><div id="ac6b20fa-d4d9-4ff4-8509-b6c93121d830" style="width:68.75%" class="column"><p id="32eb2f55-1eb1-4198-9fa5-701025c6e617" class=""><em>개발팀 프론트엔드 개발자</em><div class="indented"><ul id="4ecb43b0-aaaa-4ef7-8c91-4c201c342f79" class="bulleted-list"><li>React를 기반으로 하는 SI업체</li></ul><ul id="80d34549-a0f4-45c0-861d-3d0502d081a7" class="bulleted-list"><li>새롭게 진행되는 프로젝트 프론트 개발 주도 및 클라이언트 회의 참여.</li></ul><ul id="79a2b8ec-0cae-4257-8945-83ef8014cc7e" class="bulleted-list"><li>Redux 아키텍쳐 도입.</li></ul><ul id="cc119b68-f910-41aa-8f12-98050595f643" class="bulleted-list"><li>React, Javascript, Redux, Styled-component,</li></ul><p id="7a338233-32be-418a-869f-d6852dc2cc12" class="">
</p><p id="f965a3ea-b37e-4546-934b-d4c0d2570437" class="">
</p></div></p></div></div><h1 id="3d5e9cac-c26a-436c-aee6-45a1abb7dc5b" class="">Project</h1><hr id="6aeca364-31e0-4a3c-99b8-a33efa7050e5"/><div id="244c8424-7d8b-4f01-b124-1760d24c0f96" class="column-list"><div id="e8bf8ee8-4381-489c-8ccd-80eb98607f38" style="width:31.25%" class="column"><h3 id="5cef72e9-7b19-4ccd-a8c1-1e49547ffa31" class=""><strong>커뮤니핏</strong></h3><p id="a83e8db1-20d7-4d4c-9a0a-1e55375912ed" class=""><mark class="highlight-gray">2019년 09월 ~ 2020년 02월</mark></p><p id="a20c5814-6488-44db-ade8-38dddea5f743" class="block-color-gray">Outlier</p><p id="598989da-41d0-4f16-bc4e-70d6f786b1ac" class="">
</p><ul id="36dbe148-3c54-48bc-9d33-2902dcb9ae18" class="block-color-gray bulleted-list"><li><a href="https://communifit.co.kr/"><strong><mark class="highlight-purple"><em>랜딩 페이지</em></mark></strong></a></li></ul><ul id="5bf038d4-6332-4b6f-9318-13bbdac9d364" class="bulleted-list"><li><a href="https://crm.communifit.co.kr/"><mark class="highlight-purple"><strong><em>crm 주소</em></strong></mark></a></li></ul><p id="45b18d29-0dbc-4056-a148-ddfcc2c2a66a" class="">
</p><p id="a71473f7-347a-4fef-a3c9-ccc4cb5afa0b" class="">
</p></div><div id="5782886d-87a4-438d-8d7d-e7b75ec4ed79" style="width:68.75%" class="column"><p id="d436871c-8609-4d6a-9f96-8b69cc9906f8" class=""><em>Javascript, React, Redux, Styled-components, github, cordova</em></p><p id="07fd9f19-f0bb-4e54-81f2-f062dea33ebe" class="">
</p><ul id="9270d7cd-7cad-4357-b34d-1780dffa6e4a" class="bulleted-list"><li>React기반인 아파트 단지내 스포츠 센터 하이브리드 웹/앱</li></ul><p id="80700000-b969-42a3-94a8-4a04ea66e212" class="">
</p><p id="c5032407-0292-40a7-90a8-a4998950bc64" class="">역할 및 담당<div class="indented"><ul id="4de210fb-9d7f-4f0d-8a8f-dd0d291e0e51" class="bulleted-list"><li>웹 프론트 담당</li></ul><ul id="e0b89e1c-643d-4c7c-9825-7cf2c23b9b1f" class="bulleted-list"><li>본사에서 지점들을 총 관리하는 관리자 홈페이지 제작</li></ul><ul id="440a8c2c-3b64-4d31-9249-9801e80c91b8" class="bulleted-list"><li>각 지점에서 사용하는 crm 제작</li></ul></div></p><p id="1f0b4881-5ea2-4191-b451-bc7b4c8a5a71" class="">주요업무<div class="indented"><ul id="20c1ecf6-7aa2-4f11-b111-827df7fa09b6" class="bulleted-list"><li>component 설계</li></ul><ul id="a91f6118-7efb-4c10-8704-f4ffb6583b2e" class="bulleted-list"><li>redux 설계</li></ul><ul id="6aad8d10-1dfb-4e63-91b4-ad1afd4491b5" class="bulleted-list"><li>기능 구현</li></ul><ul id="579900a4-05ae-4766-be3b-a7ddb6bca811" class="bulleted-list"><li>데이터 패치</li></ul></div></p></div></div><hr id="f88ad3e1-0bf2-4655-85a5-08c662da7205"/><div id="ef74579d-58e7-4caf-b8d7-228d0f610c2d" class="column-list"><div id="5d20e42e-bbe2-4673-9702-cf72aceab7fe" style="width:31.25%" class="column"><h3 id="8147e37e-33d3-4965-a59a-bc2a0684f5fd" class="">개인블로그 제작</h3><p id="5d331113-400d-4bef-8919-8e7594ca572f" class=""><mark class="highlight-gray">2019년 12월 ~  진행중</mark></p><p id="74f042b2-5796-49ae-ac72-c0ce81ad27f7" class=""><em><strong><mark class="highlight-purple"><a href="https://github.com/wakie92/blog_front">Github</a></mark></strong></em></p></div><div id="116b84f9-e2e5-4432-802d-bc0528bd3c22" style="width:68.75%" class="column"><p id="b60f0398-9f5a-4a7e-bb77-1fb40d145663" class=""><em>Typescript, nextJS, NodeJS, React, Redux, Redux-saga, styled-components, github, (S3, cloudFront, route53 사용예정)</em></p><p id="07a4fa20-dd1b-4768-8977-732912245b4e" class="">
</p><ul id="c8fc0e2b-e019-4bd7-bd1d-29fa3dc81c8d" class="bulleted-list"><li>개인 블로그를 운영할 목적으로 제작하는 리액트 기반 블로그.</li></ul><p id="caa8485f-3dbc-46e5-990e-e0ab597f8be8" class="">
</p><ul id="def78810-6cfc-4690-919e-0e9c2a19694e" class="bulleted-list"><li>Typescript와 Redux미들웨어인 Redux-saga, SEO를 위해 nextJS를 공부하며 만드는 사이드프로젝트.</li></ul><p id="027452e4-871f-415c-b99f-c9d291476844" class="">
</p></div></div><hr id="a63874c2-0235-46f3-a637-8f5f52c0dee1"/><div id="a19fec67-b36c-4293-a2d2-f45d0d318120" class="column-list"><div id="293759ef-5e85-4d49-a69c-e1b139b4d1e6" style="width:31.25%" class="column"><h3 id="a98b4b6d-b841-4999-b7c0-45dbb291647f" class="">피시방 메뉴판</h3><p id="f26609ad-d834-4d38-ab35-089fcbd65c3b" class=""><mark class="highlight-gray">2019년 01월 ~ 2019년 03월</mark></p><p id="82889da0-fd5e-4405-9362-005454030ffd" class=""><mark class="highlight-purple"><em><strong><a href="https://github.com/wakie92/React_Order_App">Github</a></strong></em></mark></p><p id="d018f5eb-55bf-4972-9c06-66b292eb5804" class="">
</p></div><div id="a6e41261-f775-4ee8-81a7-b63931c4e5e6" style="width:68.75%" class="column"><p id="b6491385-e070-4874-ae34-5537b6fa6dc0" class=""><em>Javascript, React, Redux, Firebase, S3, axios</em></p><p id="04056a6b-0dd4-41ef-9c63-fd19b5e7d096" class="">
</p><ul id="671bdbce-4fdb-43a6-ba5e-13e9d86b1ae3" class="bulleted-list"><li>사이드 프로젝트.</li></ul><ul id="1122d802-d7f7-48cb-aa90-5d6edec6b4be" class="bulleted-list"><li>피시방 메뉴판을 React와 firebase를 이용하여 클론코딩.</li></ul><ul id="ce085474-7731-4cb1-98f6-e6539462366a" class="bulleted-list"><li>반응형작업과 Redux를 이용한 상태관리를 공부.</li></ul><p id="e931ff4c-baf1-4265-8931-d3733f4f6d75" class="">
</p></div></div><hr id="b93d434d-9fc5-45a2-bb07-51fc57947ddc"/><p id="3c74e50f-f595-4c3d-8f76-f56341b822d1" class="">
</p><h1 id="0374e11a-a2a1-45c1-b7b5-2770eda66961" class="">Education</h1><hr id="4f9815d4-aaa0-4517-96cd-51bb2ef361ad"/><div id="ee968af6-221a-4241-b471-a08a0706a047" class="column-list"><div id="66dcd2b6-5a96-417b-a3b2-11451e4350a9" style="width:31.25%" class="column"><h3 id="b7579626-d552-4faf-942c-39fedd6eb96a" class="">AWS를 활용한 클라우드기반 웹 개발 고급인력 양성과정 이수   </h3><p id="89530920-5d02-4ee1-8a53-852f5932422d" class="block-color-gray">2018년 04월 ~ 2018년 10월</p><p id="4618e1c6-eaf9-4490-bf1f-fae3beb2e7c1" class=""><mark class="highlight-gray"><em>비트교육센터</em></mark></p></div><div id="5a2bef4b-dd95-47d8-9590-2e2f3fdb330d" style="width:68.75%" class="column"><ul id="024ccd7b-d9f3-4aa1-93d7-99b4531d86a4" class="bulleted-list"><li>Javascript를 기본으로 웹 개발 교육을 이수.</li></ul><ul id="1af7811b-8407-418e-9dd3-9613d4348604" class="bulleted-list"><li>팀 프로젝트 경험.</li></ul><p id="a3a64841-0daa-437b-b4b1-9f49dae1aa04" class="">
</p></div></div><hr id="4ff28be5-2107-4d74-80c1-2a76b9972241"/><div id="1b9dec0d-c64c-46ed-8ed6-2ee2aa11af81" class="column-list"><div id="ea341f0b-f590-4be4-8575-374747cae818" style="width:31.25%" class="column"><h2 id="6efa9622-755f-43f2-8aac-ec97e4c889f5" class="">가천대학교</h2><p id="bf340379-4980-435c-92b0-27a7498c94ec" class="block-color-gray">2012년 03월 ~ 2018년 06월</p></div><div id="61787e1d-9430-4d0d-97e4-0b342bba5135" style="width:68.75%" class="column"><ul id="a4bf5059-a59e-4162-ae02-470024cea7d5" class="bulleted-list"><li>글로벌경제학과(주)</li></ul><ul id="61f09fa4-0785-4f9d-9b75-5222ebf1365a" class="bulleted-list"><li>소프트웨어경영학과(부)</li></ul></div></div><hr id="9a3ced1c-374c-4258-bc9c-f35adef00466"/><h2 id="004081b7-4b5a-44e8-9fa5-76fc33877683" class="">서라벌고등학교</h2><p id="50607a8b-4e94-44dd-ae64-c9dbea5faef4" class="block-color-gray">2008년 03월 ~ 2011년 03월</p><p id="767009f2-f029-4c01-9c98-7412ac87bb98" class="">
</p></div></article>
`;

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

/***/ "./lib/styles/notion-markdown.css":
/*!****************************************!*\
  !*** ./lib/styles/notion-markdown.css ***!
  \****************************************/
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

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Intro */ "./components/Intro/index.ts");
/* harmony import */ var _containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Header/HeaderContainer */ "./containers/Header/HeaderContainer.tsx");
/* harmony import */ var _components_CommonUI_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CommonUI/Footer */ "./components/CommonUI/Footer.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = ({
  isServer
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_containers_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_1__["Intro"], null), __jsx(_components_CommonUI_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

About.getInitialProps = async ctx => {
  const isServer = ctx.req ? 'server' : 'client';
  return {
    isServer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/about.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lchon\Project\blog_front\pages\about.tsx */"./pages/about.tsx");


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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map