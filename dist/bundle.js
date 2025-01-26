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

/***/ "./src/tasks/calculator.ts":
/*!*********************************!*\
  !*** ./src/tasks/calculator.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate),
/* harmony export */   operations: () => (/* binding */ operations)
/* harmony export */ });
var add = function (a, b) { return a + b; };
var substract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return a / b; };
var operations = {
    add: add,
    substract: substract,
    multiply: multiply,
    divide: divide,
};
var calculate = function (a, b, func) {
    return func(a, b);
};


/***/ }),

/***/ "./src/tasks/my-filter.ts":
/*!********************************!*\
  !*** ./src/tasks/my-filter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myFilter: () => (/* binding */ myFilter)
/* harmony export */ });
var myFilter = function (arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i]))
            result.push(arr[i]);
    }
    return result;
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
    var trimedString = str.trim();
    if (!trimedString)
        return str;
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
/* harmony import */ var _tasks_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/calculator */ "./src/tasks/calculator.ts");
/* harmony import */ var _tasks_my_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/my-filter */ "./src/tasks/my-filter.ts");
/* harmony import */ var _tasks_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/objects */ "./src/tasks/objects.ts");
/* harmony import */ var _tasks_secret_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/secret-number */ "./src/tasks/secret-number.ts");
/* harmony import */ var _tasks_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/strings */ "./src/tasks/strings.ts");






