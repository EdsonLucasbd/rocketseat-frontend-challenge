"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CategoryNavbar */ \"./src/components/CategoryNavbar/index.tsx\");\n/* harmony import */ var _components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageNavigationButton */ \"./src/components/PageNavigationButton/index.tsx\");\n/* harmony import */ var _components_ProductLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProductLayout */ \"./src/components/ProductLayout/index.tsx\");\n/* harmony import */ var _components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductSkeletonLoader */ \"./src/components/ProductSkeletonLoader/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { products , totalItems , pageInfo  } = param;\n    _s();\n    const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0;\n    const fakeProductsArray = Array.from({\n        length: 12\n    }, (_, index)=>index + 1);\n    const numberButtonsArray = Array.from({\n        length: Math.ceil(TOTAL_PRODUCTS / 12)\n    }, (_, index)=>index++);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const currentPage = router.asPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"E.L store\"\n                }, void 0, false, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_1__.CategoryNav, {}, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__.PageNavigationButton, {\n                        array: numberButtonsArray,\n                        currentPage: currentPage,\n                        hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                        hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    typeof products === \"undefined\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: fakeProductsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__.ProductSkeletonLoader, {}, item, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 47\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: products === null || products === void 0 ? void 0 : products.map((param)=>{\n                            let { node: product  } = param;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Suspense, {\n                                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__.ProductSkeletonLoader, {}, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_3__.ProductLayout, {\n                                    image: product === null || product === void 0 ? void 0 : product.images[0].url,\n                                    title: product === null || product === void 0 ? void 0 : product.name,\n                                    price: product === null || product === void 0 ? void 0 : product.price,\n                                    id: product === null || product === void 0 ? void 0 : product.id\n                                }, void 0, false, {\n                                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 23\n                                }, this)\n                            }, product === null || product === void 0 ? void 0 : product.id, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-[74px] -mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__.PageNavigationButton, {\n                            array: numberButtonsArray,\n                            currentPage: currentPage,\n                            hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                            hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDZTtBQUNkO0FBQ2dCO0FBSzlDO0FBQ1c7QUFDUDs7QUFFbEIsU0FBU08sS0FBSyxLQUEwRixFQUFFO1FBQTVGLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFQyxTQUFRLEVBQTBELEdBQTFGOztJQUMzQixNQUFNQyxpQkFBaUJILFNBQVNJLE1BQU0sR0FBRyxJQUFJSCxhQUFhLENBQUM7SUFDM0QsTUFBTUksb0JBQW9CQyxNQUFNQyxJQUFJLENBQUM7UUFBRUgsUUFBUTtJQUFHLEdBQUcsQ0FBQ0ksR0FBR0MsUUFBVUEsUUFBUTtJQUMzRSxNQUFNQyxxQkFBcUJKLE1BQU1DLElBQUksQ0FBQztRQUFFSCxRQUFRTyxLQUFLQyxJQUFJLENBQUNULGlCQUFrQjtJQUFJLEdBQUcsQ0FBQ0ssR0FBR0MsUUFBVUE7SUFDakcsTUFBTUksU0FBU2hCLHNEQUFTQTtJQUN4QixNQUFNaUIsY0FBY0QsT0FBT0UsTUFBTTtJQUVqQyxxQkFDRTs7MEJBQ0UsOERBQUNuQixrREFBSUE7MEJBQ0gsNEVBQUNvQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzFCLG1FQUFXQTs7Ozs7a0NBRVosOERBQUNDLGtGQUFvQkE7d0JBQ25CMEIsT0FBT1Q7d0JBQ1BJLGFBQWFBO3dCQUNiTSxTQUFTbEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVbUIsV0FBVzt3QkFDOUJDLGFBQWFwQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVxQixlQUFlOzs7Ozs7b0JBSXRDLE9BQU92QixhQUFhLDRCQUNsQiw4REFBQ2lCO3dCQUFJQyxXQUFVO2tDQUdYYixrQkFBa0JtQixHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDOUIsb0ZBQXFCQSxNQUFNOEI7Ozs7Ozs7Ozs2Q0FLNUQsOERBQUNSO3dCQUFJQyxXQUFVO2tDQUdYbEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVd0IsR0FBRyxDQUFDO2dDQUFDLEVBQUVFLE1BQU1DLFFBQU8sRUFBRTswQ0FDOUIscUVBQUM3QiwyQ0FBUUE7Z0NBQUM4Qix3QkFBVSw4REFBQ2pDLG9GQUFxQkE7MENBQ3hDLDRFQUFDRCxvRUFBYUE7b0NBQ1ptQyxLQUFLLEVBQUVGLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0csTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsR0FBRztvQ0FDN0JmLE9BQU9XLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ssSUFBSTtvQ0FDcEJDLE9BQU9OLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU00sS0FBSztvQ0FDckJDLElBQUlQLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU08sRUFBRTs7Ozs7OytCQUxpQ1Asb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTTyxFQUFFOzs7Ozs7Ozs7OzRCQVd0RTtrQ0FFTCw4REFBQ2pCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDekIsa0ZBQW9CQTs0QkFDbkIwQixPQUFPVDs0QkFDUEksYUFBYUE7NEJBQ2JNLFNBQVNsQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVtQixXQUFXOzRCQUM5QkMsYUFBYXBCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVXFCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQsQ0FBQztHQTVEdUJ4Qjs7UUFJUEYsa0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGVnb3J5TmF2IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYXRlZ29yeU5hdmJhclwiO1xuaW1wb3J0IHsgUGFnZU5hdmlnYXRpb25CdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uQnV0dG9uXCI7XG5pbXBvcnQgeyBQcm9kdWN0TGF5b3V0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0XCI7XG5pbXBvcnQgeyBQcm9kdWN0U2tlbGV0b25Mb2FkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RTa2VsZXRvbkxvYWRlclwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvZ3JhcGhxbC9jbGllbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiQC9ncmFwaHFsL2dlbmVyYXRlL2dyYXBocWxcIjtcbmltcG9ydCB7IEdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIkAvZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMsIHRvdGFsSXRlbXMsIHBhZ2VJbmZvIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICBjb25zdCBUT1RBTF9QUk9EVUNUUyA9IHByb2R1Y3RzLmxlbmd0aCA+IDAgPyB0b3RhbEl0ZW1zIDogMFxuICBjb25zdCBmYWtlUHJvZHVjdHNBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpbmRleCkgPT4gaW5kZXggKyAxKVxuICBjb25zdCBudW1iZXJCdXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoVE9UQUxfUFJPRFVDVFMhIC8gMTIpIH0sIChfLCBpbmRleCkgPT4gaW5kZXgrKylcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByb3V0ZXIuYXNQYXRoXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FLkwgc3RvcmU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsJz5cbiAgICAgICAgPENhdGVnb3J5TmF2IC8+XG5cbiAgICAgICAgPFBhZ2VOYXZpZ2F0aW9uQnV0dG9uXG4gICAgICAgICAgYXJyYXk9e251bWJlckJ1dHRvbnNBcnJheX1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgaGFzTmV4dD17cGFnZUluZm8/Lmhhc05leHRQYWdlfVxuICAgICAgICAgIGhhc1ByZXZpb3VzPXtwYWdlSW5mbz8uaGFzUHJldmlvdXNQYWdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlb2YgcHJvZHVjdHMgPT09ICd1bmRlZmluZWQnID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHctc2NyZWVuIGdhcC15LTkgbWQ6Z3JpZC1jb2xzLTQgXG4gICAgICAgICAgICAgIG1kOmdhcC14LTE0IG1kOmdhcC15LTYgbWQ6dy1mdWxsXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmYWtlUHJvZHVjdHNBcnJheS5tYXAoaXRlbSA9PiA8UHJvZHVjdFNrZWxldG9uTG9hZGVyIGtleT17aXRlbX0gLz4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgdy1zY3JlZW4gZ2FwLXktOSBtZDpncmlkLWNvbHMtNCBcbiAgICAgICAgICAgICAgbWQ6Z2FwLXgtMTQgbWQ6Z2FwLXktNiBtZDp3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0cz8ubWFwKCh7IG5vZGU6IHByb2R1Y3QgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxQcm9kdWN0U2tlbGV0b25Mb2FkZXIgLz59IGtleT17cHJvZHVjdD8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGF5b3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdD8uaW1hZ2VzWzBdLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0Py5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3Q/LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3Q/LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIG1kOm10LVs3NHB4XSAtbWItOFwiPlxuICAgICAgICAgIDxQYWdlTmF2aWdhdGlvbkJ1dHRvblxuICAgICAgICAgICAgYXJyYXk9e251bWJlckJ1dHRvbnNBcnJheX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgIGhhc05leHQ9e3BhZ2VJbmZvPy5oYXNOZXh0UGFnZX1cbiAgICAgICAgICAgIGhhc1ByZXZpb3VzPXtwYWdlSW5mbz8uaGFzUHJldmlvdXNQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gY29udGV4dFxuICBjb25zdCBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UgfHwgJycpXG4gIGNvbnN0IHNvcnRGaWVsZCA9IHF1ZXJ5LnNvcnRGaWVsZFxuICBjb25zdCBjYXRlZ29yeSA9IFwiYWxsXCJcbiAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gMTJcbiAgbGV0IGlzTG9hZGluZyA9IHRydWVcblxuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByb2R1Y3RzQ29ubmVjdGlvbjogeyBlZGdlczogcHJvZHVjdHMsIHBhZ2VJbmZvLCBhZ2dyZWdhdGUgfVxuICAgIH0gPSBhd2FpdCBjbGllbnQucmVxdWVzdDxQcm9kdWN0c1F1ZXJ5PihHZXRBbGxQcm9kdWN0cywge1xuICAgICAgc2tpcDogKHBhZ2UgKyAxKSAqIHByb2R1Y3RzUGVyUGFnZSAtIHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgIG9yZGVyQnk6IHNvcnRGaWVsZCxcbiAgICAgIHNsdWc6IGNhdGVnb3J5XG4gICAgfSlcblxuICAgIGlzTG9hZGluZyA9IGZhbHNlXG4gICAgY29uc29sZS5sb2coaXNMb2FkaW5nKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgdG90YWxJdGVtczogYWdncmVnYXRlLmNvdW50LFxuICAgICAgICBwYWdlSW5mbyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cblxufSJdLCJuYW1lcyI6WyJDYXRlZ29yeU5hdiIsIlBhZ2VOYXZpZ2F0aW9uQnV0dG9uIiwiUHJvZHVjdExheW91dCIsIlByb2R1Y3RTa2VsZXRvbkxvYWRlciIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJTdXNwZW5zZSIsIkhvbWUiLCJwcm9kdWN0cyIsInRvdGFsSXRlbXMiLCJwYWdlSW5mbyIsIlRPVEFMX1BST0RVQ1RTIiwibGVuZ3RoIiwiZmFrZVByb2R1Y3RzQXJyYXkiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJudW1iZXJCdXR0b25zQXJyYXkiLCJNYXRoIiwiY2VpbCIsInJvdXRlciIsImN1cnJlbnRQYWdlIiwiYXNQYXRoIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnJheSIsImhhc05leHQiLCJoYXNOZXh0UGFnZSIsImhhc1ByZXZpb3VzIiwiaGFzUHJldmlvdXNQYWdlIiwibWFwIiwiaXRlbSIsIm5vZGUiLCJwcm9kdWN0IiwiZmFsbGJhY2siLCJpbWFnZSIsImltYWdlcyIsInVybCIsIm5hbWUiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});