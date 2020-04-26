webpackHotUpdate("static\\development\\pages\\write.js",{

/***/ "./containers/Write/WriteContainer.tsx":
/*!*********************************************!*\
  !*** ./containers/Write/WriteContainer.tsx ***!
  \*********************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");
/* harmony import */ var _store_modules_postUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/modules/postUI */ "./store/modules/postUI.ts");
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/Routes/Routes */ "./lib/Routes/Routes.ts");
/* harmony import */ var _lib_Utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/Utils/utils */ "./lib/Utils/utils.ts");
/* harmony import */ var _store_modules_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/modules/post */ "./store/modules/post/index.ts");
/* harmony import */ var _Common_EditorHeaderContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Common/EditorHeaderContainer */ "./containers/Common/EditorHeaderContainer.tsx");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var WriteContainer = function WriteContainer(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var mdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return {
      postWrite: state.postUI.postWrite,
      postsList: state.post.postsList
    };
  }),
      postWrite = _useSelector.postWrite,
      postsList = _useSelector.postsList;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
    dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_8__["getValue"])({
      name: name,
      value: value
    }));
  }, [dispatch]);
  var handleConv = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (html) {
    dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_8__["getValue"])({
      name: 'mdValue',
      value: html
    }));
  }, [dispatch]);
  var onUpload = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var uploadDate, title, inputValue, mdValue, imgUrl, subTitle, tagArr, withoutExp, dataForUpload;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            uploadDate = new Date().toISOString();
            title = postWrite.title, inputValue = postWrite.inputValue, mdValue = postWrite.mdValue, imgUrl = postWrite.imgUrl, subTitle = postWrite.subTitle, tagArr = postWrite.tagArr;
            withoutExp = Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_10__["removeExp"])(inputValue);
            dataForUpload = {
              title: title,
              rawContent: inputValue,
              content: withoutExp,
              contentMd: mdValue,
              date: uploadDate,
              imgUrl: imgUrl,
              id: postsList.data[0].id + 1,
              subTitle: subTitle,
              tagArr: tagArr
            };
            _context.prev = 4;
            dispatch(_store_modules_post__WEBPACK_IMPORTED_MODULE_11__["postAsync"].request(dataForUpload));
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].home, _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].home, {
              shallow: true
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            throw _context.t0;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 9]]);
  })), [dispatch, postWrite]);

  var checkLogin = function checkLogin() {
    var tokenObj = sessionStorage.getItem("idToken");
    var isToken = JSON.parse(tokenObj);
    return isToken;

    if (!isToken) {
      console.log(isToken);
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].home, _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].home, {
        shallow: true
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    checkLogin();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  }, [postWrite.inputValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      dispatch(Object(_store_modules_postUI__WEBPACK_IMPORTED_MODULE_8__["resetInputValue"])());
      Object(_lib_Utils_utils__WEBPACK_IMPORTED_MODULE_10__["checkUser"])();
    };
  }, []);
  return __jsx(EditBox, null, __jsx(EditPart, null, __jsx(_Common_EditorHeaderContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    postWrite: postWrite,
    onChange: handleChange,
    onUpload: onUpload
  }), __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_7__["Editor"], {
    inputValue: postWrite.inputValue,
    onChange: handleChange
  })), __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    inputValue: postWrite.inputValue,
    mdRef: mdRef,
    onChange: handleConv
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteContainer);
var EditBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "WriteContainer__EditBox",
  componentId: "sc-1ee72qh-0"
})(["display:flex;height:94rem;justify-content:space-between;"]);
var EditPart = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "WriteContainer__EditPart",
  componentId: "sc-1ee72qh-1"
})(["width:calc(50% - 1.6rem);"]);

/***/ })

})
//# sourceMappingURL=write.js.b60879785a1b0a1613c3.hot-update.js.map