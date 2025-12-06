import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState }  from "react";
import { Octicons, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {fetchForecast} from "@/api/getWeather"
import { WeatherAPIForcast } from "@/types";



const FiveDayForecast = () => {
  const [forecastAllDays, setForecastAllDays] = useState<WeatherAPIForcast[]>([])
  const [locationName, setLocationName] = useState("")

  const loadDate = async () => {
    try {
      const forecastData = await fetchForecast();
      console.log("fetched", forecastData)
      console.log("fetched .forecast", forecastData?.forecast)
      setForecastAllDays(forecastData?.forecast);
      setLocationName(forecastData.location.name)
      console.log("forecast all days", forecastAllDays);
    } catch (error) {
      console.error("Error loading data on to forecast page", error)
    }
  }
  
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
                  <Text style={styles.lowOfText}>Low of {"\n"}{/*forecastAllDays?.forecastday[1]?.day?.mintemp_c*/}</Text>
                </View>
              </View>
              <Text style={styles.dayText}>Wednesday 26</Text>
            </View>
            <View>
              <Text style={styles.highOfText}>High of {"\n"}20 C</Text>
            </View>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}10 C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>Thursday 27</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}20 C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}10 C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>Friday 28</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}20 C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}10 C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>Saturday 29</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}20 C</Text>
          </View>
        </View>
        <View style={styles.oneDay}>
          <View>
            <View style={styles.iconWithLow}>
              <Feather style={styles.icon} name="sun" size={40} color="black" />
              <View>
                <Text style={styles.lowOfText}>Low of {"\n"}10 C</Text>
              </View>
            </View>
            <Text style={styles.dayText}>Sunday 30</Text>
          </View>
          <View>
            <Text style={styles.highOfText}>High of {"\n"}20 C</Text>
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
