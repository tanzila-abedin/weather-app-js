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
 const apiKey = "iiT5pz1slpmXaLAWU1cygqoLpwoAeAu3";

 const findWeather = async (locId) => {
  const currentCondRes = `http://dataservice.accuweather.com/currentconditions/v1/`;

  const queryParam = `${locId}?apikey=${apiKey}`;

  const response = await fetch(currentCondRes + queryParam);
  const data = await response.json();

  return data[0];
};

const findCity = async (city) => {
  const cityResource =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

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


const searchForm = document.querySelector("form");
const displayCard = document.querySelector(".display-card");
const weatherDetails = document.querySelector(".weather-details");
const time = document.querySelector("img.time");

const addCity = async (city) => {
  const cityKey = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findCity)(city);
  const cityWeather = await (0,_resource__WEBPACK_IMPORTED_MODULE_0__.findWeather)(cityKey.Key);

  return {
    cityKey: cityKey,
    cityWeather: cityWeather
  }
}

// const farenHeitBtn = () => {
//   const fBtn = document.getElementById('fbtn')
//   fBtn.addEventListener('click',(e) => {
//     e.preventDefault()
//     alert('btn works')
//       // const cBtn = document.getElementById("cBtn");
//       // cBtn.className("d-block");
//       // const fahrenheit = document.querySelector(".fahrenheit");
//       // fahrenheit.className("d-block");
//   })
//   // celciusBtn()
// }

// // const celciusBtn = () => {
// //   const cBtn = document.getElementById('cBtn')
// //   cBtn.addEventListener('click',() => {
// //             cBtn.className = "d-none";
// //             const celcius = document.querySelector(".celcius");
// //             celcius.className = "d-block";

// //   } )
// // }

const display = (info)=> {
  const cityKey = info.cityKey
  const cityWeather = info.cityWeather

  weatherDetails.innerHTML = `
                   <h5 class="location">${cityKey.EnglishName}</h5>
                   <div>${cityWeather.WeatherText}</div>
                   <div>
                        <span class="celcius">${cityWeather.Temperature.Metric.Value} &deg;C</span>
                        <button id="cBtn" class="d-none"> Celcius</button>
                        <span class="d-none fahrenheit">${cityWeather.Temperature.Imperial.Value} &deg;F</span>
                        <button id="fBtn"> Farenheit</button>
                   </div>`;
  

   let imgSrc = cityWeather.IsDayTime ? "./asset/day.svg" :  "./asset/night.svg";

   time.setAttribute("src", imgSrc);  
    
    
  if (displayCard.classList.contains('d-none')){
    displayCard.classList.remove('d-none')
  }
  farenHeitBtn()
} 

const farenHeitBtn = () => {
  const fBtn = document.getElementById('fBtn')
  fBtn.addEventListener('click',(e) => {
    e.preventDefault();
    fBtn.className = "d-none";
    const fahrenheit = document.querySelector(".fahrenheit");
    fahrenheit.className = "d-block";
    const cBtn = document.getElementById("cBtn");
    cBtn.className = "d-block";
    const celcius = document.querySelector('.celcius')
    celcius.className = 'd-none'
  })
  celciusBtn()
}

const celciusBtn = () => {
  const cBtn = document.getElementById("cBtn");
  cBtn.addEventListener("click", () => {
    // cBtn.className = "d-none";
    const cBtn = document.querySelector(".cBtn");
    cBtn.className = "d-block";
    const fBtn = document.getElementById(".fBtn");
    fBtn.className = "d-block";
  });
};


