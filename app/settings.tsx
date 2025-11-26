import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

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

        {/* text sizes */}
        <View style={styles.row}>
          <Text style={styles.label}>Text Size</Text>

          <View style={styles.textSizes}>
            <Text style={styles.small}>Aa</Text>
            <Text style={styles.medium}>Aa</Text>
            <Text style={styles.large}>Aa</Text>
          </View>
        </View>

      </View>

      {/*navigation*/}
      <View style={styles.navBar}>
        <Octicons name="home-fill" size={35} color="white" />
        <MaterialIcons name="sunny" size={35} color="white" />
        <Ionicons name="settings-sharp" size={35} color="white" />
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
    height: "78%",
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 22,
    alignItems: "center",
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
    height: 60,
    backgroundColor: "#bfbfbf",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
