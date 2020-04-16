webpackHotUpdate("static\\development\\pages\\options.js",{

/***/ "./containers/Write/WriteContainerTest.tsx":
/*!*************************************************!*\
  !*** ./containers/Write/WriteContainerTest.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var WriteContainerTest = function WriteContainerTest(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const mdRef = useRef<HTMLDivElement>();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return {
      postWrite: state.postUI.postWrite,
      postsList: state.post.postsList
    };
  }),
      postWrite = _useSelector.postWrite,
      postsList = _useSelector.postsList; // const handleChange = useCallback(
  // 	(e: React.ChangeEvent<any>) => {
  // 		const { value, name } = e.target;
  // 		dispatch(getValue({ name, value }));
  // 	},
  // 	[ dispatch ]
  // );
  // const handleConv = useCallback(
  // 	(html: string) => {
  // 		dispatch(getValue({ name: 'mdValue', value: html }));
  // 	},
  // 	[ dispatch ]
  // );
  // const onUpload = useCallback(async () => {
  // 	const uploadDate = new Date().toISOString();
  // 	const { title, inputValue, mdValue, imgUrl, subTitle, tagArr} = postWrite
  // 	const withoutExp = removeExp(inputValue);
  // 	const dataForUpload: Post = {
  // 		title: title,
  // 		rawContent: inputValue,
  // 		content: withoutExp,
  // 		contentMd: mdValue,
  // 		date: uploadDate,
  // 		imgUrl: imgUrl,
  // 		id: postsList.data[0].id + 1,
  //      subTitle: subTitle,
  //      tagArr: tagArr,
  // 	};
  // 	try {
  // 		dispatch(postAsync.request(dataForUpload));
  // 		Router.push(ROUTES.home, ROUTES.home, { shallow: true });
  // 	} catch (err) {
  // 		throw err;
  // 	}
  // },[ dispatch, postWrite ]
  // );
  // useEffect(
  // 	() => {
  // 		mdRef.current.scrollTo(0, mdRef.current.scrollHeight);
  // 	},
  // 	[ postWrite.inputValue ]
  // );
  // useEffect(() => {
  // 	return () => {
  // 		dispatch(resetInputValue());
  // 		checkUser();
  // 	};
  // }, []);


  return __jsx(EditBox, null, __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_4__["Preview"], {
    inputValue: postWrite.inputValue,
    mdRef: mdRef,
    onChange: handleConv
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteContainerTest);
var EditBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "WriteContainerTest__EditBox",
  componentId: "sc-1ww7q8q-0"
})(["display:flex;height:94rem;justify-content:space-between;"]);
var EditPart = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "WriteContainerTest__EditPart",
  componentId: "sc-1ww7q8q-1"
})(["width:calc(50% - 1.6rem);"]);

/***/ })

})
//# sourceMappingURL=options.js.545ed1e0781b5d7886ee.hot-update.js.map