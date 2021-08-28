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

