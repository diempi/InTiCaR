"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./scaffold.config.ts":
/*!****************************!*\
  !*** ./scaffold.config.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _starknet_react_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @starknet-react/chains */ \"(app-pages-browser)/./node_modules/@starknet-react/chains/dist/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/../../../../../../../../../node_modules/process/browser.js\");\n\nconst scaffoldConfig = {\n    targetNetworks: [\n        _starknet_react_chains__WEBPACK_IMPORTED_MODULE_0__.sepolia\n    ],\n    // Only show the Burner Wallet when running on devnet\n    onlyLocalBurnerWallet: false,\n    rpcProviderUrl: process.env.NEXT_PUBLIC_PROVIDER_URL || \"\",\n    // The interval at which your front-end polls the RPC servers for new data\n    // it has no effect if you only target the local network (default is 30_000)\n    pollingInterval: 30000,\n    /**\n   * Auto connect:\n   * 1. If the user was connected into a wallet before, on page reload reconnect automatically\n   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false\n   */ walletAutoConnect: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (scaffoldConfig);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NjYWZmb2xkLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7QUFBaUQ7QUFVakQsTUFBTUMsaUJBQWlCO0lBQ3JCQyxnQkFBZ0I7UUFBQ0YsMkRBQWM7S0FBQztJQUNoQyxxREFBcUQ7SUFDckRJLHVCQUF1QjtJQUN2QkMsZ0JBQWdCQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLHdCQUF3QixJQUFJO0lBQ3hELDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUVDLGlCQUFpQjtJQUNqQjs7OztHQUlDLEdBQ0RDLG1CQUFtQjtBQUNyQjtBQUVBLCtEQUFlVCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NjYWZmb2xkLmNvbmZpZy50cz9jZDcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoYWlucyBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NoYWluc1wiO1xuXG5leHBvcnQgdHlwZSBTY2FmZm9sZENvbmZpZyA9IHtcbiAgdGFyZ2V0TmV0d29ya3M6IHJlYWRvbmx5IGNoYWlucy5DaGFpbltdO1xuICBwb2xsaW5nSW50ZXJ2YWw6IG51bWJlcjtcbiAgb25seUxvY2FsQnVybmVyV2FsbGV0OiBib29sZWFuO1xuICBycGNQcm92aWRlclVybDogc3RyaW5nO1xuICB3YWxsZXRBdXRvQ29ubmVjdDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHNjYWZmb2xkQ29uZmlnID0ge1xuICB0YXJnZXROZXR3b3JrczogW2NoYWlucy5zZXBvbGlhXSxcbiAgLy8gT25seSBzaG93IHRoZSBCdXJuZXIgV2FsbGV0IHdoZW4gcnVubmluZyBvbiBkZXZuZXRcbiAgb25seUxvY2FsQnVybmVyV2FsbGV0OiBmYWxzZSxcbiAgcnBjUHJvdmlkZXJVcmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST1ZJREVSX1VSTCB8fCBcIlwiLFxuICAvLyBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggeW91ciBmcm9udC1lbmQgcG9sbHMgdGhlIFJQQyBzZXJ2ZXJzIGZvciBuZXcgZGF0YVxuICAvLyBpdCBoYXMgbm8gZWZmZWN0IGlmIHlvdSBvbmx5IHRhcmdldCB0aGUgbG9jYWwgbmV0d29yayAoZGVmYXVsdCBpcyAzMF8wMDApXG4gIHBvbGxpbmdJbnRlcnZhbDogMzBfMDAwLFxuICAvKipcbiAgICogQXV0byBjb25uZWN0OlxuICAgKiAxLiBJZiB0aGUgdXNlciB3YXMgY29ubmVjdGVkIGludG8gYSB3YWxsZXQgYmVmb3JlLCBvbiBwYWdlIHJlbG9hZCByZWNvbm5lY3QgYXV0b21hdGljYWxseVxuICAgKiAyLiBJZiB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gYW55IHdhbGxldDogIE9uIHJlbG9hZCwgY29ubmVjdCB0byBidXJuZXIgd2FsbGV0IGlmIGJ1cm5lcldhbGxldC5lbmFibGVkIGlzIHRydWUgJiYgYnVybmVyV2FsbGV0Lm9ubHlMb2NhbCBpcyBmYWxzZVxuICAgKi9cbiAgd2FsbGV0QXV0b0Nvbm5lY3Q6IHRydWUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTY2FmZm9sZENvbmZpZztcblxuZXhwb3J0IGRlZmF1bHQgc2NhZmZvbGRDb25maWc7XG4iXSwibmFtZXMiOlsiY2hhaW5zIiwic2NhZmZvbGRDb25maWciLCJ0YXJnZXROZXR3b3JrcyIsInNlcG9saWEiLCJvbmx5TG9jYWxCdXJuZXJXYWxsZXQiLCJycGNQcm92aWRlclVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QUk9WSURFUl9VUkwiLCJwb2xsaW5nSW50ZXJ2YWwiLCJ3YWxsZXRBdXRvQ29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./scaffold.config.ts\n"));

/***/ })

});