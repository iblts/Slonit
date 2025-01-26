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
/* harmony import */ var _tasks_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/objects */ "./src/tasks/objects.ts");
/* harmony import */ var _tasks_secret_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/secret-number */ "./src/tasks/secret-number.ts");
/* harmony import */ var _tasks_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/strings */ "./src/tasks/strings.ts");





/* Задание 6. Повторим основы */
(0,_tasks_secret_number__WEBPACK_IMPORTED_MODULE_3__.startGame)();
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
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_2__.getObjectValuesSum)(object));
console.log((0,_tasks_objects__WEBPACK_IMPORTED_MODULE_2__.getSortedObjectKeys)(object));
/* Задание 11. Работа со строками */
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.capitalize)(' слова  '));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.trimLine)('В частности,    граница обучения кадров влечет за собой процесс внедрения и модернизации кластеризации усилий.', 13));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.trimLine)('В целом, конечно, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения вывода текущих активов.', 40));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.isSubstring)('abc', 'abcde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.isSubstring)('abcde', 'cde'));
console.log((0,_tasks_strings__WEBPACK_IMPORTED_MODULE_4__.isSubstring)('abc', 'bcd'));
/* Задание 13. Функциональные выражения */
var selectedOperation = 'multiply';
console.log((0,_tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.calculate)(6, 3, _tasks_calculator__WEBPACK_IMPORTED_MODULE_1__.operations[selectedOperation])); // 18

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvYXJyYXktbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvc2VjcmV0LW51bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvc3RyaW5ncy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15U2xpY2UgPSA8VD4oYXJyOiBUW10sIHN0YXJ0PzogbnVtYmVyLCBlbmQgPSBhcnIubGVuZ3RoKSA9PiB7XHJcblx0aWYgKCFzdGFydCkgcmV0dXJuIFsuLi5hcnJdXHJcblx0aWYgKHN0YXJ0ID49IGFyci5sZW5ndGgpIHJldHVybiBbXVxyXG5cdGNvbnN0IGxhc3RJbmRleCA9IE1hdGgubWluKGFyci5sZW5ndGgsIGVuZClcclxuXHRjb25zdCBuZXdBcnJheTogVFtdID0gW11cclxuXHJcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGFzdEluZGV4OyBpKyspIHtcclxuXHRcdG5ld0FycmF5LnB1c2goYXJyW2ldKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ld0FycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBteUluZGV4T2YgPSA8VD4oYXJyOiBUW10sIGl0ZW06IFQsIGZyb20gPSAwKSA9PiB7XHJcblx0Zm9yIChsZXQgaSA9IGZyb207IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChpdGVtID09PSBhcnJbaV0pIHJldHVybiBpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gLTFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG15SW5jbHVkZXMgPSA8VD4oYXJyOiBUW10sIGl0ZW06IFQsIGZyb20gPSAwKSA9PiB7XHJcblx0Zm9yIChsZXQgaSA9IGZyb207IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG4iLCJjb25zdCBhZGQgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiXHJcbmNvbnN0IHN1YnN0cmFjdCA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAtIGJcclxuY29uc3QgbXVsdGlwbHkgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKiBiXHJcbmNvbnN0IGRpdmlkZSA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAvIGJcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVyYXRpb25zID0ge1xyXG5cdGFkZCxcclxuXHRzdWJzdHJhY3QsXHJcblx0bXVsdGlwbHksXHJcblx0ZGl2aWRlLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlID0gKFxyXG5cdGE6IG51bWJlcixcclxuXHRiOiBudW1iZXIsXHJcblx0ZnVuYzogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXJcclxuKSA9PiB7XHJcblx0cmV0dXJuIGZ1bmMoYSwgYilcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0T2JqZWN0VmFsdWVzU3VtID0gPFQ+KG9iamVjdDogVCkgPT4ge1xyXG5cdGxldCBzdW0gPSAwXHJcblxyXG5cdGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcclxuXHRcdGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT09ICdudW1iZXInKSBzdW0gKz0gb2JqZWN0W2tleV1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdW1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvcnRlZE9iamVjdEtleXMgPSA8VD4ob2JqZWN0OiBUKSA9PiB7XHJcblx0Y29uc3Qga2V5cyA9IFtdXHJcblxyXG5cdGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcclxuXHRcdGtleXMucHVzaChrZXkpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ga2V5cy5zb3J0KClcclxufVxyXG4iLCJjb25zdCBnZXRSYW5kb21Gcm9tUmFuZ2UgPSAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZCAtIHN0YXJ0ICsgMSkpICsgc3RhcnRcclxufVxyXG5cclxuY29uc3QgZ2V0QXZlcmFnZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcigobWF4IC0gbWluKSAvIDIpICsgbWluXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2VjcmV0TnVtYmVyID0gZ2V0UmFuZG9tRnJvbVJhbmdlKDEsIDEwMClcclxuXHRjb25zb2xlLmxvZyhg0JrQvtC80L/RjNGO0YLQtdGAIDE6ICrQt9Cw0LPQsNC00LDQuyDRh9C40YHQu9C+ICR7c2VjcmV0TnVtYmVyfSpgKVxyXG5cclxuXHRsZXQgbWluID0gMVxyXG5cdGxldCBtYXggPSAxMDBcclxuXHJcblx0d2hpbGUgKG1pbiA8PSBtYXgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnROdW1iZXIgPSBnZXRBdmVyYWdlKG1pbiwgbWF4KVxyXG5cdFx0Y29uc29sZS5sb2coYNCa0L7QvNC/0YzRjtGC0LXRgCAyOiDQn9GA0L7QsdGD0Y4g0YfQuNGB0LvQviAke2N1cnJlbnROdW1iZXJ9LmApXHJcblxyXG5cdFx0aWYgKGN1cnJlbnROdW1iZXIgPT09IHNlY3JldE51bWJlcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCj0LPQsNC00LDQuyEnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnJlbnROdW1iZXIgPiBzZWNyZXROdW1iZXIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ9Ca0L7QvNC/0YzRjtGC0LXRgCAxOiDQnNC10L3RjNGI0LUuXFxuJylcclxuXHRcdFx0bWF4ID0gY3VycmVudE51bWJlclxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ9Ca0L7QvNC/0YzRjtGC0LXRgCAxOiDQkdC+0LvRjNGI0LUuXFxuJylcclxuXHRcdFx0bWluID0gY3VycmVudE51bWJlclxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHI6IHN0cmluZykgPT4ge1xyXG5cdGNvbnN0IHRyaW1lZFN0cmluZyA9IHN0ci50cmltKClcclxuXHRpZiAoIXRyaW1lZFN0cmluZykgcmV0dXJuIHN0clxyXG5cdHJldHVybiB0cmltZWRTdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHRyaW1lZFN0cmluZy5zbGljZSgxKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJpbUxpbmUgPSAoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKSA9PiB7XHJcblx0Y29uc3QgdHJpbWVkU3RyaW5nID0gc3RyLnRyaW0oKVxyXG5cdGlmICh0cmltZWRTdHJpbmcubGVuZ3RoIDw9IG1heExlbmd0aCkgcmV0dXJuIHRyaW1lZFN0cmluZ1xyXG5cclxuXHRjb25zdCBzZXBhcmF0aW5nQ2hhcnMgPSBbJyAnLCAnLCcsICcuJywgJyEnLCAnPycsICc6JywgJzsnXVxyXG5cclxuXHRmb3IgKGxldCBpID0gbWF4TGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdC8vINC40YnQtdC8INGB0LjQvNCy0L7QuyDRgNCw0LfQtNC10LvQtdC90LjRjyDQuNC3IHNlcGFyYXRpbmdDaGFyc1xyXG5cdFx0aWYgKHNlcGFyYXRpbmdDaGFycy5pbmNsdWRlcyh0cmltZWRTdHJpbmdbaV0pKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSBpOyBqID49IDA7IGotLSkge1xyXG5cdFx0XHRcdC8vINC40YnQtdC8INCx0LvQuNC20LDQudGI0LjQuSDRgdC40LzQstC+0Lsg0L3QtSDQstGF0L7QtNGP0YnQuNC5INCyIHNlcGFyYXRpbmdDaGFyc1xyXG5cdFx0XHRcdGlmICghc2VwYXJhdGluZ0NoYXJzLmluY2x1ZGVzKHRyaW1lZFN0cmluZ1tqXSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cmltZWRTdHJpbmcuc2xpY2UoMCwgaiArIDEpICsgJ+KApidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1N1YnN0cmluZyA9IChzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZykgPT4ge1xyXG5cdGlmIChzdHIxLmluY2x1ZGVzKHN0cjIpIHx8IHN0cjIuaW5jbHVkZXMoc3RyMSkpIHJldHVybiB0cnVlXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBteUluY2x1ZGVzLCBteUluZGV4T2YsIG15U2xpY2UgfSBmcm9tICcuL3Rhc2tzL2FycmF5LW1ldGhvZHMnXHJcbmltcG9ydCB7IGNhbGN1bGF0ZSwgb3BlcmF0aW9ucyB9IGZyb20gJy4vdGFza3MvY2FsY3VsYXRvcidcclxuaW1wb3J0IHsgZ2V0T2JqZWN0VmFsdWVzU3VtLCBnZXRTb3J0ZWRPYmplY3RLZXlzIH0gZnJvbSAnLi90YXNrcy9vYmplY3RzJ1xyXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tICcuL3Rhc2tzL3NlY3JldC1udW1iZXInXHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzU3Vic3RyaW5nLCB0cmltTGluZSB9IGZyb20gJy4vdGFza3Mvc3RyaW5ncydcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDYuINCf0L7QstGC0L7RgNC40Lwg0L7RgdC90L7QstGLICovXHJcblxyXG5zdGFydEdhbWUoKVxyXG5cclxuLyog0JfQsNC00LDQvdC40LUgOS4g0JzQsNGB0YHQuNCy0Ysg0Lgg0LzQtdGC0L7QtNGLINC/0L4g0YDQsNCx0L7RgtC1INGBINC90LjQvNC4ICovXHJcblxyXG5jb25zdCBhcnIgPSBbMSwgMiwgMywgNCwgNSwgMSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNV1cclxuXHJcbmNvbnNvbGUubG9nKG15U2xpY2UoYXJyLCA1LCAxMDApKVxyXG5jb25zb2xlLmxvZyhteUluZGV4T2YoYXJyLCAyMCkpXHJcbmNvbnNvbGUubG9nKG15SW5kZXhPZihhcnIsIDEsIDMpKVxyXG5jb25zb2xlLmxvZyhteUluY2x1ZGVzKGFyciwgNSkpXHJcbmNvbnNvbGUubG9nKG15SW5jbHVkZXMoYXJyLCAyLCAzKSlcclxuXHJcbi8qINCX0LDQtNCw0L3QuNC1IDEwLiDQn9C+0LLRgtC+0YDRj9C10Lwg0L7QsdGK0LXQutGC0YsgKi9cclxuXHJcbmNvbnN0IG9iamVjdCA9IHtcclxuXHRuYW1lOiAnSXZhbicsXHJcblx0YWdlOiAxOCxcclxuXHRleHBlcmllbmNlOiAxLFxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhnZXRPYmplY3RWYWx1ZXNTdW0ob2JqZWN0KSlcclxuY29uc29sZS5sb2coZ2V0U29ydGVkT2JqZWN0S2V5cyhvYmplY3QpKVxyXG5cclxuLyog0JfQsNC00LDQvdC40LUgMTEuINCg0LDQsdC+0YLQsCDRgdC+INGB0YLRgNC+0LrQsNC80LggKi9cclxuXHJcbmNvbnNvbGUubG9nKGNhcGl0YWxpemUoJyDRgdC70L7QstCwICAnKSlcclxuY29uc29sZS5sb2coXHJcblx0dHJpbUxpbmUoXHJcblx0XHQn0JIg0YfQsNGB0YLQvdC+0YHRgtC4LCAgICDQs9GA0LDQvdC40YbQsCDQvtCx0YPRh9C10L3QuNGPINC60LDQtNGA0L7QsiDQstC70LXRh9C10YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQvtGG0LXRgdGBINCy0L3QtdC00YDQtdC90LjRjyDQuCDQvNC+0LTQtdGA0L3QuNC30LDRhtC40Lgg0LrQu9Cw0YHRgtC10YDQuNC30LDRhtC40Lgg0YPRgdC40LvQuNC5LicsXHJcblx0XHQxM1xyXG5cdClcclxuKVxyXG5jb25zb2xlLmxvZyhcclxuXHR0cmltTGluZShcclxuXHRcdCfQkiDRhtC10LvQvtC8LCDQutC+0L3QtdGH0L3Qviwg0L/QvtGB0YLQvtGP0L3QvdGL0Lkg0LrQvtC70LjRh9C10YHRgtCy0LXQvdC90YvQuSDRgNC+0YHRgiDQuCDRgdGE0LXRgNCwINC90LDRiNC10Lkg0LDQutGC0LjQstC90L7RgdGC0Lgg0L3QtSDQtNCw0ZHRgiDQvdCw0Lwg0LjQvdC+0LPQviDQstGL0LHQvtGA0LAsINC60YDQvtC80LUg0L7Qv9GA0LXQtNC10LvQtdC90LjRjyDQstGL0LLQvtC00LAg0YLQtdC60YPRidC40YUg0LDQutGC0LjQstC+0LIuJyxcclxuXHRcdDQwXHJcblx0KVxyXG4pXHJcbmNvbnNvbGUubG9nKGlzU3Vic3RyaW5nKCdhYmMnLCAnYWJjZGUnKSlcclxuY29uc29sZS5sb2coaXNTdWJzdHJpbmcoJ2FiY2RlJywgJ2NkZScpKVxyXG5jb25zb2xlLmxvZyhpc1N1YnN0cmluZygnYWJjJywgJ2JjZCcpKVxyXG5cclxuLyog0JfQsNC00LDQvdC40LUgMTMuINCk0YPQvdC60YbQuNC+0L3QsNC70YzQvdGL0LUg0LLRi9GA0LDQttC10L3QuNGPICovXHJcblxyXG5jb25zdCBzZWxlY3RlZE9wZXJhdGlvbiA9ICdtdWx0aXBseSdcclxuY29uc29sZS5sb2coY2FsY3VsYXRlKDYsIDMsIG9wZXJhdGlvbnNbc2VsZWN0ZWRPcGVyYXRpb25dKSkgLy8gMThcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9