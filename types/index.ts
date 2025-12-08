export interface WeatherAPIForcast {
  forecastday: [
    {
      date: Date;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
      };
    }
  ];

  current: {
    last_updated?: string;
    temp_c: number;
    temp_f: number;
    condition?: {
      text?: string;
      icon?: string;
    };
  };

  location: {
    name: string;
    region?: string;
    country?: string;
    localtime?: string;
  };
}
