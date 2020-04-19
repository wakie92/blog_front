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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3hMM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IAdA");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("g/Tf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostsListAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putPostAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["p"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H680");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_2__, "deleteSaga")) __webpack_require__.d(__webpack_exports__, "deleteSaga", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["deleteSaga"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_2__, "getOnePostSaga")) __webpack_require__.d(__webpack_exports__, "getOnePostSaga", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["getOnePostSaga"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_2__, "postSaga")) __webpack_require__.d(__webpack_exports__, "postSaga", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["postSaga"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_2__, "putSaga")) __webpack_require__.d(__webpack_exports__, "putSaga", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["putSaga"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_2__, "updateSaga")) __webpack_require__.d(__webpack_exports__, "updateSaga", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["updateSaga"]; });

/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5hHx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnePostSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["e"]; });






/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5hHx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./store/modules/post/actions.ts
var actions = __webpack_require__("g/Tf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./configs/init-firebase.ts
var init_firebase = __webpack_require__("rBuv");

// CONCATENATED MODULE: ./lib/api/apis.ts








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const db = Object(init_firebase["b" /* firebaseDB */])().firestore();
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
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./lib/Utils/createAsyncSaga.ts


function isPayloadAction(action) {
  return action.payload !== undefined;
}

function createAsyncSaga(asyncActionCreator, promiseCreator) {
  return function* saga(action) {
    try {
      const result = isPayloadAction(action) ? yield Object(effects_["call"])(promiseCreator, action.payload) : yield Object(effects_["call"])(promiseCreator);
      yield Object(effects_["put"])(asyncActionCreator.success(result));
    } catch (e) {
      yield Object(effects_["put"])(asyncActionCreator.failure(e));
    }
  };
}
// CONCATENATED MODULE: ./store/modules/post/saga.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOnePostSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return putSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteSaga; });




const deletePostSaga = createAsyncSaga(actions["l" /* deletePostAsync */], DeletePost);
const putPostSaga = createAsyncSaga(actions["p" /* putPostAsync */], PutPost);
const postUpdateSaga = createAsyncSaga(actions["o" /* postAsync */], PostUpdate);
const getPostsListSaga = createAsyncSaga(actions["n" /* getPostsListAsync */], GetPostsList);
const getPostSaga = createAsyncSaga(actions["m" /* getPostAsync */], GetPost);
function* updateSaga() {
  yield Object(effects_["takeLatest"])(actions["i" /* UPDATE_POST */], postUpdateSaga);
}
function* postSaga() {
  yield Object(effects_["takeEvery"])(actions["d" /* GET_POSTS_LIST */], getPostsListSaga);
}
function* getOnePostSaga() {
  yield Object(effects_["takeLatest"])(actions["c" /* GET_POST */], getPostSaga);
}
function* putSaga() {
  yield Object(effects_["takeLatest"])(actions["b" /* EDIT_POST */], putPostSaga);
}
function* deleteSaga() {
  yield Object(effects_["takeLatest"])(actions["a" /* DELETE_POST */], deletePostSaga);
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "H680":
/***/ (function(module, exports) {



/***/ }),

/***/ "IAdA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "typesafe-actions"
var external_typesafe_actions_ = __webpack_require__("i0Yl");

// CONCATENATED MODULE: ./lib/Utils/asyncUtils.ts








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


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
    const [request, success, failure] = transformToArray(type).map(external_typesafe_actions_["getType"]);

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
// EXTERNAL MODULE: ./store/modules/post/actions.ts
var actions = __webpack_require__("g/Tf");

// CONCATENATED MODULE: ./store/modules/post/reducers.ts








function reducers_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { reducers_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }




const initialState = {
  postsList: asyncState.initial(),
  reqPost: asyncState.initial(),
  post: asyncState.initial()
};
const post = Object(external_typesafe_actions_["createReducer"])(initialState, {
  [actions["d" /* GET_POSTS_LIST */]]: state => reducers_objectSpread({}, state, {
    postsList: asyncState.loading()
  }),
  [actions["f" /* GET_POSTS_LIST_SUCCESS */]]: (state, action) => {
    return reducers_objectSpread({}, state, {
      postsList: asyncState.success(action.payload)
    });
  },
  [actions["e" /* GET_POSTS_LIST_ERROR */]]: (state, action) => reducers_objectSpread({}, state, {
    postsList: asyncState.error(action.payload)
  }),
  [actions["i" /* UPDATE_POST */]]: state => reducers_objectSpread({}, state, {
    reqPost: asyncState.loading()
  }),
  [actions["k" /* UPDATE_POST_SUCCESS */]]: (state, action) => reducers_objectSpread({}, state, {
    reqPost: asyncState.success(action.payload)
  }),
  [actions["j" /* UPDATE_POST_ERROR */]]: (state, action) => reducers_objectSpread({}, state, {
    reqPost: asyncState.error(action.payload)
  }),
  [actions["c" /* GET_POST */]]: state => reducers_objectSpread({}, state, {
    post: asyncState.loading()
  }),
  [actions["h" /* GET_POST_SUCCESS */]]: (state, action) => reducers_objectSpread({}, state, {
    post: asyncState.success(action.payload)
  }),
  [actions["g" /* GET_POST_ERROR */]]: (state, action) => reducers_objectSpread({}, state, {
    post: asyncState.error(action.payload)
  })
}); // refactoring code

const test = Object(external_typesafe_actions_["createReducer"])(initialState).handleAction(transformToArray(actions["n" /* getPostsListAsync */]), handleAsyncActions(actions["n" /* getPostsListAsync */], 'postsList'));
/* harmony default export */ var reducers = __webpack_exports__["a"] = (post);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: ./store/modules/loginUI/index.ts
var loginUI = __webpack_require__("oTr5");

// CONCATENATED MODULE: ./components/CommonUI/Layout.tsx


var __jsx = external_react_default.a.createElement;

/** @jsx jsx */





var _StyledDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-1nakkc7-0"
})(["width:100%;margin:0 auto;"]);

