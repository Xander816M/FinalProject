import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState }  from "react";
import { Octicons, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {fetchForecast} from "@/api/getWeather"
import { WeatherAPIForcast } from "@/types";


function getForecastDay(forecastAllDays: WeatherAPIForcast, forecastIndex : number) : any {
  return forecastAllDays?.forecastday?.[forecastIndex];
}

const FiveDayForecast = () => {
  const [forecastAllDays, setForecastAllDays] = useState<WeatherAPIForcast>({})
  const [locationName, setLocationName] = useState("")
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  

  const loadDate = async () => {
    try {
      const forecastData = await fetchForecast();
      const forecasts = forecastData.forecast as WeatherAPIForcast;
      setForecastAllDays(forecasts);
      setLocationName(forecastData.location.name);
    } catch (error) {
      console.error("Error loading data on to forecast page", error);
    }
  }
  console.log("forecast", forecastAllDays);
  
  useEffect(() => {
    loadDate()
  }, [])
  return (
    <View style={styles.contaner}>
      <View style={styles.fiveDayForecast}>
        <View>
          <Text style={styles.cityName}>{locationName}</Text>
          <View style={styles.oneDay}>
            <View>
              <View style={styles.iconWithLow}>
                <Feather
                  style={styles.icon}
                  name="sun"
                  size={40}
                  color="black"
                />
                <View>
                  <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, 1))?.day.mintemp_c ?? "null"} C</Text>
                </View>
              </View>
              <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, 2))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, 2))?.date))).getDate() ?? "null"}</Text>
            </View>
            <View>
              <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, 1))?.day.maxtemp_c ?? "null"} C</Text>
            </View>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, 2))?.day.mintemp_c ?? "null"} C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, 3))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, 3))?.date))).getDate() ?? "null"}</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, 2))?.day.maxtemp_c ?? "null"} C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, 3))?.day.mintemp_c ?? "null"} C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, 4))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, 4))?.date))).getDate() ?? "null"}</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, 3))?.day.maxtemp_c ?? "null"} C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, 4))?.day.mintemp_c ?? "null"} C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, 5))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, 5))?.date))).getDate() ?? "null"}</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, 4))?.day.maxtemp_c ?? "null"} C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, 5))?.day.mintemp_c ?? "null"} C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, 6))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, 6))?.date))).getDate() ?? "null"}</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, 5))?.day.maxtemp_c ?? "null"} C</Text>
          </View>
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Octicons name="home-fill" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="sunny" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Ionicons name="settings-sharp" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FiveDayForecast;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#D9D9D9",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contaner: {
    backgroundColor: "#7DCDFF",
    flexGrow: 1,
  },
  fiveDayForecast: {
    height: "91.5%",
    justifyContent: "space-evenly",
    paddingTop: 40,
    paddingBottom: 50,
  },
  cityName: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    paddingBottom: 15,
  },
  oneDay: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconWithLow: {
    flexDirection: "row",
  },
  dayText: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
  lowOfText: {
    fontWeight: "bold",
    paddingLeft: 15,
    fontSize: 20,
    fontStyle: "italic",
  },
  icon: {
    paddingTop: 5,
  },
  highOfText: {
    fontWeight: "bold",
    paddingRight: 15,
    fontSize: 20,
    fontStyle: "italic",
  },
});

