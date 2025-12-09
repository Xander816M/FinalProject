

export interface WeatherAPICurrent {
  location: {
    name: string;
    region?: string;
    country?: string;
    lat?: number;
    lon?: number;
    localtime?: string;
  };

  current: {
    last_updated?: string;
    temp_c: number;
    temp_f: number;

    condition: {
      text?: string;
      icon?: string;
      code?: number;
    };

    wind_kph?: number;
    wind_mph?: number;
    humidity?: number;
    feelslike_c?: number;
    feelslike_f?: number;
  };
}

export interface WeatherAPIForecast {
  location: {
    name: string;
    region?: string;
    country?: string;
    localtime?: string;
  };

  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;

        condition?: {
          text?: string;
          icon?: string;
        };
      };
    }[];
  };
}
