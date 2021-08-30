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
const apiKey = 'OJS1vTFOrcPksu5SgNhGEprWKE0v5mAG';

const findWeather = async (locId) => {
  const currentCondRes = 'https://dataservice.accuweather.com/currentconditions/v1/';

  const queryParam = `${locId}?apikey=${apiKey}`;

  const response = await fetch(currentCondRes + queryParam);
  const data = await response.json();

  return data[0];
};

const findCity = async (city) => {
  const cityResource = 'https://dataservice.accuweather.com/locations/v1/cities/search';

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
const time = document.querySelector('img.time');
const iconImg = document.querySelector('.icon img');
const location = document.querySelector('.location');
const weatherText = document.querySelector('.weather-text');
const celciusValue = document.querySelector('.cel-value');

const addCity = async (city) => {
  const cityKey = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findCity)(city);
  const cityWeather = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findWeather)(cityKey.Key);

  return {
    cityKey,
    cityWeather,
  };
};

const convertToFahrenheit = (temp) => (temp * 9) / 5 + 32;

const display = (info) => {
  const { cityKey } = info;
  const { cityWeather } = info;

  location.innerHTML = `<h5>${cityKey.EnglishName}</h5>`;
  weatherText.innerHTML = `${cityWeather.WeatherText}`;
  celciusValue.innerHTML = `<p>${cityWeather.Temperature.Metric.Value}&deg;C</p>`;

  const iconSrc = `./asset/icons/${cityWeather.WeatherIcon}.svg`;

  iconImg.setAttribute('src', iconSrc);

  const imgSrc = cityWeather.IsDayTime ? './asset/day.svg' : './asset/night.svg';

  time.setAttribute('src', imgSrc);

  if (displayCard.classList.contains('d-none')) {
    displayCard.classList.remove('d-none');
  }

  celciusValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (cityWeather.Temperature.Unit === 'C') {
      let fahrenheit = convertToFahrenheit(cityWeather.Temperature.Metric.Value);
      fahrenheit = Math.floor(fahrenheit);

      celciusValue.innerHTML = `<p>${fahrenheit}&deg;F</p>`;
      cityWeather.Temperature.Unit = 'F';
    } else {
      celciusValue.innerHTML = `<p>${cityWeather.Temperature.Metric.Value}&deg;C</p>`;
      cityWeather.Temperature.Unit = 'C';
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQOztBQUVBLHdCQUF3QixNQUFNLFVBQVUsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsZ0NBQWdDLE9BQU8sS0FBSyxLQUFLOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbURBQVE7QUFDaEMsNEJBQTRCLHNEQUFXOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsY0FBYzs7QUFFeEIsOEJBQThCLG9CQUFvQjtBQUNsRCw2QkFBNkIsd0JBQXdCO0FBQ3JELGlDQUFpQyxxQ0FBcUMsS0FBSzs7QUFFM0UsbUNBQW1DLHdCQUF3Qjs7QUFFM0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFdBQVcsS0FBSztBQUNyRDtBQUNBLE1BQU07QUFDTixxQ0FBcUMscUNBQXFDLEtBQUs7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy8uL3NyYy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9ICdPSlMxdlRGT3JjUGtzdTVTZ05oR0VwcldLRTB2NW1BRyc7XG5cbmV4cG9ydCBjb25zdCBmaW5kV2VhdGhlciA9IGFzeW5jIChsb2NJZCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29uZFJlcyA9ICdodHRwczovL2RhdGFzZXJ2aWNlLmFjY3V3ZWF0aGVyLmNvbS9jdXJyZW50Y29uZGl0aW9ucy92MS8nO1xuXG4gIGNvbnN0IHF1ZXJ5UGFyYW0gPSBgJHtsb2NJZH0/YXBpa2V5PSR7YXBpS2V5fWA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjdXJyZW50Q29uZFJlcyArIHF1ZXJ5UGFyYW0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRDaXR5ID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgY2l0eVJlc291cmNlID0gJ2h0dHBzOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoJztcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYD9hcGlrZXk9JHthcGlLZXl9JnE9JHtjaXR5fWA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjaXR5UmVzb3VyY2UgKyBxdWVyeVBhcmFtKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YVswXTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpbmRDaXR5LCBmaW5kV2VhdGhlciB9IGZyb20gJy4vcmVzb3VyY2UnO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgZGlzcGxheUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jYXJkJyk7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnRpbWUnKTtcbmNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbiBpbWcnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG5jb25zdCB3ZWF0aGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXRleHQnKTtcbmNvbnN0IGNlbGNpdXNWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWwtdmFsdWUnKTtcblxuY29uc3QgYWRkQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlLZXkgPSBhd2FpdCBmaW5kQ2l0eShjaXR5KTtcbiAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCBmaW5kV2VhdGhlcihjaXR5S2V5LktleSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaXR5S2V5LFxuICAgIGNpdHlXZWF0aGVyLFxuICB9O1xufTtcblxuY29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9ICh0ZW1wKSA9PiAodGVtcCAqIDkpIC8gNSArIDMyO1xuXG5jb25zdCBkaXNwbGF5ID0gKGluZm8pID0+IHtcbiAgY29uc3QgeyBjaXR5S2V5IH0gPSBpbmZvO1xuICBjb25zdCB7IGNpdHlXZWF0aGVyIH0gPSBpbmZvO1xuXG4gIGxvY2F0aW9uLmlubmVySFRNTCA9IGA8aDU+JHtjaXR5S2V5LkVuZ2xpc2hOYW1lfTwvaDU+YDtcbiAgd2VhdGhlclRleHQuaW5uZXJIVE1MID0gYCR7Y2l0eVdlYXRoZXIuV2VhdGhlclRleHR9YDtcbiAgY2VsY2l1c1ZhbHVlLmlubmVySFRNTCA9IGA8cD4ke2NpdHlXZWF0aGVyLlRlbXBlcmF0dXJlLk1ldHJpYy5WYWx1ZX0mZGVnO0M8L3A+YDtcblxuICBjb25zdCBpY29uU3JjID0gYC4vYXNzZXQvaWNvbnMvJHtjaXR5V2VhdGhlci5XZWF0aGVySWNvbn0uc3ZnYDtcblxuICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XG5cbiAgY29uc3QgaW1nU3JjID0gY2l0eVdlYXRoZXIuSXNEYXlUaW1lID8gJy4vYXNzZXQvZGF5LnN2ZycgOiAnLi9hc3NldC9uaWdodC5zdmcnO1xuXG4gIHRpbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xuXG4gIGlmIChkaXNwbGF5Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpKSB7XG4gICAgZGlzcGxheUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gIH1cblxuICBjZWxjaXVzVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2l0eVdlYXRoZXIuVGVtcGVyYXR1cmUuVW5pdCA9PT0gJ0MnKSB7XG4gICAgICBsZXQgZmFocmVuaGVpdCA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQoY2l0eVdlYXRoZXIuVGVtcGVyYXR1cmUuTWV0cmljLlZhbHVlKTtcbiAgICAgIGZhaHJlbmhlaXQgPSBNYXRoLmZsb29yKGZhaHJlbmhlaXQpO1xuXG4gICAgICBjZWxjaXVzVmFsdWUuaW5uZXJIVE1MID0gYDxwPiR7ZmFocmVuaGVpdH0mZGVnO0Y8L3A+YDtcbiAgICAgIGNpdHlXZWF0aGVyLlRlbXBlcmF0dXJlLlVuaXQgPSAnRic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGNpdXNWYWx1ZS5pbm5lckhUTUwgPSBgPHA+JHtjaXR5V2VhdGhlci5UZW1wZXJhdHVyZS5NZXRyaWMuVmFsdWV9JmRlZztDPC9wPmA7XG4gICAgICBjaXR5V2VhdGhlci5UZW1wZXJhdHVyZS5Vbml0ID0gJ0MnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBmb3JtSW5wdXQgPSBzZWFyY2hGb3JtLmNpdHkudmFsdWUudHJpbSgpO1xuICBzZWFyY2hGb3JtLnJlc2V0KCk7XG5cbiAgYWRkQ2l0eShmb3JtSW5wdXQpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZGlzcGxheShlcnIpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=