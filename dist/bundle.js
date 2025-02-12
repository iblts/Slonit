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

/***/ "./src/tasks/closures.ts":
/*!*******************************!*\
  !*** ./src/tasks/closures.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLogger: () => (/* binding */ createLogger),
/* harmony export */   createRandomGenerator: () => (/* binding */ createRandomGenerator)
/* harmony export */ });
var createLogger = function () {
    var logs = [];
    return {
        log: function (message) {
            logs.push(message);
        },
        getLogs: function () {
            logs.forEach(function (message) { return console.log(message); });
        },
    };
};
var createRandomGenerator = function (minimal, maximal) {
    var min = minimal;
    var max = maximal;
    return function () { return Math.floor(Math.random() * (max - min + 1) + min); };
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
/* harmony import */ var _tasks_closures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/closures */ "./src/tasks/closures.ts");
/* harmony import */ var _tasks_my_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/my-filter */ "./src/tasks/my-filter.ts");
/* harmony import */ var _tasks_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/objects */ "./src/tasks/objects.ts");
/* harmony import */ var _tasks_secret_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/secret-number */ "./src/tasks/secret-number.ts");
/* harmony import */ var _tasks_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/strings */ "./src/tasks/strings.ts");







/* Задание 6. Повторим основы */
(0,_tasks_secret_number__WEBPACK_IMPORTED_MODULE_5__.startGame)();
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
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_4__.getObjectValuesSum)(object));
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_4__.getSortedObjectKeys)(object));
/* Задание 11. Работа со строками */
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.capitalize)(' слова  '));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.trimLine)('В частности,    граница обучения кадров влечет за собой процесс внедрения и модернизации кластеризации усилий.', 13));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.trimLine)('В целом, конечно, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения вывода текущих активов.', 40));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.isSubstring)('abc', 'abcde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.isSubstring)('abcde', 'cde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_6__.isSubstring)('abc', 'bcd'));
/* Задание 13. Функциональные выражения */
var selectedOperation = 'multiply';
console.log((0,_tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.calculate)(6, 3, _tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.operations[selectedOperation])); // 18
/* Задание 14. Стрелочные функции и углубление в массивы */
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = (0,_tasks_my_filter__WEBPACK_IMPORTED_MODULE_3__.myFilter)(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers); // [2, 4]
var greaterThanThree = (0,_tasks_my_filter__WEBPACK_IMPORTED_MODULE_3__.myFilter)(numbers, function (num) { return num > 3; });
console.log(greaterThanThree); // [4, 5]
/* Задание 15. Область видимости и замыкания */
var logger = (0,_tasks_closures__WEBPACK_IMPORTED_MODULE_2__.createLogger)();
logger.log('Message 1');
logger.log('Message 2');
logger.getLogs();
var random = (0,_tasks_closures__WEBPACK_IMPORTED_MODULE_2__.createRandomGenerator)(10, 100);
for (var i = 0; i < 50; i++)
    console.log(random());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLDBEQUFRLENBQUMsT0FBTyxFQUFFLGFBQUcsSUFBSSxVQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLENBQUM7QUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBQyxTQUFTO0FBRWxDLElBQU0sZ0JBQWdCLEdBQUcsMERBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBRyxJQUFJLFVBQUcsR0FBRyxDQUFDLEVBQVAsQ0FBTyxDQUFDO0FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxTQUFTO0FBRXZDLCtDQUErQztBQUUvQyxJQUFNLE1BQU0sR0FBRyw2REFBWSxFQUFFO0FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFFaEIsSUFBTSxNQUFNLEdBQUcsc0VBQXFCLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztBQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvYXJyYXktbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvY2xvc3VyZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL215LWZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvc2VjcmV0LW51bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvc3RyaW5ncy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15U2xpY2UgPSA8VD4oYXJyOiBUW10sIHN0YXJ0PzogbnVtYmVyLCBlbmQgPSBhcnIubGVuZ3RoKSA9PiB7XHJcblx0aWYgKCFzdGFydCkgcmV0dXJuIFsuLi5hcnJdXHJcblx0aWYgKHN0YXJ0ID49IGFyci5sZW5ndGgpIHJldHVybiBbXVxyXG5cdGNvbnN0IGxhc3RJbmRleCA9IE1hdGgubWluKGFyci5sZW5ndGgsIGVuZClcclxuXHRjb25zdCBuZXdBcnJheTogVFtdID0gW11cclxuXHJcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGFzdEluZGV4OyBpKyspIHtcclxuXHRcdG5ld0FycmF5LnB1c2goYXJyW2ldKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld0FycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluZGV4T2YgPSA8VD4oYXJyOiBUW10sIGl0ZW06IFQsIGZyb20gPSAwKSA9PiB7XHJcblx0Zm9yIChsZXQgaSA9IGZyb207IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChpdGVtID09PSBhcnJbaV0pIHJldHVybiBpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gLTFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG15SW5jbHVkZXMgPSA8VD4oYXJyOiBUW10sIGl0ZW06IFQsIGZyb20gPSAwKSA9PiB7XHJcblx0Zm9yIChsZXQgaSA9IGZyb207IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG4iLCJjb25zdCBhZGQgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiXHJcbmNvbnN0IHN1YnN0cmFjdCA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAtIGJcclxuY29uc3QgbXVsdGlwbHkgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKiBiXHJcbmNvbnN0IGRpdmlkZSA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAvIGJcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVyYXRpb25zID0ge1xyXG5cdGFkZCxcclxuXHRzdWJzdHJhY3QsXHJcblx0bXVsdGlwbHksXHJcblx0ZGl2aWRlLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlID0gKFxyXG5cdGE6IG51bWJlcixcclxuXHRiOiBudW1iZXIsXHJcblx0ZnVuYzogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXJcclxuKSA9PiB7XHJcblx0cmV0dXJuIGZ1bmMoYSwgYilcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlTG9nZ2VyID0gKCkgPT4ge1xyXG5cdGxldCBsb2dzOiBzdHJpbmdbXSA9IFtdXHJcblx0cmV0dXJuIHtcclxuXHRcdGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHRcdFx0bG9ncy5wdXNoKG1lc3NhZ2UpXHJcblx0XHR9LFxyXG5cdFx0Z2V0TG9ncygpIHtcclxuXHRcdFx0bG9ncy5mb3JFYWNoKG1lc3NhZ2UgPT4gY29uc29sZS5sb2cobWVzc2FnZSkpXHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJhbmRvbUdlbmVyYXRvciA9IChtaW5pbWFsOiBudW1iZXIsIG1heGltYWw6IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IG1pbiA9IG1pbmltYWxcclxuXHRjb25zdCBtYXggPSBtYXhpbWFsXHJcblxyXG5cdHJldHVybiAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IG15RmlsdGVyID0gPFQ+KGFycjogVFtdLCBmdW5jOiAoZWw6IFQpID0+IGJvb2xlYW4pID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSBbXVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGZ1bmMoYXJyW2ldKSkgcmVzdWx0LnB1c2goYXJyW2ldKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnZXRPYmplY3RWYWx1ZXNTdW0gPSA8VD4ob2JqZWN0OiBUKSA9PiB7XHJcblx0bGV0IHN1bSA9IDBcclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0aWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ251bWJlcicpIHN1bSArPSBvYmplY3Rba2V5XVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN1bVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ydGVkT2JqZWN0S2V5cyA9IDxUPihvYmplY3Q6IFQpID0+IHtcclxuXHRjb25zdCBrZXlzID0gW11cclxuXHJcblx0Zm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG5cdFx0a2V5cy5wdXNoKGtleSlcclxuXHR9XHJcblxyXG5cdHJldHVybiBrZXlzLnNvcnQoKVxyXG59XHJcbiIsImNvbnN0IGdldFJhbmRvbUZyb21SYW5nZSA9IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kIC0gc3RhcnQgKyAxKSkgKyBzdGFydFxyXG59XHJcblxyXG5jb25zdCBnZXRBdmVyYWdlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMikgKyBtaW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRjb25zdCBzZWNyZXROdW1iZXIgPSBnZXRSYW5kb21Gcm9tUmFuZ2UoMSwgMTAwKVxyXG5cdGNvbnNvbGUubG9nKGDQmtC+0LzQv9GM0Y7RgtC10YAgMTogKtC30LDQs9Cw0LTQsNC7INGH0LjRgdC70L4gJHtzZWNyZXROdW1iZXJ9KmApXHJcblxyXG5cdGxldCBtaW4gPSAxXHJcblx0bGV0IG1heCA9IDEwMFxyXG5cclxuXHR3aGlsZSAobWluIDw9IG1heCkge1xyXG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IGdldEF2ZXJhZ2UobWluLCBtYXgpXHJcblx0XHRjb25zb2xlLmxvZyhg0JrQvtC80L/RjNGO0YLQtdGAIDI6INCf0YDQvtCx0YPRjiDRh9C40YHQu9C+ICR7Y3VycmVudE51bWJlcn0uYClcclxuXHJcblx0XHRpZiAoY3VycmVudE51bWJlciA9PT0gc2VjcmV0TnVtYmVyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQmtC+0LzQv9GM0Y7RgtC10YAgMTog0KPQs9Cw0LTQsNC7IScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudE51bWJlciA+IHNlY3JldE51bWJlcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCc0LXQvdGM0YjQtS5cXG4nKVxyXG5cdFx0XHRtYXggPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCR0L7Qu9GM0YjQtS5cXG4nKVxyXG5cdFx0XHRtaW4gPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3QgdHJpbWVkU3RyaW5nID0gc3RyLnRyaW0oKVxyXG5cdGlmICghdHJpbWVkU3RyaW5nKSByZXR1cm4gc3RyXHJcblx0cmV0dXJuIHRyaW1lZFN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgdHJpbWVkU3RyaW5nLnNsaWNlKDEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmltTGluZSA9IChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuXHRjb25zdCB0cmltZWRTdHJpbmcgPSBzdHIudHJpbSgpXHJcblx0aWYgKHRyaW1lZFN0cmluZy5sZW5ndGggPD0gbWF4TGVuZ3RoKSByZXR1cm4gdHJpbWVkU3RyaW5nXHJcblxyXG5cdGNvbnN0IHNlcGFyYXRpbmdDaGFycyA9IFsnICcsICcsJywgJy4nLCAnIScsICc/JywgJzonLCAnOyddXHJcblxyXG5cdGZvciAobGV0IGkgPSBtYXhMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0Ly8g0LjRidC10Lwg0YHQuNC80LLQvtC7INGA0LDQt9C00LXQu9C10L3QuNGPINC40Lcgc2VwYXJhdGluZ0NoYXJzXHJcblx0XHRpZiAoc2VwYXJhdGluZ0NoYXJzLmluY2x1ZGVzKHRyaW1lZFN0cmluZ1tpXSkpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IGk7IGogPj0gMDsgai0tKSB7XHJcblx0XHRcdFx0Ly8g0LjRidC10Lwg0LHQu9C40LbQsNC50YjQuNC5INGB0LjQvNCy0L7QuyDQvdC1INCy0YXQvtC00Y/RidC40Lkg0LIgc2VwYXJhdGluZ0NoYXJzXHJcblx0XHRcdFx0aWYgKCFzZXBhcmF0aW5nQ2hhcnMuaW5jbHVkZXModHJpbWVkU3RyaW5nW2pdKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRyaW1lZFN0cmluZy5zbGljZSgwLCBqICsgMSkgKyAn4oCmJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3Vic3RyaW5nID0gKHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKSA9PiB7XHJcblx0aWYgKHN0cjEuaW5jbHVkZXMoc3RyMikgfHwgc3RyMi5pbmNsdWRlcyhzdHIxKSkgcmV0dXJuIHRydWVcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG15SW5jbHVkZXMsIG15SW5kZXhPZiwgbXlTbGljZSB9IGZyb20gJy4vdGFza3MvYXJyYXktbWV0aG9kcydcclxuaW1wb3J0IHsgY2FsY3VsYXRlLCBvcGVyYXRpb25zIH0gZnJvbSAnLi90YXNrcy9jYWxjdWxhdG9yJ1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGNyZWF0ZVJhbmRvbUdlbmVyYXRvciB9IGZyb20gJy4vdGFza3MvY2xvc3VyZXMnXHJcbmltcG9ydCB7IG15RmlsdGVyIH0gZnJvbSAnLi90YXNrcy9teS1maWx0ZXInXHJcbmltcG9ydCB7IGdldE9iamVjdFZhbHVlc1N1bSwgZ2V0U29ydGVkT2JqZWN0S2V5cyB9IGZyb20gJy4vdGFza3Mvb2JqZWN0cydcclxuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi90YXNrcy9zZWNyZXQtbnVtYmVyJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBpc1N1YnN0cmluZywgdHJpbUxpbmUgfSBmcm9tICcuL3Rhc2tzL3N0cmluZ3MnXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSA2LiDQn9C+0LLRgtC+0YDQuNC8INC+0YHQvdC+0LLRiyAqL1xyXG5cclxuc3RhcnRHYW1lKClcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDkuINCc0LDRgdGB0LjQstGLINC4INC80LXRgtC+0LTRiyDQv9C+INGA0LDQsdC+0YLQtSDRgSDQvdC40LzQuCAqL1xyXG5cclxuY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDEsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTVdXHJcblxyXG5jb25zb2xlLmxvZyhteVNsaWNlKGFyciwgNSwgMTAwKSlcclxuY29uc29sZS5sb2cobXlJbmRleE9mKGFyciwgMjApKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAxLCAzKSlcclxuY29uc29sZS5sb2cobXlJbmNsdWRlcyhhcnIsIDUpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgMiwgMykpXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSAxMC4g0J/QvtCy0YLQvtGA0Y/QtdC8INC+0LHRitC10LrRgtGLICovXHJcblxyXG5jb25zdCBvYmplY3QgPSB7XHJcblx0bmFtZTogJ0l2YW4nLFxyXG5cdGFnZTogMTgsXHJcblx0ZXhwZXJpZW5jZTogMSxcclxufVxyXG5cclxuY29uc29sZS5sb2coZ2V0T2JqZWN0VmFsdWVzU3VtKG9iamVjdCkpXHJcbmNvbnNvbGUubG9nKGdldFNvcnRlZE9iamVjdEtleXMob2JqZWN0KSlcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDExLiDQoNCw0LHQvtGC0LAg0YHQviDRgdGC0YDQvtC60LDQvNC4ICovXHJcblxyXG5jb25zb2xlLmxvZyhjYXBpdGFsaXplKCcg0YHQu9C+0LLQsCAgJykpXHJcbmNvbnNvbGUubG9nKFxyXG5cdHRyaW1MaW5lKFxyXG5cdFx0J9CSINGH0LDRgdGC0L3QvtGB0YLQuCwgICAg0LPRgNCw0L3QuNGG0LAg0L7QsdGD0YfQtdC90LjRjyDQutCw0LTRgNC+0LIg0LLQu9C10YfQtdGCINC30LAg0YHQvtCx0L7QuSDQv9GA0L7RhtC10YHRgSDQstC90LXQtNGA0LXQvdC40Y8g0Lgg0LzQvtC00LXRgNC90LjQt9Cw0YbQuNC4INC60LvQsNGB0YLQtdGA0LjQt9Cw0YbQuNC4INGD0YHQuNC70LjQuS4nLFxyXG5cdFx0MTNcclxuXHQpXHJcbilcclxuY29uc29sZS5sb2coXHJcblx0dHJpbUxpbmUoXHJcblx0XHQn0JIg0YbQtdC70L7QvCwg0LrQvtC90LXRh9C90L4sINC/0L7RgdGC0L7Rj9C90L3Ri9C5INC60L7Qu9C40YfQtdGB0YLQstC10L3QvdGL0Lkg0YDQvtGB0YIg0Lgg0YHRhNC10YDQsCDQvdCw0YjQtdC5INCw0LrRgtC40LLQvdC+0YHRgtC4INC90LUg0LTQsNGR0YIg0L3QsNC8INC40L3QvtCz0L4g0LLRi9Cx0L7RgNCwLCDQutGA0L7QvNC1INC+0L/RgNC10LTQtdC70LXQvdC40Y8g0LLRi9Cy0L7QtNCwINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvtCyLicsXHJcblx0XHQ0MFxyXG5cdClcclxuKVxyXG5jb25zb2xlLmxvZyhpc1N1YnN0cmluZygnYWJjJywgJ2FiY2RlJykpXHJcbmNvbnNvbGUubG9nKGlzU3Vic3RyaW5nKCdhYmNkZScsICdjZGUnKSlcclxuY29uc29sZS5sb2coaXNTdWJzdHJpbmcoJ2FiYycsICdiY2QnKSlcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDEzLiDQpNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C1INCy0YvRgNCw0LbQtdC90LjRjyAqL1xyXG5cclxuY29uc3Qgc2VsZWN0ZWRPcGVyYXRpb24gPSAnbXVsdGlwbHknXHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZSg2LCAzLCBvcGVyYXRpb25zW3NlbGVjdGVkT3BlcmF0aW9uXSkpIC8vIDE4XHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSAxNC4g0KHRgtGA0LXQu9C+0YfQvdGL0LUg0YTRg9C90LrRhtC40Lgg0Lgg0YPQs9C70YPQsdC70LXQvdC40LUg0LIg0LzQsNGB0YHQuNCy0YsgKi9cclxuXHJcbmNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNV1cclxuXHJcbmNvbnN0IGV2ZW5OdW1iZXJzID0gbXlGaWx0ZXIobnVtYmVycywgbnVtID0+IG51bSAlIDIgPT09IDApXHJcbmNvbnNvbGUubG9nKGV2ZW5OdW1iZXJzKSAvLyBbMiwgNF1cclxuXHJcbmNvbnN0IGdyZWF0ZXJUaGFuVGhyZWUgPSBteUZpbHRlcihudW1iZXJzLCBudW0gPT4gbnVtID4gMylcclxuY29uc29sZS5sb2coZ3JlYXRlclRoYW5UaHJlZSkgLy8gWzQsIDVdXHJcblxyXG4vKiDQl9Cw0LTQsNC90LjQtSAxNS4g0J7QsdC70LDRgdGC0Ywg0LLQuNC00LjQvNC+0YHRgtC4INC4INC30LDQvNGL0LrQsNC90LjRjyAqL1xyXG5cclxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcclxubG9nZ2VyLmxvZygnTWVzc2FnZSAxJylcclxubG9nZ2VyLmxvZygnTWVzc2FnZSAyJylcclxubG9nZ2VyLmdldExvZ3MoKVxyXG5cclxuY29uc3QgcmFuZG9tID0gY3JlYXRlUmFuZG9tR2VuZXJhdG9yKDEwLCAxMDApXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykgY29uc29sZS5sb2cocmFuZG9tKCkpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==