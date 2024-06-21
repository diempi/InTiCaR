"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/zustand/esm/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createStore: () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),\n/* harmony export */   \"default\": () => (/* binding */ react),\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ \"(ssr)/./node_modules/zustand/esm/vanilla.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n\n\n\n\n\nconst { useDebugValue } = react__WEBPACK_IMPORTED_MODULE_1__;\nconst { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;\nlet didWarnAboutEqualityFn = false;\nconst identity = (arg) => arg;\nfunction useStore(api, selector = identity, equalityFn) {\n  if (( false ? 0 : void 0) !== \"production\" && equalityFn && !didWarnAboutEqualityFn) {\n    console.warn(\n      \"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937\"\n    );\n    didWarnAboutEqualityFn = true;\n  }\n  const slice = useSyncExternalStoreWithSelector(\n    api.subscribe,\n    api.getState,\n    api.getServerState || api.getInitialState,\n    selector,\n    equalityFn\n  );\n  useDebugValue(slice);\n  return slice;\n}\nconst createImpl = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\" && typeof createState !== \"function\") {\n    console.warn(\n      \"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.\"\n    );\n  }\n  const api = typeof createState === \"function\" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;\n  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);\n  Object.assign(useBoundStore, api);\n  return useBoundStore;\n};\nconst create = (createState) => createState ? createImpl(createState) : createImpl;\nvar react = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.\"\n    );\n  }\n  return create(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNDO0FBQ3VEOztBQUV4RixRQUFRLGdCQUFnQixFQUFFLGtDQUFZO0FBQ3RDLFFBQVEsbUNBQW1DLEVBQUUsMEVBQTJCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFlLEdBQUcsQ0FBb0I7QUFDN0M7QUFDQSwyR0FBMkcsV0FBVztBQUN0SDtBQUNBO0FBQ0Esa0RBQWtELDREQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0Esd0VBQXdFLFNBQVM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7O0FBRThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNzLTIvbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL2luZGV4Lm1qcz80MWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJztcbmV4cG9ydCAqIGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5pbXBvcnQgUmVhY3RFeHBvcnRzIGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHMgZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzJztcblxuY29uc3QgeyB1c2VEZWJ1Z1ZhbHVlIH0gPSBSZWFjdEV4cG9ydHM7XG5jb25zdCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIH0gPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHM7XG5sZXQgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IGZhbHNlO1xuY29uc3QgaWRlbnRpdHkgPSAoYXJnKSA9PiBhcmc7XG5mdW5jdGlvbiB1c2VTdG9yZShhcGksIHNlbGVjdG9yID0gaWRlbnRpdHksIGVxdWFsaXR5Rm4pIHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIGVxdWFsaXR5Rm4gJiYgIWRpZFdhcm5BYm91dEVxdWFsaXR5Rm4pIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBVc2UgYGNyZWF0ZVdpdGhFcXVhbGl0eUZuYCBpbnN0ZWFkIG9mIGBjcmVhdGVgIG9yIHVzZSBgdXNlU3RvcmVXaXRoRXF1YWxpdHlGbmAgaW5zdGVhZCBvZiBgdXNlU3RvcmVgLiBUaGV5IGNhbiBiZSBpbXBvcnRlZCBmcm9tICd6dXN0YW5kL3RyYWRpdGlvbmFsJy4gaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL2Rpc2N1c3Npb25zLzE5MzdcIlxuICAgICk7XG4gICAgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2xpY2UgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICBhcGkuc3Vic2NyaWJlLFxuICAgIGFwaS5nZXRTdGF0ZSxcbiAgICBhcGkuZ2V0U2VydmVyU3RhdGUgfHwgYXBpLmdldEluaXRpYWxTdGF0ZSxcbiAgICBzZWxlY3RvcixcbiAgICBlcXVhbGl0eUZuXG4gICk7XG4gIHVzZURlYnVnVmFsdWUoc2xpY2UpO1xuICByZXR1cm4gc2xpY2U7XG59XG5jb25zdCBjcmVhdGVJbXBsID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgY3JlYXRlU3RhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIFBhc3NpbmcgYSB2YW5pbGxhIHN0b3JlIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBhcGkgPSB0eXBlb2YgY3JlYXRlU3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0YXRlO1xuICBjb25zdCB1c2VCb3VuZFN0b3JlID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuKSA9PiB1c2VTdG9yZShhcGksIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgT2JqZWN0LmFzc2lnbih1c2VCb3VuZFN0b3JlLCBhcGkpO1xuICByZXR1cm4gdXNlQm91bmRTdG9yZTtcbn07XG5jb25zdCBjcmVhdGUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVJbXBsO1xudmFyIHJlYWN0ID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGBpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJ2AuXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGUoY3JlYXRlU3RhdGUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlLCByZWFjdCBhcyBkZWZhdWx0LCB1c2VTdG9yZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/vanilla.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   \"default\": () => (/* binding */ vanilla)\n/* harmony export */ });\nconst createStoreImpl = (createState) => {\n  let state;\n  const listeners = /* @__PURE__ */ new Set();\n  const setState = (partial, replace) => {\n    const nextState = typeof partial === \"function\" ? partial(state) : partial;\n    if (!Object.is(nextState, state)) {\n      const previousState = state;\n      state = (replace != null ? replace : typeof nextState !== \"object\" || nextState === null) ? nextState : Object.assign({}, state, nextState);\n      listeners.forEach((listener) => listener(state, previousState));\n    }\n  };\n  const getState = () => state;\n  const getInitialState = () => initialState;\n  const subscribe = (listener) => {\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  };\n  const destroy = () => {\n    if (( false ? 0 : void 0) !== \"production\") {\n      console.warn(\n        \"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.\"\n      );\n    }\n    listeners.clear();\n  };\n  const api = { setState, getState, getInitialState, subscribe, destroy };\n  const initialState = state = createState(setState, getState, api);\n  return api;\n};\nconst createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;\nvar vanilla = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.\"\n    );\n  }\n  return createStore(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBZSxHQUFHLENBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFlLEdBQUcsQ0FBb0I7QUFDN0M7QUFDQSx1RUFBdUUsY0FBYztBQUNyRjtBQUNBO0FBQ0E7QUFDQTs7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3MtMi9uZXh0anMvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanM/YzFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVTdG9yZUltcGwgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgbGV0IHN0YXRlO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBzZXRTdGF0ZSA9IChwYXJ0aWFsLCByZXBsYWNlKSA9PiB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gdHlwZW9mIHBhcnRpYWwgPT09IFwiZnVuY3Rpb25cIiA/IHBhcnRpYWwoc3RhdGUpIDogcGFydGlhbDtcbiAgICBpZiAoIU9iamVjdC5pcyhuZXh0U3RhdGUsIHN0YXRlKSkge1xuICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHN0YXRlO1xuICAgICAgc3RhdGUgPSAocmVwbGFjZSAhPSBudWxsID8gcmVwbGFjZSA6IHR5cGVvZiBuZXh0U3RhdGUgIT09IFwib2JqZWN0XCIgfHwgbmV4dFN0YXRlID09PSBudWxsKSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4gaW5pdGlhbFN0YXRlO1xuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW0RFUFJFQ0FURURdIFRoZSBgZGVzdHJveWAgbWV0aG9kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgdW5zdWJzY3JpYmUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgc3Vic2NyaWJlLiBFdmVyeXRoaW5nIHdpbGwgYmUgZ2FyYmFnZS1jb2xsZWN0ZWQgaWYgc3RvcmUgaXMgZ2FyYmFnZS1jb2xsZWN0ZWQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICB9O1xuICBjb25zdCBhcGkgPSB7IHNldFN0YXRlLCBnZXRTdGF0ZSwgZ2V0SW5pdGlhbFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gc3RhdGUgPSBjcmVhdGVTdGF0ZShzZXRTdGF0ZSwgZ2V0U3RhdGUsIGFwaSk7XG4gIHJldHVybiBhcGk7XG59O1xuY29uc3QgY3JlYXRlU3RvcmUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlU3RvcmVJbXBsKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0b3JlSW1wbDtcbnZhciB2YW5pbGxhID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJy5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCB2YW5pbGxhIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/vanilla.mjs\n");

/***/ })

};
;