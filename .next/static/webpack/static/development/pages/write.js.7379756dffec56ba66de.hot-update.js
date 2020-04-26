webpackHotUpdate("static\\development\\pages\\write.js",{

/***/ "./pages/write.tsx":
/*!*************************!*\
  !*** ./pages/write.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_Write_WriteContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Write/WriteContainer */ "./containers/Write/WriteContainer.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/Utils/utils */ "./lib/Utils/utils.ts");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].main.withConfig({
  displayName: "write__Wrapper",
  componentId: "sc-1tn9w2k-0"
})(["width:100%;height:100rem;margin:auto;"]);

var Write = function Write(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  return __jsx(Wrapper, null, __jsx(_containers_Write_WriteContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Write.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var store, isServer, req, isToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref2.store, isServer = _ref2.isServer, req = _ref2.req;
            console.log(req);

            if (!req) {
              console.log('client side');
            }

            if (!isServer) {
              _context.next = 8;
              break;
            }

            isToken = Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_7__["checkLogin"])();
            console.log(isToken);
            _context.next = 8;
            return store.dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_6__["getPostsListAsync"].request(30));

          case 8:
            return _context.abrupt("return", {});

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.7379756dffec56ba66de.hot-update.js.map