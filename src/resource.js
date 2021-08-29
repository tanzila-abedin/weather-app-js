const apiKey = 'YkAXfI8PkCfFt3auAHVuEuAciyGY4IC3';

export const findWeather = async (locId) => {
  const currentCondRes = 'https://dataservice.accuweather.com/currentconditions/v1/';

  const queryParam = `${locId}?apikey=${apiKey}`;

  const response = await fetch(currentCondRes + queryParam);
  const data = await response.json();

  return data[0];
};

export const findCity = async (city) => {
  const cityResource = 'https://dataservice.accuweather.com/locations/v1/cities/search';

  const queryParam = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(cityResource + queryParam);
  const data = await response.json();

  return data[0];
};