searchForm.addEventListener('submit', e => {
  e.preventDefault()

  const formInput = searchForm.city.value.trim();
  searchForm.reset()

  addCity(formInput)
   .then(data => {
     display(data)
   }).catch(err => {
     console.log(err)
   })
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxDQUFRO0FBQ1I7O0FBRUEsd0JBQXdCLE1BQU0sVUFBVSxPQUFPOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLGdDQUFnQyxPQUFPLEtBQUssS0FBSzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1EQUFRO0FBQ2hDLDRCQUE0QixzREFBVzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxvQkFBb0I7QUFDOUQsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBLGdEQUFnRCxzQ0FBc0MsS0FBSztBQUMzRjtBQUNBLDBEQUEwRCx3Q0FBd0MsS0FBSztBQUN2RztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvcmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwLWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgY29uc3QgYXBpS2V5ID0gXCJpaVQ1cHoxc2xwbVhhTEFXVTFjeWdxb0xwd29BZUF1M1wiO1xuXG4gZXhwb3J0IGNvbnN0IGZpbmRXZWF0aGVyID0gYXN5bmMgKGxvY0lkKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb25kUmVzID0gYGh0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vY3VycmVudGNvbmRpdGlvbnMvdjEvYDtcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYCR7bG9jSWR9P2FwaWtleT0ke2FwaUtleX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3VycmVudENvbmRSZXMgKyBxdWVyeVBhcmFtKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YVswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlSZXNvdXJjZSA9XG4gICAgXCJodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoXCI7XG5cbiAgY29uc3QgcXVlcnlQYXJhbSA9IGA/YXBpa2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2l0eVJlc291cmNlICsgcXVlcnlQYXJhbSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGFbMF07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmaW5kQ2l0eSwgZmluZFdlYXRoZXIgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBkaXNwbGF5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jYXJkXCIpO1xuY29uc3Qgd2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGV0YWlsc1wiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nLnRpbWVcIik7XG5cbmNvbnN0IGFkZENpdHkgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBjaXR5S2V5ID0gYXdhaXQgZmluZENpdHkoY2l0eSk7XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmluZFdlYXRoZXIoY2l0eUtleS5LZXkpO1xuXG4gIHJldHVybiB7XG4gICAgY2l0eUtleTogY2l0eUtleSxcbiAgICBjaXR5V2VhdGhlcjogY2l0eVdlYXRoZXJcbiAgfVxufVxuXG4vLyBjb25zdCBmYXJlbkhlaXRCdG4gPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmJ0bicpXG4vLyAgIGZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgICAgYWxlcnQoJ2J0biB3b3JrcycpXG4vLyAgICAgICAvLyBjb25zdCBjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjQnRuXCIpO1xuLy8gICAgICAgLy8gY0J0bi5jbGFzc05hbWUoXCJkLWJsb2NrXCIpO1xuLy8gICAgICAgLy8gY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFocmVuaGVpdFwiKTtcbi8vICAgICAgIC8vIGZhaHJlbmhlaXQuY2xhc3NOYW1lKFwiZC1ibG9ja1wiKTtcbi8vICAgfSlcbi8vICAgLy8gY2VsY2l1c0J0bigpXG4vLyB9XG5cbi8vIC8vIGNvbnN0IGNlbGNpdXNCdG4gPSAoKSA9PiB7XG4vLyAvLyAgIGNvbnN0IGNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY0J0bicpXG4vLyAvLyAgIGNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbi8vIC8vICAgICAgICAgICAgIGNCdG4uY2xhc3NOYW1lID0gXCJkLW5vbmVcIjtcbi8vIC8vICAgICAgICAgICAgIGNvbnN0IGNlbGNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGNpdXNcIik7XG4vLyAvLyAgICAgICAgICAgICBjZWxjaXVzLmNsYXNzTmFtZSA9IFwiZC1ibG9ja1wiO1xuXG4vLyAvLyAgIH0gKVxuLy8gLy8gfVxuXG5jb25zdCBkaXNwbGF5ID0gKGluZm8pPT4ge1xuICBjb25zdCBjaXR5S2V5ID0gaW5mby5jaXR5S2V5XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gaW5mby5jaXR5V2VhdGhlclxuXG4gIHdlYXRoZXJEZXRhaWxzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJsb2NhdGlvblwiPiR7Y2l0eUtleS5FbmdsaXNoTmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjaXR5V2VhdGhlci5XZWF0aGVyVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjZWxjaXVzXCI+JHtjaXR5V2VhdGhlci5UZW1wZXJhdHVyZS5NZXRyaWMuVmFsdWV9ICZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjQnRuXCIgY2xhc3M9XCJkLW5vbmVcIj4gQ2VsY2l1czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkLW5vbmUgZmFocmVuaGVpdFwiPiR7Y2l0eVdlYXRoZXIuVGVtcGVyYXR1cmUuSW1wZXJpYWwuVmFsdWV9ICZkZWc7Rjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmQnRuXCI+IEZhcmVuaGVpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIFxuXG4gICBsZXQgaW1nU3JjID0gY2l0eVdlYXRoZXIuSXNEYXlUaW1lID8gXCIuL2Fzc2V0L2RheS5zdmdcIiA6ICBcIi4vYXNzZXQvbmlnaHQuc3ZnXCI7XG5cbiAgIHRpbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1NyYyk7ICBcbiAgICBcbiAgICBcbiAgaWYgKGRpc3BsYXlDYXJkLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpe1xuICAgIGRpc3BsYXlDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gIH1cbiAgZmFyZW5IZWl0QnRuKClcbn0gXG5cbmNvbnN0IGZhcmVuSGVpdEJ0biA9ICgpID0+IHtcbiAgY29uc3QgZkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmQnRuJylcbiAgZkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZkJ0bi5jbGFzc05hbWUgPSBcImQtbm9uZVwiO1xuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc05hbWUgPSBcImQtYmxvY2tcIjtcbiAgICBjb25zdCBjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjQnRuXCIpO1xuICAgIGNCdG4uY2xhc3NOYW1lID0gXCJkLWJsb2NrXCI7XG4gICAgY29uc3QgY2VsY2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxjaXVzJylcbiAgICBjZWxjaXVzLmNsYXNzTmFtZSA9ICdkLW5vbmUnXG4gIH0pXG4gIGNlbGNpdXNCdG4oKVxufVxuXG5jb25zdCBjZWxjaXVzQnRuID0gKCkgPT4ge1xuICBjb25zdCBjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjQnRuXCIpO1xuICBjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gY0J0bi5jbGFzc05hbWUgPSBcImQtbm9uZVwiO1xuICAgIGNvbnN0IGNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNCdG5cIik7XG4gICAgY0J0bi5jbGFzc05hbWUgPSBcImQtYmxvY2tcIjtcbiAgICBjb25zdCBmQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIuZkJ0blwiKTtcbiAgICBmQnRuLmNsYXNzTmFtZSA9IFwiZC1ibG9ja1wiO1xuICB9KTtcbn07XG5cblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgZm9ybUlucHV0ID0gc2VhcmNoRm9ybS5jaXR5LnZhbHVlLnRyaW0oKTtcbiAgc2VhcmNoRm9ybS5yZXNldCgpXG5cbiAgYWRkQ2l0eShmb3JtSW5wdXQpXG4gICAudGhlbihkYXRhID0+IHtcbiAgICAgZGlzcGxheShkYXRhKVxuICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgY29uc29sZS5sb2coZXJyKVxuICAgfSlcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==