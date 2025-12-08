const BASE_URL = 
  process.env.WEATHER_API_URL || "http://api.weatherapi.com/v1/forecast.json?key=cbd03f903c5949e993505852250612&q=";


export const fetchForecast = async () => {
  try {
    const response = await fetch(`${BASE_URL}Calgary&days=7`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchCurrentWeather = async () => {
  try {
    const response = await fetch(`${BASE_URL}London`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}