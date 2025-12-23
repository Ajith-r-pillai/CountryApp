import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async () => {
  const response = await axios.get(
    `${BASE_URL}/all?fields=name,capital,region,flags,population,cca2,currencies,timezones`
  );
  return response.data;
};

export const fetchWeather = async (city) => {
  const cityParam = city.replace(/ /g, "%20"); 
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};

 