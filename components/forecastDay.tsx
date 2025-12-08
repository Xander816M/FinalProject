import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather} from "@expo/vector-icons";
import { WeatherAPIForcast } from "@/types";

function getForecastDay(forecastAllDays: WeatherAPIForcast, forecastIndex : number) : any {
  return forecastAllDays?.forecastday?.[forecastIndex];
}

const ForecastDay = ({tempNum, dateNum, forecastAllDays  }) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
  return (
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
                  <Text style={styles.lowOfText}>Low of {"\n"}{(getForecastDay(forecastAllDays, tempNum))?.day.mintemp_ ?? "null"} C</Text>
                </View>
              </View>
              <Text style={styles.dayText}>{weekday[(new Date(Date.parse((getForecastDay(forecastAllDays, dateNum))?.date))).getDay()] ?? "null"} {(new Date(Date.parse((getForecastDay(forecastAllDays, dateNum))?.date))).getDate() ?? "null"}</Text>
            </View>
            <View>
              <Text style={styles.highOfText}>High of {"\n"}{(getForecastDay(forecastAllDays, tempNum))?.day.maxtemp_c ?? "null"} C</Text>
            </View>
          </View>
  )
}

export default ForecastDay

const styles = StyleSheet.create({
    oneDay: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 20
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
})