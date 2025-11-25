import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Octicons, MaterialIcons, Ionicons, Feather} from '@expo/vector-icons';

const fiveDayForecast = () => {
  return (
    <View style={styles.contaner}>
      <View style={styles.fiveDayForecast}>
        <Text style={styles.cityName}>Calgary</Text>
        <View style={styles.oneDay}>
            <View>
                <Feather name="sun" size={30} color="black" />
                <View>
                    <Text>Low of</Text>
                    <Text>10 C</Text>
                </View>
            </View>
            <View>
                <Text>High of</Text>
                <Text>20 C</Text>
            </View>
        </View>

      </View>
      <View style={styles.navBar}>
        <Octicons name="home-fill" size={35} color="white" />
        <MaterialIcons name="sunny" size={35} color="white" />
        <Ionicons name="settings-sharp" size={35} color="white" />
      </View>
    </View>
  )
}

export default fiveDayForecast

const styles = StyleSheet.create({
    navBar:{
        backgroundColor: "#D9D9D9",
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contaner:{
        backgroundColor: "#7DCDFF",
        flexGrow: 1
    },
    fiveDayForecast:{
        height: '93%',
        // alignItems: 'center',
    },
    cityName:{
        fontWeight: 'bold',
    },
    oneDay:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})