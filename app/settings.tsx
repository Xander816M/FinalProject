import { useSettings } from "@/hooks/useSettings";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const { city, setCity, unit, setUnit, theme, setTheme, fontSize, setFontSize } =
    useSettings();

  return (
    <View style={[styles.container, theme === "dark" && { backgroundColor: "#111" }]}>
      <Text style={[styles.title, theme === "dark" && { color: "white" }]}>
        Settings
      </Text>

      <View style={styles.box}>

        {/* city input */}
        <View style={styles.row}>
          <Text style={[styles.label, theme === "dark" && { color: "white" }]}>
            City
          </Text>

          <TextInput
            style={[
              styles.cityInput,
              theme === "dark" && { color: "white", borderColor: "white" },
            ]}
            placeholder="Enter city"
            placeholderTextColor="#999"
            value={city}
            onChangeText={(text) => setCity(text.trim())}
          />
        </View>

        
        <View style={styles.row}>
          <Text style={[styles.label, theme === "dark" && { color: "white" }]}>
            Temperature{"\n"}measurement
          </Text>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity onPress={() => setUnit("C")}>
              <Text style={[styles.value, unit === "C" && styles.selected]}>C°</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setUnit("F")}>
              <Text style={[styles.value, unit === "F" && styles.selected]}>F°</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.row}>
          <Text style={[styles.label, theme === "dark" && { color: "white" }]}>
            background{"\n"}mode
          </Text>

          <View style={{ flexDirection: "row", gap: 16 }}>
            <TouchableOpacity onPress={() => setTheme("light")}>
              <Text style={[styles.value, theme === "light" && styles.selected]}>
                light
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTheme("dark")}>
              <Text style={[styles.value, theme === "dark" && styles.selected]}>
                dark
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.row}>
          <Text style={[styles.label, theme === "dark" && { color: "white" }]}>
            Text Size
          </Text>

          <View style={styles.textSizes}>
            <TouchableOpacity onPress={() => setFontSize("small")}>
              <Text style={[styles.small, fontSize === "small" && styles.selected]}>Aa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFontSize("medium")}>
              <Text style={[styles.medium, fontSize === "medium" && styles.selected]}>Aa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFontSize("large")}>
              <Text style={[styles.large, fontSize === "large" && styles.selected]}>Aa</Text>
            </TouchableOpacity>
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
  container: { flex: 1, backgroundColor: "white" },
  title: { marginTop: 40, marginLeft: 20, fontSize: 25, fontWeight: "600" },

  box: {
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    flex: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 22,
    alignItems: "center",
  },

  label: { fontWeight: "bold", fontSize: 20 },
  value: { fontWeight: "bold", fontSize: 20 },

  selected: {
    color: "#007AFF",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  cityInput: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 150,
    fontSize: 18,
  },

  textSizes: { flexDirection: "row", alignItems: "center", gap: 20 },

  small: { fontSize: 15, fontWeight: "bold" },
  medium: { fontSize: 20, fontWeight: "bold" },
  large: { fontSize: 25, fontWeight: "bold" },

  navBar: {
    backgroundColor: "#D9D9D9",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
