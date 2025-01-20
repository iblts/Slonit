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


/***/ }),

/***/ "./src/tasks/secret-number.ts":
/*!************************************!*\
  !*** ./src/tasks/secret-number.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
var getRandomFromRange = function (start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
};
var getAverage = function (min, max) {
    return Math.floor((max - min) / 2) + min;
};
var startGame = function () {
    var secretNumber = getRandomFromRange(1, 100);
    console.log("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 1: *\u0437\u0430\u0433\u0430\u0434\u0430\u043B \u0447\u0438\u0441\u043B\u043E ".concat(secretNumber, "*"));
    var min = 1;
    var max = 100;
    while (min <= max) {
        var currentNumber = getAverage(min, max);
        console.log("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 2: \u041F\u0440\u043E\u0431\u0443\u044E \u0447\u0438\u0441\u043B\u043E ".concat(currentNumber, "."));
        if (currentNumber === secretNumber) {
            console.log('Компьютер 1: Угадал!');
            break;
        }
        if (currentNumber > secretNumber) {
            console.log('Компьютер 1: Меньше.\n');
            max = currentNumber;
        }
        else {
            console.log('Компьютер 1: Больше.\n');
            min = currentNumber;
        }
    }
};


/***/ }),

/***/ "./src/tasks/strings.ts":
/*!******************************!*\
  !*** ./src/tasks/strings.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   isSubstring: () => (/* binding */ isSubstring),
/* harmony export */   trimLine: () => (/* binding */ trimLine)
/* harmony export */ });
var capitalize = function (str) {
    if (!str)
        return str;
    var trimedString = str.trim();
    return trimedString[0].toUpperCase() + trimedString.slice(1);
};
var trimLine = function (str, maxLength) {
    var trimedString = str.trim();
    if (trimedString.length <= maxLength)
        return trimedString;
    var separatingChars = [' ', ',', '.', '!', '?', ':', ';'];
    for (var i = maxLength - 1; i >= 0; i--) {
        // ищем символ разделения из separatingChars
        if (separatingChars.includes(trimedString[i])) {
            for (var j = i; j >= 0; j--) {
                // ищем ближайший символ не входящий в separatingChars
                if (!separatingChars.includes(trimedString[j])) {
                    return trimedString.slice(0, j + 1) + '…';
                }
            }
        }
    }
};
var isSubstring = function (str1, str2) {
    if (str1.includes(str2) || str2.includes(str1))
        return true;
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
/* harmony import */ var _tasks_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/objects */ "./src/tasks/objects.ts");
/* harmony import */ var _tasks_secret_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/secret-number */ "./src/tasks/secret-number.ts");
/* harmony import */ var _tasks_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/strings */ "./src/tasks/strings.ts");




