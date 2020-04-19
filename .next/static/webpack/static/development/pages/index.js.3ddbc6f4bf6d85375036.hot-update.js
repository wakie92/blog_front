webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CommonUI/Hamburger.tsx":
/*!*******************************************!*\
  !*** ./components/CommonUI/Hamburger.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hamburger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Hamburger(_ref) {
  var toggle = _ref.toggle,
      onToggle = _ref.onToggle;
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
var BurgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Hamburger__BurgerIcon",
  componentId: "d3bkbg-0"
})(["position:fixed;top:2rem;right:5rem;width:5rem;height:5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";opacity:0.8;z-index:900;cursor:pointer;&:hover{background-color:", ";}transition:all 500ms;transform:", ";background-color:", ";.burger-line{", ";transition:ease-in 500ms;background-color:white;}@media screen and (max-width:", "){transform:unset;right:2rem;}"], _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].defaultBlack, _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9, function (props) {
  return props.toggle ? 'translateX(-35rem) rotate(180deg)' : 'translateX(0rem)';
}, function (props) {
  return props.toggle && _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__["colors"].violet9;
}, function (props) {
  return !props.toggle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.4rem;margin:0.2rem 0;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:0.15rem;margin:0;"]);
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].small);

/***/ }),

/***/ "./components/CommonUI/Header.tsx":
/*!****************************************!*\
  !*** ./components/CommonUI/Header.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");
/* harmony import */ var _lib_styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/styles/global */ "./lib/styles/global.tsx");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hamburger */ "./components/CommonUI/Hamburger.tsx");
/* harmony import */ var _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/styles/responsive */ "./lib/styles/responsive.ts");
/* harmony import */ var _Maybe_Maybe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Maybe/Maybe */ "./components/Maybe/Maybe.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Header = function Header(_ref) {
  var handleToggle = _ref.handleToggle,
      toggle = _ref.toggle,
      isLogged = _ref.isLogged,
      moveRouter = _ref.moveRouter;
  var Link = _routes__WEBPACK_IMPORTED_MODULE_7___default.a.Link;
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

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1q77k7z-0"
})(["width:calc(100% - 10rem);height:6rem;padding-top:10rem;margin:auto;border-bottom:1px solid #ced4da;display:flex;align-items:center;@media screen and (max-width:", "){width:100%;}@media screen and (max-width:", "){padding-top:2rem;}.nav-box{width:100%;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:", "){width:100%;padding:0 2rem;}.blog-name{font-size:2rem;font-weight:900;}.nav{display:flex;justify-content:flex-end;a{font-size:2rem;cursor:pointer;color:", ";& + a{margin-left:1rem;}}@media screen and (max-width:", "){display:none;}}}"], _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].medium, function (props) {
  return props.aColor;
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small);
var NavRouter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__NavRouter",
  componentId: "sc-1q77k7z-1"
})([""]);
var SmallNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Header__SmallNav",
  componentId: "sc-1q77k7z-2"
})(["display:flex;flex-direction:column;visibility:", ";position:fixed;background-color:black;opacity:0.8;width:30rem;height:100%;right:0;top:0;z-index:888;transition:all 500ms;transform:", ";padding-top:20rem;padding-left:5rem;a{color:white !important;width:80%;.bolg-category{font-size:2rem;padding-left:3rem;}}font-size:3rem;@media screen and (max-width:", "){transform:", ";width:calc(100% - 5rem);}"], function (props) {
  return props.toggle ? 'visible' : 'hidden';
}, function (props) {
  return props.toggle ? 'translateX(0rem)' : 'translateX(35rem)';
}, _lib_styles_responsive__WEBPACK_IMPORTED_MODULE_5__["breakpoints"].small, function (props) {
  return props.toggle ? 'translateX()' : 'translateX(100%)';
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/Header/HeaderContainer.tsx":
/*!***********************************************!*\
  !*** ./containers/Header/HeaderContainer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommonUI_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CommonUI/Header */ "./components/CommonUI/Header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var HeaderContainer = function HeaderContainer() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      isLogged: state.loginUI.isLogged
    };
  }),
      isLogged = _useSelector.isLogged;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var handleToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setToggle(!toggle);
  }, [toggle]);

  var moveRouter = function moveRouter() {
    router.push("".concat(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about), "".concat(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].about));
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

