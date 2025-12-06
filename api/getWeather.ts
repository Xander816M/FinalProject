

export const fetchForecast = async () => {
  try {
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=cbd03f903c5949e993505852250612&q=Calgary&days=6");
    const data = await response.json();
    return data ;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};