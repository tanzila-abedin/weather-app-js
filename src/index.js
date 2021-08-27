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
