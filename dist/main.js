/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import _ from 'lodash';


// function component() {
//   const element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// }

// document.body.appendChild(component());

const apiKey = "iiT5pz1slpmXaLAWU1cygqoLpwoAeAu3";

const findCity = async (city) => {
  const cityResource =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const queryKey = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(cityResource + queryKey);
  const data = await response.json();

  return data[0];
};

findCity("johannesburg")
.then(data => console.log(data))
.catch(err => console.log(err));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLE9BQU8sS0FBSyxLQUFLOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuXG4vLyAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuY29uc3QgYXBpS2V5ID0gXCJpaVQ1cHoxc2xwbVhhTEFXVTFjeWdxb0xwd29BZUF1M1wiO1xuXG5jb25zdCBmaW5kQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlSZXNvdXJjZSA9XG4gICAgXCJodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoXCI7XG5cbiAgY29uc3QgcXVlcnlLZXkgPSBgP2FwaWtleT0ke2FwaUtleX0mcT0ke2NpdHl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNpdHlSZXNvdXJjZSArIHF1ZXJ5S2V5KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YVswXTtcbn07XG5cbmZpbmRDaXR5KFwiam9oYW5uZXNidXJnXCIpXG4udGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==