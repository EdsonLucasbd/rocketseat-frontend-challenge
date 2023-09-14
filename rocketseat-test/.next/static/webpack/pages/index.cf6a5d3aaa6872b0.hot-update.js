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

/***/ "./src/components/ProductLayout/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ProductLayout/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductLayout\": function() { return /* binding */ ProductLayout; },\n/* harmony export */   \"convertProductPrice\": function() { return /* binding */ convertProductPrice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/fonts */ \"./src/utils/fonts.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductSkeletonLoader */ \"./src/components/ProductSkeletonLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst convertProductPrice = (price)=>{\n    return ((price !== null && price !== void 0 ? price : 0) / 100.00).toFixed(2);\n};\nconst ProductLayout = (param)=>{\n    let { image , price , title , id  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const productPrice = convertProductPrice(price);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_5__.ProductSkeletonLoader, {}, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                className: \"flex flex-col w-32 h-[200px] md:w-64 md:h-[378px] hover:shadow-lg  hover:scale-105 rounded-lg duration-200 transition-all ease-in-out\",\n                href: \"/product/\".concat(id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        width: 256,\n                        height: 300,\n                        alt: \"\".concat(title),\n                        className: \"h-[300px] rounded-t-lg\",\n                        \"aria-hidden\": true,\n                        onLoad: ()=>console.log(\"carregando \".concat(title)),\n                        onLoadingComplete: ()=>setIsLoading(false)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2  rounded-b-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-color-text font-light text-xs md:text-base\"),\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                className: \"bg-shapes-02\"\n                            }, void 0, false, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-[#09090A] font-semibold text-xs md:text-sm\"),\n                                children: [\n                                    \"R$ \",\n                                    productPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductLayout, \"5S7VQ8+9ArWv2AFPIfnY+LwrHeg=\");\n_c = ProductLayout;\nvar _c;\n$RefreshReg$(_c, \"ProductLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNQO0FBQ0Y7QUFDSTtBQUNnQztBQVMxRCxNQUFNSyxzQkFBc0IsQ0FBQ0MsUUFBOEI7SUFDaEUsT0FBTyxDQUFDLENBQUNBLGtCQUFBQSxtQkFBQUEsUUFBUyxDQUFDLElBQUksTUFBSyxFQUFHQyxPQUFPLENBQUM7QUFDekMsRUFBQztBQUVNLE1BQU1DLGdCQUFnQixTQUErQztRQUE5QyxFQUFFQyxNQUFLLEVBQUVILE1BQUssRUFBRUksTUFBSyxFQUFFQyxHQUFFLEVBQWdCOztJQUNyRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUUvQyxNQUFNVyxlQUFlVCxvQkFBb0JDO0lBRXpDLHFCQUNFOztZQUNHTSwyQkFBYSw4REFBQ1IseUVBQXFCQTs7Ozs7MEJBRXBDLDhEQUFDRixrREFBSUE7Z0JBQ0hhLFdBQVU7Z0JBRVZDLE1BQU0sWUFBZSxPQUFITDs7a0NBRWxCLDhEQUFDVixtREFBS0E7d0JBQ0pnQixLQUFLUjt3QkFDTFMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSyxHQUFTLE9BQU5WO3dCQUNSSyxXQUFVO3dCQUNWTSxhQUFXO3dCQUNYQyxRQUFRLElBQU1DLFFBQVFDLEdBQUcsQ0FBQyxjQUFvQixPQUFOZDt3QkFDeENlLG1CQUFtQixJQUFNWixhQUFhLEtBQUs7Ozs7OztrQ0FFN0MsOERBQUNhO3dCQUFJWCxXQUFVOzswQ0FFYiw4REFBQ1k7Z0NBQUVaLFdBQVcsR0FBUyxPQUFOZiwrQ0FBS0EsRUFBQzswQ0FBK0RVOzs7Ozs7MENBQ3RGLDhEQUFDa0I7Z0NBQUdiLFdBQVU7Ozs7OzswQ0FDZCw4REFBQ1k7Z0NBQUVaLFdBQVcsR0FBUyxPQUFOZiwrQ0FBS0EsRUFBQzs7b0NBQThEO29DQUFJYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25HLEVBQUM7R0FqQ1lOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RMYXlvdXQvaW5kZXgudHN4PzRlMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FpcmEgfSBmcm9tIFwiQC91dGlscy9mb250c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdFNrZWxldG9uTG9hZGVyIH0gZnJvbSBcIi4uL1Byb2R1Y3RTa2VsZXRvbkxvYWRlclwiO1xuXG5pbnRlcmZhY2UgUHJvZHVjdFByb3BzIHtcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgcHJpY2U/OiBudW1iZXJcbiAgaWQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRQcm9kdWN0UHJpY2UgPSAocHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4ge1xuICByZXR1cm4gKChwcmljZSA/PyAwKSAvIDEwMC4wMCkudG9GaXhlZCgyKVxufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdExheW91dCA9ICh7IGltYWdlLCBwcmljZSwgdGl0bGUsIGlkIH06IFByb2R1Y3RQcm9wcykgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBjb252ZXJ0UHJvZHVjdFByaWNlKHByaWNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPFByb2R1Y3RTa2VsZXRvbkxvYWRlciAvPn1cblxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTMyIGgtWzIwMHB4XSBtZDp3LTY0IG1kOmgtWzM3OHB4XSBob3ZlcjpzaGFkb3ctbGcgXG4gICAgICAgIGhvdmVyOnNjYWxlLTEwNSByb3VuZGVkLWxnIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dFwiXG4gICAgICAgIGhyZWY9e2AvcHJvZHVjdC8ke2lkfWB9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2UhfVxuICAgICAgICAgIHdpZHRoPXsyNTZ9XG4gICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzMwMHB4XSByb3VuZGVkLXQtbGdcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZyhgY2FycmVnYW5kbyAke3RpdGxlfWApfVxuICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXsoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctd2hpdGUvNDAgaC1bNzhweF0gcHktMiBweC0zIGdhcC15LTIgXG4gICAgICAgIHJvdW5kZWQtYi1sZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c2FpcmF9IGZvbnQtc2FpcmEgdGV4dC1jb2xvci10ZXh0IGZvbnQtbGlnaHQgdGV4dC14cyBtZDp0ZXh0LWJhc2VgfT57dGl0bGV9PC9wPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJiZy1zaGFwZXMtMDJcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c2FpcmF9IGZvbnQtc2FpcmEgdGV4dC1bIzA5MDkwQV0gZm9udC1zZW1pYm9sZCB0ZXh0LXhzIG1kOnRleHQtc21gfT5SJCB7cHJvZHVjdFByaWNlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInNhaXJhIiwiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJQcm9kdWN0U2tlbGV0b25Mb2FkZXIiLCJjb252ZXJ0UHJvZHVjdFByaWNlIiwicHJpY2UiLCJ0b0ZpeGVkIiwiUHJvZHVjdExheW91dCIsImltYWdlIiwidGl0bGUiLCJpZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInByb2R1Y3RQcmljZSIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFyaWEtaGlkZGVuIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiZGl2IiwicCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductLayout/index.tsx\n"));

/***/ })

});