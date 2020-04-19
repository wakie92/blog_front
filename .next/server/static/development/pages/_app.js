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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CommonUI/Layout.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/modules/loginUI */ "./store/modules/loginUI/index.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-1nakkc7-0"
})(["width:100%;margin:0 auto;"]);

const Layout = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.token) {
      dispatch(Object(_store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"])(true));
    } else {
      dispatch(Object(_store_modules_loginUI__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"])(false));
    }
  }, [props]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_StyledDiv, {
    className: "page-layout"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
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
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CommonUI_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CommonUI/Layout */ "./components/CommonUI/Layout.tsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








// composeWithDevTools()
// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [composeWithDevTools(), sagaMiddleware]
//   const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware) );
//   // if (req || !isServer) {
//     sagaMiddleware.run(rootSaga)
//   // }
//   return store;
// };
const MyApp2 = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const tokenData = JSON.parse(sessionStorage.getItem("idToken"));
    setToken(tokenData);
  }, []);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: {
      fontFamily: 'Noto Sans KR'
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, __jsx(_components_CommonUI_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    token: token
  }, __jsx(Component, pageProps))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(GlobalStyle, null)));
};

MyApp2.getInitialProps = async ({
  Component,
  ctx,
  sessionStorage
}) => {
  let pageProps = {}; // 서버사이드에서 리덕스 연결 성공. 원인 공부

  if (ctx.isServer) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp2)));
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  html {
    font-size:62.5%;
    background-color: #fff;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.8;
    color: #343a40;
    font-family: 'Noto Sans KR';
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    vertical-align: top;
  }
  article, footer, header, aside, details, header, nav, section {
    display: block;
  }

  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: #343a40;
  }
  h1 {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  p {
    margin: 0;
  }`;

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./store/modules/index.ts");




const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(preloadedState, {
  isServer,
  req = null
}) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_modules__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, bindMiddleware([sagaMiddleware]));

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(_modules__WEBPACK_IMPORTED_MODULE_2__["rootSaga"]);
  }

  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./store/modules/index.ts":
/*!********************************!*\
  !*** ./store/modules/index.ts ***!
  \********************************/
/*! exports provided: default, rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _postUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postUI */ "./store/modules/postUI.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./store/modules/post/index.ts");
/* harmony import */ var _post_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/reducers */ "./store/modules/post/reducers.ts");
/* harmony import */ var _loginUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginUI */ "./store/modules/loginUI/index.ts");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  postUI: _postUI__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post_reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  loginUI: _loginUI__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_post__WEBPACK_IMPORTED_MODULE_3__["postSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_3__["updateSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_3__["getOnePostSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_3__["putSaga"])(), Object(_post__WEBPACK_IMPORTED_MODULE_3__["deleteSaga"])()]);
}

/***/ }),

/***/ "./store/modules/loginUI/actions.ts":
/*!******************************************!*\
  !*** ./store/modules/loginUI/actions.ts ***!
  \******************************************/
/*! exports provided: GET_AUTH, GET_LOGIN_MODAL, INITIALIZE, IS_LOGGED, getAuth, getLoginModal, initialize, getIsLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTH", function() { return GET_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGIN_MODAL", function() { return GET_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE", function() { return INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LOGGED", function() { return IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginModal", function() { return getLoginModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLogged", function() { return getIsLogged; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
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

/***/ "./store/modules/loginUI/index.ts":
/*!****************************************!*\
  !*** ./store/modules/loginUI/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./store/modules/loginUI/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/modules/loginUI/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_AUTH", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_AUTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LOGIN_MODAL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GET_LOGIN_MODAL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["INITIALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_LOGGED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["IS_LOGGED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["getAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginModal", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["getLoginModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["initialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLogged", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["getIsLogged"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/modules/loginUI/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["default","GET_AUTH","GET_LOGIN_MODAL","INITIALIZE","IS_LOGGED","getAuth","getLoginModal","initialize","getIsLogged","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./store/modules/loginUI/reducers.ts":
/*!*******************************************!*\
  !*** ./store/modules/loginUI/reducers.ts ***!
  \*******************************************/
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
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typesafe-actions */ "typesafe-actions");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./store/modules/loginUI/actions.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const initialState = {
  isLoginModal: false,
  email: '',
  password: '',
  isLogged: false
};
const loginUI = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_7__["createReducer"])(initialState, {
  [_actions__WEBPACK_IMPORTED_MODULE_8__["IS_LOGGED"]]: (state, action) => {
    return _objectSpread({}, state, {
      isLogged: action.payload
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__["GET_LOGIN_MODAL"]]: state => {
    return _objectSpread({}, state, {
      isLoginModal: !state.isLoginModal
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__["GET_AUTH"]]: (state, action) => {
    const {
      name,
      value
    } = action.payload;
    return _objectSpread({}, state, {
      [name]: value
    });
  },
  [_actions__WEBPACK_IMPORTED_MODULE_8__["INITIALIZE"]]: state => {
    return _objectSpread({}, state, {
      email: '',
      password: ''
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (loginUI);

/***/ }),

/***/ "./store/modules/loginUI/types.ts":
/*!****************************************!*\
  !*** ./store/modules/loginUI/types.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

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

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

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
//# sourceMappingURL=_app.js.map