const Layout = props => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (props.token) {
      dispatch(Object(loginUI["getIsLogged"])(true));
    } else {
      dispatch(Object(loginUI["getIsLogged"])(false));
    }
  }, [props]);
  return Object(core_["jsx"])(_StyledDiv, {
    className: "page-layout"
  }, props.children);
};

/* harmony default export */ var CommonUI_Layout = (Layout);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./store/modules/postUI.ts
var postUI = __webpack_require__("wOzx");

// EXTERNAL MODULE: ./store/modules/post/index.ts
var post = __webpack_require__("3hMM");

// EXTERNAL MODULE: ./store/modules/post/reducers.ts + 1 modules
var reducers = __webpack_require__("IAdA");

// CONCATENATED MODULE: ./store/modules/index.ts






const rootReducer = Object(external_redux_["combineReducers"])({
  postUI: postUI["b" /* default */],
  post: reducers["a" /* default */],
  loginUI: loginUI["default"]
});
/* harmony default export */ var modules = (rootReducer);
function* rootSaga() {
  yield Object(effects_["all"])([Object(post["postSaga"])(), Object(post["updateSaga"])(), Object(post["getOnePostSaga"])(), Object(post["putSaga"])(), Object(post["deleteSaga"])()]);
}
// CONCATENATED MODULE: ./store/configureStore.js




const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

function configureStore(preloadedState, {
  isServer,
  req = null
}) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(modules, preloadedState, bindMiddleware([sagaMiddleware]));

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}

/* harmony default export */ var store_configureStore = (configureStore);
// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;








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
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    const tokenData = JSON.parse(sessionStorage.getItem("idToken"));
    setToken(tokenData);
  }, []);
  return _app_jsx(external_styled_components_["ThemeProvider"], {
    theme: {
      fontFamily: 'Noto Sans KR'
    }
  }, _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(CommonUI_Layout, {
    token: token
  }, _app_jsx(Component, pageProps))), _app_jsx(external_react_default.a.Fragment, null, _app_jsx(GlobalStyle, null)));
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

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_configureStore)(external_next_redux_saga_default()(MyApp2)));
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
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

/***/ "g/Tf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_POST; });
/* unused harmony export DELETE_POST_SUCCESS */
/* unused harmony export DELETE_POST_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_POST; });
/* unused harmony export EDIT_POST_SUCCESS */
/* unused harmony export EDIT_POST_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UPDATE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_POSTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_POSTS_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_POSTS_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return deletePostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getPostsListAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return postAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return putPostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getPostAsync; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
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

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "wOzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTagArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setInputValues; });
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








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


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
/* harmony default export */ __webpack_exports__["b"] = (post);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });