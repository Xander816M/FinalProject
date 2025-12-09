import { fetchCurrent } from "@/api/getWeather";
import { useSettings } from "@/hooks/useSettings";
import { WeatherAPICurrent } from "@/types";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function formatDateInfo(dateString?: string) {
  if (!dateString) return { day: "-", time: "-" };
  const date = new Date(dateString.replace(" ", "T"));
  return {
    day: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date),
    time: new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(date),
  };
}

export default function Index() {
  const [currentWeather, setCurrentWeather] = useState<WeatherAPICurrent | null>(null);

  const { city, unit, theme, fontSize } = useSettings();

  const bgColor = theme === "dark" ? "#111" : "#7DCDFF";
  const textColor = theme === "dark" ? "white" : "black";
  const dynamicFont = fontSize === "small" ? 18 : fontSize === "large" ? 32 : 24;

  useEffect(() => {
    const load = async () => {
      const data = await fetchCurrent(city);
      if (data) setCurrentWeather(data);
    };
    load();
  }, [city, unit]);

  const c = currentWeather?.current;
  const formatted = formatDateInfo(c?.last_updated);

  const tempValue = c ? (unit === "C" ? c.temp_c : c.temp_f) : null;
  const tempDisplay = tempValue !== null ? `${Math.round(tempValue)}°${unit}` : "-";

  const iconUrl = c?.condition?.icon ? `https:${c.condition.icon}` : null;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.homeContainer}>
        <Text style={[styles.appName, { color: textColor }]}>LightBox</Text>

        <View style={styles.cityBox}>
          <Text style={[styles.cityName, { color: textColor, fontSize: dynamicFont + 8 }]}>
            {currentWeather?.location?.name ?? city}
          </Text>

          {iconUrl && <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />}
        </View>

        <View style={styles.weatherInfo}>
          <Text style={[styles.dateText, { color: textColor, fontSize: dynamicFont + 24 }]}>{formatted.day}</Text>
          <Text style={[styles.timeText, { color: textColor, fontSize: dynamicFont + 14 }]}>{formatted.time}</Text>

          <Text style={[styles.tempText, { color: textColor, fontSize: dynamicFont + 12 }]}>
            {tempDisplay}
          </Text>
        </View>
      </View>

      {/* NAVBAR */}
      <View style={[styles.navBar, theme === "dark" && { backgroundColor: "#333" }]}>
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
  container: { flexGrow: 1 },
  navBar: {
    backgroundColor: "#D9D9D9",
    height: '9%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  appName: { fontWeight: "bold", fontSize: 40 },
  homeContainer: { marginTop: 70, width: "80%", alignSelf: "center", height: '84.18%'},
  cityBox: { alignItems: "center" },
  cityName: { marginTop: 40, fontWeight: "bold" },
  weatherIcon: { height: 120, width: 120, marginTop: 16 },
  weatherInfo: { alignItems: "center", marginTop: 25 },
  dateText: { fontWeight: "bold"},
  timeText: { fontWeight: "bold"  },
  tempText: { fontWeight: "bold" },
});
