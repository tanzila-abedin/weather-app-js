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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQOztBQUVBLHdCQUF3QixNQUFNLFVBQVUsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsZ0NBQWdDLE9BQU8sS0FBSyxLQUFLOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbURBQVE7QUFDaEMsNEJBQTRCLHNEQUFXOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsY0FBYzs7QUFFeEI7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQSxnREFBZ0Qsc0NBQXNDLEtBQUs7QUFDM0YsZ0RBQWdELHdDQUF3QyxLQUFLO0FBQzdGOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLWpzLy4vc3JjL3Jlc291cmNlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gJ2lpVDVwejFzbHBtWGFMQVdVMWN5Z3FvTHB3b0FlQXUzJztcblxuZXhwb3J0IGNvbnN0IGZpbmRXZWF0aGVyID0gYXN5bmMgKGxvY0lkKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb25kUmVzID0gJ2h0dHBzOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2N1cnJlbnRjb25kaXRpb25zL3YxLyc7XG5cbiAgY29uc3QgcXVlcnlQYXJhbSA9IGAke2xvY0lkfT9hcGlrZXk9JHthcGlLZXl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGN1cnJlbnRDb25kUmVzICsgcXVlcnlQYXJhbSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGFbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZmluZENpdHkgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBjaXR5UmVzb3VyY2UgPSAnaHR0cHM6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vbG9jYXRpb25zL3YxL2NpdGllcy9zZWFyY2gnO1xuXG4gIGNvbnN0IHF1ZXJ5UGFyYW0gPSBgP2FwaWtleT0ke2FwaUtleX0mcT0ke2NpdHl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNpdHlSZXNvdXJjZSArIHF1ZXJ5UGFyYW0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhWzBdO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmluZENpdHksIGZpbmRXZWF0aGVyIH0gZnJvbSAnLi9yZXNvdXJjZSc7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBkaXNwbGF5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNhcmQnKTtcbmNvbnN0IHdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGV0YWlscycpO1xuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy50aW1lJyk7XG5cbmNvbnN0IGFkZENpdHkgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBjaXR5S2V5ID0gYXdhaXQgZmluZENpdHkoY2l0eSk7XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmluZFdlYXRoZXIoY2l0eUtleS5LZXkpO1xuXG4gIHJldHVybiB7XG4gICAgY2l0eUtleSxcbiAgICBjaXR5V2VhdGhlcixcbiAgfTtcbn07XG5cbmNvbnN0IGRpc3BsYXkgPSAoaW5mbykgPT4ge1xuICBjb25zdCB7IGNpdHlLZXkgfSA9IGluZm87XG4gIGNvbnN0IHsgY2l0eVdlYXRoZXIgfSA9IGluZm87XG5cbiAgd2VhdGhlckRldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImxvY2F0aW9uXCI+JHtjaXR5S2V5LkVuZ2xpc2hOYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgPGRpdj4ke2NpdHlXZWF0aGVyLldlYXRoZXJUZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNlbGNpdXNcIj4ke2NpdHlXZWF0aGVyLlRlbXBlcmF0dXJlLk1ldHJpYy5WYWx1ZX0gJmRlZztDPC9zcGFuPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImZhaHJlbmhlaXRcIj4ke2NpdHlXZWF0aGVyLlRlbXBlcmF0dXJlLkltcGVyaWFsLlZhbHVlfSAmZGVnO0Y8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICBjb25zdCBpbWdTcmMgPSBjaXR5V2VhdGhlci5Jc0RheVRpbWUgPyAnLi9hc3NldC9kYXkuc3ZnJyA6ICcuL2Fzc2V0L25pZ2h0LnN2Zyc7XG5cbiAgdGltZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1NyYyk7XG5cbiAgaWYgKGRpc3BsYXlDYXJkLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICBkaXNwbGF5Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgfVxufTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgZm9ybUlucHV0ID0gc2VhcmNoRm9ybS5jaXR5LnZhbHVlLnRyaW0oKTtcbiAgc2VhcmNoRm9ybS5yZXNldCgpO1xuXG4gIGFkZENpdHkoZm9ybUlucHV0KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5KGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGRpc3BsYXkoZXJyKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9