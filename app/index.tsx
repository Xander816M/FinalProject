import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.contaner}>

      <View style={styles.homeContainer}>

        <Text style= {styles.appName}>LightBox</Text>

        <View style={styles.cityBox}>
          <Text style={styles.cityName}>Calgary</Text>
          
          <Image
            style={styles.sunImage}
            source={require("../assets/images/sunny.png")}
          />
        </View>

        <View style={styles.weatherInfo}>
          <View>
            <Text style={styles.dateText}>Monday June</Text>
            <Text style={styles.dayText}>1</Text>
          </View>
        

          <View>
            <Text style={styles.tempText}>10 °C</Text>
            <Text style={styles.weatherDesc}>Sunny</Text>
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
  navBar: {
    backgroundColor: "#D9D9D9",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:400
  },
  contaner: {
    backgroundColor: "#7DCDFF",
    flexGrow: 1,
  },
  appName: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 15
  },

  cityName: {
    marginTop:40,
    fontSize:50,
    fontWeight:'bold',
  },

  homeContainer: {
    marginTop:70,
    width:'80%',
    alignSelf:'center'
  },

  cityBox: {
    alignItems:'center'
  },

  sunImage: {
    height:100,
    width:110,
    marginTop:16
  },

  weatherInfo: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    alignSelf:'center',
    marginTop:25
  },

  dateText: {
    paddingTop:5,
    fontWeight:'bold',
    fontSize:20
  },

  dayText: {
    fontWeight:'bold',
    fontSize:70,
    textAlign:'center'
  },

  weatherDesc: {
    fontSize:35,
    fontStyle:'italic'
  },

  tempText: {
    fontWeight:'bold',
    fontSize:50
  }

});