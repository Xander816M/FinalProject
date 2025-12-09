import { fetchForecast } from "@/api/getWeather";
import ForecastDay from "@/components/forecastDay";
import { useSettings } from "@/hooks/useSettings";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState, } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FiveDayForecast() {
  const [forecastDays, setForecastDays] = useState<any[]>([]);
  const [locationName, setLocationName] = useState("");

  const { city, unit, theme, fontSize } = useSettings();

  const loadData = async () => {
    try {
      const data = await fetchForecast(city);

      if (data?.forecast?.forecastday) {
        setForecastDays(data.forecast.forecastday);
        setLocationName(data.location.name);
      }
    } catch (error) {
      console.error("Error loading forecast:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [city]);

  return (
    <View style={[styles.container, theme === "dark" && { backgroundColor: "#000" }]}>
      <View style={styles.forecastWrapper}>
        <Text
          style={[
            styles.cityName,
            theme === "dark" && { color: "white" },
            { fontSize: fontSize === "large" ? 32 : fontSize === "small" ? 18 : 26 },
          ]}
        >
          {locationName}
        </Text>

        {forecastDays.length > 0 && (
          <>
            <ForecastDay tempNum={1} forecastAllDays={forecastDays} />
            <ForecastDay tempNum={2} forecastAllDays={forecastDays} />
            <ForecastDay tempNum={3} forecastAllDays={forecastDays} />
            <ForecastDay tempNum={4} forecastAllDays={forecastDays} />
            <ForecastDay tempNum={5} forecastAllDays={forecastDays} />
          </>
        )}
      </View>

      <View style={[styles.navBar, theme === "dark" && { backgroundColor: "#333" }]}>
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
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#7DCDFF", flex: 1 },
  forecastWrapper: { flex: 1, paddingTop: 40, paddingBottom: 20, height: '91.3%' },
  cityName: { fontWeight: "bold", alignSelf: "center", marginBottom: 20, marginTop: 8 },
  navBar: {
    backgroundColor: "#D9D9D9",
    height: '8.7%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
