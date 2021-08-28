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

// findCity("johannesburg")
//   .then(data =>{
//   return findWeather(data.Key)
// }).then(data => {
//   console.log(data)
// }).catch((err) => console.log(err));

const addCity = async (city) => {
  const cityKey = await findCity(city);
  const cityWeather = await findWeather(cityKey.Key);

  return {
    cityKey: cityKey,
    cityWeather: cityWeather
  }
}


const searchForm = document.querySelector('form');
const displayCard = document.querySelector('.display-card')
const weatherDetails = document.querySelector('.weather-details')

const display = (info)=> {
  const cityKey = info.cityKey
  const cityWeather = info.cityWeather

  weatherDetails.innerHTML = `
                   <h5 class="location">${cityKey.EnglishName}</h5>
                   <div>${cityWeather.WeatherText}</div>
                   <div>
                        <span>${cityWeather.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                        <span>${cityWeather.Temperature.Imperial.Value}</span>
                        <span>&deg;F</span>
                   </div>`;

  if (displayCard.classList.contains('d-none')){
    displayCard.classList.remove('d-none')
  }
} 

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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixNQUFNLFVBQVUsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsT0FBTyxLQUFLLEtBQUs7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLG9CQUFvQjtBQUM5RCwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRSxtQ0FBbUM7QUFDbkMsZ0NBQWdDLHVDQUF1QztBQUN2RSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuXG4vLyAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuY29uc3QgYXBpS2V5ID0gXCJpaVQ1cHoxc2xwbVhhTEFXVTFjeWdxb0xwd29BZUF1M1wiO1xuXG5jb25zdCBmaW5kV2VhdGhlciA9IGFzeW5jIChsb2NJZCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29uZFJlcyA9IGBodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2N1cnJlbnRjb25kaXRpb25zL3YxL2BcblxuICBjb25zdCBxdWVyeVBhcmFtID0gYCR7bG9jSWR9P2FwaWtleT0ke2FwaUtleX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3VycmVudENvbmRSZXMgKyBxdWVyeVBhcmFtKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIChkYXRhWzBdKVxufVxuXG5jb25zdCBmaW5kQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGNpdHlSZXNvdXJjZSA9XG4gICAgXCJodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9jaXRpZXMvc2VhcmNoXCI7XG5cbiAgY29uc3QgcXVlcnlQYXJhbSA9IGA/YXBpa2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2l0eVJlc291cmNlICsgcXVlcnlQYXJhbSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGFbMF07XG59O1xuXG4vLyBmaW5kQ2l0eShcImpvaGFubmVzYnVyZ1wiKVxuLy8gICAudGhlbihkYXRhID0+e1xuLy8gICByZXR1cm4gZmluZFdlYXRoZXIoZGF0YS5LZXkpXG4vLyB9KS50aGVuKGRhdGEgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbmNvbnN0IGFkZENpdHkgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBjaXR5S2V5ID0gYXdhaXQgZmluZENpdHkoY2l0eSk7XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmluZFdlYXRoZXIoY2l0eUtleS5LZXkpO1xuXG4gIHJldHVybiB7XG4gICAgY2l0eUtleTogY2l0eUtleSxcbiAgICBjaXR5V2VhdGhlcjogY2l0eVdlYXRoZXJcbiAgfVxufVxuXG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBkaXNwbGF5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNhcmQnKVxuY29uc3Qgd2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXRhaWxzJylcblxuY29uc3QgZGlzcGxheSA9IChpbmZvKT0+IHtcbiAgY29uc3QgY2l0eUtleSA9IGluZm8uY2l0eUtleVxuICBjb25zdCBjaXR5V2VhdGhlciA9IGluZm8uY2l0eVdlYXRoZXJcblxuICB3ZWF0aGVyRGV0YWlscy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibG9jYXRpb25cIj4ke2NpdHlLZXkuRW5nbGlzaE5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Y2l0eVdlYXRoZXIuV2VhdGhlclRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2l0eVdlYXRoZXIuVGVtcGVyYXR1cmUuTWV0cmljLlZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2l0eVdlYXRoZXIuVGVtcGVyYXR1cmUuSW1wZXJpYWwuVmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JmRlZztGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgaWYgKGRpc3BsYXlDYXJkLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpe1xuICAgIGRpc3BsYXlDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gIH1cbn0gXG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGZvcm1JbnB1dCA9IHNlYXJjaEZvcm0uY2l0eS52YWx1ZS50cmltKCk7XG4gIHNlYXJjaEZvcm0ucmVzZXQoKVxuXG4gIGFkZENpdHkoZm9ybUlucHV0KVxuICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgIGRpc3BsYXkoZGF0YSlcbiAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgIGNvbnNvbGUubG9nKGVycilcbiAgIH0pXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=