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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CategoryNavbar */ \"./src/components/CategoryNavbar/index.tsx\");\n/* harmony import */ var _components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageNavigationButton */ \"./src/components/PageNavigationButton/index.tsx\");\n/* harmony import */ var _components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductLayout */ \"./src/components/ProductLayout/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor-icons/react */ \"./node_modules/@phosphor-icons/react/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Search(param) {\n    let { products , pageInfo , totalItems  } = param;\n    _s();\n    const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0;\n    const fakeProductsArray = Array.from({\n        length: 12\n    }, (_, index)=>index + 1);\n    const numberButtonsArray = Array.from({\n        length: Math.ceil(TOTAL_PRODUCTS / 12)\n    }, (_, index)=>index++);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const currentPage = router.asPath;\n    const { search  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"E.L store | \",\n                        router.query.search\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryNavbar__WEBPACK_IMPORTED_MODULE_2__.CategoryNav, {}, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__.PageNavigationButton, {\n                        array: numberButtonsArray,\n                        currentPage: currentPage,\n                        hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                        hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    products.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center w-screen h-screen md:w-full md:h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\",\n                                children: [\n                                    \"Nenhum resultado para \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"“\",\n                                            search,\n                                            \"”\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 54\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__.SmileySad, {\n                                        size: 32\n                                    }, void 0, false, {\n                                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 89\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Se voc\\xea n\\xe3o encontrou o que procurava, tente novamente.\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    typeof products === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: fakeProductsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__.ProductLayout, {}, item, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 49,\n                                columnNumber: 47\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4  md:gap-x-14 md:gap-y-6 md:w-full\",\n                        children: products === null || products === void 0 ? void 0 : products.map((param)=>{\n                            let { node: product  } = param;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductLayout__WEBPACK_IMPORTED_MODULE_4__.ProductLayout, {\n                                image: product === null || product === void 0 ? void 0 : product.images[0].url,\n                                title: product === null || product === void 0 ? void 0 : product.name,\n                                price: product === null || product === void 0 ? void 0 : product.price,\n                                id: product === null || product === void 0 ? void 0 : product.id\n                            }, product === null || product === void 0 ? void 0 : product.id, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-[74px] -mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageNavigationButton__WEBPACK_IMPORTED_MODULE_3__.PageNavigationButton, {\n                            array: numberButtonsArray,\n                            currentPage: currentPage,\n                            hasNext: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage,\n                            hasPrevious: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasPreviousPage\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/pages/search/[search].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTQTs7O0tBSkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zZWFyY2gvW3NlYXJjaF0udHN4PzQzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ2F0ZWdvcnlOYXYgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhdGVnb3J5TmF2YmFyXCI7XG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbkJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb25CdXR0b25cIjtcbmltcG9ydCB7IFByb2R1Y3RMYXlvdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RMYXlvdXRcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL2dyYXBocWwvY2xpZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hQcm9kdWN0c1F1ZXJ5IH0gZnJvbSBcIkAvZ3JhcGhxbC9nZW5lcmF0ZS9ncmFwaHFsXCI7XG5pbXBvcnQgeyBTZWFyY2hQcm9kdWN0cyB9IGZyb20gXCJAL2dyYXBocWwvcXVlcmllc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU21pbGV5U2FkIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgcHJvZHVjdHMsIHBhZ2VJbmZvLCB0b3RhbEl0ZW1zIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICBjb25zdCBUT1RBTF9QUk9EVUNUUyA9IHByb2R1Y3RzLmxlbmd0aCA+IDAgPyB0b3RhbEl0ZW1zIDogMFxuICBjb25zdCBmYWtlUHJvZHVjdHNBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpbmRleCkgPT4gaW5kZXggKyAxKVxuICBjb25zdCBudW1iZXJCdXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoVE9UQUxfUFJPRFVDVFMhIC8gMTIpIH0sIChfLCBpbmRleCkgPT4gaW5kZXgrKylcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByb3V0ZXIuYXNQYXRoXG4gIGNvbnN0IHsgc2VhcmNoIH0gPSByb3V0ZXIucXVlcnlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkUuTCBzdG9yZSB8IHtyb3V0ZXIucXVlcnkuc2VhcmNofTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XG4gICAgICAgIDxDYXRlZ29yeU5hdiAvPlxuXG4gICAgICAgIDxQYWdlTmF2aWdhdGlvbkJ1dHRvblxuICAgICAgICAgIGFycmF5PXtudW1iZXJCdXR0b25zQXJyYXl9XG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIGhhc05leHQ9e3BhZ2VJbmZvPy5oYXNOZXh0UGFnZX1cbiAgICAgICAgICBoYXNQcmV2aW91cz17cGFnZUluZm8/Lmhhc1ByZXZpb3VzUGFnZX1cbiAgICAgICAgLz5cblxuICAgICAgICB7XG4gICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlbiBtZDp3LWZ1bGwgbWQ6aC1mdWxsJz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nJz5OZW5odW0gcmVzdWx0YWRvIHBhcmEgPHNwYW4+JmxkcXVvO3tzZWFyY2h9JnJkcXVvOzwvc3Bhbj48U21pbGV5U2FkIHNpemU9ezMyfSAvPjwvaDI+XG4gICAgICAgICAgICAgIDxwPlNlIHZvY8OqIG7Do28gZW5jb250cm91IG8gcXVlIHByb2N1cmF2YSwgdGVudGUgbm92YW1lbnRlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlb2YgcHJvZHVjdHMgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiB3LXNjcmVlbiBnYXAteS05IG1kOmdyaWQtY29scy00IFxuICAgICAgICAgICAgbWQ6Z2FwLXgtMTQgbWQ6Z2FwLXktNiBtZDp3LWZ1bGxcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZha2VQcm9kdWN0c0FycmF5Lm1hcChpdGVtID0+IDxQcm9kdWN0TGF5b3V0IGtleT17aXRlbX0gLz4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgdy1zY3JlZW4gZ2FwLXktOSBtZDpncmlkLWNvbHMtNCBcbiAgICAgICAgICAgIG1kOmdhcC14LTE0IG1kOmdhcC15LTYgbWQ6dy1mdWxsXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cz8ubWFwKCh7IG5vZGU6IHByb2R1Y3QgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3RMYXlvdXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0Py5pZH1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3Q/LmltYWdlc1swXS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0Py5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdD8ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0Py5pZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBtZDptdC1bNzRweF0gLW1iLThcIj5cbiAgICAgICAgICA8UGFnZU5hdmlnYXRpb25CdXR0b25cbiAgICAgICAgICAgIGFycmF5PXtudW1iZXJCdXR0b25zQXJyYXl9XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICBoYXNOZXh0PXtwYWdlSW5mbz8uaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgICBoYXNQcmV2aW91cz17cGFnZUluZm8/Lmhhc1ByZXZpb3VzUGFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IGNvbnRleHRcbiAgY29uc3QgcHJvZHVjdE5hbWUgPSBxdWVyeS5zZWFyY2hcbiAgY29uc3Qgc29ydEZpZWxkID0gcXVlcnkuc29ydEZpZWxkXG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSB8fCAwKVxuICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSAxMlxuXG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJvZHVjdHNDb25uZWN0aW9uOiB7IGVkZ2VzOiBwcm9kdWN0cywgcGFnZUluZm8sIGFnZ3JlZ2F0ZSB9XG4gICAgfSA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0PFNlYXJjaFByb2R1Y3RzUXVlcnk+KFxuICAgICAgU2VhcmNoUHJvZHVjdHMsXG4gICAgICB7XG4gICAgICAgIHNraXA6IChwYWdlICsgMSkgKiBwcm9kdWN0c1BlclBhZ2UgLSBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgIG9yZGVyQnk6IHNvcnRGaWVsZCxcbiAgICAgICAgX3NlYXJjaDogcHJvZHVjdE5hbWUsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgcGFnZUluZm8sXG4gICAgICAgIHRvdGFsSXRlbXM6IGFnZ3JlZ2F0ZS5jb3VudFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxufSJdLCJuYW1lcyI6WyJIZWFkIiwiQ2F0ZWdvcnlOYXYiLCJQYWdlTmF2aWdhdGlvbkJ1dHRvbiIsIlByb2R1Y3RMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJTbWlsZXlTYWQiLCJTZWFyY2giLCJwcm9kdWN0cyIsInBhZ2VJbmZvIiwidG90YWxJdGVtcyIsIlRPVEFMX1BST0RVQ1RTIiwibGVuZ3RoIiwiZmFrZVByb2R1Y3RzQXJyYXkiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJudW1iZXJCdXR0b25zQXJyYXkiLCJNYXRoIiwiY2VpbCIsInJvdXRlciIsImN1cnJlbnRQYWdlIiwiYXNQYXRoIiwic2VhcmNoIiwicXVlcnkiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImFycmF5IiwiaGFzTmV4dCIsImhhc05leHRQYWdlIiwiaGFzUHJldmlvdXMiLCJoYXNQcmV2aW91c1BhZ2UiLCJoMiIsInNwYW4iLCJzaXplIiwicCIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJub2RlIiwicHJvZHVjdCIsImltYWdlIiwiaW1hZ2VzIiwidXJsIiwibmFtZSIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/[search].tsx\n"));

/***/ })

});