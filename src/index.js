import { findCity, findWeather } from "./resource";

const searchForm = document.querySelector("form");
const displayCard = document.querySelector(".display-card");
const weatherDetails = document.querySelector(".weather-details");
const time = document.querySelector("img.time");

const addCity = async (city) => {
  const cityKey = await findCity(city);
  const cityWeather = await findWeather(cityKey.Key);

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