(0,_tasks_secret_number__WEBPACK_IMPORTED_MODULE_2__.startGame)();
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
/* Задание 11. Работа со строками */
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.capitalize)(' слова  '));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.trimLine)('В частности,    граница обучения кадров влечет за собой процесс внедрения и модернизации кластеризации усилий.', 13));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.trimLine)('В целом, конечно, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения вывода текущих активов.', 40));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.isSubstring)('abc', 'abcde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.isSubstring)('abcde', 'cde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_3__.isSubstring)('abc', 'bcd'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDRixDQUNEO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FDVix3REFBUSxDQUNQLCtJQUErSSxFQUMvSSxFQUFFLENBQ0YsQ0FDRDtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL2FycmF5LW1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3NlY3JldC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteVNsaWNlID0gPFQ+KGFycjogVFtdLCBzdGFydD86IG51bWJlciwgZW5kID0gYXJyLmxlbmd0aCkgPT4ge1xyXG5cdGlmICghc3RhcnQpIHJldHVybiBbLi4uYXJyXVxyXG5cdGlmIChzdGFydCA+PSBhcnIubGVuZ3RoKSByZXR1cm4gW11cclxuXHRjb25zdCBsYXN0SW5kZXggPSBNYXRoLm1pbihhcnIubGVuZ3RoLCBlbmQpXHJcblx0Y29uc3QgbmV3QXJyYXk6IFRbXSA9IFtdXHJcblxyXG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XHJcblx0XHRuZXdBcnJheS5wdXNoKGFycltpXSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXlJbmRleE9mID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoaXRlbSA9PT0gYXJyW2ldKSByZXR1cm4gaVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIC0xXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluY2x1ZGVzID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoYXJyW2ldID09PSBpdGVtKSByZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdldE9iamVjdFZhbHVlc1N1bSA9IDxUPihvYmplY3Q6IFQpID0+IHtcclxuXHRsZXQgc3VtID0gMFxyXG5cclxuXHRmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XHJcblx0XHRpZiAodHlwZW9mIG9iamVjdFtrZXldID09PSAnbnVtYmVyJykgc3VtICs9IG9iamVjdFtrZXldXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3VtXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3J0ZWRPYmplY3RLZXlzID0gPFQ+KG9iamVjdDogVCkgPT4ge1xyXG5cdGNvbnN0IGtleXMgPSBbXVxyXG5cclxuXHRmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XHJcblx0XHRrZXlzLnB1c2goa2V5KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGtleXMuc29ydCgpXHJcbn1cclxuIiwiY29uc3QgZ2V0UmFuZG9tRnJvbVJhbmdlID0gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmQgLSBzdGFydCArIDEpKSArIHN0YXJ0XHJcbn1cclxuXHJcbmNvbnN0IGdldEF2ZXJhZ2UgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoKG1heCAtIG1pbikgLyAyKSArIG1pblxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNlY3JldE51bWJlciA9IGdldFJhbmRvbUZyb21SYW5nZSgxLCAxMDApXHJcblx0Y29uc29sZS5sb2coYNCa0L7QvNC/0YzRjtGC0LXRgCAxOiAq0LfQsNCz0LDQtNCw0Lsg0YfQuNGB0LvQviAke3NlY3JldE51bWJlcn0qYClcclxuXHJcblx0bGV0IG1pbiA9IDFcclxuXHRsZXQgbWF4ID0gMTAwXHJcblxyXG5cdHdoaWxlIChtaW4gPD0gbWF4KSB7XHJcblx0XHRjb25zdCBjdXJyZW50TnVtYmVyID0gZ2V0QXZlcmFnZShtaW4sIG1heClcclxuXHRcdGNvbnNvbGUubG9nKGDQmtC+0LzQv9GM0Y7RgtC10YAgMjog0J/RgNC+0LHRg9GOINGH0LjRgdC70L4gJHtjdXJyZW50TnVtYmVyfS5gKVxyXG5cclxuXHRcdGlmIChjdXJyZW50TnVtYmVyID09PSBzZWNyZXROdW1iZXIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ9Ca0L7QvNC/0YzRjtGC0LXRgCAxOiDQo9Cz0LDQtNCw0LshJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGlmIChjdXJyZW50TnVtYmVyID4gc2VjcmV0TnVtYmVyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQmtC+0LzQv9GM0Y7RgtC10YAgMTog0JzQtdC90YzRiNC1LlxcbicpXHJcblx0XHRcdG1heCA9IGN1cnJlbnROdW1iZXJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQmtC+0LzQv9GM0Y7RgtC10YAgMTog0JHQvtC70YzRiNC1LlxcbicpXHJcblx0XHRcdG1pbiA9IGN1cnJlbnROdW1iZXJcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuXHRpZiAoIXN0cikgcmV0dXJuIHN0clxyXG5cclxuXHRjb25zdCB0cmltZWRTdHJpbmcgPSBzdHIudHJpbSgpXHJcblxyXG5cdHJldHVybiB0cmltZWRTdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHRyaW1lZFN0cmluZy5zbGljZSgxKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJpbUxpbmUgPSAoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKSA9PiB7XHJcblx0Y29uc3QgdHJpbWVkU3RyaW5nID0gc3RyLnRyaW0oKVxyXG5cdGlmICh0cmltZWRTdHJpbmcubGVuZ3RoIDw9IG1heExlbmd0aCkgcmV0dXJuIHRyaW1lZFN0cmluZ1xyXG5cclxuXHRjb25zdCBzZXBhcmF0aW5nQ2hhcnMgPSBbJyAnLCAnLCcsICcuJywgJyEnLCAnPycsICc6JywgJzsnXVxyXG5cclxuXHRmb3IgKGxldCBpID0gbWF4TGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdC8vINC40YnQtdC8INGB0LjQvNCy0L7QuyDRgNCw0LfQtNC10LvQtdC90LjRjyDQuNC3IHNlcGFyYXRpbmdDaGFyc1xyXG5cdFx0aWYgKHNlcGFyYXRpbmdDaGFycy5pbmNsdWRlcyh0cmltZWRTdHJpbmdbaV0pKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSBpOyBqID49IDA7IGotLSkge1xyXG5cdFx0XHRcdC8vINC40YnQtdC8INCx0LvQuNC20LDQudGI0LjQuSDRgdC40LzQstC+0Lsg0L3QtSDQstGF0L7QtNGP0YnQuNC5INCyIHNlcGFyYXRpbmdDaGFyc1xyXG5cdFx0XHRcdGlmICghc2VwYXJhdGluZ0NoYXJzLmluY2x1ZGVzKHRyaW1lZFN0cmluZ1tqXSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cmltZWRTdHJpbmcuc2xpY2UoMCwgaiArIDEpICsgJ+KApidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1N1YnN0cmluZyA9IChzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZykgPT4ge1xyXG5cdGlmIChzdHIxLmluY2x1ZGVzKHN0cjIpIHx8IHN0cjIuaW5jbHVkZXMoc3RyMSkpIHJldHVybiB0cnVlXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBteUluY2x1ZGVzLCBteUluZGV4T2YsIG15U2xpY2UgfSBmcm9tICcuL3Rhc2tzL2FycmF5LW1ldGhvZHMnXHJcbmltcG9ydCB7IGdldE9iamVjdFZhbHVlc1N1bSwgZ2V0U29ydGVkT2JqZWN0S2V5cyB9IGZyb20gJy4vdGFza3Mvb2JqZWN0cydcclxuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi90YXNrcy9zZWNyZXQtbnVtYmVyJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBpc1N1YnN0cmluZywgdHJpbUxpbmUgfSBmcm9tICcuL3Rhc2tzL3N0cmluZ3MnXHJcblxyXG5zdGFydEdhbWUoKVxyXG5cclxuY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDEsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdXHJcblxyXG5jb25zb2xlLmxvZyhteVNsaWNlKGFyciwgNSwgMTAwKSlcclxuY29uc29sZS5sb2cobXlJbmRleE9mKGFyciwgMjApKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAxLCAzKSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDUpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgMiwgMykpXHJcblxyXG5jb25zdCBvYmplY3QgPSB7XHJcblx0bmFtZTogJ0l2YW4nLFxyXG5cdGFnZTogMTgsXHJcblx0ZXhwZXJpZW5jZTogMSxcclxufVxyXG5cclxuY29uc29sZS5sb2coZ2V0T2JqZWN0VmFsdWVzU3VtKG9iamVjdCkpXHJcbmNvbnNvbGUubG9nKGdldFNvcnRlZE9iamVjdEtleXMob2JqZWN0KSlcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDExLiDQoNCw0LHQvtGC0LAg0YHQviDRgdGC0YDQvtC60LDQvNC4ICovXHJcblxyXG5jb25zb2xlLmxvZyhjYXBpdGFsaXplKCcg0YHQu9C+0LLQsCAgJykpXHJcbmNvbnNvbGUubG9nKFxyXG5cdHRyaW1MaW5lKFxyXG5cdFx0J9CSINGH0LDRgdGC0L3QvtGB0YLQuCwgICAg0LPRgNCw0L3QuNGG0LAg0L7QsdGD0YfQtdC90LjRjyDQutCw0LTRgNC+0LIg0LLQu9C10YfQtdGCINC30LAg0YHQvtCx0L7QuSDQv9GA0L7RhtC10YHRgSDQstC90LXQtNGA0LXQvdC40Y8g0Lgg0LzQvtC00LXRgNC90LjQt9Cw0YbQuNC4INC60LvQsNGB0YLQtdGA0LjQt9Cw0YbQuNC4INGD0YHQuNC70LjQuS4nLFxyXG5cdFx0MTNcclxuXHQpXHJcbilcclxuY29uc29sZS5sb2coXHJcblx0dHJpbUxpbmUoXHJcblx0XHQn0JIg0YbQtdC70L7QvCwg0LrQvtC90LXRh9C90L4sINC/0L7RgdGC0L7Rj9C90L3Ri9C5INC60L7Qu9C40YfQtdGB0YLQstC10L3QvdGL0Lkg0YDQvtGB0YIg0Lgg0YHRhNC10YDQsCDQvdCw0YjQtdC5INCw0LrRgtC40LLQvdC+0YHRgtC4INC90LUg0LTQsNGR0YIg0L3QsNC8INC40L3QvtCz0L4g0LLRi9Cx0L7RgNCwLCDQutGA0L7QvNC1INC+0L/RgNC10LTQtdC70LXQvdC40Y8g0LLRi9Cy0L7QtNCwINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvtCyLicsXHJcblx0XHQ0MFxyXG5cdClcclxuKVxyXG5jb25zb2xlLmxvZyhpc1N1YnN0cmluZygnYWJjJywgJ2FiY2RlJykpXHJcbmNvbnNvbGUubG9nKGlzU3Vic3RyaW5nKCdhYmNkZScsICdjZGUnKSlcclxuY29uc29sZS5sb2coaXNTdWJzdHJpbmcoJ2FiYycsICdiY2QnKSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9