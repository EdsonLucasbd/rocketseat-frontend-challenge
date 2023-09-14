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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductLayout\": function() { return /* binding */ ProductLayout; },\n/* harmony export */   \"convertProductPrice\": function() { return /* binding */ convertProductPrice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/fonts */ \"./src/utils/fonts.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst convertProductPrice = (price)=>{\n    return ((price !== null && price !== void 0 ? price : 0) / 100.00).toFixed(2);\n};\nconst ProductLayout = (param)=>{\n    let { image , price , title , id  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const productPrice = convertProductPrice(price);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        className: \"flex flex-col w-32 h-[200px] md:w-64 md:h-[378px] hover:shadow-lg  hover:scale-105 rounded-lg duration-200 transition-all ease-in-out\",\n        href: \"/product/\".concat(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 256,\n                height: 300,\n                alt: \"\".concat(title),\n                className: \"h-[300px] rounded-t-lg\",\n                \"aria-hidden\": true,\n                onLoadingComplete: ()=>setIsLoading(false)\n            }, void 0, false, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2  rounded-b-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-color-text font-light text-xs md:text-base\"),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"bg-shapes-02\"\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_1__.saira, \" font-saira text-[#09090A] font-semibold text-xs md:text-sm\"),\n                        children: [\n                            \"R$ \",\n                            productPrice\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lucas/Development/rocketseat-frontend-challenge/rocketseat-test/src/components/ProductLayout/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n} // export const ProductCard = (props: ProductProps) => {\n //   const { image, title, price, id } = props\n //   const isLoading = !image || !title || !price || !id;\n //   return isLoading ? <ProductSkeletonLoader /> : <ProductLayout  {...props} />;\n // }\n;\n_s(ProductLayout, \"5S7VQ8+9ArWv2AFPIfnY+LwrHeg=\");\n_c = ProductLayout;\nvar _c;\n$RefreshReg$(_c, \"ProductLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0TGF5b3V0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1A7QUFDRjtBQUNJO0FBUzFCLE1BQU1JLHNCQUFzQixDQUFDQyxRQUE4QjtJQUNoRSxPQUFPLENBQUMsQ0FBQ0Esa0JBQUFBLG1CQUFBQSxRQUFTLENBQUMsSUFBSSxNQUFLLEVBQUdDLE9BQU8sQ0FBQztBQUN6QyxFQUFDO0FBRU0sTUFBTUMsZ0JBQWdCLFNBQStDO1FBQTlDLEVBQUVDLE1BQUssRUFBRUgsTUFBSyxFQUFFSSxNQUFLLEVBQUVDLEdBQUUsRUFBZ0I7O0lBQ3JFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1VLGVBQWVULG9CQUFvQkM7SUFFekMscUJBQ0UsOERBQUNILGtEQUFJQTtRQUNIWSxXQUFVO1FBRVZDLE1BQU0sWUFBZSxPQUFITDs7MEJBRWxCLDhEQUFDVCxtREFBS0E7Z0JBQ0plLEtBQUtSO2dCQUNMUyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLLEdBQVMsT0FBTlY7Z0JBQ1JLLFdBQVU7Z0JBQ1ZNLGFBQVc7Z0JBQ1hDLG1CQUFtQixJQUFNVCxhQUFhLEtBQUs7Ozs7OzswQkFFN0MsOERBQUNVO2dCQUFJUixXQUFVOztrQ0FFYiw4REFBQ1M7d0JBQUVULFdBQVcsR0FBUyxPQUFOZCwrQ0FBS0EsRUFBQztrQ0FBK0RTOzs7Ozs7a0NBQ3RGLDhEQUFDZTt3QkFBR1YsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDUzt3QkFBRVQsV0FBVyxHQUFTLE9BQU5kLCtDQUFLQSxFQUFDOzs0QkFBOEQ7NEJBQUlhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpHLEVBRUEsd0RBQXdEO0NBQ3hELDhDQUE4QztDQUU5Qyx5REFBeUQ7Q0FFekQsa0ZBQWtGO0NBQ2xGLElBQUk7Q0FSSDtHQTVCWU47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdExheW91dC9pbmRleC50c3g/NGUyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzYWlyYSB9IGZyb20gXCJAL3V0aWxzL2ZvbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9kdWN0UHJvcHMge1xuICBpbWFnZT86IHN0cmluZ1xuICB0aXRsZT86IHN0cmluZ1xuICBwcmljZT86IG51bWJlclxuICBpZD86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydFByb2R1Y3RQcmljZSA9IChwcmljZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XG4gIHJldHVybiAoKHByaWNlID8/IDApIC8gMTAwLjAwKS50b0ZpeGVkKDIpXG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0TGF5b3V0ID0gKHsgaW1hZ2UsIHByaWNlLCB0aXRsZSwgaWQgfTogUHJvZHVjdFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHByb2R1Y3RQcmljZSA9IGNvbnZlcnRQcm9kdWN0UHJpY2UocHJpY2UpXG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTMyIGgtWzIwMHB4XSBtZDp3LTY0IG1kOmgtWzM3OHB4XSBob3ZlcjpzaGFkb3ctbGcgXG4gICAgICAgIGhvdmVyOnNjYWxlLTEwNSByb3VuZGVkLWxnIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dFwiXG4gICAgICBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ltYWdlIX1cbiAgICAgICAgd2lkdGg9ezI1Nn1cbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1bMzAwcHhdIHJvdW5kZWQtdC1sZ1wiXG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXsoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy13aGl0ZS80MCBoLVs3OHB4XSBweS0yIHB4LTMgZ2FwLXktMiBcbiAgICAgICAgcm91bmRlZC1iLWxnXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c2FpcmF9IGZvbnQtc2FpcmEgdGV4dC1jb2xvci10ZXh0IGZvbnQtbGlnaHQgdGV4dC14cyBtZDp0ZXh0LWJhc2VgfT57dGl0bGV9PC9wPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYmctc2hhcGVzLTAyXCIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzYWlyYX0gZm9udC1zYWlyYSB0ZXh0LVsjMDkwOTBBXSBmb250LXNlbWlib2xkIHRleHQteHMgbWQ6dGV4dC1zbWB9PlIkIHtwcm9kdWN0UHJpY2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG4vLyBleHBvcnQgY29uc3QgUHJvZHVjdENhcmQgPSAocHJvcHM6IFByb2R1Y3RQcm9wcykgPT4ge1xuLy8gICBjb25zdCB7IGltYWdlLCB0aXRsZSwgcHJpY2UsIGlkIH0gPSBwcm9wc1xuXG4vLyAgIGNvbnN0IGlzTG9hZGluZyA9ICFpbWFnZSB8fCAhdGl0bGUgfHwgIXByaWNlIHx8ICFpZDtcblxuLy8gICByZXR1cm4gaXNMb2FkaW5nID8gPFByb2R1Y3RTa2VsZXRvbkxvYWRlciAvPiA6IDxQcm9kdWN0TGF5b3V0ICB7Li4ucHJvcHN9IC8+O1xuLy8gfSJdLCJuYW1lcyI6WyJzYWlyYSIsIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwiY29udmVydFByb2R1Y3RQcmljZSIsInByaWNlIiwidG9GaXhlZCIsIlByb2R1Y3RMYXlvdXQiLCJpbWFnZSIsInRpdGxlIiwiaWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwcm9kdWN0UHJpY2UiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhcmlhLWhpZGRlbiIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiZGl2IiwicCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductLayout/index.tsx\n"));

/***/ })

});