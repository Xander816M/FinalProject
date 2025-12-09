// api/getWeather.ts

const API_KEY = "cbd03f903c5949e993505852250612";

//CLEAN city
function sanitizeCity(city: string): string {
  const trimmed = city?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Calgary";
}

// Fetch 7-dayS
export const fetchForecast = async (city: string) => {
  const safeCity = encodeURIComponent(sanitizeCity(city));

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${safeCity}&days=6`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};

// Fetch todays
export const fetchCurrent = async (city: string) => {
  const safeCity = encodeURIComponent(sanitizeCity(city));

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${safeCity}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather:", error);
    return null;
  }
};
