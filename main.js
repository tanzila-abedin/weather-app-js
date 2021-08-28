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

const findWeather = async (locId) => {
  const currentCondRes = `http://dataservice.accuweather.com/currentconditions/v1/`

  const queryParam = `${locId}?apikey=${apiKey}`;

  const response = await fetch(currentCondRes + queryParam)
  const data = await response.json()

  return (data[0])
}

const findCity = async (city) => {
  const cityResource =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const queryParam = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(cityResource + queryParam);
  const data = await response.json();

  return data[0];
};

findCity("johannesburg")
  .then(data =>{
  return findWeather(data.Key)
}).then(data => {
  console.log(data)
}).catch((err) => console.log(err));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixNQUFNLFVBQVUsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsT0FBTyxLQUFLLEtBQUs7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuXG4vLyAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuY29uc3QgYXBpS2V5ID0gXCJpaVQ1cHoxc2xwbVhhTEFXVTFjeWdxb0xwd29BZUF1M1wiO1xuXG5jb25zdCBmaW5kV2VhdGhlciA9IGFzeW5jIChsb2NJZCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29uZFJlcyA9IGBodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2N1cnJlbnRjb25kaXRpb25zL3YxL2BcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYCR7bG9jSWR9P2FwaWtleT0ke2FwaUtleX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3VycmVudENvbmRSZXMgKyBxdWVyeVBhcmFtKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIChkYXRhWzBdKVxufVxuXG5jb25zdCBmaW5kQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlSZXNvdXJjZSA9XG4gICAgXCJodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoXCI7XG5cbiAgY29uc3QgcXVlcnlQYXJhbSA9IGA/YXBpa2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2l0eVJlc291cmNlICsgcXVlcnlQYXJhbSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGFbMF07XG59O1xuXG5maW5kQ2l0eShcImpvaGFubmVzYnVyZ1wiKVxuICAudGhlbihkYXRhID0+e1xuICByZXR1cm4gZmluZFdlYXRoZXIoZGF0YS5LZXkpXG59KS50aGVuKGRhdGEgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKVxufSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=