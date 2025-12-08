import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { fetchCurrent } from "@/api/getWeather";
import { WeatherAPIForcast } from "@/types";
import { useEffect, useState } from "react";

// Format helper
function formatDateInfo(dateString?: string) {
  if (!dateString) return { day: "-", time: "-" };
  const date = new Date(dateString.replace(" ", "T"));

  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return { day, time };
}

export default function Index() {
  const [currentWeather, setCurrentWeather] = useState<WeatherAPIForcast | null>(null);

  const loadData = async () => {
    try {
      const data = await fetchCurrent();
      if (data) {
        setCurrentWeather(data);
      }
    } catch (error) {
      console.error("Error loading data on to main page", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const current = currentWeather?.current;
  const displayTemp = current ? `${Math.round(current.temp_c)}°C` : "-";
  const formatted = formatDateInfo(current?.last_updated);

  // Build icon URL safely
  const iconUrl = current?.condition?.icon ? `https:${current.condition.icon}` : null;

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Text style={styles.appName}>LightBox</Text>

        <View style={styles.cityBox}>
          <Text style={styles.cityName}>{currentWeather?.location?.name ?? "Calgary"}</Text>

          {iconUrl && (
            <Image
              style={styles.weatherIcon}
              source={{ uri: iconUrl }}
            />
          )}
        </View>

        <View style={styles.weatherInfo}>
          <View>
            <Text style={styles.dateText}>{formatted.day}</Text>
            <Text style={styles.timeText}>{formatted.time}</Text>
          </View>

          <View>
            <Text style={styles.tempText}>{displayTemp}</Text>
          </View>
        </View>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Octicons name="home-fill" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/fiveDayForecast")}>
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
  navBar: {
    backgroundColor: "#D9D9D9",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 340,
  },
  container: {
    backgroundColor: "#7DCDFF",
    flexGrow: 1,
  },
  appName: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 15,
  },

  cityName: {
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
  },

  homeContainer: {
    marginTop: 70,
    width: "80%",
    alignSelf: "center",
  },

  cityBox: {
    alignItems: "center",
  },

  weatherIcon: {
    height: 120,
    width: 120,
    marginTop: 16,
  },

  weatherInfo: {
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: 25,
    alignItems:"center",
    
  },

  timeText: {
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign:"center"
  },

  dateText: {
    fontWeight: "bold",
    fontSize: 50,
  },

  tempText: {
    fontWeight: "bold",
    fontSize: 50,
  },
});
