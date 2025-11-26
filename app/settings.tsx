import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.box}>       
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>Calgary</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Temperature{"\n"}measurement</Text>
          <Text style={styles.value}>C     F</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>background{"\n"}mode</Text>
          <Text style={styles.value}>light     Dark</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Text Size</Text>
          <View style={styles.textSizes}>
            <Text style={styles.small}>Aa</Text>
            <Text style={styles.medium}>Aa</Text>
            <Text style={styles.large}>Aa</Text>
          </View>
        </View>
      </View>
      <View style={styles.navBar}>
              <TouchableOpacity onPress={() => router.push('/')}>
                  <Octicons name="home-fill" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/fiveDayForecast')}>
                  <MaterialIcons name="sunny" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/settings')}>
                  <Ionicons name="settings-sharp" size={35} color="white" />
              </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
  },

  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "600",
  },

  box: {
    backgroundColor: "white",
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
  },

  label: {
    fontWeight: "600",
    fontSize: 16,
  },

  value: {
    fontWeight: "700",
    fontSize: 16,
  },

  textSizes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  small: {
    fontSize: 14,
    fontWeight: "400",
  },

  medium: {
    fontSize: 18,
    fontWeight: "600",
  },

  large: {
    fontSize: 22,
    fontWeight: "800",
  },

  navBar: {
    backgroundColor: "#D9D9D9",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