/* Задание 6. Повторим основы */
(0,_tasks_secret_number__WEBPACK_IMPORTED_MODULE_4__.startGame)();
/* Задание 9. Массивы и методы по работе с ними */
var arr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.mySlice)(arr, 5, 100));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 20));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIndexOf)(arr, 1, 3));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 5));
console.log((0,_tasks_array_methods__WEBPACK_IMPORTED_MODULE_0__.myIncludes)(arr, 2, 3));
/* Задание 10. Повторяем объекты */
var object = {
    name: 'Ivan',
    age: 18,
    experience: 1,
};
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_3__.getObjectValuesSum)(object));
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_3__.getSortedObjectKeys)(object));
/* Задание 11. Работа со строками */
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.capitalize)(' слова  '));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.trimLine)('В частности,    граница обучения кадров влечет за собой процесс внедрения и модернизации кластеризации усилий.', 13));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.trimLine)('В целом, конечно, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения вывода текущих активов.', 40));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.isSubstring)('abc', 'abcde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.isSubstring)('abcde', 'cde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_5__.isSubstring)('abc', 'bcd'));
/* Задание 13. Функциональные выражения */
var selectedOperation = 'multiply';
console.log((0,_tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.calculate)(6, 3, _tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.operations[selectedOperation])); // 18
/* Задание 14. Стрелочные функции и углубление в массивы */
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = (0,_tasks_my_filter__WEBPACK_IMPORTED_MODULE_2__.myFilter)(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers); // [2, 4]
var greaterThanThree = (0,_tasks_my_filter__WEBPACK_IMPORTED_MODULE_2__.myFilter)(numbers, function (num) { return num > 3; });
console.log(greaterThanThree); // [4, 5]

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFdEMsMENBQTBDO0FBRTFDLElBQU0saUJBQWlCLEdBQUcsVUFBVTtBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDREQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSx5REFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUs7QUFFakUsMkRBQTJEO0FBRTNELElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUUvQixJQUFNLFdBQVcsR0FBRywwREFBUSxDQUFDLE9BQU8sRUFBRSxhQUFHLElBQUksVUFBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDO0FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUMsU0FBUztBQUVsQyxJQUFNLGdCQUFnQixHQUFHLDBEQUFRLENBQUMsT0FBTyxFQUFFLGFBQUcsSUFBSSxVQUFHLEdBQUcsQ0FBQyxFQUFQLENBQU8sQ0FBQztBQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90YXNrcy9hcnJheS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9jYWxjdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9teS1maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3NlY3JldC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteVNsaWNlID0gPFQ+KGFycjogVFtdLCBzdGFydD86IG51bWJlciwgZW5kID0gYXJyLmxlbmd0aCkgPT4ge1xyXG5cdGlmICghc3RhcnQpIHJldHVybiBbLi4uYXJyXVxyXG5cdGlmIChzdGFydCA+PSBhcnIubGVuZ3RoKSByZXR1cm4gW11cclxuXHRjb25zdCBsYXN0SW5kZXggPSBNYXRoLm1pbihhcnIubGVuZ3RoLCBlbmQpXHJcblx0Y29uc3QgbmV3QXJyYXk6IFRbXSA9IFtdXHJcblxyXG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XHJcblx0XHRuZXdBcnJheS5wdXNoKGFycltpXSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXlJbmRleE9mID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoaXRlbSA9PT0gYXJyW2ldKSByZXR1cm4gaVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIC0xXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluY2x1ZGVzID0gPFQ+KGFycjogVFtdLCBpdGVtOiBULCBmcm9tID0gMCkgPT4ge1xyXG5cdGZvciAobGV0IGkgPSBmcm9tOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoYXJyW2ldID09PSBpdGVtKSByZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiY29uc3QgYWRkID0gKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYlxyXG5jb25zdCBzdWJzdHJhY3QgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLSBiXHJcbmNvbnN0IG11bHRpcGx5ID0gKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICogYlxyXG5jb25zdCBkaXZpZGUgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLyBiXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0aW9ucyA9IHtcclxuXHRhZGQsXHJcblx0c3Vic3RyYWN0LFxyXG5cdG11bHRpcGx5LFxyXG5cdGRpdmlkZSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZSA9IChcclxuXHRhOiBudW1iZXIsXHJcblx0YjogbnVtYmVyLFxyXG5cdGZ1bmM6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyXHJcbikgPT4ge1xyXG5cdHJldHVybiBmdW5jKGEsIGIpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IG15RmlsdGVyID0gPFQ+KGFycjogVFtdLCBmdW5jOiAoZWw6IFQpID0+IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSBbXVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGZ1bmMoYXJyW2ldKSkgcmVzdWx0LnB1c2goYXJyW2ldKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnZXRPYmplY3RWYWx1ZXNTdW0gPSA8VD4ob2JqZWN0OiBUKSA9PiB7XHJcblx0bGV0IHN1bSA9IDBcclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0aWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ251bWJlcicpIHN1bSArPSBvYmplY3Rba2V5XVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN1bVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ydGVkT2JqZWN0S2V5cyA9IDxUPihvYmplY3Q6IFQpID0+IHtcclxuXHRjb25zdCBrZXlzID0gW11cclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0a2V5cy5wdXNoKGtleSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBrZXlzLnNvcnQoKVxyXG59XHJcbiIsImNvbnN0IGdldFJhbmRvbUZyb21SYW5nZSA9IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kIC0gc3RhcnQgKyAxKSkgKyBzdGFydFxyXG59XHJcblxyXG5jb25zdCBnZXRBdmVyYWdlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMikgKyBtaW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRjb25zdCBzZWNyZXROdW1iZXIgPSBnZXRSYW5kb21Gcm9tUmFuZ2UoMSwgMTAwKVxyXG5cdGNvbnNvbGUubG9nKGDQmtC+0LzQv9GM0Y7RgtC10YAgMTogKtC30LDQs9Cw0LTQsNC7INGH0LjRgdC70L4gJHtzZWNyZXROdW1iZXJ9KmApXHJcblxyXG5cdGxldCBtaW4gPSAxXHJcblx0bGV0IG1heCA9IDEwMFxyXG5cclxuXHR3aGlsZSAobWluIDw9IG1heCkge1xyXG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IGdldEF2ZXJhZ2UobWluLCBtYXgpXHJcblx0XHRjb25zb2xlLmxvZyhg0JrQvtC80L/RjNGO0YLQtdGAIDI6INCf0YDQvtCx0YPRjiDRh9C40YHQu9C+ICR7Y3VycmVudE51bWJlcn0uYClcclxuXHJcblx0XHRpZiAoY3VycmVudE51bWJlciA9PT0gc2VjcmV0TnVtYmVyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQmtC+0LzQv9GM0Y7RgtC10YAgMTog0KPQs9Cw0LTQsNC7IScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudE51bWJlciA+IHNlY3JldE51bWJlcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCc0LXQvdGM0YjQtS5cXG4nKVxyXG5cdFx0XHRtYXggPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCR0L7Qu9GM0YjQtS5cXG4nKVxyXG5cdFx0XHRtaW4gPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3QgdHJpbWVkU3RyaW5nID0gc3RyLnRyaW0oKVxyXG5cdGlmICghdHJpbWVkU3RyaW5nKSByZXR1cm4gc3RyXHJcblx0cmV0dXJuIHRyaW1lZFN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgdHJpbWVkU3RyaW5nLnNsaWNlKDEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmltTGluZSA9IChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuXHRjb25zdCB0cmltZWRTdHJpbmcgPSBzdHIudHJpbSgpXHJcblx0aWYgKHRyaW1lZFN0cmluZy5sZW5ndGggPD0gbWF4TGVuZ3RoKSByZXR1cm4gdHJpbWVkU3RyaW5nXHJcblxyXG5cdGNvbnN0IHNlcGFyYXRpbmdDaGFycyA9IFsnICcsICcsJywgJy4nLCAnIScsICc/JywgJzonLCAnOyddXHJcblxyXG5cdGZvciAobGV0IGkgPSBtYXhMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0Ly8g0LjRidC10Lwg0YHQuNC80LLQvtC7INGA0LDQt9C00LXQu9C10L3QuNGPINC40Lcgc2VwYXJhdGluZ0NoYXJzXHJcblx0XHRpZiAoc2VwYXJhdGluZ0NoYXJzLmluY2x1ZGVzKHRyaW1lZFN0cmluZ1tpXSkpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IGk7IGogPj0gMDsgai0tKSB7XHJcblx0XHRcdFx0Ly8g0LjRidC10Lwg0LHQu9C40LbQsNC50YjQuNC5INGB0LjQvNCy0L7QuyDQvdC1INCy0YXQvtC00Y/RidC40Lkg0LIgc2VwYXJhdGluZ0NoYXJzXHJcblx0XHRcdFx0aWYgKCFzZXBhcmF0aW5nQ2hhcnMuaW5jbHVkZXModHJpbWVkU3RyaW5nW2pdKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRyaW1lZFN0cmluZy5zbGljZSgwLCBqICsgMSkgKyAn4oCmJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3Vic3RyaW5nID0gKHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKSA9PiB7XHJcblx0aWYgKHN0cjEuaW5jbHVkZXMoc3RyMikgfHwgc3RyMi5pbmNsdWRlcyhzdHIxKSkgcmV0dXJuIHRydWVcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG15SW5jbHVkZXMsIG15SW5kZXhPZiwgbXlTbGljZSB9IGZyb20gJy4vdGFza3MvYXJyYXktbWV0aG9kcydcclxuaW1wb3J0IHsgY2FsY3VsYXRlLCBvcGVyYXRpb25zIH0gZnJvbSAnLi90YXNrcy9jYWxjdWxhdG9yJ1xyXG5pbXBvcnQgeyBteUZpbHRlciB9IGZyb20gJy4vdGFza3MvbXktZmlsdGVyJ1xyXG5pbXBvcnQgeyBnZXRPYmplY3RWYWx1ZXNTdW0sIGdldFNvcnRlZE9iamVjdEtleXMgfSBmcm9tICcuL3Rhc2tzL29iamVjdHMnXHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vdGFza3Mvc2VjcmV0LW51bWJlcidcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgaXNTdWJzdHJpbmcsIHRyaW1MaW5lIH0gZnJvbSAnLi90YXNrcy9zdHJpbmdzJ1xyXG5cclxuLyog0JfQsNC00LDQvdC40LUgNi4g0J/QvtCy0YLQvtGA0LjQvCDQvtGB0L3QvtCy0YsgKi9cclxuXHJcbnN0YXJ0R2FtZSgpXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSA5LiDQnNCw0YHRgdC40LLRiyDQuCDQvNC10YLQvtC00Ysg0L/QviDRgNCw0LHQvtGC0LUg0YEg0L3QuNC80LggKi9cclxuXHJcbmNvbnN0IGFyciA9IFsxLCAyLCAzLCA0LCA1LCAxLCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1XVxyXG5cclxuY29uc29sZS5sb2cobXlTbGljZShhcnIsIDUsIDEwMCkpXHJcbmNvbnNvbGUubG9nKG15SW5kZXhPZihhcnIsIDIwKSlcclxuY29uc29sZS5sb2cobXlJbmRleE9mKGFyciwgMSwgMykpXHJcbmNvbnNvbGUubG9nKG15SW5jbHVkZXMoYXJyLCA1KSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDIsIDMpKVxyXG5cclxuLyog0JfQsNC00LDQvdC40LUgMTAuINCf0L7QstGC0L7RgNGP0LXQvCDQvtCx0YrQtdC60YLRiyAqL1xyXG5cclxuY29uc3Qgb2JqZWN0ID0ge1xyXG5cdG5hbWU6ICdJdmFuJyxcclxuXHRhZ2U6IDE4LFxyXG5cdGV4cGVyaWVuY2U6IDEsXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGdldE9iamVjdFZhbHVlc1N1bShvYmplY3QpKVxyXG5jb25zb2xlLmxvZyhnZXRTb3J0ZWRPYmplY3RLZXlzKG9iamVjdCkpXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSAxMS4g0KDQsNCx0L7RgtCwINGB0L4g0YHRgtGA0L7QutCw0LzQuCAqL1xyXG5cclxuY29uc29sZS5sb2coY2FwaXRhbGl6ZSgnINGB0LvQvtCy0LAgICcpKVxyXG5jb25zb2xlLmxvZyhcclxuXHR0cmltTGluZShcclxuXHRcdCfQkiDRh9Cw0YHRgtC90L7RgdGC0LgsICAgINCz0YDQsNC90LjRhtCwINC+0LHRg9GH0LXQvdC40Y8g0LrQsNC00YDQvtCyINCy0LvQtdGH0LXRgiDQt9CwINGB0L7QsdC+0Lkg0L/RgNC+0YbQtdGB0YEg0LLQvdC10LTRgNC10L3QuNGPINC4INC80L7QtNC10YDQvdC40LfQsNGG0LjQuCDQutC70LDRgdGC0LXRgNC40LfQsNGG0LjQuCDRg9GB0LjQu9C40LkuJyxcclxuXHRcdDEzXHJcblx0KVxyXG4pXHJcbmNvbnNvbGUubG9nKFxyXG5cdHRyaW1MaW5lKFxyXG5cdFx0J9CSINGG0LXQu9C+0LwsINC60L7QvdC10YfQvdC+LCDQv9C+0YHRgtC+0Y/QvdC90YvQuSDQutC+0LvQuNGH0LXRgdGC0LLQtdC90L3Ri9C5INGA0L7RgdGCINC4INGB0YTQtdGA0LAg0L3QsNGI0LXQuSDQsNC60YLQuNCy0L3QvtGB0YLQuCDQvdC1INC00LDRkdGCINC90LDQvCDQuNC90L7Qs9C+INCy0YvQsdC+0YDQsCwg0LrRgNC+0LzQtSDQvtC/0YDQtdC00LXQu9C10L3QuNGPINCy0YvQstC+0LTQsCDRgtC10LrRg9GJ0LjRhSDQsNC60YLQuNCy0L7Qsi4nLFxyXG5cdFx0NDBcclxuXHQpXHJcbilcclxuY29uc29sZS5sb2coaXNTdWJzdHJpbmcoJ2FiYycsICdhYmNkZScpKVxyXG5jb25zb2xlLmxvZyhpc1N1YnN0cmluZygnYWJjZGUnLCAnY2RlJykpXHJcbmNvbnNvbGUubG9nKGlzU3Vic3RyaW5nKCdhYmMnLCAnYmNkJykpXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSAxMy4g0KTRg9C90LrRhtC40L7QvdCw0LvRjNC90YvQtSDQstGL0YDQsNC20LXQvdC40Y8gKi9cclxuXHJcbmNvbnN0IHNlbGVjdGVkT3BlcmF0aW9uID0gJ211bHRpcGx5J1xyXG5jb25zb2xlLmxvZyhjYWxjdWxhdGUoNiwgMywgb3BlcmF0aW9uc1tzZWxlY3RlZE9wZXJhdGlvbl0pKSAvLyAxOFxyXG5cclxuLyog0JfQsNC00LDQvdC40LUgMTQuINCh0YLRgNC10LvQvtGH0L3Ri9C1INGE0YPQvdC60YbQuNC4INC4INGD0LPQu9GD0LHQu9C10L3QuNC1INCyINC80LDRgdGB0LjQstGLICovXHJcblxyXG5jb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdXHJcblxyXG5jb25zdCBldmVuTnVtYmVycyA9IG15RmlsdGVyKG51bWJlcnMsIG51bSA9PiBudW0gJSAyID09PSAwKVxyXG5jb25zb2xlLmxvZyhldmVuTnVtYmVycykgLy8gWzIsIDRdXHJcblxyXG5jb25zdCBncmVhdGVyVGhhblRocmVlID0gbXlGaWx0ZXIobnVtYmVycywgbnVtID0+IG51bSA+IDMpXHJcbmNvbnNvbGUubG9nKGdyZWF0ZXJUaGFuVGhyZWUpIC8vIFs0LCA1XVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=