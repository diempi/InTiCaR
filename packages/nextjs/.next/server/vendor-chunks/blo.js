"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blo";
exports.ids = ["vendor-chunks/blo"];
exports.modules = {

/***/ "(ssr)/./node_modules/blo/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/blo/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blo: () => (/* binding */ b),\n/* harmony export */   bloImage: () => (/* binding */ x),\n/* harmony export */   bloSvg: () => (/* binding */ v)\n/* harmony export */ });\nfunction h(n) {\n  const t = d(n);\n  return function() {\n    const e = t[0] ^ t[0] << 11;\n    return t[0] = t[1], t[1] = t[2], t[2] = t[3], t[3] = t[3] ^ t[3] >> 19 ^ e ^ e >> 8, (t[3] >>> 0) / (1 << 31 >>> 0);\n  };\n}\nfunction d(n) {\n  const t = new Uint32Array([0, 0, 0, 0]);\n  for (let o = 0; o < n.length; o++)\n    t[o % 4] = (t[o % 4] << 5) - t[o % 4] + n.charCodeAt(o);\n  return t;\n}\nfunction g(n) {\n  const t = h(n.toLowerCase()), o = $(t);\n  return [m(t), o];\n}\nfunction m(n) {\n  const t = new Uint8Array(32);\n  for (let o = 0; o < 32; o++)\n    t[o] = Math.floor(\n      // background: 43% chances\n      // color:      43% chances\n      // spot:       13% chances\n      n() * 2.3\n    );\n  return t;\n}\nfunction $(n) {\n  const t = u(n), o = u(n), e = u(n);\n  return [o, t, e];\n}\nfunction u(n) {\n  return new Uint16Array([\n    // hue = 0 to 360 (whole color spectrum)\n    n() * 360,\n    // saturation = 40 to 100 (avoid greyish colors)\n    40 + n() * 60,\n    // lightness = 0 to 100 but probabilities are a bell curve around 50%\n    (n() + n() + n() + n()) * 25\n  ]);\n}\nconst w = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 8\" shape-rendering=\"optimizeSpeed\" ';\nfunction p(n, t) {\n  const o = h(n.toLowerCase()), [e, s, c] = $(o), r = [\n    \"M0,0H8V8H0z\",\n    // background\n    \"\",\n    // color\n    \"\"\n    // spot\n  ];\n  for (let a = 0, i, l; a < 32; a++) {\n    i = a % 4, l = Math.floor(a / 4);\n    const f = Math.floor(o() * 2.3);\n    f > 0 && (r[f] += `M${i},${l}h1v1h-1zM${7 - i},${l}h1v1h-1z`);\n  }\n  return `${w}width=\"${t}\" height=\"${t}\"><path fill=\"hsl(${e[0]} ${e[1]}% ${e[2]}%)\" d=\"${r[0]}\"/><path fill=\"hsl(${s[0]} ${s[1]}% ${s[2]}%)\" d=\"${r[1]}\"/><path fill=\"hsl(${c[0]} ${c[1]}% ${c[2]}%)\" d=\"${r[2]}\"/></svg>`;\n}\nfunction b(n, t = 64) {\n  return \"data:image/svg+xml;base64,\" + btoa(v(n, t));\n}\nfunction v(n, t = 64) {\n  return p(n, t);\n}\nfunction x(n) {\n  return g(n);\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmxvL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRSxHQUFHLEVBQUUsV0FBVyxNQUFNLEdBQUcsRUFBRTtBQUN2RDtBQUNBLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixNQUFNLEVBQUUsS0FBSyxJQUFJLEtBQUssU0FBUyxLQUFLLHFCQUFxQixNQUFNLEVBQUUsS0FBSyxJQUFJLEtBQUssU0FBUyxLQUFLLHFCQUFxQixNQUFNLEVBQUUsS0FBSyxJQUFJLEtBQUssU0FBUyxLQUFLO0FBQ2pOO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNzLTIvbmV4dGpzLy4vbm9kZV9tb2R1bGVzL2Jsby9kaXN0L2luZGV4LmpzPzI2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaChuKSB7XG4gIGNvbnN0IHQgPSBkKG4pO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZSA9IHRbMF0gXiB0WzBdIDw8IDExO1xuICAgIHJldHVybiB0WzBdID0gdFsxXSwgdFsxXSA9IHRbMl0sIHRbMl0gPSB0WzNdLCB0WzNdID0gdFszXSBeIHRbM10gPj4gMTkgXiBlIF4gZSA+PiA4LCAodFszXSA+Pj4gMCkgLyAoMSA8PCAzMSA+Pj4gMCk7XG4gIH07XG59XG5mdW5jdGlvbiBkKG4pIHtcbiAgY29uc3QgdCA9IG5ldyBVaW50MzJBcnJheShbMCwgMCwgMCwgMF0pO1xuICBmb3IgKGxldCBvID0gMDsgbyA8IG4ubGVuZ3RoOyBvKyspXG4gICAgdFtvICUgNF0gPSAodFtvICUgNF0gPDwgNSkgLSB0W28gJSA0XSArIG4uY2hhckNvZGVBdChvKTtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnKG4pIHtcbiAgY29uc3QgdCA9IGgobi50b0xvd2VyQ2FzZSgpKSwgbyA9ICQodCk7XG4gIHJldHVybiBbbSh0KSwgb107XG59XG5mdW5jdGlvbiBtKG4pIHtcbiAgY29uc3QgdCA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgZm9yIChsZXQgbyA9IDA7IG8gPCAzMjsgbysrKVxuICAgIHRbb10gPSBNYXRoLmZsb29yKFxuICAgICAgLy8gYmFja2dyb3VuZDogNDMlIGNoYW5jZXNcbiAgICAgIC8vIGNvbG9yOiAgICAgIDQzJSBjaGFuY2VzXG4gICAgICAvLyBzcG90OiAgICAgICAxMyUgY2hhbmNlc1xuICAgICAgbigpICogMi4zXG4gICAgKTtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiAkKG4pIHtcbiAgY29uc3QgdCA9IHUobiksIG8gPSB1KG4pLCBlID0gdShuKTtcbiAgcmV0dXJuIFtvLCB0LCBlXTtcbn1cbmZ1bmN0aW9uIHUobikge1xuICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAvLyBodWUgPSAwIHRvIDM2MCAod2hvbGUgY29sb3Igc3BlY3RydW0pXG4gICAgbigpICogMzYwLFxuICAgIC8vIHNhdHVyYXRpb24gPSA0MCB0byAxMDAgKGF2b2lkIGdyZXlpc2ggY29sb3JzKVxuICAgIDQwICsgbigpICogNjAsXG4gICAgLy8gbGlnaHRuZXNzID0gMCB0byAxMDAgYnV0IHByb2JhYmlsaXRpZXMgYXJlIGEgYmVsbCBjdXJ2ZSBhcm91bmQgNTAlXG4gICAgKG4oKSArIG4oKSArIG4oKSArIG4oKSkgKiAyNVxuICBdKTtcbn1cbmNvbnN0IHcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA4IDhcIiBzaGFwZS1yZW5kZXJpbmc9XCJvcHRpbWl6ZVNwZWVkXCIgJztcbmZ1bmN0aW9uIHAobiwgdCkge1xuICBjb25zdCBvID0gaChuLnRvTG93ZXJDYXNlKCkpLCBbZSwgcywgY10gPSAkKG8pLCByID0gW1xuICAgIFwiTTAsMEg4VjhIMHpcIixcbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgXCJcIixcbiAgICAvLyBjb2xvclxuICAgIFwiXCJcbiAgICAvLyBzcG90XG4gIF07XG4gIGZvciAobGV0IGEgPSAwLCBpLCBsOyBhIDwgMzI7IGErKykge1xuICAgIGkgPSBhICUgNCwgbCA9IE1hdGguZmxvb3IoYSAvIDQpO1xuICAgIGNvbnN0IGYgPSBNYXRoLmZsb29yKG8oKSAqIDIuMyk7XG4gICAgZiA+IDAgJiYgKHJbZl0gKz0gYE0ke2l9LCR7bH1oMXYxaC0xek0kezcgLSBpfSwke2x9aDF2MWgtMXpgKTtcbiAgfVxuICByZXR1cm4gYCR7d313aWR0aD1cIiR7dH1cIiBoZWlnaHQ9XCIke3R9XCI+PHBhdGggZmlsbD1cImhzbCgke2VbMF19ICR7ZVsxXX0lICR7ZVsyXX0lKVwiIGQ9XCIke3JbMF19XCIvPjxwYXRoIGZpbGw9XCJoc2woJHtzWzBdfSAke3NbMV19JSAke3NbMl19JSlcIiBkPVwiJHtyWzFdfVwiLz48cGF0aCBmaWxsPVwiaHNsKCR7Y1swXX0gJHtjWzFdfSUgJHtjWzJdfSUpXCIgZD1cIiR7clsyXX1cIi8+PC9zdmc+YDtcbn1cbmZ1bmN0aW9uIGIobiwgdCA9IDY0KSB7XG4gIHJldHVybiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKHYobiwgdCkpO1xufVxuZnVuY3Rpb24gdihuLCB0ID0gNjQpIHtcbiAgcmV0dXJuIHAobiwgdCk7XG59XG5mdW5jdGlvbiB4KG4pIHtcbiAgcmV0dXJuIGcobik7XG59XG5leHBvcnQge1xuICBiIGFzIGJsbyxcbiAgeCBhcyBibG9JbWFnZSxcbiAgdiBhcyBibG9Tdmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/blo/dist/index.js\n");

/***/ })

};
;