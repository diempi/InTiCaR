"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/punycode";
exports.ids = ["vendor-chunks/punycode"];
exports.modules = {
  /***/ "(ssr)/./node_modules/punycode/punycode.es6.js":
    /*!***********************************************!*\
  !*** ./node_modules/punycode/punycode.es6.js ***!
  \***********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   encode: () => (/* binding */ encode),\n/* harmony export */   toASCII: () => (/* binding */ toASCII),\n/* harmony export */   toUnicode: () => (/* binding */ toUnicode),\n/* harmony export */   ucs2decode: () => (/* binding */ ucs2decode),\n/* harmony export */   ucs2encode: () => (/* binding */ ucs2encode)\n/* harmony export */ });\n\n\n/** Highest positive signed 32-bit float value */\nconst maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1\n\n/** Bootstring parameters */\nconst base = 36;\nconst tMin = 1;\nconst tMax = 26;\nconst skew = 38;\nconst damp = 700;\nconst initialBias = 72;\nconst initialN = 128; // 0x80\nconst delimiter = '-'; // '\\x2D'\n\n/** Regular expressions */\nconst regexPunycode = /^xn--/;\nconst regexNonASCII = /[^\\0-\\x7F]/; // Note: U+007F DEL is excluded too.\nconst regexSeparators = /[\\x2E\\u3002\\uFF0E\\uFF61]/g; // RFC 3490 separators\n\n/** Error messages */\nconst errors = {\n\t'overflow': 'Overflow: input needs wider integers to process',\n\t'not-basic': 'Illegal input >= 0x80 (not a basic code point)',\n\t'invalid-input': 'Invalid input'\n};\n\n/** Convenience shortcuts */\nconst baseMinusTMin = base - tMin;\nconst floor = Math.floor;\nconst stringFromCharCode = String.fromCharCode;\n\n/*--------------------------------------------------------------------------*/\n\n/**\n * A generic error utility function.\n * @private\n * @param {String} type The error type.\n * @returns {Error} Throws a `RangeError` with the applicable error message.\n */\nfunction error(type) {\n\tthrow new RangeError(errors[type]);\n}\n\n/**\n * A generic `Array#map` utility function.\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} callback The function that gets called for every array\n * item.\n * @returns {Array} A new array of values returned by the callback function.\n */\nfunction map(array, callback) {\n\tconst result = [];\n\tlet length = array.length;\n\twhile (length--) {\n\t\tresult[length] = callback(array[length]);\n\t}\n\treturn result;\n}\n\n/**\n * A simple `Array#map`-like wrapper to work with domain name strings or email\n * addresses.\n * @private\n * @param {String} domain The domain name or email address.\n * @param {Function} callback The function that gets called for every\n * character.\n * @returns {String} A new string of characters returned by the callback\n * function.\n */\nfunction mapDomain(domain, callback) {\n\tconst parts = domain.split('@');\n\tlet result = '';\n\tif (parts.length > 1) {\n\t\t// In email addresses, only the domain name should be punycoded. Leave\n\t\t// the local part (i.e. everything up to `@`) intact.\n\t\tresult = parts[0] + '@';\n\t\tdomain = parts[1];\n\t}\n\t// Avoid `split(regex)` for IE8 compatibility. See #17.\n\tdomain = domain.replace(regexSeparators, '\\x2E');\n\tconst labels = domain.split('.');\n\tconst encoded = map(labels, callback).join('.');\n\treturn result + encoded;\n}\n\n/**\n * Creates an array containing the numeric code points of each Unicode\n * character in the string. While JavaScript uses UCS-2 internally,\n * this function will convert a pair of surrogate halves (each of which\n * UCS-2 exposes as separate characters) into a single code point,\n * matching UTF-16.\n * @see `punycode.ucs2.encode`\n * @see <https://mathiasbynens.be/notes/javascript-encoding>\n * @memberOf punycode.ucs2\n * @name decode\n * @param {String} string The Unicode input string (UCS-2).\n * @returns {Array} The new array of code points.\n */\nfunction ucs2decode(string) {\n\tconst output = [];\n\tlet counter = 0;\n\tconst length = string.length;\n\twhile (counter < length) {\n\t\tconst value = string.charCodeAt(counter++);\n\t\tif (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n\t\t\t// It's a high surrogate, and there is a next character.\n\t\t\tconst extra = string.charCodeAt(counter++);\n\t\t\tif ((extra & 0xFC00) == 0xDC00) { // Low surrogate.\n\t\t\t\toutput.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n\t\t\t} else {\n\t\t\t\t// It's an unmatched surrogate; only append this code unit, in case the\n\t\t\t\t// next code unit is the high surrogate of a surrogate pair.\n\t\t\t\toutput.push(value);\n\t\t\t\tcounter--;\n\t\t\t}\n\t\t} else {\n\t\t\toutput.push(value);\n\t\t}\n\t}\n\treturn output;\n}\n\n/**\n * Creates a string based on an array of numeric code points.\n * @see `punycode.ucs2.decode`\n * @memberOf punycode.ucs2\n * @name encode\n * @param {Array} codePoints The array of numeric code points.\n * @returns {String} The new Unicode string (UCS-2).\n */\nconst ucs2encode = codePoints => String.fromCodePoint(...codePoints);\n\n/**\n * Converts a basic code point into a digit/integer.\n * @see `digitToBasic()`\n * @private\n * @param {Number} codePoint The basic numeric code point value.\n * @returns {Number} The numeric value of a basic code point (for use in\n * representing integers) in the range `0` to `base - 1`, or `base` if\n * the code point does not represent a value.\n */\nconst basicToDigit = function(codePoint) {\n\tif (codePoint >= 0x30 && codePoint < 0x3A) {\n\t\treturn 26 + (codePoint - 0x30);\n\t}\n\tif (codePoint >= 0x41 && codePoint < 0x5B) {\n\t\treturn codePoint - 0x41;\n\t}\n\tif (codePoint >= 0x61 && codePoint < 0x7B) {\n\t\treturn codePoint - 0x61;\n\t}\n\treturn base;\n};\n\n/**\n * Converts a digit/integer into a basic code point.\n * @see `basicToDigit()`\n * @private\n * @param {Number} digit The numeric value of a basic code point.\n * @returns {Number} The basic code point whose value (when used for\n * representing integers) is `digit`, which needs to be in the range\n * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is\n * used; else, the lowercase form is used. The behavior is undefined\n * if `flag` is non-zero and `digit` has no uppercase form.\n */\nconst digitToBasic = function(digit, flag) {\n\t//  0..25 map to ASCII a..z or A..Z\n\t// 26..35 map to ASCII 0..9\n\treturn digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);\n};\n\n/**\n * Bias adaptation function as per section 3.4 of RFC 3492.\n * https://tools.ietf.org/html/rfc3492#section-3.4\n * @private\n */\nconst adapt = function(delta, numPoints, firstTime) {\n\tlet k = 0;\n\tdelta = firstTime ? floor(delta / damp) : delta >> 1;\n\tdelta += floor(delta / numPoints);\n\tfor (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {\n\t\tdelta = floor(delta / baseMinusTMin);\n\t}\n\treturn floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n};\n\n/**\n * Converts a Punycode string of ASCII-only symbols to a string of Unicode\n * symbols.\n * @memberOf punycode\n * @param {String} input The Punycode string of ASCII-only symbols.\n * @returns {String} The resulting string of Unicode symbols.\n */\nconst decode = function(input) {\n\t// Don't use UCS-2.\n\tconst output = [];\n\tconst inputLength = input.length;\n\tlet i = 0;\n\tlet n = initialN;\n\tlet bias = initialBias;\n\n\t// Handle the basic code points: let `basic` be the number of input code\n\t// points before the last delimiter, or `0` if there is none, then copy\n\t// the first basic code points to the output.\n\n\tlet basic = input.lastIndexOf(delimiter);\n\tif (basic < 0) {\n\t\tbasic = 0;\n\t}\n\n\tfor (let j = 0; j < basic; ++j) {\n\t\t// if it's not a basic code point\n\t\tif (input.charCodeAt(j) >= 0x80) {\n\t\t\terror('not-basic');\n\t\t}\n\t\toutput.push(input.charCodeAt(j));\n\t}\n\n\t// Main decoding loop: start just after the last delimiter if any basic code\n\t// points were copied; start at the beginning otherwise.\n\n\tfor (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {\n\n\t\t// `index` is the index of the next character to be consumed.\n\t\t// Decode a generalized variable-length integer into `delta`,\n\t\t// which gets added to `i`. The overflow checking is easier\n\t\t// if we increase `i` as we go, then subtract off its starting\n\t\t// value at the end to obtain `delta`.\n\t\tconst oldi = i;\n\t\tfor (let w = 1, k = base; /* no condition */; k += base) {\n\n\t\t\tif (index >= inputLength) {\n\t\t\t\terror('invalid-input');\n\t\t\t}\n\n\t\t\tconst digit = basicToDigit(input.charCodeAt(index++));\n\n\t\t\tif (digit >= base) {\n\t\t\t\terror('invalid-input');\n\t\t\t}\n\t\t\tif (digit > floor((maxInt - i) / w)) {\n\t\t\t\terror('overflow');\n\t\t\t}\n\n\t\t\ti += digit * w;\n\t\t\tconst t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n\n\t\t\tif (digit < t) {\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tconst baseMinusT = base - t;\n\t\t\tif (w > floor(maxInt / baseMinusT)) {\n\t\t\t\terror('overflow');\n\t\t\t}\n\n\t\t\tw *= baseMinusT;\n\n\t\t}\n\n\t\tconst out = output.length + 1;\n\t\tbias = adapt(i - oldi, out, oldi == 0);\n\n\t\t// `i` was supposed to wrap around from `out` to `0`,\n\t\t// incrementing `n` each time, so we'll fix that now:\n\t\tif (floor(i / out) > maxInt - n) {\n\t\t\terror('overflow');\n\t\t}\n\n\t\tn += floor(i / out);\n\t\ti %= out;\n\n\t\t// Insert `n` at position `i` of the output.\n\t\toutput.splice(i++, 0, n);\n\n\t}\n\n\treturn String.fromCodePoint(...output);\n};\n\n/**\n * Converts a string of Unicode symbols (e.g. a domain name label) to a\n * Punycode string of ASCII-only symbols.\n * @memberOf punycode\n * @param {String} input The string of Unicode symbols.\n * @returns {String} The resulting Punycode string of ASCII-only symbols.\n */\nconst encode = function(input) {\n\tconst output = [];\n\n\t// Convert the input in UCS-2 to an array of Unicode code points.\n\tinput = ucs2decode(input);\n\n\t// Cache the length.\n\tconst inputLength = input.length;\n\n\t// Initialize the state.\n\tlet n = initialN;\n\tlet delta = 0;\n\tlet bias = initialBias;\n\n\t// Handle the basic code points.\n\tfor (const currentValue of input) {\n\t\tif (currentValue < 0x80) {\n\t\t\toutput.push(stringFromCharCode(currentValue));\n\t\t}\n\t}\n\n\tconst basicLength = output.length;\n\tlet handledCPCount = basicLength;\n\n\t// `handledCPCount` is the number of code points that have been handled;\n\t// `basicLength` is the number of basic code points.\n\n\t// Finish the basic string with a delimiter unless it's empty.\n\tif (basicLength) {\n\t\toutput.push(delimiter);\n\t}\n\n\t// Main encoding loop:\n\twhile (handledCPCount < inputLength) {\n\n\t\t// All non-basic code points < n have been handled already. Find the next\n\t\t// larger one:\n\t\tlet m = maxInt;\n\t\tfor (const currentValue of input) {\n\t\t\tif (currentValue >= n && currentValue < m) {\n\t\t\t\tm = currentValue;\n\t\t\t}\n\t\t}\n\n\t\t// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,\n\t\t// but guard against overflow.\n\t\tconst handledCPCountPlusOne = handledCPCount + 1;\n\t\tif (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n\t\t\terror('overflow');\n\t\t}\n\n\t\tdelta += (m - n) * handledCPCountPlusOne;\n\t\tn = m;\n\n\t\tfor (const currentValue of input) {\n\t\t\tif (currentValue < n && ++delta > maxInt) {\n\t\t\t\terror('overflow');\n\t\t\t}\n\t\t\tif (currentValue === n) {\n\t\t\t\t// Represent delta as a generalized variable-length integer.\n\t\t\t\tlet q = delta;\n\t\t\t\tfor (let k = base; /* no condition */; k += base) {\n\t\t\t\t\tconst t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n\t\t\t\t\tif (q < t) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tconst qMinusT = q - t;\n\t\t\t\t\tconst baseMinusT = base - t;\n\t\t\t\t\toutput.push(\n\t\t\t\t\t\tstringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))\n\t\t\t\t\t);\n\t\t\t\t\tq = floor(qMinusT / baseMinusT);\n\t\t\t\t}\n\n\t\t\t\toutput.push(stringFromCharCode(digitToBasic(q, 0)));\n\t\t\t\tbias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);\n\t\t\t\tdelta = 0;\n\t\t\t\t++handledCPCount;\n\t\t\t}\n\t\t}\n\n\t\t++delta;\n\t\t++n;\n\n\t}\n\treturn output.join('');\n};\n\n/**\n * Converts a Punycode string representing a domain name or an email address\n * to Unicode. Only the Punycoded parts of the input will be converted, i.e.\n * it doesn't matter if you call it on a string that has already been\n * converted to Unicode.\n * @memberOf punycode\n * @param {String} input The Punycoded domain name or email address to\n * convert to Unicode.\n * @returns {String} The Unicode representation of the given Punycode\n * string.\n */\nconst toUnicode = function(input) {\n\treturn mapDomain(input, function(string) {\n\t\treturn regexPunycode.test(string)\n\t\t\t? decode(string.slice(4).toLowerCase())\n\t\t\t: string;\n\t});\n};\n\n/**\n * Converts a Unicode string representing a domain name or an email address to\n * Punycode. Only the non-ASCII parts of the domain name will be converted,\n * i.e. it doesn't matter if you call it with a domain that's already in\n * ASCII.\n * @memberOf punycode\n * @param {String} input The domain name or email address to convert, as a\n * Unicode string.\n * @returns {String} The Punycode representation of the given domain name or\n * email address.\n */\nconst toASCII = function(input) {\n\treturn mapDomain(input, function(string) {\n\t\treturn regexNonASCII.test(string)\n\t\t\t? 'xn--' + encode(string)\n\t\t\t: string;\n\t});\n};\n\n/*--------------------------------------------------------------------------*/\n\n/** Define the public API */\nconst punycode = {\n\t/**\n\t * A string representing the current Punycode.js version number.\n\t * @memberOf punycode\n\t * @type String\n\t */\n\t'version': '2.3.1',\n\t/**\n\t * An object of methods to convert from JavaScript's internal character\n\t * representation (UCS-2) to Unicode code points, and back.\n\t * @see <https://mathiasbynens.be/notes/javascript-encoding>\n\t * @memberOf punycode\n\t * @type Object\n\t */\n\t'ucs2': {\n\t\t'decode': ucs2decode,\n\t\t'encode': ucs2encode\n\t},\n\t'decode': decode,\n\t'encode': encode,\n\t'toASCII': toASCII,\n\t'toUnicode': toUnicode\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (punycode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHVueWNvZGUvcHVueWNvZGUuZXM2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCLDZDQUE2QyxxQkFBcUI7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRTtBQUN0RSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3MtMi9uZXh0anMvLi9ub2RlX21vZHVsZXMvcHVueWNvZGUvcHVueWNvZGUuZXM2LmpzPzdjMzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5jb25zdCBtYXhJbnQgPSAyMTQ3NDgzNjQ3OyAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cbi8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cbmNvbnN0IGJhc2UgPSAzNjtcbmNvbnN0IHRNaW4gPSAxO1xuY29uc3QgdE1heCA9IDI2O1xuY29uc3Qgc2tldyA9IDM4O1xuY29uc3QgZGFtcCA9IDcwMDtcbmNvbnN0IGluaXRpYWxCaWFzID0gNzI7XG5jb25zdCBpbml0aWFsTiA9IDEyODsgLy8gMHg4MFxuY29uc3QgZGVsaW1pdGVyID0gJy0nOyAvLyAnXFx4MkQnXG5cbi8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5jb25zdCByZWdleFB1bnljb2RlID0gL154bi0tLztcbmNvbnN0IHJlZ2V4Tm9uQVNDSUkgPSAvW15cXDAtXFx4N0ZdLzsgLy8gTm90ZTogVSswMDdGIERFTCBpcyBleGNsdWRlZCB0b28uXG5jb25zdCByZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nOyAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cbi8qKiBFcnJvciBtZXNzYWdlcyAqL1xuY29uc3QgZXJyb3JzID0ge1xuXHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xufTtcblxuLyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuY29uc3QgYmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluO1xuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuY29uc3Qgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoZXJyb3JzW3R5cGVdKTtcbn1cblxuLyoqXG4gKiBBIGdlbmVyaWMgYEFycmF5I21hcGAgdXRpbGl0eSBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGFycmF5XG4gKiBpdGVtLlxuICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRsZXQgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHR3aGlsZSAobGVuZ3RoLS0pIHtcblx0XHRyZXN1bHRbbGVuZ3RoXSA9IGNhbGxiYWNrKGFycmF5W2xlbmd0aF0pO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgYEFycmF5I21hcGAtbGlrZSB3cmFwcGVyIHRvIHdvcmsgd2l0aCBkb21haW4gbmFtZSBzdHJpbmdzIG9yIGVtYWlsXG4gKiBhZGRyZXNzZXMuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuICogY2hhcmFjdGVyLlxuICogQHJldHVybnMge1N0cmluZ30gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWFwRG9tYWluKGRvbWFpbiwgY2FsbGJhY2spIHtcblx0Y29uc3QgcGFydHMgPSBkb21haW4uc3BsaXQoJ0AnKTtcblx0bGV0IHJlc3VsdCA9ICcnO1xuXHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdGRvbWFpbiA9IHBhcnRzWzFdO1xuXHR9XG5cdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0ZG9tYWluID0gZG9tYWluLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0Y29uc3QgbGFiZWxzID0gZG9tYWluLnNwbGl0KCcuJyk7XG5cdGNvbnN0IGVuY29kZWQgPSBtYXAobGFiZWxzLCBjYWxsYmFjaykuam9pbignLicpO1xuXHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG4gKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG4gKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG4gKiBtYXRjaGluZyBVVEYtMTYuXG4gKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcbiAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcbiAqIEBuYW1lIGRlY29kZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIG5ldyBhcnJheSBvZiBjb2RlIHBvaW50cy5cbiAqL1xuZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0Y29uc3Qgb3V0cHV0ID0gW107XG5cdGxldCBjb3VudGVyID0gMDtcblx0Y29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0Ly8gSXQncyBhIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3Rlci5cblx0XHRcdGNvbnN0IGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBMb3cgc3Vycm9nYXRlLlxuXHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSXQncyBhbiB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGVcblx0XHRcdFx0Ly8gbmV4dCBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuXG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG4gKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuICogQG5hbWUgZW5jb2RlXG4gKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuICovXG5jb25zdCB1Y3MyZW5jb2RlID0gY29kZVBvaW50cyA9PiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGJhc2ljIGNvZGUgcG9pbnQgaW50byBhIGRpZ2l0L2ludGVnZXIuXG4gKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZVBvaW50IFRoZSBiYXNpYyBudW1lcmljIGNvZGUgcG9pbnQgdmFsdWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cbiAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcbiAqIHRoZSBjb2RlIHBvaW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbHVlLlxuICovXG5jb25zdCBiYXNpY1RvRGlnaXQgPSBmdW5jdGlvbihjb2RlUG9pbnQpIHtcblx0aWYgKGNvZGVQb2ludCA+PSAweDMwICYmIGNvZGVQb2ludCA8IDB4M0EpIHtcblx0XHRyZXR1cm4gMjYgKyAoY29kZVBvaW50IC0gMHgzMCk7XG5cdH1cblx0aWYgKGNvZGVQb2ludCA+PSAweDQxICYmIGNvZGVQb2ludCA8IDB4NUIpIHtcblx0XHRyZXR1cm4gY29kZVBvaW50IC0gMHg0MTtcblx0fVxuXHRpZiAoY29kZVBvaW50ID49IDB4NjEgJiYgY29kZVBvaW50IDwgMHg3Qikge1xuXHRcdHJldHVybiBjb2RlUG9pbnQgLSAweDYxO1xuXHR9XG5cdHJldHVybiBiYXNlO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG4gKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3JcbiAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaXMgYGRpZ2l0YCwgd2hpY2ggbmVlZHMgdG8gYmUgaW4gdGhlIHJhbmdlXG4gKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcbiAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG4gKiBpZiBgZmxhZ2AgaXMgbm9uLXplcm8gYW5kIGBkaWdpdGAgaGFzIG5vIHVwcGVyY2FzZSBmb3JtLlxuICovXG5jb25zdCBkaWdpdFRvQmFzaWMgPSBmdW5jdGlvbihkaWdpdCwgZmxhZykge1xuXHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHQvLyAyNi4uMzUgbWFwIHRvIEFTQ0lJIDAuLjlcblx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcbn07XG5cbi8qKlxuICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNDkyI3NlY3Rpb24tMy40XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBhZGFwdCA9IGZ1bmN0aW9uKGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRsZXQgayA9IDA7XG5cdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0Zm9yICgvKiBubyBpbml0aWFsaXphdGlvbiAqLzsgZGVsdGEgPiBiYXNlTWludXNUTWluICogdE1heCA+PiAxOyBrICs9IGJhc2UpIHtcblx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdH1cblx0cmV0dXJuIGZsb29yKGsgKyAoYmFzZU1pbnVzVE1pbiArIDEpICogZGVsdGEgLyAoZGVsdGEgKyBza2V3KSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG4gKiBzeW1ib2xzLlxuICogQG1lbWJlck9mIHB1bnljb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKi9cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdC8vIERvbid0IHVzZSBVQ1MtMi5cblx0Y29uc3Qgb3V0cHV0ID0gW107XG5cdGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBuID0gaW5pdGlhbE47XG5cdGxldCBiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50czogbGV0IGBiYXNpY2AgYmUgdGhlIG51bWJlciBvZiBpbnB1dCBjb2RlXG5cdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdGxldCBiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdGlmIChiYXNpYyA8IDApIHtcblx0XHRiYXNpYyA9IDA7XG5cdH1cblxuXHRmb3IgKGxldCBqID0gMDsgaiA8IGJhc2ljOyArK2opIHtcblx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRlcnJvcignbm90LWJhc2ljJyk7XG5cdFx0fVxuXHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHR9XG5cblx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdGZvciAobGV0IGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdC8vIERlY29kZSBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyIGludG8gYGRlbHRhYCxcblx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0Ly8gdmFsdWUgYXQgdGhlIGVuZCB0byBvYnRhaW4gYGRlbHRhYC5cblx0XHRjb25zdCBvbGRpID0gaTtcblx0XHRmb3IgKGxldCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRlcnJvcignaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0aWYgKGRpZ2l0ID49IGJhc2UpIHtcblx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdH1cblx0XHRcdGlmIChkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdGNvbnN0IHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXG5cdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHR9XG5cblx0XHRjb25zdCBvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdC8vIGBpYCB3YXMgc3VwcG9zZWQgdG8gd3JhcCBhcm91bmQgZnJvbSBgb3V0YCB0byBgMGAsXG5cdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHR9XG5cblx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdGkgJT0gb3V0O1xuXG5cdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dC5cblx0XHRvdXRwdXQuc3BsaWNlKGkrKywgMCwgbik7XG5cblx0fVxuXG5cdHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5vdXRwdXQpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRjb25zdCBvdXRwdXQgPSBbXTtcblxuXHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBhbiBhcnJheSBvZiBVbmljb2RlIGNvZGUgcG9pbnRzLlxuXHRpbnB1dCA9IHVjczJkZWNvZGUoaW5wdXQpO1xuXG5cdC8vIENhY2hlIHRoZSBsZW5ndGguXG5cdGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG5cdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlLlxuXHRsZXQgbiA9IGluaXRpYWxOO1xuXHRsZXQgZGVsdGEgPSAwO1xuXHRsZXQgYmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHMuXG5cdGZvciAoY29uc3QgY3VycmVudFZhbHVlIG9mIGlucHV0KSB7XG5cdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBiYXNpY0xlbmd0aCA9IG91dHB1dC5sZW5ndGg7XG5cdGxldCBoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoO1xuXG5cdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHQvLyBgYmFzaWNMZW5ndGhgIGlzIHRoZSBudW1iZXIgb2YgYmFzaWMgY29kZSBwb2ludHMuXG5cblx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgd2l0aCBhIGRlbGltaXRlciB1bmxlc3MgaXQncyBlbXB0eS5cblx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0fVxuXG5cdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdC8vIEFsbCBub24tYmFzaWMgY29kZSBwb2ludHMgPCBuIGhhdmUgYmVlbiBoYW5kbGVkIGFscmVhZHkuIEZpbmQgdGhlIG5leHRcblx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdGxldCBtID0gbWF4SW50O1xuXHRcdGZvciAoY29uc3QgY3VycmVudFZhbHVlIG9mIGlucHV0KSB7XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRtID0gY3VycmVudFZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluY3JlYXNlIGBkZWx0YWAgZW5vdWdoIHRvIGFkdmFuY2UgdGhlIGRlY29kZXIncyA8bixpPiBzdGF0ZSB0byA8bSwwPixcblx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvdy5cblx0XHRjb25zdCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUgPSBoYW5kbGVkQ1BDb3VudCArIDE7XG5cdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdH1cblxuXHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0biA9IG07XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRWYWx1ZSBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IG4pIHtcblx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG5cdFx0XHRcdGxldCBxID0gZGVsdGE7XG5cdFx0XHRcdGZvciAobGV0IGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRjb25zdCBiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goXG5cdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRxID0gZmxvb3IocU1pbnVzVCAvIGJhc2VNaW51c1QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRiaWFzID0gYWRhcHQoZGVsdGEsIGhhbmRsZWRDUENvdW50UGx1c09uZSwgaGFuZGxlZENQQ291bnQgPT09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHQrK2hhbmRsZWRDUENvdW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCsrZGVsdGE7XG5cdFx0KytuO1xuXG5cdH1cblx0cmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuICogaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgb24gYSBzdHJpbmcgdGhhdCBoYXMgYWxyZWFkeSBiZWVuXG4gKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZWQgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0b1xuICogY29udmVydCB0byBVbmljb2RlLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG4gKiBzdHJpbmcuXG4gKi9cbmNvbnN0IHRvVW5pY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdHJldHVybiByZWdleFB1bnljb2RlLnRlc3Qoc3RyaW5nKVxuXHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHQ6IHN0cmluZztcblx0fSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG4gKiBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCdzIGFscmVhZHkgaW5cbiAqIEFTQ0lJLlxuICogQG1lbWJlck9mIHB1bnljb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG8gY29udmVydCwgYXMgYVxuICogVW5pY29kZSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG4gKiBlbWFpbCBhZGRyZXNzLlxuICovXG5jb25zdCB0b0FTQ0lJID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlZ2V4Tm9uQVNDSUkudGVzdChzdHJpbmcpXG5cdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHQ6IHN0cmluZztcblx0fSk7XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuY29uc3QgcHVueWNvZGUgPSB7XG5cdC8qKlxuXHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAdHlwZSBTdHJpbmdcblx0ICovXG5cdCd2ZXJzaW9uJzogJzIuMy4xJyxcblx0LyoqXG5cdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHQndWNzMic6IHtcblx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHQnZW5jb2RlJzogdWNzMmVuY29kZVxuXHR9LFxuXHQnZGVjb2RlJzogZGVjb2RlLFxuXHQnZW5jb2RlJzogZW5jb2RlLFxuXHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcbn07XG5cbmV4cG9ydCB7IHVjczJkZWNvZGUsIHVjczJlbmNvZGUsIGRlY29kZSwgZW5jb2RlLCB0b0FTQ0lJLCB0b1VuaWNvZGUgfTtcbmV4cG9ydCBkZWZhdWx0IHB1bnljb2RlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/punycode/punycode.es6.js\n",
      );

      /***/
    },
};
