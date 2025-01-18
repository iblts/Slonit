/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            console.log('Компьютер 1: Меньше.');
            max = currentNumber;
        }
        else {
            console.log('Компьютер 1: Больше.');
            min = currentNumber;
        }
    }
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
/* harmony import */ var _tasks_secret_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/secret-number */ "./src/tasks/secret-number.ts");

(0,_tasks_secret_number__WEBPACK_IMPORTED_MODULE_0__.startGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEtBQWEsRUFBRSxHQUFXO0lBQ3JELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUM3RCxDQUFDO0FBRUQsSUFBTSxVQUFVLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztJQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUN6QyxDQUFDO0FBRU0sSUFBTSxTQUFTLEdBQUc7SUFDeEIsSUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtJQUErQixZQUFZLE1BQUcsQ0FBQztJQUUzRCxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ1gsSUFBSSxHQUFHLEdBQUcsR0FBRztJQUViLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0lBQTZCLGFBQWEsTUFBRyxDQUFDO1FBRTFELElBQUksYUFBYSxLQUFLLFlBQVksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsTUFBSztRQUNOLENBQUM7UUFDRCxJQUFJLGFBQWEsR0FBRyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLEdBQUcsR0FBRyxhQUFhO1FBQ3BCLENBQUM7YUFBTSxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxHQUFHLEdBQUcsYUFBYTtRQUNwQixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7Ozs7Ozs7VUMvQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRDtBQUVqRCwrREFBUyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3NlY3JldC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFJhbmRvbUZyb21SYW5nZSA9IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kIC0gc3RhcnQgKyAxKSkgKyBzdGFydFxyXG59XHJcblxyXG5jb25zdCBnZXRBdmVyYWdlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMikgKyBtaW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRjb25zdCBzZWNyZXROdW1iZXIgPSBnZXRSYW5kb21Gcm9tUmFuZ2UoMSwgMTAwKVxyXG5cdGNvbnNvbGUubG9nKGDQmtC+0LzQv9GM0Y7RgtC10YAgMTogKtC30LDQs9Cw0LTQsNC7INGH0LjRgdC70L4gJHtzZWNyZXROdW1iZXJ9KmApXHJcblxyXG5cdGxldCBtaW4gPSAxXHJcblx0bGV0IG1heCA9IDEwMFxyXG5cclxuXHR3aGlsZSAobWluIDw9IG1heCkge1xyXG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IGdldEF2ZXJhZ2UobWluLCBtYXgpXHJcblx0XHRjb25zb2xlLmxvZyhg0JrQvtC80L/RjNGO0YLQtdGAIDI6INCf0YDQvtCx0YPRjiDRh9C40YHQu9C+ICR7Y3VycmVudE51bWJlcn0uYClcclxuXHJcblx0XHRpZiAoY3VycmVudE51bWJlciA9PT0gc2VjcmV0TnVtYmVyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQmtC+0LzQv9GM0Y7RgtC10YAgMTog0KPQs9Cw0LTQsNC7IScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudE51bWJlciA+IHNlY3JldE51bWJlcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCc0LXQvdGM0YjQtS4nKVxyXG5cdFx0XHRtYXggPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0JrQvtC80L/RjNGO0YLQtdGAIDE6INCR0L7Qu9GM0YjQtS4nKVxyXG5cdFx0XHRtaW4gPSBjdXJyZW50TnVtYmVyXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi90YXNrcy9zZWNyZXQtbnVtYmVyJ1xyXG5cclxuc3RhcnRHYW1lKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9