"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[search]",{

/***/ "./src/pages/search/[search].tsx":
/*!***************************************!*\
  !*** ./src/pages/search/[search].tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CategoryNavbar */ \"./src/components/CategoryNavbar/index.tsx\");\n/* harmony import */ var _components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageNavigationButton */ \"./src/components/PageNavigationButton/index.tsx\");\n/* harmony import */ var _components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductLayout */ \"./src/components/ProductLayout/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor-icons/react */ \"./node_modules/@phosphor-icons/react/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Search(param) {\n    let { products , pageInfo , totalItems  } = param;\n    _s();\n    const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0;\n    const fakeProductsArray = Array.from({\n        length: 12\n    }, (_, index)=>index + 1);\n    const numberButtonsArray = Array.from({\n        length: Math.ceil(TOTAL_PRODUCTS / 12)\n    }, (_, index)=>index++);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const currentPage = router.asPath;\n    const { search  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"E.L store | \",\n                        router.query.search\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_2__.CategoryNav, {}, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__.PageNavigationButton, {\n                        array: numberButtonsArray,\n                        currentPage: currentPage,\n                        hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                        hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    products.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center my-[50%]  h-max w-full md:h-full md:my-0 space-y-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl md:text-4xl gap-y-1 flex flex-col items-center justify-center md:flex-row md:gap-x-3 text-color-title\",\n                                children: [\n                                    \"Nenhum resultado para \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-brand-orange font-semibold text-3xl md:text-5xl\",\n                                        children: [\n                                            \"“\",\n                                            search,\n                                            \"”\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 39\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__.SmileySad, {\n                                        className: \"text-color-title text-4xl md:text-6xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-color-title text-center text-sm\",\n                                children: \"Se voc\\xea n\\xe3o encontrou o que procurava, tente novamente.\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    typeof products === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: fakeProductsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__.ProductLayout, {}, item, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 53,\n                                columnNumber: 47\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: products === null || products === void 0 ? void 0 : products.map((param)=>{\n                            let { node: product  } = param;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__.ProductLayout, {\n                                image: product === null || product === void 0 ? void 0 : product.images[0].url,\n                                title: product === null || product === void 0 ? void 0 : product.name,\n                                price: product === null || product === void 0 ? void 0 : product.price,\n                                id: product === null || product === void 0 ? void 0 : product.id\n                            }, product === null || product === void 0 ? void 0 : product.id, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-[74px] -mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__.PageNavigationButton, {\n                            array: numberButtonsArray,\n                            currentPage: currentPage,\n                            hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                            hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1sRCxDQUFDO0dBeEV1QjFCOztRQUlQRixrREFBU0E7OztLQUpGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL1tzZWFyY2hdLnRzeD80MzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENhdGVnb3J5TmF2IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYXRlZ29yeU5hdmJhclwiO1xuaW1wb3J0IHsgUGFnZU5hdmlnYXRpb25CdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uQnV0dG9uXCI7XG5pbXBvcnQgeyBQcm9kdWN0TGF5b3V0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiQC9ncmFwaHFsL2NsaWVudFwiO1xuaW1wb3J0IHsgU2VhcmNoUHJvZHVjdHNRdWVyeSB9IGZyb20gXCJAL2dyYXBocWwvZ2VuZXJhdGUvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgU2VhcmNoUHJvZHVjdHMgfSBmcm9tIFwiQC9ncmFwaHFsL3F1ZXJpZXNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFNtaWxleVNhZCB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IHByb2R1Y3RzLCBwYWdlSW5mbywgdG90YWxJdGVtcyB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgY29uc3QgVE9UQUxfUFJPRFVDVFMgPSBwcm9kdWN0cy5sZW5ndGggPiAwID8gdG90YWxJdGVtcyA6IDBcbiAgY29uc3QgZmFrZVByb2R1Y3RzQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAoXywgaW5kZXgpID0+IGluZGV4ICsgMSlcbiAgY29uc3QgbnVtYmVyQnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKFRPVEFMX1BST0RVQ1RTISAvIDEyKSB9LCAoXywgaW5kZXgpID0+IGluZGV4KyspXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gcm91dGVyLmFzUGF0aFxuICBjb25zdCB7IHNlYXJjaCB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FLkwgc3RvcmUgfCB7cm91dGVyLnF1ZXJ5LnNlYXJjaH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgICA8Q2F0ZWdvcnlOYXYgLz5cblxuICAgICAgICA8UGFnZU5hdmlnYXRpb25CdXR0b25cbiAgICAgICAgICBhcnJheT17bnVtYmVyQnV0dG9uc0FycmF5fVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICBoYXNOZXh0PXtwYWdlSW5mbz8uaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgaGFzUHJldmlvdXM9e3BhZ2VJbmZvPy5oYXNQcmV2aW91c1BhZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAge1xuICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktWzUwJV0gXG4gICAgICAgICAgICAgIGgtbWF4IHctZnVsbCBtZDpoLWZ1bGwgbWQ6bXktMCBzcGFjZS15LTgnPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBnYXAteS0xIGZsZXggZmxleC1jb2xcbiAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWQ6ZmxleC1yb3cgbWQ6Z2FwLXgtMyB0ZXh0LWNvbG9yLXRpdGxlJz5cbiAgICAgICAgICAgICAgICBOZW5odW0gcmVzdWx0YWRvIHBhcmEgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJyYW5kLW9yYW5nZSBmb250LXNlbWlib2xkIHRleHQtM3hsIG1kOnRleHQtNXhsJz4mbGRxdW87e3NlYXJjaH0mcmRxdW87PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTbWlsZXlTYWQgY2xhc3NOYW1lPSd0ZXh0LWNvbG9yLXRpdGxlIHRleHQtNHhsIG1kOnRleHQtNnhsJyAvPjwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jb2xvci10aXRsZSB0ZXh0LWNlbnRlciB0ZXh0LXNtJz5TZSB2b2PDqiBuw6NvIGVuY29udHJvdSBvIHF1ZSBwcm9jdXJhdmEsIHRlbnRlIG5vdmFtZW50ZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgdHlwZW9mIHByb2R1Y3RzID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgdy1zY3JlZW4gZ2FwLXktOSBtZDpncmlkLWNvbHMtNCBcbiAgICAgICAgICAgIG1kOmdhcC14LTE0IG1kOmdhcC15LTYgbWQ6dy1mdWxsXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmYWtlUHJvZHVjdHNBcnJheS5tYXAoaXRlbSA9PiA8UHJvZHVjdExheW91dCBrZXk9e2l0ZW19IC8+KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHctc2NyZWVuIGdhcC15LTkgbWQ6Z3JpZC1jb2xzLTQgXG4gICAgICAgICAgICBtZDpnYXAteC0xNCBtZDpnYXAteS02IG1kOnctZnVsbFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHM/Lm1hcCgoeyBub2RlOiBwcm9kdWN0IH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGF5b3V0XG4gICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdD8uaWR9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0Py5pbWFnZXNbMF0udXJsfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdD8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3Q/LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdD8uaWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWQ6bXQtWzc0cHhdIC1tYi04XCI+XG4gICAgICAgICAgPFBhZ2VOYXZpZ2F0aW9uQnV0dG9uXG4gICAgICAgICAgICBhcnJheT17bnVtYmVyQnV0dG9uc0FycmF5fVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgaGFzTmV4dD17cGFnZUluZm8/Lmhhc05leHRQYWdlfVxuICAgICAgICAgICAgaGFzUHJldmlvdXM9e3BhZ2VJbmZvPy5oYXNQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBjb250ZXh0XG4gIGNvbnN0IHByb2R1Y3ROYW1lID0gcXVlcnkuc2VhcmNoXG4gIGNvbnN0IHNvcnRGaWVsZCA9IHF1ZXJ5LnNvcnRGaWVsZFxuICBjb25zdCBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UgfHwgMClcbiAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gMTJcblxuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByb2R1Y3RzQ29ubmVjdGlvbjogeyBlZGdlczogcHJvZHVjdHMsIHBhZ2VJbmZvLCBhZ2dyZWdhdGUgfVxuICAgIH0gPSBhd2FpdCBjbGllbnQucmVxdWVzdDxTZWFyY2hQcm9kdWN0c1F1ZXJ5PihcbiAgICAgIFNlYXJjaFByb2R1Y3RzLFxuICAgICAge1xuICAgICAgICBza2lwOiAocGFnZSArIDEpICogcHJvZHVjdHNQZXJQYWdlIC0gcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICBvcmRlckJ5OiBzb3J0RmllbGQsXG4gICAgICAgIF9zZWFyY2g6IHByb2R1Y3ROYW1lLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIHBhZ2VJbmZvLFxuICAgICAgICB0b3RhbEl0ZW1zOiBhZ2dyZWdhdGUuY291bnRcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkNhdGVnb3J5TmF2IiwiUGFnZU5hdmlnYXRpb25CdXR0b24iLCJQcm9kdWN0TGF5b3V0IiwidXNlUm91dGVyIiwiU21pbGV5U2FkIiwiU2VhcmNoIiwicHJvZHVjdHMiLCJwYWdlSW5mbyIsInRvdGFsSXRlbXMiLCJUT1RBTF9QUk9EVUNUUyIsImxlbmd0aCIsImZha2VQcm9kdWN0c0FycmF5IiwiQXJyYXkiLCJmcm9tIiwiXyIsImluZGV4IiwibnVtYmVyQnV0dG9uc0FycmF5IiwiTWF0aCIsImNlaWwiLCJyb3V0ZXIiLCJjdXJyZW50UGFnZSIsImFzUGF0aCIsInNlYXJjaCIsInF1ZXJ5IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnJheSIsImhhc05leHQiLCJoYXNOZXh0UGFnZSIsImhhc1ByZXZpb3VzIiwiaGFzUHJldmlvdXNQYWdlIiwiaDIiLCJzcGFuIiwicCIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJub2RlIiwicHJvZHVjdCIsImltYWdlIiwiaW1hZ2VzIiwidXJsIiwibmFtZSIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/[search].tsx\n"));

/***/ })

});