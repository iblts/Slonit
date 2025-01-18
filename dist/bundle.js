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
    return 0;
};
var myIncludes = function (arr, item, from) {
    if (from === void 0) { from = 0; }
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
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 1));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 1, 3));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 1));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 2, 3));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLE9BQU8sR0FBRyxVQUFJLEdBQVEsRUFBRSxLQUFjLEVBQUUsR0FBZ0I7SUFBaEIsNEJBQU0sR0FBRyxDQUFDLE1BQU07SUFDcEUsSUFBSSxDQUFDLEtBQUs7UUFBRSx5QkFBVyxHQUFHLFFBQUM7SUFDM0IsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUU7SUFDbEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUMzQyxJQUFNLFFBQVEsR0FBUSxFQUFFO0lBRXhCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxRQUFRO0FBQ2hCLENBQUM7QUFFTSxJQUFNLFNBQVMsR0FBRyxVQUFJLEdBQVEsRUFBRSxJQUFPLEVBQUUsSUFBUTtJQUFSLCtCQUFRO0lBQ3ZELE9BQU8sQ0FBQztBQUNULENBQUM7QUFFTSxJQUFNLFVBQVUsR0FBRyxVQUFJLEdBQVEsRUFBRSxJQUFPLEVBQUUsSUFBUTtJQUFSLCtCQUFRO0lBQ3hELE9BQU8sS0FBSztBQUNiLENBQUM7Ozs7Ozs7VUNuQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zRTtBQUV0RSxjQUFjO0FBRWQsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2REFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrREFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLCtEQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL2FycmF5LW1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteVNsaWNlID0gPFQ+KGFycjogVFtdLCBzdGFydD86IG51bWJlciwgZW5kID0gYXJyLmxlbmd0aCkgPT4ge1xyXG5cdGlmICghc3RhcnQpIHJldHVybiBbLi4uYXJyXVxyXG5cdGlmIChzdGFydCA+PSBhcnIubGVuZ3RoKSByZXR1cm4gW11cclxuXHRjb25zdCBsYXN0SW5kZXggPSBNYXRoLm1pbihhcnIubGVuZ3RoLCBlbmQpXHJcblx0Y29uc3QgbmV3QXJyYXk6IFRbXSA9IFtdXHJcblxyXG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XHJcblx0XHRuZXdBcnJheS5wdXNoKGFycltpXSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXlJbmRleE9mID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdHJldHVybiAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluY2x1ZGVzID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdHJldHVybiBmYWxzZVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbXlJbmNsdWRlcywgbXlJbmRleE9mLCBteVNsaWNlIH0gZnJvbSAnLi90YXNrcy9hcnJheS1tZXRob2RzJ1xyXG5cclxuLy8gc3RhcnRHYW1lKClcclxuXHJcbmNvbnN0IGFyciA9IFsxLCAyLCAzLCA0LCA1LCAxLCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1XVxyXG5cclxuY29uc29sZS5sb2cobXlTbGljZShhcnIsIDUsIDEwMCkpXHJcbmNvbnNvbGUubG9nKG15SW5kZXhPZihhcnIsIDEpKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAxLCAzKSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDEpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgMiwgMykpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==