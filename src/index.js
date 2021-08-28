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
