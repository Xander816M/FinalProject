export interface WeatherAPIForcast {
    forecastday: [
      {
        date: Date;
        day?: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
        };
      }
    ];
}
