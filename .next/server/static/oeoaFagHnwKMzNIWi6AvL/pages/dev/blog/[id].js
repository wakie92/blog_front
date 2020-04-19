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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "20Af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pdgd");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tag = ({
  tagString
}) => __jsx(TagDiv, null, __jsx("span", null, tagString));

const TagDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tag__TagDiv",
  componentId: "sc-1h40048-0"
})(["border-radius:1.6rem;background-color:", ";font-weight:600;margin:0.5rem;font-size:1.4rem;padding:0.4rem 1rem;line-height:1.3;height:2rem;"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "a"].gray4);
/* harmony default export */ __webpack_exports__["a"] = (Tag);

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OJ2q");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

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

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

// import Routes from 'next-routes';
// const routes = new Routes();
// routes 
//   .add('about', 'about')
//   .add('post', 'dev/blog/:id')
//   .add('postEdit', 'dev/edit/:id')
//   .add('write', 'write')
// export default routes;
const routes = module.exports = __webpack_require__("90Kz")();

routes.add('index', '/').add('about', '/about').add('post', 'dev/blog/:id').add('postEdit', 'dev/edit/:id').add('write', 'write'); // export default routes;

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "CIHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Maybe = ({
  isVisible,
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isVisible && children);
};

/* harmony default export */ __webpack_exports__["a"] = (Maybe);

/***/ }),

/***/ "DHsr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export PATH */
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

/***/ "DaQf":
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "OJ2q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./store/modules/post/index.ts
var modules_post = __webpack_require__("3hMM");

// EXTERNAL MODULE: ./components/Maybe/Maybe.tsx
var Maybe = __webpack_require__("CIHJ");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./lib/styles/responsive.ts
var responsive = __webpack_require__("OM3Z");

// EXTERNAL MODULE: ./components/CommonUI/RenderMarkdownView.tsx + 2 modules
var RenderMarkdownView = __webpack_require__("zDZf");

// EXTERNAL MODULE: ./lib/styles/global.tsx
var global = __webpack_require__("pdgd");

// CONCATENATED MODULE: ./components/Posts/PostView/PostContent.tsx

var __jsx = external_react_default.a.createElement;





const PostContent = ({
  title,
  imgUrl,
  rawContent
}) => {
  return __jsx(Wrapper, null, __jsx("h1", null, title), __jsx("hr", null), __jsx("main", null, __jsx(Maybe["a" /* default */], {
    isVisible: imgUrl
  }, __jsx("img", {
    className: "main-img",
    src: imgUrl,
    alt: "\uB300\uD45C\uC774\uBBF8\uC9C0"
  })), __jsx(RenderMarkdownView["a" /* default */], {
    html: rawContent
  })));
};

/* harmony default export */ var PostView_PostContent = (PostContent);
const Wrapper = external_styled_components_default.a.article.withConfig({
  displayName: "PostContent__Wrapper",
  componentId: "vcz97n-0"
})(["width:100%;main{width:90%;margin:auto;display:flex;flex-direction:column;.main-img{margin:auto;padding-bottom:4rem;max-height:50rem;max-width:100%;}}hr{width:100%;border:1px solid ", ";margin:2rem 0;}"], global["a" /* colors */].gray5);
// CONCATENATED MODULE: ./components/CommonUI/Button.tsx
var Button_jsx = external_react_default.a.createElement;



const Button = ({
  type,
  children,
  size,
  bgColor,
  width,
  onClick
}) => Button_jsx(Button_Wrapper, {
  type: type,
  size: size,
  bgColor: bgColor,
  width: width,
  onClick: onClick
}, children);

const Button_Wrapper = external_styled_components_default.a.button.withConfig({
  displayName: "Button__Wrapper",
  componentId: "r6ywu2-0"
})(["background-color:", ";width:", ";", ";", ";", ";"], props => props.bgColor, props => props.width, props => props.size === 'small' && Object(external_styled_components_["css"])(["height:1.75rem;font-size:0.75rem;padding:0 0.875rem;"]), props => props.size === 'medium' && Object(external_styled_components_["css"])(["height:2.5rem;font-size:1rem;padding:0 1rem;"]), props => props.size === 'large' && Object(external_styled_components_["css"])(["height:3rem;font-size:1.125rem;padding:0 1.5rem;"]));
/* harmony default export */ var CommonUI_Button = (Button);
// EXTERNAL MODULE: ./lib/Utils/utils.ts
var utils = __webpack_require__("no1e");

