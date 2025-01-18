/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tasks/array-methods.ts":
/*!************************************!*\
  !*** ./src/tasks/array-methods.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myIncludes: () => (/* binding */ myIncludes),
/* harmony export */   myIndexOf: () => (/* binding */ myIndexOf),
/* harmony export */   mySlice: () => (/* binding */ mySlice)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mySlice = function (arr, start, end) {
    if (end === void 0) { end = arr.length; }
    if (!start)
        return __spreadArray([], arr, true);
    if (start >= arr.length)
        return [];
    var lastIndex = Math.min(arr.length, end);
    var newArray = [];
    for (var i = start; i < lastIndex; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
};
var myIndexOf = function (arr, item, from) {
    if (from === void 0) { from = 0; }
    for (var i = from; i < arr.length; i++) {
        if (item === arr[i])
            return i;
    }
    return -1;
};
var myIncludes = function (arr, item, from) {
    if (from === void 0) { from = 0; }
    for (var i = from; i < arr.length; i++) {
        if (arr[i] === item)
            return true;
    }
    return false;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/array-methods */ "./src/tasks/array-methods.ts");

// startGame()
var arr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.mySlice)(arr, 5, 100));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 20));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 1, 3));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 5));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 2, 3));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vc3JjL3Rhc2tzL2FycmF5LW1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteVNsaWNlID0gPFQ+KGFycjogVFtdLCBzdGFydD86IG51bWJlciwgZW5kID0gYXJyLmxlbmd0aCkgPT4ge1xyXG5cdGlmICghc3RhcnQpIHJldHVybiBbLi4uYXJyXVxyXG5cdGlmIChzdGFydCA+PSBhcnIubGVuZ3RoKSByZXR1cm4gW11cclxuXHRjb25zdCBsYXN0SW5kZXggPSBNYXRoLm1pbihhcnIubGVuZ3RoLCBlbmQpXHJcblx0Y29uc3QgbmV3QXJyYXk6IFRbXSA9IFtdXHJcblxyXG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XHJcblx0XHRuZXdBcnJheS5wdXNoKGFycltpXSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXlJbmRleE9mID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoaXRlbSA9PT0gYXJyW2ldKSByZXR1cm4gaVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIC0xXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluY2x1ZGVzID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoYXJyW2ldID09PSBpdGVtKSByZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBteUluY2x1ZGVzLCBteUluZGV4T2YsIG15U2xpY2UgfSBmcm9tICcuL3Rhc2tzL2FycmF5LW1ldGhvZHMnXHJcblxyXG4vLyBzdGFydEdhbWUoKVxyXG5cclxuY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDEsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdXHJcblxyXG5jb25zb2xlLmxvZyhteVNsaWNlKGFyciwgNSwgMTAwKSlcclxuY29uc29sZS5sb2cobXlJbmRleE9mKGFyciwgMjApKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAxLCAzKSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDUpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgMiwgMykpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==