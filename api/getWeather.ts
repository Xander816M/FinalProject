import { WeatherAPIForcast } from "@/types";


export const fetchForecast = async () => {
  try {
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=cbd03f903c5949e993505852250612&q=Calgary&days=7");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    return [];
  }
};

export const fetchCurrent = async (): Promise<WeatherAPIForcast | null> => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=cbd03f903c5949e993505852250612&q=Calgary`);
    const data = await response.json();
    return data as WeatherAPIForcast;
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    return null;
  }
};