// CONCATENATED MODULE: ./components/Posts/PostView/PostHeader.tsx

var PostHeader_jsx = external_react_default.a.createElement;






const PostHeader = ({
  date,
  isLogged,
  id,
  setEditMode,
  reqDeletePost
}) => {
  return PostHeader_jsx(PostHeader_Wrapper, {
    className: "reg-div"
  }, PostHeader_jsx("span", {
    className: "reg-date"
  }, Object(utils["b" /* formatDate */])(date)), PostHeader_jsx(Maybe["a" /* default */], {
    isVisible: isLogged
  }, PostHeader_jsx("div", {
    className: ""
  }, PostHeader_jsx(CommonUI_Button, {
    type: "button",
    size: "medium",
    bgColor: global["a" /* colors */].gray1,
    onClick: () => setEditMode(true)
  }, "\uC218\uC815"), PostHeader_jsx(CommonUI_Button, {
    type: "button",
    size: "medium",
    bgColor: global["a" /* colors */].gray1,
    onClick: () => reqDeletePost()
  }, "\uC0AD\uC81C"))));
};

/* harmony default export */ var PostView_PostHeader = (PostHeader);
const PostHeader_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PostHeader__Wrapper",
  componentId: "sc-2ktw59-0"
})(["display:flex;justify-content:space-between;align-items:center;button{font-family:inherit;}.reg-date{color:", ";}"], global["a" /* colors */].gray5);
// CONCATENATED MODULE: ./components/Posts/PostView/index.ts



// CONCATENATED MODULE: ./components/Posts/PostView/PostView.tsx

var PostView_jsx = external_react_default.a.createElement;



function PostView({
  postData,
  isLogged,
  setEditMode,
  editMode,
  reqDeletePost
}) {
  const {
    loading
  } = postData;
  const {
    date,
    title,
    imgUrl,
    rawContent,
    id
  } = postData.data.res;
  if (loading) return null;
  return PostView_jsx(Layout, null, PostView_jsx("div", {
    className: "wrapper"
  }, PostView_jsx(PostView_PostHeader, {
    date: date,
    isLogged: isLogged,
    id: id,
    setEditMode: setEditMode,
    reqDeletePost: reqDeletePost
  }), PostView_jsx(PostView_PostContent, {
    title: title,
    imgUrl: imgUrl,
    rawContent: rawContent
  })));
}
const Layout = external_styled_components_default.a.div.withConfig({
  displayName: "PostView__Layout",
  componentId: "sc-1sxi1s2-0"
})(["width:calc(100% - 18rem);margin:auto;min-height:70rem;padding:2rem;margin-top:20rem;@media screen and (max-width:", "){width:calc(100% - 4rem);}"], responsive["a" /* breakpoints */].large);
// EXTERNAL MODULE: ./components/CommonUI/Footer.tsx
var Footer = __webpack_require__("WoIR");

// EXTERNAL MODULE: ./containers/Header/HeaderContainer.tsx + 2 modules
var HeaderContainer = __webpack_require__("y6hs");

// CONCATENATED MODULE: ./containers/BlogPost/BlogPostContainer.tsx

var BlogPostContainer_jsx = external_react_default.a.createElement;








const BlogPostContainer = ({
  editMode,
  setEditMode
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    postData,
    isLogged
  } = Object(external_react_redux_["useSelector"])(state => ({
    postData: state.post.post,
    isLogged: state.loginUI.isLogged
  }));
  const router = Object(router_["useRouter"])();
  const reqDeletePost = Object(external_react_["useCallback"])(() => {
    try {
      dispatch(modules_post["deletePostAsync"].request(postData.data.resId)); // router ? Link .. ssr제대로 파악해서 routing

      router.back();
    } catch (e) {
      throw e;
    }
  }, [dispatch]);
  return BlogPostContainer_jsx(external_react_default.a.Fragment, null, BlogPostContainer_jsx(HeaderContainer["a" /* default */], null), BlogPostContainer_jsx(PostView, {
    isLogged: isLogged,
    reqDeletePost: reqDeletePost,
    postData: postData,
    editMode: editMode,
    setEditMode: setEditMode
  }), BlogPostContainer_jsx(Footer["a" /* default */], null));
};

