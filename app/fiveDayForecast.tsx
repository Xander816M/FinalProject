import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, { useEffect, useState }  from "react";
import { Octicons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {fetchForecast} from "@/api/getWeather";
import { WeatherAPIForcast } from "@/types";
import ForecastDay  from "@/components/forecastDay";

const FiveDayForecast = () => {
  const [forecastAllDays, setForecastAllDays] = useState<WeatherAPIForcast>({})
  const [locationName, setLocationName] = useState("")
  

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
          <ForecastDay tempNum={1} dateNum={2} forecastAllDays={forecastAllDays}/>
          <ForecastDay tempNum={2} dateNum={3} forecastAllDays={forecastAllDays}/>
          <ForecastDay tempNum={3} dateNum={4} forecastAllDays={forecastAllDays}/>
          <ForecastDay tempNum={4} dateNum={5} forecastAllDays={forecastAllDays}/>
          <ForecastDay tempNum={5} dateNum={6} forecastAllDays={forecastAllDays}/>
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

