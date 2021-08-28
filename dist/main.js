/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/resource.js":
/*!*************************!*\
  !*** ./src/resource.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findWeather": () => (/* binding */ findWeather),
/* harmony export */   "findCity": () => (/* binding */ findCity)
/* harmony export */ });
const apiKey = 'iiT5pz1slpmXaLAWU1cygqoLpwoAeAu3';

const findWeather = async (locId) => {
  const currentCondRes = 'http://dataservice.accuweather.com/currentconditions/v1/';

  const queryParam = `${locId}?apikey=${apiKey}`;

  const response = await fetch(currentCondRes + queryParam);
  const data = await response.json();

  return data[0];
};

const findCity = async (city) => {
  const cityResource = 'http://dataservice.accuweather.com/locations/v1/cities/search';

  const queryParam = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(cityResource + queryParam);
  const data = await response.json();

  return data[0];
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/resource.js");


const searchForm = document.querySelector('form');
const displayCard = document.querySelector('.display-card');
const weatherDetails = document.querySelector('.weather-details');
const time = document.querySelector('img.time');

const addCity = async (city) => {
  const cityKey = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findCity)(city);
  const cityWeather = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findWeather)(cityKey.Key);

  return {
    cityKey,
    cityWeather,
  };
};

const display = (info) => {
  const { cityKey } = info;
  const { cityWeather } = info;

  weatherDetails.innerHTML = `
                   <h5 class="location">${cityKey.EnglishName}</h5>
                   <div>${cityWeather.WeatherText}</div>
                   <div>
                        <span class="celcius">${cityWeather.Temperature.Metric.Value} &deg;C</span></br>
                        <span id="fahrenheit">${cityWeather.Temperature.Imperial.Value} &deg;F</span>
                   </div>`;

  const imgSrc = cityWeather.IsDayTime ? './asset/day.svg' : './asset/night.svg';

  time.setAttribute('src', imgSrc);

  if (displayCard.classList.contains('d-none')) {
    displayCard.classList.remove('d-none');
  }
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formInput = searchForm.city.value.trim();
  searchForm.reset();

  addCity(formInput)
    .then((data) => {
      display(data);
    }).catch((err) => {
      display(err);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQOztBQUVBLHdCQUF3QixNQUFNLFVBQVUsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsZ0NBQWdDLE9BQU8sS0FBSyxLQUFLOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbURBQVE7QUFDaEMsNEJBQTRCLHNEQUFXOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsY0FBYzs7QUFFeEI7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQSxnREFBZ0Qsc0NBQXNDLEtBQUs7QUFDM0YsZ0RBQWdELHdDQUF3QyxLQUFLO0FBQzdGOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLWpzLy4vc3JjL3Jlc291cmNlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gJ2lpVDVwejFzbHBtWGFMQVdVMWN5Z3FvTHB3b0FlQXUzJztcblxuZXhwb3J0IGNvbnN0IGZpbmRXZWF0aGVyID0gYXN5bmMgKGxvY0lkKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb25kUmVzID0gJ2h0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vY3VycmVudGNvbmRpdGlvbnMvdjEvJztcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYCR7bG9jSWR9P2FwaWtleT0ke2FwaUtleX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3VycmVudENvbmRSZXMgKyBxdWVyeVBhcmFtKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YVswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlSZXNvdXJjZSA9ICdodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoJztcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYD9hcGlrZXk9JHthcGlLZXl9JnE9JHtjaXR5fWA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjaXR5UmVzb3VyY2UgKyBxdWVyeVBhcmFtKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YVswXTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpbmRDaXR5LCBmaW5kV2VhdGhlciB9IGZyb20gJy4vcmVzb3VyY2UnO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgZGlzcGxheUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jYXJkJyk7XG5jb25zdCB3ZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRldGFpbHMnKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcudGltZScpO1xuXG5jb25zdCBhZGRDaXR5ID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgY2l0eUtleSA9IGF3YWl0IGZpbmRDaXR5KGNpdHkpO1xuICBjb25zdCBjaXR5V2VhdGhlciA9IGF3YWl0IGZpbmRXZWF0aGVyKGNpdHlLZXkuS2V5KTtcblxuICByZXR1cm4ge1xuICAgIGNpdHlLZXksXG4gICAgY2l0eVdlYXRoZXIsXG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gKGluZm8pID0+IHtcbiAgY29uc3QgeyBjaXR5S2V5IH0gPSBpbmZvO1xuICBjb25zdCB7IGNpdHlXZWF0aGVyIH0gPSBpbmZvO1xuXG4gIHdlYXRoZXJEZXRhaWxzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJsb2NhdGlvblwiPiR7Y2l0eUtleS5FbmdsaXNoTmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjaXR5V2VhdGhlci5XZWF0aGVyVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjZWxjaXVzXCI+JHtjaXR5V2VhdGhlci5UZW1wZXJhdHVyZS5NZXRyaWMuVmFsdWV9ICZkZWc7Qzwvc3Bhbj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJmYWhyZW5oZWl0XCI+JHtjaXR5V2VhdGhlci5UZW1wZXJhdHVyZS5JbXBlcmlhbC5WYWx1ZX0gJmRlZztGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgY29uc3QgaW1nU3JjID0gY2l0eVdlYXRoZXIuSXNEYXlUaW1lID8gJy4vYXNzZXQvZGF5LnN2ZycgOiAnLi9hc3NldC9uaWdodC5zdmcnO1xuXG4gIHRpbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xuXG4gIGlmIChkaXNwbGF5Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpKSB7XG4gICAgZGlzcGxheUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gIH1cbn07XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGZvcm1JbnB1dCA9IHNlYXJjaEZvcm0uY2l0eS52YWx1ZS50cmltKCk7XG4gIHNlYXJjaEZvcm0ucmVzZXQoKTtcblxuICBhZGRDaXR5KGZvcm1JbnB1dClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGxheShkYXRhKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBkaXNwbGF5KGVycik7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==