/* harmony default export */ var BlogPost_BlogPostContainer = (BlogPostContainer);
// EXTERNAL MODULE: ./components/Write/index.ts + 3 modules
var Write = __webpack_require__("TwHs");

// EXTERNAL MODULE: ./store/modules/postUI.ts
var postUI = __webpack_require__("wOzx");

// EXTERNAL MODULE: ./containers/Common/EditorHeaderContainer.tsx + 4 modules
var EditorHeaderContainer = __webpack_require__("TDwW");

// EXTERNAL MODULE: ./lib/Routes/Routes.ts
var Routes = __webpack_require__("DHsr");

// CONCATENATED MODULE: ./containers/Edit/EditContainer.tsx
var EditContainer_jsx = external_react_default.a.createElement;











const EditContainer = ({
  editMode
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    postWrite,
    post
  } = Object(external_react_redux_["useSelector"])(state => ({
    postWrite: state.postUI.postWrite,
    post: state.post.post
  }));
  const router = Object(router_["useRouter"])();
  const mdRef = Object(external_react_["useRef"])();
  const handleChange = Object(external_react_["useCallback"])(e => {
    const {
      value,
      name
    } = e.target;
    dispatch(Object(postUI["c" /* getValue */])({
      name,
      value
    }));
  }, [dispatch]);
  const handleConv = Object(external_react_["useCallback"])(html => {
    dispatch(Object(postUI["c" /* getValue */])({
      name: 'mdValue',
      value: html
    }));
  }, [dispatch]);
  const onUpload = Object(external_react_["useCallback"])(() => {
    const {
      title,
      inputValue,
      mdValue,
      imgUrl,
      subTitle,
      tagArr
    } = postWrite;
    const {
      res,
      resId
    } = post.data;
    const uploadDate = new Date().toISOString();
    const withoutExp = Object(utils["d" /* removeExp */])(inputValue);
    const dataForUpload = {
      title: title,
      rawContent: inputValue,
      content: withoutExp,
      contentMd: mdValue,
      date: uploadDate,
      imgUrl: imgUrl,
      id: res.id,
      subTitle: subTitle,
      tagArr: tagArr
    };
    dispatch(modules_post["putPostAsync"].request({
      post: dataForUpload,
      id: resId
    }));
    router.push(Routes["a" /* ROUTES */].home, Routes["a" /* ROUTES */].home, {
      shallow: true
    });
  }, [dispatch, postWrite]);
  Object(external_react_["useEffect"])(() => {
    mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  }, [postWrite.inputValue]);
  Object(external_react_["useEffect"])(() => {
    const {
      rawContent,
      contentMd,
      imgUrl,
      title,
      subTitle,
      tagArr
    } = post.data.res;
    dispatch(Object(postUI["e" /* setInputValues */])({
      title,
      inputValue: rawContent,
      mdValue: contentMd,
      imgUrl,
      subTitle,
      tagArr,
      tag: ''
    }));
    return () => {
      dispatch(Object(postUI["d" /* resetInputValue */])());
    };
  }, []);
  return EditContainer_jsx(external_react_default.a.Fragment, null, EditContainer_jsx(EditBox, null, EditContainer_jsx(EditPart, null, EditContainer_jsx(EditorHeaderContainer["a" /* default */], {
    postWrite: postWrite,
    onChange: handleChange,
    onUpload: onUpload
  }), EditContainer_jsx(Write["a" /* Editor */], {
    inputValue: postWrite.inputValue,
    onChange: handleChange
  })), EditContainer_jsx(Write["c" /* Preview */], {
    inputValue: postWrite.inputValue,
    mdRef: mdRef,
    onChange: handleConv
  })));
};

/* harmony default export */ var Edit_EditContainer = (EditContainer);
const EditBox = external_styled_components_default.a.div.withConfig({
  displayName: "EditContainer__EditBox",
  componentId: "zobh5v-0"
})(["display:flex;height:94rem;justify-content:space-between;"]);
const EditPart = external_styled_components_default.a.div.withConfig({
  displayName: "EditContainer__EditPart",
  componentId: "zobh5v-1"
})(["width:calc(50% - 1.6rem);"]);
// CONCATENATED MODULE: ./pages/dev/blog/[id].tsx

var _id_jsx = external_react_default.a.createElement;








const _id_post = ({}) => {
  const {
    0: editMode,
    1: setEditMode
  } = Object(external_react_["useState"])(false);
  const {
    postData
  } = Object(external_react_redux_["useSelector"])(state => ({
    postData: state.post.post
  }));
  const {
    data
  } = postData;
  return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(head_default.a, null, _id_jsx("title", null, data.res.title), _id_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), _id_jsx(Maybe["a" /* default */], {
    isVisible: editMode
  }, _id_jsx(Edit_EditContainer, {
    editMode: editMode
  })), _id_jsx(Maybe["a" /* default */], {
    isVisible: !editMode
  }, _id_jsx(BlogPost_BlogPostContainer, {
    editMode: editMode,
    setEditMode: setEditMode
  })));
};

_id_post.getInitialProps = async ({
  store,
  isServer,
  query
}) => {
  const {
    id
  } = query;

  if (isServer) {
    await store.dispatch(modules_post["getPostAsync"].request(id));
  }

  return {};
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (_id_post);

/***/ }),

/***/ "OM3Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breakpoints; });
const breakpoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '576px',
  xsmall: '360px'
};

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "TDwW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/modules/postUI.ts
var postUI = __webpack_require__("wOzx");

// EXTERNAL MODULE: ./components/Write/index.ts + 3 modules
var Write = __webpack_require__("TwHs");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./lib/styles/global.tsx
var global = __webpack_require__("pdgd");

// CONCATENATED MODULE: ./components/Write/SubTItleInput.tsx

var __jsx = external_react_default.a.createElement;



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

/* harmony default export */ var SubTItleInput = (SubTitleInput);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SubTItleInput__Wrapper",
  componentId: "sc-2il8va-0"
})(["width:100%;height:4rem;background-color:", ";input{width:calc(100% - 1.6rem);height:calc(100% - 1.6rem);background-color:inherit;padding:0.8rem;font-size:2rem;}"], global["a" /* colors */].gray5);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: ./components/CommonUI/Tag.tsx
var Tag = __webpack_require__("20Af");

// CONCATENATED MODULE: ./components/Write/TagAndImg.tsx

var TagAndImg_jsx = external_react_default.a.createElement;




const TagAndImg = ({
  reqGetImgUrl,
  tag,
  tagArr,
  onChange,
  onAddTag
}) => {
  return TagAndImg_jsx(TagAndImg_Wrapper, null, tagArr.map((tagEle, index) => TagAndImg_jsx(Tag["a" /* default */], {
    key: `${tagEle}_${index}`,
    tagString: tagEle
  })), TagAndImg_jsx("input", {
    className: "tag-input",
    placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694",
    name: "tag",
    value: tag,
    onChange: onChange,
    onKeyUp: onAddTag
  }), TagAndImg_jsx("input", {
    type: "file",
    className: "img-upload",
    id: "img-upload",
    onChange: reqGetImgUrl
  }), TagAndImg_jsx("label", {
    htmlFor: "img-upload"
  }, TagAndImg_jsx(fi_["FiImage"], {
    className: "svg-icon"
  })));
};

const TagAndImg_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TagAndImg__Wrapper",
  componentId: "sc-1dldmk8-0"
})(["width:100%;height:5rem;display:flex;position:relative;.tag-input{height:4rem;padding:0.5rem;font-size:2rem;}.img-upload{display:none;}.svg-icon{position:absolute;right:0rem;font-size:3rem;padding-top:1rem;padding-left:1rem;padding-right:1.8rem;cursor:pointer;}"]);
/* harmony default export */ var Write_TagAndImg = (TagAndImg);
// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__("DaQf");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);

// CONCATENATED MODULE: ./configs/awsconfig.ts
const AWSConfig = {
  albumBucketName: 'blog-oscar',
  bucketRegion: 'ap-northeast-2',
  IdentityPoolId: 'ap-northeast-2:df63c109-29c3-46e1-8598-a4693415589d'
};
// CONCATENATED MODULE: ./lib/Utils/S3.ts


const {
  albumBucketName,
  bucketRegion,
  IdentityPoolId
} = AWSConfig;
const paramKey = 'blog-oscar/images/';
external_aws_sdk_default.a.config.region = bucketRegion; // 리전

external_aws_sdk_default.a.config.credentials = new external_aws_sdk_default.a.CognitoIdentityCredentials({
  IdentityPoolId: IdentityPoolId
});
external_aws_sdk_default.a.config.update({
  region: bucketRegion,
  credentials: new external_aws_sdk_default.a.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});
const addPhoto = async e => {
  const file = e.target.files[0];
  const upload = new external_aws_sdk_default.a.S3.ManagedUpload({
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
// CONCATENATED MODULE: ./containers/Common/EditorHeaderContainer.tsx

var EditorHeaderContainer_jsx = external_react_default.a.createElement;








const EditorHeaderContainer = ({
  onChange,
  postWrite,
  onUpload
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const handleTags = Object(external_react_["useCallback"])(e => {
    if (e.keyCode === 188 && postWrite.tag !== ',') {
      dispatch(Object(postUI["a" /* addTagArr */])());
    }
  }, [dispatch, postWrite.tag]);
  const reqImgUpload = Object(external_react_["useCallback"])(async e => {
    const bucketData = await addPhoto(e);

    if (typeof bucketData === 'string') {
      dispatch(Object(postUI["c" /* getValue */])({
        name: 'imgUrl',
        value: bucketData
      }));
    }
  }, [dispatch]);
  const reqGetImgUrl = Object(external_react_["useCallback"])(async e => {
    const bucketData = await addPhoto(e);

    if (typeof bucketData === 'string') {
      const imgMarkdown = `![](${bucketData})`;
      dispatch(Object(postUI["c" /* getValue */])({
        name: 'inputValue',
        value: imgMarkdown
      }));
    }
  }, [dispatch]);
  return EditorHeaderContainer_jsx(external_react_default.a.Fragment, null, EditorHeaderContainer_jsx(Write["b" /* Head */], {
    onUpload: onUpload,
    postWrite: postWrite,
    onChange: onChange,
    reqImgUpload: reqImgUpload
  }), EditorHeaderContainer_jsx(SubTItleInput, {
    subTitle: postWrite.subTitle,
    onChange: onChange
  }), EditorHeaderContainer_jsx(Write_TagAndImg, {
    reqGetImgUrl: reqGetImgUrl,
    tag: postWrite.tag,
    tagArr: postWrite.tagArr,
    onChange: onChange,
    onAddTag: handleTags
  }));
};

/* harmony default export */ var Common_EditorHeaderContainer = __webpack_exports__["a"] = (EditorHeaderContainer);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TwHs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./lib/styles/global.tsx
var global = __webpack_require__("pdgd");

// CONCATENATED MODULE: ./components/Write/Editor.tsx
var __jsx = external_react_default.a.createElement;



/* harmony default export */ var Editor = (external_react_default.a.memo(function Editor({
  inputValue,
  onChange
}) {
  return __jsx(TextArea, {
    onChange: onChange,
    value: inputValue,
    name: "inputValue"
  });
}, (preProps, nextProps) => preProps.inputValue === nextProps.inputValue));
const TextArea = external_styled_components_default.a.textarea.withConfig({
  displayName: "Editor__TextArea",
  componentId: "sc-1unxyh5-0"
})(["width:calc(100% - 1.6rem);height:calc(100% - 1.6rem);font-size:1.6rem;padding:0.8rem;margin-right:1px;background-color:", ";color:#fff;"], global["a" /* colors */].gray9);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// CONCATENATED MODULE: ./components/Write/Head.tsx
var Head_jsx = external_react_default.a.createElement;




/* harmony default export */ var Write_Head = (external_react_default.a.memo(function Head({
  reqImgUpload,
  postWrite,
  onUpload,
  onChange
}) {
  const backLink = () => {
    history.back();
  };

  return Head_jsx(Title, null, Head_jsx(fi_["FiArrowLeft"], {
    onClick: backLink,
    className: "svg-icon"
  }), Head_jsx("input", {
    placeholder: "\uC81C\uBAA9",
    name: "title",
    onChange: onChange,
    value: postWrite.title
  }), Head_jsx("input", {
    type: "file",
    className: "file-upload",
    id: "file-upload",
    onChange: reqImgUpload
  }), Head_jsx("label", {
    htmlFor: "file-upload"
  }, Head_jsx(fi_["FiUpload"], {
    className: "svg-icon"
  })), Head_jsx("button", {
    type: "button",
    onClick: onUpload
  }, "\uC791\uC131\uD558\uAE30"));
}));
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "Head__Title",
  componentId: "io0ez6-0"
})(["width:100%;background-color:", ";height:7rem;button{width:8rem;height:3.4rem;margin-top:1.8rem;margin-left:1rem;background-color:", ";color:", ";font-size:1.6rem;border-radius:4px;border:2px solid ", ";}.file-upload{display:none;}.svg-icon{color:#fff;font-size:3rem;padding-top:2rem;padding-left:1rem;padding-right:1rem;cursor:pointer;}input{background-color:", ";width:calc(100% - 22rem);height:6rem;padding:0.5rem;font-size:3rem;color:#fff;}"], global["a" /* colors */].defaultBlack, global["a" /* colors */].gray1, global["a" /* colors */].defaultBlack, global["a" /* colors */].gray1, global["a" /* colors */].defaultBlack);
// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__("4ugE");
var external_showdown_default = /*#__PURE__*/__webpack_require__.n(external_showdown_);

// EXTERNAL MODULE: ./lib/styles/githubMarkdown.css
var githubMarkdown = __webpack_require__("hrt+");

// EXTERNAL MODULE: ./components/CommonUI/RenderMarkdownView.tsx + 2 modules
var RenderMarkdownView = __webpack_require__("zDZf");

// CONCATENATED MODULE: ./components/Write/Preview.tsx

var Preview_jsx = external_react_default.a.createElement;





function Preview({
  inputValue,
  mdRef,
  onChange
}) {
  const converter = new external_showdown_default.a.Converter();
  const html = converter.makeHtml(inputValue);
  Object(external_react_["useEffect"])(() => {
    onChange(html);
  }, [html]);
  return Preview_jsx(external_react_default.a.Fragment, null, Preview_jsx(Wrapper, {
    ref: mdRef
  }, Preview_jsx(RenderMarkdownView["a" /* default */], {
    html: inputValue
  })));
}
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Preview__Wrapper",
  componentId: "sc-5qj3yb-0"
})(["padding:3rem 1rem;width:calc(50% - 2rem);background-color:white;overflow-y:scroll;word-break:break-all;white-space:normal;margin-left:1px;line-height:1.4;"]);
// CONCATENATED MODULE: ./components/Write/index.ts
/* concated harmony reexport Editor */__webpack_require__.d(__webpack_exports__, "a", function() { return Editor; });
/* concated harmony reexport Head */__webpack_require__.d(__webpack_exports__, "b", function() { return Write_Head; });
/* concated harmony reexport Preview */__webpack_require__.d(__webpack_exports__, "c", function() { return Preview; });




/***/ }),

/***/ "WoIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx(FooterEle, null);
};

const FooterEle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterEle",
  componentId: "f7jz8d-0"
})(["width:100%;height:10rem;"]);
/* harmony default export */ __webpack_exports__["a"] = (Footer);

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "hrt+":
/***/ (function(module, exports) {



/***/ }),

/***/ "i0Yl":
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nGqw":
/***/ (function(module, exports) {



/***/ }),

/***/ "no1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* unused harmony export setItem */
/* unused harmony export getItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeExp; });
/* unused harmony export logoutFn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginEmail; });
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
const checkUser = async () => {
  const user = await _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].auth().currentUser;
  return user;
};
const loginEmail = (email, password) => {
  const result = _configs_init_firebase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].auth().signInWithEmailAndPassword(email, password).then(res => {
    const token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(res.user);

    sessionStorage.setItem("idToken", token);
    return res;
  }).catch(err => console.log(err));
  return result;
};

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pdgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
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

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6hs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./lib/Routes/Routes.ts
var Routes = __webpack_require__("DHsr");

// EXTERNAL MODULE: ./lib/styles/global.tsx
var global = __webpack_require__("pdgd");

// EXTERNAL MODULE: ./lib/styles/responsive.ts
var responsive = __webpack_require__("OM3Z");

// CONCATENATED MODULE: ./components/CommonUI/Hamburger.tsx

var __jsx = external_react_default.a.createElement;




const Hamburger = ({
  toggle,
  onToggle
}) => {
  return __jsx(BurgerIcon, {
    colors: global["a" /* colors */],
    breakpoints: responsive["a" /* breakpoints */],
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

/* harmony default export */ var CommonUI_Hamburger = (Hamburger);
const BurgerIcon = external_styled_components_default.a.button.withConfig({
  displayName: "Hamburger__BurgerIcon",
  componentId: "d3bkbg-0"
})(["position:fixed;top:2rem;right:5rem;width:5rem;height:5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";opacity:0.8;z-index:900;cursor:pointer;&:hover{background-color:", ";}transition:all 500ms;transform:", ";background-color:", ";.burger-line{", ";transition:ease-in 500ms;background-color:white;}@media screen and (max-width:", "){transform:unset;right:2rem;}"], global["a" /* colors */].defaultBlack, global["a" /* colors */].violet9, props => props.toggle ? 'translateX(-35rem) rotate(180deg)' : 'translateX(0rem)', props => props.toggle && global["a" /* colors */].violet9, props => !props.toggle ? Object(external_styled_components_["css"])(["width:3rem;height:0.4rem;margin:0.2rem 0;"]) : Object(external_styled_components_["css"])(["width:3rem;height:0.15rem;margin:0;"]), responsive["a" /* breakpoints */].small);
// EXTERNAL MODULE: ./components/Maybe/Maybe.tsx
var Maybe = __webpack_require__("CIHJ");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./components/CommonUI/Header.tsx

var Header_jsx = external_react_default.a.createElement;








const Header = ({
  handleToggle,
  toggle,
  isLogged
}) => {
  const {
    Link
  } = routes_default.a;
  return Header_jsx(external_react_default.a.Fragment, null, Header_jsx(Wrapper, {
    aColor: global["a" /* colors */].violet9,
    breakpoints: responsive["a" /* breakpoints */]
  }, Header_jsx("div", {
    className: "nav-box"
  }, Header_jsx("a", {
    href: Routes["a" /* ROUTES */].home,
    className: "blog-name"
  }, "\uAC74\uB9DD\uC99D \uAC1C\uBC1C\uC790 \uAE30\uB85D\uC9C0"), Header_jsx(SmallNav, {
    toggle: toggle
  }, Header_jsx("a", {
    href: Routes["a" /* ROUTES */].about
  }, Header_jsx("span", null, "About"))), Header_jsx(CommonUI_Hamburger, {
    toggle: toggle,
    onToggle: handleToggle
  }), Header_jsx("div", {
    className: "nav"
  }, Header_jsx(Maybe["a" /* default */], {
    isVisible: isLogged
  }, Header_jsx(external_react_default.a.Fragment, null, Header_jsx("a", {
    href: Routes["a" /* ROUTES */].write
  }, "write")))))));
};

const Wrapper = external_styled_components_default.a.header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1q77k7z-0"
})(["width:calc(100% - 10rem);height:6rem;padding-top:10rem;margin:auto;border-bottom:1px solid #ced4da;display:flex;align-items:center;@media screen and (max-width:", "){width:100%;}@media screen and (max-width:", "){padding-top:2rem;}.nav-box{width:100%;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:", "){width:100%;padding:0 2rem;}.blog-name{font-size:2rem;font-weight:900;}.nav{display:flex;justify-content:flex-end;a{font-size:2rem;cursor:pointer;color:", ";& + a{margin-left:1rem;}}@media screen and (max-width:", "){display:none;}}}"], responsive["a" /* breakpoints */].medium, responsive["a" /* breakpoints */].small, responsive["a" /* breakpoints */].medium, props => props.aColor, responsive["a" /* breakpoints */].small);
const NavRouter = external_styled_components_default.a.div.withConfig({
  displayName: "Header__NavRouter",
  componentId: "sc-1q77k7z-1"
})([""]);
const SmallNav = external_styled_components_default.a.aside.withConfig({
  displayName: "Header__SmallNav",
  componentId: "sc-1q77k7z-2"
})(["display:flex;flex-direction:column;visibility:", ";position:fixed;background-color:black;opacity:0.8;width:30rem;height:100%;right:0;top:0;z-index:888;transition:all 500ms;transform:", ";padding-top:20rem;padding-left:5rem;a{color:white !important;width:80%;.bolg-category{font-size:2rem;padding-left:3rem;}}font-size:3rem;@media screen and (max-width:", "){transform:", ";width:calc(100% - 5rem);}"], props => props.toggle ? 'visible' : 'hidden', props => props.toggle ? 'translateX(0rem)' : 'translateX(35rem)', responsive["a" /* breakpoints */].small, props => props.toggle ? 'translateX()' : 'translateX(100%)');
/* harmony default export */ var CommonUI_Header = (Header);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./containers/Header/HeaderContainer.tsx

var HeaderContainer_jsx = external_react_default.a.createElement;





const HeaderContainer = () => {
  const {
    isLogged
  } = Object(external_react_redux_["useSelector"])(state => ({
    isLogged: state.loginUI.isLogged
  }));
  const router = Object(router_["useRouter"])();
  const {
    0: toggle,
    1: setToggle
  } = Object(external_react_["useState"])(false);
  const handleToggle = Object(external_react_["useCallback"])(() => {
    setToggle(!toggle);
  }, [toggle]);
  return HeaderContainer_jsx(CommonUI_Header, {
    isLogged: isLogged,
    toggle: toggle,
    handleToggle: handleToggle
  });
};

/* harmony default export */ var Header_HeaderContainer = __webpack_exports__["a"] = (HeaderContainer);

/***/ }),

/***/ "zDZf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);

// CONCATENATED MODULE: ./lib/styles/AtomOneDark.ts
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
/* harmony default export */ var AtomOneDark = (atomOneDark);
// CONCATENATED MODULE: ./components/CommonUI/CodeHighlighter.tsx

var __jsx = external_react_default.a.createElement;



const CodeHighlighter = ({
  value,
  language
}) => {
  return __jsx(external_react_syntax_highlighter_default.a, {
    language: language,
    style: AtomOneDark
  }, value === undefined ? '' : value);
};

/* harmony default export */ var CommonUI_CodeHighlighter = (CodeHighlighter);
// EXTERNAL MODULE: ./lib/styles/prism.css
var prism = __webpack_require__("nGqw");

// EXTERNAL MODULE: ./lib/styles/githubMarkdown.css
var githubMarkdown = __webpack_require__("hrt+");

// CONCATENATED MODULE: ./components/CommonUI/RenderMarkdownView.tsx

var RenderMarkdownView_jsx = external_react_default.a.createElement;





const RenderMarkdownView = ({
  html
}) => {
  return RenderMarkdownView_jsx("div", {
    className: "markdown-body"
  }, RenderMarkdownView_jsx(external_react_markdown_default.a, {
    source: html,
    skipHtml: false,
    escapeHtml: false,
    renderers: {
      code: CommonUI_CodeHighlighter
    }
  }));
};

RenderMarkdownView.defaultProps = {
  html: ''
};
/* harmony default export */ var CommonUI_RenderMarkdownView = __webpack_exports__["a"] = (RenderMarkdownView);

/***/ })

/******/ });