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


/***/ }),

/***/ "./src/tasks/objects.ts":
/*!******************************!*\
  !*** ./src/tasks/objects.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getObjectValuesSum: () => (/* binding */ getObjectValuesSum),
/* harmony export */   getSortedObjectKeys: () => (/* binding */ getSortedObjectKeys)
/* harmony export */ });
var getObjectValuesSum = function (object) {
    var sum = 0;
    for (var key in object) {
        if (typeof object[key] === 'number')
            sum += object[key];
    }
    return sum;
};
var getSortedObjectKeys = function (object) {
    var keys = [];
    for (var key in object) {
        keys.push(key);
    }
    return keys.sort();
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
/* harmony import */ var _tasks_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/objects */ "./src/tasks/objects.ts");


// startGame()
var arr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.mySlice)(arr, 5, 100));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 20));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 1, 3));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 5));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 2, 3));
var object = {
    name: 'Ivan',
    age: 18,
    experience: 1,
};
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_1__.getObjectValuesSum)(object));
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_1__.getSortedObjectKeys)(object));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtEQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbEMsSUFBTSxNQUFNLEdBQUc7SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxFQUFFO0lBQ1AsVUFBVSxFQUFFLENBQUM7Q0FDYjtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0VBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90YXNrcy9hcnJheS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9vYmplY3RzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlTbGljZSA9IDxUPihhcnI6IFRbXSwgc3RhcnQ/OiBudW1iZXIsIGVuZCA9IGFyci5sZW5ndGgpID0+IHtcclxuXHRpZiAoIXN0YXJ0KSByZXR1cm4gWy4uLmFycl1cclxuXHRpZiAoc3RhcnQgPj0gYXJyLmxlbmd0aCkgcmV0dXJuIFtdXHJcblx0Y29uc3QgbGFzdEluZGV4ID0gTWF0aC5taW4oYXJyLmxlbmd0aCwgZW5kKVxyXG5cdGNvbnN0IG5ld0FycmF5OiBUW10gPSBbXVxyXG5cclxuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xyXG5cdFx0bmV3QXJyYXkucHVzaChhcnJbaV0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG15SW5kZXhPZiA9IDxUPihhcnI6IFRbXSwgaXRlbTogVCwgZnJvbSA9IDApID0+IHtcclxuXHRmb3IgKGxldCBpID0gZnJvbTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGl0ZW0gPT09IGFycltpXSkgcmV0dXJuIGlcclxuXHR9XHJcblxyXG5cdHJldHVybiAtMVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXlJbmNsdWRlcyA9IDxUPihhcnI6IFRbXSwgaXRlbTogVCwgZnJvbSA9IDApID0+IHtcclxuXHRmb3IgKGxldCBpID0gZnJvbTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGFycltpXSA9PT0gaXRlbSkgcmV0dXJuIHRydWVcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnZXRPYmplY3RWYWx1ZXNTdW0gPSA8VD4ob2JqZWN0OiBUKSA9PiB7XHJcblx0bGV0IHN1bSA9IDBcclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0aWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ251bWJlcicpIHN1bSArPSBvYmplY3Rba2V5XVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN1bVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ydGVkT2JqZWN0S2V5cyA9IDxUPihvYmplY3Q6IFQpID0+IHtcclxuXHRjb25zdCBrZXlzID0gW11cclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0a2V5cy5wdXNoKGtleSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBrZXlzLnNvcnQoKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbXlJbmNsdWRlcywgbXlJbmRleE9mLCBteVNsaWNlIH0gZnJvbSAnLi90YXNrcy9hcnJheS1tZXRob2RzJ1xyXG5pbXBvcnQgeyBnZXRPYmplY3RWYWx1ZXNTdW0sIGdldFNvcnRlZE9iamVjdEtleXMgfSBmcm9tICcuL3Rhc2tzL29iamVjdHMnXHJcblxyXG4vLyBzdGFydEdhbWUoKVxyXG5cclxuY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDEsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdXHJcblxyXG5jb25zb2xlLmxvZyhteVNsaWNlKGFyciwgNSwgMTAwKSlcclxuY29uc29sZS5sb2cobXlJbmRleE9mKGFyciwgMjApKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAxLCAzKSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDUpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgMiwgMykpXHJcblxyXG5jb25zdCBvYmplY3QgPSB7XHJcblx0bmFtZTogJ0l2YW4nLFxyXG5cdGFnZTogMTgsXHJcblx0ZXhwZXJpZW5jZTogMSxcclxufVxyXG5cclxuY29uc29sZS5sb2coZ2V0T2JqZWN0VmFsdWVzU3VtKG9iamVjdCkpXHJcbmNvbnNvbGUubG9nKGdldFNvcnRlZE9iamVjdEtleXMob2JqZWN0KSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9