/***/ "./lib/Utils/utils.ts":
/*!****************************!*\
  !*** ./lib/Utils/utils.ts ***!
  \****************************/
/*! exports provided: formatDate, setItem, getItem, removeExp, loginPopup, logoutFn, checkUser, loginEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExp", function() { return removeExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPopup", function() { return loginPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFn", function() { return logoutFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginEmail", function() { return loginEmail; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/init-firebase */ "./configs/init-firebase.ts");




var formatDate = function formatDate(dateData) {
  var formatted = new Date(dateData);
  var year = formatted.getFullYear();
  var month = formatted.getMonth() + 1;
  var day = formatted.getDate();
  month = Number(month) < 10 ? "0".concat(month) : month;
  day = Number(day) < 10 ? "0".concat(day) : day;
  return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(day, "\uC77C");
};
var setItem = function setItem(key, obj) {
  return sessionStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(obj));
};
var getItem = function getItem(key) {
  return sessionStorage.getItem(JSON.parse(key));
};
var removeExp = function removeExp(str) {
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  if (regExp.test(str)) {
    var result = str.replace(regExp, '');
    return result;
  }

  return str;
};
var loginPopup = function loginPopup() {
  _configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithPopup(_configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__["provider"]).then(function (result) {
    var token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(result.credential.toJSON());

    sessionStorage.setItem("idToken", token);
    return result.user;
  })["catch"](function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // The email of the user's account used.

    var email = error.email; // The firebase.auth.AuthCredential type that was used.

    var credential = error.credential; // ...
  });
};
var logoutFn = function logoutFn() {
  _configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(function () {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  })["catch"](function (error) {// An error happened.
  });
};
var checkUser =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var user;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

          case 2:
            user = _context.sent;
            return _context.abrupt("return", user);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkUser() {
    return _ref.apply(this, arguments);
  };
}();
var loginEmail = function loginEmail(email, password) {
  var result = _configs_init_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(email, password).then(function (res) {
    var token = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(res.user);

    sessionStorage.setItem("idToken", token);
    return res;
  })["catch"](function (err) {
    return console.log(err);
  });
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _configs_init_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/init-firebase */ "./configs/init-firebase.ts");










function ownKeys(object, enumerableOnly) {
  var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object);

  if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) {
    var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object);

    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]);
      });
    } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) {
      _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source));
    } else {
      ownKeys(source).forEach(function (key) {
        _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key));
      });
    }
  }

  return target;
}


var db = Object(_configs_init_firebase__WEBPACK_IMPORTED_MODULE_9__["firebaseDB"])().firestore();
var blogDB = db.collection("blogDB");
var GetPostsList =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(cnt) {
    var query, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const user = firebase.auth().currentUser
            query = blogDB.where("id", "<=", cnt).orderBy("id", "desc");
            _context.next = 3;
            return query.get().then(function (querySnapshot) {
              return querySnapshot.docs.map(function (data) {
                var ele = _objectSpread({}, data.data(), {
                  id: data.id
                });

                return ele;
              });
            })["catch"](function (e) {
              return console.log(e);
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetPostsList(_x) {
    return _ref.apply(this, arguments);
  };
}();
var PutPost =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(_ref2) {
    var post, id, query, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            post = _ref2.post, id = _ref2.id;
            query = blogDB.doc(id);
            _context2.next = 4;
            return query.set(post).then(function (res) {
              return 'success';
            })["catch"](function (err) {
              return err;
            });

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function PutPost(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var PostUpdate =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(data) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return blogDB.add(data).then(function (res) {
              return res.id;
            })["catch"](function (err) {
              return err;
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function PostUpdate(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var GetPost =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(index) {
    var query, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = blogDB.doc(index);
            _context4.next = 3;
            return query.get().then(function (doc) {
              return {
                res: _objectSpread({}, doc.data(), {
                  id: doc.id
                }),
                resId: doc.id
              };
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function GetPost(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var DeletePost =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(id) {
    var query, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            query = blogDB.doc(id);
            _context5.next = 3;
            return query["delete"]().then(function () {
              return 'success';
            })["catch"](function (err) {
              return err;
            });

          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function DeletePost(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.3ddbc6f4bf6d85375036.hot-update.js.map