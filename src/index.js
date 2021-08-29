import { findCity, findWeather } from './resource';

const searchForm = document.querySelector('form');
const displayCard = document.querySelector('.display-card');
const weatherDetails = document.querySelector('.weather-details');
const time = document.querySelector('img.time');
const iconImg = document.querySelector('.icon img')

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
  
  weatherDetails.innerHTML = `
                   <h5 class="location">${cityKey.EnglishName}</h5>
                   <div>${cityWeather.WeatherText}</div>
                   <div id="cel-container" class=" my-4">
                        <span class="celcius">${cityWeather.Temperature.Metric.Value} &deg;C</span></br>
                        <button class="farenheitBtn">Farenheit</button>
  
                        <div class="farenheit">${cityWeather.Temperature.Imperial.Value} &deg;F</div>
                   </div>`;
  
  const iconSrc = `./asset/icons/${cityWeather.WeatherIcon}.svg`

  iconImg.setAttribute('src', iconSrc)

  const imgSrc = cityWeather.IsDayTime ? './asset/day.svg' : './asset/night.svg';
  
  time.setAttribute('src', imgSrc);

  if (displayCard.classList.contains('d-none')) {
    displayCard.classList.remove('d-none');
  }
  celciusToFarenheitEvent()
};


const celciusToFarenheitEvent = () => {
  const farenheitBtn = document.querySelector(".farenheitBtn");
  const farenheit = document.querySelector(".farenheit");
  farenheitBtn.onclick = () =>{
    if (farenheit.style.display === "none") {
      farenheit.style.display = 'block';
    } else {
      farenheit.style.display = "none";
    }
  }
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
