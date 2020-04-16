webpackHotUpdate("static\\development\\pages\\options.js",{

/***/ "./config/init-firebase.ts":
false,

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
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Write */ "./components/Write/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var WriteContainerTest = function WriteContainerTest(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref); // const dispatch = useDispatch();
  // const mdRef = useRef<HTMLDivElement>();
  // const { postWrite, postsList } = useSelector((state: RootState) => ({
  // 	postWrite: state.postUI.postWrite,
  //   postsList: state.post.postsList,
  // }));
  // const handleChange = useCallback(
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


  return __jsx(EditBox, null, __jsx(_components_Write__WEBPACK_IMPORTED_MODULE_3__["Preview"], {
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

/***/ }),

/***/ "./lib/Utils/asyncUtils.ts":
false,

/***/ "./lib/Utils/createAsyncSaga.ts":
false,

/***/ "./lib/Utils/utils.ts":
false,

/***/ "./lib/api/apis.ts":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/component/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/firestore/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/util/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
false,

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
false,

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
false,

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
false,

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
false,

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
false,

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
false,

/***/ "./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js":
false,

/***/ "./store/modules/post/actions.ts":
false,

/***/ "./store/modules/post/index.ts":
false,

/***/ "./store/modules/post/reducers.ts":
false,

/***/ "./store/modules/post/saga.ts":
false,

/***/ "./store/modules/post/types.ts":
false,

/***/ "./store/modules/postUI.ts":
false

})
//# sourceMappingURL=options.js.36a0ebfea392f74c3932.hot-update.js.map