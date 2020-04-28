module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GrhQ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "GrhQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("no1e");
/* harmony import */ var _store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oTr5");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const login = ({
  isServer
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => ({
    isLogged: state.loginUI.isLogged
  }));
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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

  const onSumit = async e => {
    e.preventDefault();
    const res = await Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_3__[/* loginEmail */ "c"])(email, password);

    if (res) {
      dispatch(Object(_store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"])(true));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", null, __jsx("input", {
    onChange: onChangeEmail,
    value: email
  }), __jsx("input", {
    type: "password",
    onChange: onChangePassword,
    value: password
  })), __jsx("button", {
    onClick: onSumit
  }, isLogged ? '로그아웃' : '로그인'));
};

login.getInitialProps = async ctx => {
  const isServer = ctx.req ? 'server' : 'client';
  return {
    isServer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "NsUO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IS_LOGGED; });
/* unused harmony export getAuth */
/* unused harmony export getLoginModal */
/* unused harmony export initialize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getIsLogged; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

const GET_AUTH = 'loginUI/GET_AUTH';
const GET_LOGIN_MODAL = 'loginUI/GET_LOGIN_MODAL';
const INITIALIZE = 'loginUI/INITIALIZE';
const IS_LOGGED = 'loginUI/IS_LOGGED';
const getAuth = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_AUTH, ({
  name,
  value
}) => ({
  name,
  value
}))();
const getLoginModal = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_LOGIN_MODAL)();
const initialize = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INITIALIZE)();
const getIsLogged = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(IS_LOGGED, isLogged => isLogged)();

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fEia":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("NsUO");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const initialState = {
  isLoginModal: false,
  email: '',
  password: '',
  isLogged: false
};
const loginUI = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createReducer"])(initialState, {
  [_actions__WEBPACK_IMPORTED_MODULE_8__[/* IS_LOGGED */ "d"]]: (state, action) => {
    return _objectSpread({}, state, {
      isLogged: action.payload
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__[/* GET_LOGIN_MODAL */ "b"]]: state => {
    return _objectSpread({}, state, {
      isLoginModal: !state.isLoginModal
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__[/* GET_AUTH */ "a"]]: (state, action) => {
    const {
      name,
      value
    } = action.payload;
    return _objectSpread({}, state, {
      [name]: value
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__[/* INITIALIZE */ "c"]]: state => {
    return _objectSpread({}, state, {
      email: '',
      password: ''
    });
  }
});
/* harmony default export */ __webpack_exports__["a"] = (loginUI);

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i0Yl":
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "no1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* unused harmony export setItem */
/* unused harmony export getItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeExp; });
/* unused harmony export logoutFn */
/* unused harmony export setCookie */
/* unused harmony export deleteCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginEmail; });
/* unused harmony export checkLogin */
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rBuv");


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
  _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].auth().signOut().then(function () {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  }).catch(function (error) {// An error happened.
  });
};
const setCookie = (name, value, day) => {
  const date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  console.log(document.cookie);
};
const deleteCookie = name => {
  const date = new Date();
  document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
  console.log("delete");
};
const checkUser = async () => {
  const user = await _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].auth().currentUser;
  return user;
};
const loginEmail = (email, password) => {
  const result = _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].auth().signInWithEmailAndPassword(email, password).then(res => {
    const token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(res.user);

    setCookie("token", token, 1);
    sessionStorage.setItem("idToken", token);
    return res;
  }).catch(err => console.log(err));
  return result;
};
const checkLogin = () => {
  const tokenObj = document.cookie;
  const isToken = JSON.parse(tokenObj);
  return isToken;
};

/***/ }),

/***/ "oTr5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fEia");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NsUO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLogged", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vDC3");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rBuv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseDB; });
/* unused harmony export provider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bnmT");
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
/* harmony default export */ __webpack_exports__["a"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"]());

/***/ }),

/***/ "vDC3":
/***/ (function(module, exports) {



/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });