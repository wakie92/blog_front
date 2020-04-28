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

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./store/modules/post/index.ts
var post = __webpack_require__("3hMM");

// EXTERNAL MODULE: ./containers/Header/HeaderContainer.tsx + 2 modules
var HeaderContainer = __webpack_require__("y6hs");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./lib/styles/responsive.ts
var responsive = __webpack_require__("OM3Z");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: ./lib/styles/global.tsx
var global = __webpack_require__("pdgd");

// EXTERNAL MODULE: ./lib/Utils/utils.ts
var utils = __webpack_require__("no1e");

// EXTERNAL MODULE: ./components/Maybe/Maybe.tsx
var Maybe = __webpack_require__("CIHJ");

// EXTERNAL MODULE: ./components/CommonUI/Tag.tsx
var Tag = __webpack_require__("20Af");

// CONCATENATED MODULE: ./components/Posts/Post/Tags.tsx

var __jsx = external_react_default.a.createElement;



const Tags = ({
  tagArr
}) => {
  return __jsx(Wrapper, null, tagArr.map((tagEle, index) => __jsx(Tag["a" /* default */], {
    key: `${tagEle}_${index}`,
    tagString: tagEle
  })));
};

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tags__Wrapper",
  componentId: "sc-1xipq7o-0"
})(["display:flex;flex-wrap:wrap;"]);
/* harmony default export */ var Post_Tags = (Tags);
// CONCATENATED MODULE: ./components/Posts/Post/Post.tsx


var Post_jsx = external_react_default.a.createElement;

/**@jsx jsx */






function Post({
  title,
  preContent,
  date,
  onClick,
  imgUrl,
  tagArr
}) {
  return Object(core_["jsx"])(WrpperProps, {
    onClick: onClick,
    imgUrl: imgUrl,
    dateColor: global["a" /* colors */].gray4
  }, Object(core_["jsx"])("div", {
    className: "image-container"
  }, Object(core_["jsx"])("img", {
    alt: "",
    className: "thumb-nail",
    src: imgUrl
  })), Object(core_["jsx"])("div", {
    className: "li-article"
  }, Object(core_["jsx"])("div", {
    className: "post-info"
  }, Object(core_["jsx"])("h3", {
    className: "title"
  }, title), Object(core_["jsx"])(Maybe["a" /* default */], {
    isVisible: tagArr
  }, Object(core_["jsx"])(Post_Tags, {
    tagArr: tagArr
  })), Object(core_["jsx"])("span", {
    className: "date"
  }, Object(utils["b" /* formatDate */])(date))), Object(core_["jsx"])("div", {
    className: "pre-content"
  }, preContent)));
}

var _StyledLi = external_styled_components_default.a.li.withConfig({
  displayName: "Post___StyledLi",
  componentId: "sc-1oyzum2-0"
})(["border-radius:4px;box-shadow:0px 4px 8px 8px rgba(0,0,0,0.05);cursor:pointer;.li-article{padding:1rem 1.5rem;height:", ";padding-top:2rem;.post-info{min-height:12rem;border-bottom:1px solid ", ";.title{max-height:11.5rem;overflow:hidden;word-break:break-all;}.tags{border-radius:1.6rem;background-color:#ccc;margin:0.5rem;padding:0.5rem;line-height:1.5;}.date{color:", ";font-size:1.5rem;margin-bottom:2rem;}}.pre-content{margin-top:1.5rem;color:#868e96;font-size:1.5rem;overflow:hidden;max-height:", ";line-height:1.9;word-break:break-word;}}.image-container{overflow:hidden;border-radius:4px 4px 0 0;height:18rem;cursor:pointer;display:", ";img{object-fit:cover;height:100%;width:100%;border-radius:4px 4px 0 0;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);&:hover{transform:scale(1.1);-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transition:0.3s;-webkit-transition:0.3s;-moz-transition:0.3s;-ms-transition:0.3s;-o-transition:0.3s;}}}@media screen and (max-width:", "){.image-container{height:15rem;}.li-article{height:22rem;}}@media screen and (max-width:", "){.image-container{display:none;}.li-article{height:27rem;}}@media screen and (max-width:", "){.li-article{height:20rem;.post-info{border-bottom:none;}.pre-content{max-height:6rem;}}}"], p => p._css, p => p._css3, p => p._css4, p => p._css5, p => p._css6, p => p._css7, p => p._css8, p => p._css9);

const WrpperProps = props => Object(core_["jsx"])(_StyledLi, {
  onClick: props.onClick,
  _css: props.imgUrl ? '29rem' : '47rem',
  _css2: props.imgUrl ? '12rem' : '13rem',
  _css3: props.dateColor,
  _css4: props.dateColor,
  _css5: props.imgUrl ? '15rem' : '32rem',
  _css6: !props.imgUrl && 'none',
  _css7: responsive["a" /* breakpoints */].xlarge,
  _css8: responsive["a" /* breakpoints */].large,
  _css9: responsive["a" /* breakpoints */].medium
}, props.children);
// CONCATENATED MODULE: ./containers/Post/PostContainer.tsx

var PostContainer_jsx = external_react_default.a.createElement;







const PostContainer = ({
  title,
  preContent,
  date,
  id,
  imgUrl,
  tagArr
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    pushRoute
  } = routes_default.a.Router;
  const reqGetPost = Object(external_react_["useCallback"])(id => {
    try {
      dispatch(post["getPostAsync"].request(id)); // router.push(`${ROUTES.devBlog}/${id}`, `${ROUTES.devBlog}/${id}`);

      pushRoute(`post`, {
        id
      });
    } catch (e) {
      throw e;
    }
  }, [dispatch]);
  return PostContainer_jsx(Post, {
    title: title,
    preContent: preContent,
    date: date,
    tagArr: tagArr,
    imgUrl: imgUrl,
    onClick: () => reqGetPost(id)
  });
};

/* harmony default export */ var Post_PostContainer = (PostContainer);
// CONCATENATED MODULE: ./components/Posts/Post/LoadingPost.tsx


var LoadingPost_jsx = external_react_default.a.createElement;

/**@jsx jsx */


function LoadingPost({}) {
  const loadingPostArr = new Array(30);
  const ele = Object(core_["jsx"])(LoadingPost_WrpperProps, {
    gray1: global["a" /* colors */].gray2
  }, Object(core_["jsx"])("div", {
    className: "image-container"
  }, Object(core_["jsx"])("div", {
    className: "thumb-nail"
  })), Object(core_["jsx"])("div", {
    className: "li-article"
  }, Object(core_["jsx"])("div", {
    className: "post-info"
  }, Object(core_["jsx"])("h3", {
    className: "title",
    style: {
      width: '100%'
    }
  }), Object(core_["jsx"])("h3", {
    className: "title",
    style: {
      width: '30%'
    }
  }), Object(core_["jsx"])("div", {
    className: "date-comment"
  }, Object(core_["jsx"])("span", {
    className: "date"
  }), Object(core_["jsx"])("div", {
    className: "commetns"
  }))), Object(core_["jsx"])("div", {
    className: "pre-content"
  }, Object(core_["jsx"])("div", {
    style: {
      width: '100%'
    }
  }), Object(core_["jsx"])("div", {
    style: {
      width: '100%'
    }
  }), Object(core_["jsx"])("div", {
    style: {
      width: '80%'
    }
  }))));

  for (let i = 0; i < 30; i += 1) {
    loadingPostArr.push(ele);
  }

  return Object(core_["jsx"])(external_react_default.a.Fragment, null, loadingPostArr);
}

var LoadingPost_StyledLi = external_styled_components_default.a.li.withConfig({
  displayName: "LoadingPost___StyledLi",
  componentId: "mpkgp2-0"
})(["border-radius:4px;box-shadow:0px 4px 8px 8px rgba(0,0,0,0.05);.li-article{padding:1rem 1.5rem;margin:1rem 0;height:18rem;.post-info{height:12rem;border-bottom:1px solid ", ";margin-bottom:1rem;.title{background-color:", ";height:2.5rem;border-radius:5px;margin-bottom:0.5rem;}.date-comment{display:flex;justify-content:space-between;.date{background-color:", ";width:60%;height:1.5rem;border-radius:5px;margin-bottom:2rem;margin-top:1.5rem;}}}.pre-content{div{height:1.5rem;background-color:", ";margin-bottom:0.5rem;border-radius:5px;}}}.image-container{overflow:hidden;border-radius:4px 4px 0 0;height:18rem;display:flex;justify-content:center;align-items:center;.thumb-nail{border-radius:4px;width:calc(100% - 1rem);height:calc(100% - 1rem);background-color:", ";}}"], p => p._css, p => p._css2, p => p._css3, p => p._css4, p => p._css5);

const LoadingPost_WrpperProps = props => Object(core_["jsx"])(LoadingPost_StyledLi, {
  _css: props.gray1,
  _css2: props.gray1,
  _css3: props.gray1,
  _css4: props.gray1,
  _css5: props.gray1
}, props.children);
// CONCATENATED MODULE: ./components/Posts/PostList/PostList.tsx

var PostList_jsx = external_react_default.a.createElement;



const PostList = ({
  postsList
}) => {
  const {
    data,
    loading
  } = postsList;
  if (loading) return PostList_jsx(LoadingPost, null);
  const list = data.map(item => PostList_jsx(Post_PostContainer, {
    title: item.title,
    preContent: item.subTitle,
    date: item.date,
    tagArr: item.tagArr,
    imgUrl: item.imgUrl,
    id: item.id,
    key: `card-${String(item.date)}-${item.title}`
  }));
  return PostList_jsx(external_react_default.a.Fragment, null, list);
};

/* harmony default export */ var PostList_PostList = (PostList);
// CONCATENATED MODULE: ./components/Posts/PostsLayout.tsx

var PostsLayout_jsx = external_react_default.a.createElement;




const PostsLayout = ({
  postsList
}) => PostsLayout_jsx(Layout, null, PostsLayout_jsx("ul", null, PostsLayout_jsx(PostList_PostList, {
  postsList: postsList
})));

/* harmony default export */ var Posts_PostsLayout = (PostsLayout);
const Layout = external_styled_components_default.a.main.withConfig({
  displayName: "PostsLayout__Layout",
  componentId: "b4of9u-0"
})(["width:90%;margin:3rem auto;ul,li,ol{list-style:none;}ul{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(50rem,auto);grid-gap:2.5rem;@media screen and (max-width:", "){grid-template-columns:repeat(3,1fr);grid-auto-rows:45rem;}@media screen and (max-width:", "){grid-template-columns:repeat(2,1fr);grid-auto-rows:30rem;}@media screen and (max-width:", "){grid-template-columns:repeat(1,1fr);grid-auto-rows:23rem;}}"], responsive["a" /* breakpoints */].xlarge, responsive["a" /* breakpoints */].large, responsive["a" /* breakpoints */].medium);
// CONCATENATED MODULE: ./components/Posts/index.ts

// CONCATENATED MODULE: ./containers/Post/PostListContainer.tsx

var PostListContainer_jsx = external_react_default.a.createElement;





const limitCnt = 30;

const PostListContainer = () => {
  const {
    postsList,
    isLogged,
    reqPost
  } = Object(external_react_redux_["useSelector"])(({
    post,
    loginUI
  }) => ({
    postsList: post.postsList,
    reqPost: post.reqPost,
    isLogged: loginUI.isLogged
  }));
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const reqGetPostsList = Object(external_react_["useCallback"])(() => {
    try {
      dispatch(post["getPostsListAsync"].request(limitCnt));
    } catch (e) {
      throw e;
    }
  }, [dispatch]);
  Object(external_react_["useEffect"])(() => {
    if (!postsList.data) {
      reqGetPostsList();
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (reqPost.data) {
      dispatch(post["postAsync"].success(null));
      reqGetPostsList();
    }
  }, [reqPost.data, dispatch]);
  return PostListContainer_jsx(Posts_PostsLayout, {
    postsList: postsList
  });
};

/* harmony default export */ var Post_PostListContainer = (PostListContainer);
// CONCATENATED MODULE: ./pages/index.tsx

var pages_jsx = external_react_default.a.createElement;




const Home = () => {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(HeaderContainer["a" /* default */], null), pages_jsx(Post_PostListContainer, null));
};

Home.getInitialProps = async ({
  store,
  isServer,
  req
}) => {
  if (isServer) {
    console.log('home');
    await store.dispatch(post["getPostsListAsync"].request(30));
  }

  return {};
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

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

/***/ })

/******/ });