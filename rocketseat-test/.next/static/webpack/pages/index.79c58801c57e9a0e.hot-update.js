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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CategoryNavbar */ \"./src/components/CategoryNavbar/index.tsx\");\n/* harmony import */ var _components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageNavigationButton */ \"./src/components/PageNavigationButton/index.tsx\");\n/* harmony import */ var _components_ProductLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProductLayout */ \"./src/components/ProductLayout/index.tsx\");\n/* harmony import */ var _components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductSkeletonLoader */ \"./src/components/ProductSkeletonLoader/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { products , totalItems , pageInfo  } = param;\n    _s();\n    const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0;\n    const fakeProductsArray = Array.from({\n        length: 12\n    }, (_, index)=>index + 1);\n    const numberButtonsArray = Array.from({\n        length: Math.ceil(TOTAL_PRODUCTS / 12)\n    }, (_, index)=>index++);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const currentPage = router.asPath;\n    console.log(products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"E.L store\"\n                }, void 0, false, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_1__.CategoryNav, {}, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__.PageNavigationButton, {\n                        array: numberButtonsArray,\n                        currentPage: currentPage,\n                        hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                        hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    !products && fakeProductsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__.ProductSkeletonLoader, {}, item, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 53\n                        }, this)),\n                    typeof products === \"undefined\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: fakeProductsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__.ProductSkeletonLoader, {}, item, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 47\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: products === null || products === void 0 ? void 0 : products.map((param)=>{\n                            let { node: product  } = param;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Suspense, {\n                                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_4__.ProductSkeletonLoader, {}, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_3__.ProductLayout, {\n                                    image: product === null || product === void 0 ? void 0 : product.images[0].url,\n                                    title: product === null || product === void 0 ? void 0 : product.name,\n                                    price: product === null || product === void 0 ? void 0 : product.price,\n                                    id: product === null || product === void 0 ? void 0 : product.id\n                                }, void 0, false, {\n                                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, this)\n                            }, product === null || product === void 0 ? void 0 : product.id, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-[74px] -mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_2__.PageNavigationButton, {\n                            array: numberButtonsArray,\n                            currentPage: currentPage,\n                            hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                            hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDZTtBQUNkO0FBQ2dCO0FBSzlDO0FBQ1c7QUFDUDs7QUFFbEIsU0FBU08sS0FBSyxLQUEwRixFQUFFO1FBQTVGLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFQyxTQUFRLEVBQTBELEdBQTFGOztJQUMzQixNQUFNQyxpQkFBaUJILFNBQVNJLE1BQU0sR0FBRyxJQUFJSCxhQUFhLENBQUM7SUFDM0QsTUFBTUksb0JBQW9CQyxNQUFNQyxJQUFJLENBQUM7UUFBRUgsUUFBUTtJQUFHLEdBQUcsQ0FBQ0ksR0FBR0MsUUFBVUEsUUFBUTtJQUMzRSxNQUFNQyxxQkFBcUJKLE1BQU1DLElBQUksQ0FBQztRQUFFSCxRQUFRTyxLQUFLQyxJQUFJLENBQUNULGlCQUFrQjtJQUFJLEdBQUcsQ0FBQ0ssR0FBR0MsUUFBVUE7SUFDakcsTUFBTUksU0FBU2hCLHNEQUFTQTtJQUN4QixNQUFNaUIsY0FBY0QsT0FBT0UsTUFBTTtJQUVqQ0MsUUFBUUMsR0FBRyxDQUFDakI7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJQTswQkFDSCw0RUFBQ3NCOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDNUIsbUVBQVdBOzs7OztrQ0FFWiw4REFBQ0Msa0ZBQW9CQTt3QkFDbkI0QixPQUFPWDt3QkFDUEksYUFBYUE7d0JBQ2JRLFNBQVNwQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVxQixXQUFXO3dCQUM5QkMsYUFBYXRCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVXVCLGVBQWU7Ozs7OztvQkFHdkMsQ0FBQ3pCLFlBQVlLLGtCQUFrQnFCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQVEsOERBQUNoQyxvRkFBcUJBLE1BQU1nQzs7Ozs7b0JBRXRFLE9BQU8zQixhQUFhLDRCQUNsQiw4REFBQ21CO3dCQUFJQyxXQUFVO2tDQUdYZixrQkFBa0JxQixHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDaEMsb0ZBQXFCQSxNQUFNZ0M7Ozs7Ozs7Ozs2Q0FLNUQsOERBQUNSO3dCQUFJQyxXQUFVO2tDQUdYcEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVMEIsR0FBRyxDQUFDO2dDQUFDLEVBQUVFLE1BQU1DLFFBQU8sRUFBRTswQ0FDOUIscUVBQUMvQiwyQ0FBUUE7Z0NBQUNnQyx3QkFBVSw4REFBQ25DLG9GQUFxQkE7MENBQ3hDLDRFQUFDRCxvRUFBYUE7b0NBQ1pxQyxLQUFLLEVBQUVGLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0csTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsR0FBRztvQ0FDN0JmLE9BQU9XLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ssSUFBSTtvQ0FDcEJDLE9BQU9OLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU00sS0FBSztvQ0FDckJDLElBQUlQLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU08sRUFBRTs7Ozs7OytCQUxpQ1Asb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTTyxFQUFFOzs7Ozs7Ozs7OzRCQVd0RTtrQ0FFTCw4REFBQ2pCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDM0Isa0ZBQW9CQTs0QkFDbkI0QixPQUFPWDs0QkFDUEksYUFBYUE7NEJBQ2JRLFNBQVNwQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVxQixXQUFXOzRCQUM5QkMsYUFBYXRCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVXVCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQsQ0FBQztHQS9EdUIxQjs7UUFJUEYsa0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGVnb3J5TmF2IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYXRlZ29yeU5hdmJhclwiO1xuaW1wb3J0IHsgUGFnZU5hdmlnYXRpb25CdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uQnV0dG9uXCI7XG5pbXBvcnQgeyBQcm9kdWN0TGF5b3V0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0XCI7XG5pbXBvcnQgeyBQcm9kdWN0U2tlbGV0b25Mb2FkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RTa2VsZXRvbkxvYWRlclwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvZ3JhcGhxbC9jbGllbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiQC9ncmFwaHFsL2dlbmVyYXRlL2dyYXBocWxcIjtcbmltcG9ydCB7IEdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIkAvZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMsIHRvdGFsSXRlbXMsIHBhZ2VJbmZvIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICBjb25zdCBUT1RBTF9QUk9EVUNUUyA9IHByb2R1Y3RzLmxlbmd0aCA+IDAgPyB0b3RhbEl0ZW1zIDogMFxuICBjb25zdCBmYWtlUHJvZHVjdHNBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpbmRleCkgPT4gaW5kZXggKyAxKVxuICBjb25zdCBudW1iZXJCdXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoVE9UQUxfUFJPRFVDVFMhIC8gMTIpIH0sIChfLCBpbmRleCkgPT4gaW5kZXgrKylcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByb3V0ZXIuYXNQYXRoXG5cbiAgY29uc29sZS5sb2cocHJvZHVjdHMpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FLkwgc3RvcmU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsJz5cbiAgICAgICAgPENhdGVnb3J5TmF2IC8+XG5cbiAgICAgICAgPFBhZ2VOYXZpZ2F0aW9uQnV0dG9uXG4gICAgICAgICAgYXJyYXk9e251bWJlckJ1dHRvbnNBcnJheX1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgaGFzTmV4dD17cGFnZUluZm8/Lmhhc05leHRQYWdlfVxuICAgICAgICAgIGhhc1ByZXZpb3VzPXtwYWdlSW5mbz8uaGFzUHJldmlvdXNQYWdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHshcHJvZHVjdHMgJiYgZmFrZVByb2R1Y3RzQXJyYXkubWFwKGl0ZW0gPT4gPFByb2R1Y3RTa2VsZXRvbkxvYWRlciBrZXk9e2l0ZW19IC8+KX1cbiAgICAgICAge1xuICAgICAgICAgIHR5cGVvZiBwcm9kdWN0cyA9PT0gJ3VuZGVmaW5lZCcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgdy1zY3JlZW4gZ2FwLXktOSBtZDpncmlkLWNvbHMtNCBcbiAgICAgICAgICAgICAgbWQ6Z2FwLXgtMTQgbWQ6Z2FwLXktNiBtZDp3LWZ1bGxcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZha2VQcm9kdWN0c0FycmF5Lm1hcChpdGVtID0+IDxQcm9kdWN0U2tlbGV0b25Mb2FkZXIga2V5PXtpdGVtfSAvPilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiB3LXNjcmVlbiBnYXAteS05IG1kOmdyaWQtY29scy00IFxuICAgICAgICAgICAgICBtZDpnYXAteC0xNCBtZDpnYXAteS02IG1kOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPy5tYXAoKHsgbm9kZTogcHJvZHVjdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFByb2R1Y3RTa2VsZXRvbkxvYWRlciAvPn0ga2V5PXtwcm9kdWN0Py5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RMYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0Py5pbWFnZXNbMF0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3Q/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdD8ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdD8uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWQ6bXQtWzc0cHhdIC1tYi04XCI+XG4gICAgICAgICAgPFBhZ2VOYXZpZ2F0aW9uQnV0dG9uXG4gICAgICAgICAgICBhcnJheT17bnVtYmVyQnV0dG9uc0FycmF5fVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgaGFzTmV4dD17cGFnZUluZm8/Lmhhc05leHRQYWdlfVxuICAgICAgICAgICAgaGFzUHJldmlvdXM9e3BhZ2VJbmZvPy5oYXNQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBjb250ZXh0XG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSB8fCAnJylcbiAgY29uc3Qgc29ydEZpZWxkID0gcXVlcnkuc29ydEZpZWxkXG4gIGNvbnN0IGNhdGVnb3J5ID0gXCJhbGxcIlxuICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSAxMlxuXG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJvZHVjdHNDb25uZWN0aW9uOiB7IGVkZ2VzOiBwcm9kdWN0cywgcGFnZUluZm8sIGFnZ3JlZ2F0ZSB9XG4gICAgfSA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0PFByb2R1Y3RzUXVlcnk+KEdldEFsbFByb2R1Y3RzLCB7XG4gICAgICBza2lwOiAocGFnZSArIDEpICogcHJvZHVjdHNQZXJQYWdlIC0gcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgb3JkZXJCeTogc29ydEZpZWxkLFxuICAgICAgc2x1ZzogY2F0ZWdvcnlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICB0b3RhbEl0ZW1zOiBhZ2dyZWdhdGUuY291bnQsXG4gICAgICAgIHBhZ2VJbmZvLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuXG59Il0sIm5hbWVzIjpbIkNhdGVnb3J5TmF2IiwiUGFnZU5hdmlnYXRpb25CdXR0b24iLCJQcm9kdWN0TGF5b3V0IiwiUHJvZHVjdFNrZWxldG9uTG9hZGVyIiwiSGVhZCIsInVzZVJvdXRlciIsIlN1c3BlbnNlIiwiSG9tZSIsInByb2R1Y3RzIiwidG90YWxJdGVtcyIsInBhZ2VJbmZvIiwiVE9UQUxfUFJPRFVDVFMiLCJsZW5ndGgiLCJmYWtlUHJvZHVjdHNBcnJheSIsIkFycmF5IiwiZnJvbSIsIl8iLCJpbmRleCIsIm51bWJlckJ1dHRvbnNBcnJheSIsIk1hdGgiLCJjZWlsIiwicm91dGVyIiwiY3VycmVudFBhZ2UiLCJhc1BhdGgiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnJheSIsImhhc05leHQiLCJoYXNOZXh0UGFnZSIsImhhc1ByZXZpb3VzIiwiaGFzUHJldmlvdXNQYWdlIiwibWFwIiwiaXRlbSIsIm5vZGUiLCJwcm9kdWN0IiwiZmFsbGJhY2siLCJpbWFnZSIsImltYWdlcyIsInVybCIsIm5hbWUiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});