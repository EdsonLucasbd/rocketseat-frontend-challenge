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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductLayout\": function() { return /* binding */ ProductLayout; },\n/* harmony export */   \"convertProductPrice\": function() { return /* binding */ convertProductPrice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/fonts */ \"./src/utils/fonts.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductSkeletonLoader */ \"./src/components/ProductSkeletonLoader/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst convertProductPrice = (price)=>{\n    return ((price !== null && price !== void 0 ? price : 0) / 100.00).toFixed(2);\n};\nconst ProductLayout = (param)=>{\n    let { image , price , title , id  } = param;\n    _s();\n    const productPrice = convertProductPrice(price);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const handleImageLoad = ()=>{\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setIsLoading(true);\n    }, [\n        id\n    ]);\n    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductSkeletonLoader__WEBPACK_IMPORTED_MODULE_5__.ProductSkeletonLoader, {}, void 0, false, {\n        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"flex flex-col w-32 h-[200px] md:w-64 md:h-[378px] hover:shadow-lg  hover:scale-105 rounded-lg duration-200 transition-all ease-in-out\",\n            href: \"/product/\".concat(id),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    width: 256,\n                    height: 300,\n                    alt: \"\".concat(title),\n                    className: \"h-[300px] rounded-t-lg\",\n                    \"aria-hidden\": true,\n                    onLoadingComplete: handleImageLoad\n                }, void 0, false, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2  rounded-b-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-color-text font-light text-xs md:text-base\"),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"bg-shapes-02\"\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-[#09090A] font-semibold text-xs md:text-sm\"),\n                            children: [\n                                \"R$ \",\n                                productPrice\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductLayout, \"Yt82d/dvZsn5nYh5sqDQjv+rJ38=\");\n_c = ProductLayout;\nvar _c;\n$RefreshReg$(_c, \"ProductLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNQO0FBQ0Y7QUFDZTtBQUNxQjtBQVMxRCxNQUFNTSxzQkFBc0IsQ0FBQ0MsUUFBOEI7SUFDaEUsT0FBTyxDQUFDLENBQUNBLGtCQUFBQSxtQkFBQUEsUUFBUyxDQUFDLElBQUksTUFBSyxFQUFHQyxPQUFPLENBQUM7QUFDekMsRUFBQztBQUVNLE1BQU1DLGdCQUFnQixTQUErQztRQUE5QyxFQUFFQyxNQUFLLEVBQUVILE1BQUssRUFBRUksTUFBSyxFQUFFQyxHQUFFLEVBQWdCOztJQUNyRSxNQUFNQyxlQUFlUCxvQkFBb0JDO0lBQ3pDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1ZLGtCQUFrQixJQUFNO1FBQzVCRCxhQUFhLEtBQUs7SUFDcEI7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxhQUFhLElBQUk7SUFDbkIsR0FBRztRQUFDSDtLQUFHO0lBRVBFLDJCQUNFLDhEQUFDVCx5RUFBcUJBOzs7OztJQUd4QixxQkFDRTtrQkFDRSw0RUFBQ0gsa0RBQUlBO1lBQ0hlLFdBQVU7WUFFVkMsTUFBTSxZQUFlLE9BQUhOOzs4QkFFbEIsOERBQUNYLG1EQUFLQTtvQkFDSmtCLEtBQUtUO29CQUNMVSxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLLEdBQVMsT0FBTlg7b0JBQ1JNLFdBQVU7b0JBQ1ZNLGFBQVc7b0JBQ1hDLG1CQUFtQlI7Ozs7Ozs4QkFFckIsOERBQUNTO29CQUFJUixXQUFVOztzQ0FFYiw4REFBQ1M7NEJBQUVULFdBQVcsR0FBUyxPQUFOakIsK0NBQUtBLEVBQUM7c0NBQStEVzs7Ozs7O3NDQUN0Riw4REFBQ2dCOzRCQUFHVixXQUFVOzs7Ozs7c0NBQ2QsOERBQUNTOzRCQUFFVCxXQUFXLEdBQVMsT0FBTmpCLCtDQUFLQSxFQUFDOztnQ0FBOEQ7Z0NBQUlhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRyxFQUFDO0dBekNZSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0L2luZGV4LnRzeD80ZTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhaXJhIH0gZnJvbSBcIkAvdXRpbHMvZm9udHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdFNrZWxldG9uTG9hZGVyIH0gZnJvbSBcIi4uL1Byb2R1Y3RTa2VsZXRvbkxvYWRlclwiO1xuXG5pbnRlcmZhY2UgUHJvZHVjdFByb3BzIHtcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgcHJpY2U/OiBudW1iZXJcbiAgaWQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRQcm9kdWN0UHJpY2UgPSAocHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4ge1xuICByZXR1cm4gKChwcmljZSA/PyAwKSAvIDEwMC4wMCkudG9GaXhlZCgyKVxufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdExheW91dCA9ICh7IGltYWdlLCBwcmljZSwgdGl0bGUsIGlkIH06IFByb2R1Y3RQcm9wcykgPT4ge1xuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBjb252ZXJ0UHJvZHVjdFByaWNlKHByaWNlKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBoYW5kbGVJbWFnZUxvYWQgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgfSwgW2lkXSlcblxuICBpc0xvYWRpbmcgJiYgKFxuICAgIDxQcm9kdWN0U2tlbGV0b25Mb2FkZXIgLz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0zMiBoLVsyMDBweF0gbWQ6dy02NCBtZDpoLVszNzhweF0gaG92ZXI6c2hhZG93LWxnIFxuICAgICAgICBob3ZlcjpzY2FsZS0xMDUgcm91bmRlZC1sZyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXRcIlxuICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlIX1cbiAgICAgICAgICB3aWR0aD17MjU2fVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGFsdD17YCR7dGl0bGV9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLVszMDBweF0gcm91bmRlZC10LWxnXCJcbiAgICAgICAgICBhcmlhLWhpZGRlblxuICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXtoYW5kbGVJbWFnZUxvYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy13aGl0ZS80MCBoLVs3OHB4XSBweS0yIHB4LTMgZ2FwLXktMiBcbiAgICAgICAgcm91bmRlZC1iLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzYWlyYX0gZm9udC1zYWlyYSB0ZXh0LWNvbG9yLXRleHQgZm9udC1saWdodCB0ZXh0LXhzIG1kOnRleHQtYmFzZWB9Pnt0aXRsZX08L3A+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJnLXNoYXBlcy0wMlwiIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzYWlyYX0gZm9udC1zYWlyYSB0ZXh0LVsjMDkwOTBBXSBmb250LXNlbWlib2xkIHRleHQteHMgbWQ6dGV4dC1zbWB9PlIkIHtwcm9kdWN0UHJpY2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsic2FpcmEiLCJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RTa2VsZXRvbkxvYWRlciIsImNvbnZlcnRQcm9kdWN0UHJpY2UiLCJwcmljZSIsInRvRml4ZWQiLCJQcm9kdWN0TGF5b3V0IiwiaW1hZ2UiLCJ0aXRsZSIsImlkIiwicHJvZHVjdFByaWNlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlSW1hZ2VMb2FkIiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYXJpYS1oaWRkZW4iLCJvbkxvYWRpbmdDb21wbGV0ZSIsImRpdiIsInAiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductLayout/index.tsx\n"));

/***/ })

});