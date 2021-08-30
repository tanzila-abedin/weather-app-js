import { findCity, findWeather } from './resource';

const searchForm = document.querySelector('form');
const displayCard = document.querySelector('.display-card');
const time = document.querySelector('img.time');
const iconImg = document.querySelector('.icon img');
const location = document.querySelector(".location");
const weatherText = document.querySelector(".weather-text");
const celciusValue = document.querySelector(".cel-value");

const addCity = async (city) => {
  const cityKey = await findCity(city);
  const cityWeather = await findWeather(cityKey.Key);

  return {
    cityKey,
    cityWeather,
  };
};


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

  celciusValue.addEventListener("click",(e) => {
   e.preventDefault()
    if(cityWeather.Temperature.Unit == 'C'){
      let fahrenheit = convertToFahrenheit(cityWeather.Temperature.Metric.Value);
      fahrenheit = Math.floor(fahrenheit) 

      celciusValue.innerHTML = `<p>${fahrenheit}&deg;F</p>`;
      cityWeather.Temperature.Unit = 'F'
    }else{
      celciusValue.innerHTML = `<p>${cityWeather.Temperature.Metric.Value}&deg;C</p>`;
      cityWeather.Temperature.Unit = "C";
    }
})

};

const convertToFahrenheit = (temp) => {
  return(temp * 9/5) + 32
}


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
