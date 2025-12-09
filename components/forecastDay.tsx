import { useSettings } from "@/hooks/useSettings";
import { Image, StyleSheet, Text, View } from "react-native";

interface ForecastDayProps {
  tempNum: number;           
  dateNum: number;            
  forecastAllDays: any[];     
}

export default function ForecastDay({
  tempNum,
  dateNum,
  forecastAllDays,
}: ForecastDayProps) {
  const { unit, theme, fontSize } = useSettings(); // ← GLOBAL SETTINGS

  const day = forecastAllDays?.[tempNum];

  if (!day) return null;

  const date = day.date;
  const weekdayIndex = new Date(date).getDay();
  const weekday = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ][weekdayIndex];

  const iconUrl = `https:${day.day?.condition?.icon}`;

  // Temp conversion
  const maxTemp = unit === "C" ? day.day.maxtemp_c : day.day.maxtemp_f;
  const minTemp = unit === "C" ? day.day.mintemp_c : day.day.mintemp_f;

  const symbol = unit;

  //  font sizes
  const small = fontSize === "small";
  const large = fontSize === "large";

  return (
    <View
      style={[
        styles.oneDay,
        theme === "dark" && { backgroundColor: "#222" },
      ]}
    >
     
      <View>
        <View style={styles.iconWithLow}>
          <Image source={{ uri: iconUrl }} style={styles.icon} />

          <Text
            style={[
              styles.lowOfText,
              theme === "dark" && { color: "white" },
              { fontSize: large ? 22 : small ? 15 : 18 },
            ]}
          >
            Low of {"\n"}
            {Math.round(minTemp)}°{symbol}
          </Text>
        </View>

        <Text
          style={[
            styles.dayText,
            theme === "dark" && { color: "white" },
            { fontSize: large ? 26 : small ? 18 : 22 },
          ]}
        >
          {weekday} {new Date(date).getDate()}
        </Text>
      </View>

      
      <Text
        style={[
          styles.highOfText,
          theme === "dark" && { color: "white" },
          { fontSize: large ? 22 : small ? 15 : 18 },
        ]}
      >
        High of {"\n"}
        {Math.round(maxTemp)}°{symbol}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  oneDay: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 18,
  },
  iconWithLow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayText: {
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 5,
  },
  lowOfText: {
    fontWeight: "bold",
    fontStyle: "italic",
    paddingLeft: 10,
  },
  icon: {
    width: 45,
    height: 45,
  },
  highOfText: {
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "right",
  },
});
