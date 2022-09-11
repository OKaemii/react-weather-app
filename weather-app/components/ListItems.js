import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { SAMPLE_WEATHER_URI } from '../assets/data/sampleWeatherURI'

const ListItems = ({time_24h, weather_id, temp, precip, wind_speed, wind_rotation, gust_speed}) => {
  const rotate_wind = {
    transform: [{
      rotate: wind_rotation + 'deg',
    }]
  };

  console.log(SAMPLE_WEATHER_URI[0].uri[weather_id])

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.itemText}>
          <Text>{time_24h}</Text>
        </View>
        <View style={styles.image}>
          <Image source={SAMPLE_WEATHER_URI[0].uri[weather_id]} style={styles.image} />
        </View>
        <View style={styles.itemText}>
          <Text>{temp}&#8451;</Text>
        </View>
        <View style={styles.itemText}>
          <Text>{precip}&#x25;</Text>
        </View>
        <View style={styles.textImage}>
          <Image source={{uri: "https://icon-library.com/images/wind-direction-icon/wind-direction-icon-16.jpg" }}  style={[styles.image, rotate_wind,]} />
          <Text style={[styles.imageText]}>{wind_speed}</Text>
        </View>
        <View style={styles.image}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/6975/6975223.png" }} style={styles.image} />
          <Text style={[styles.imageText]}>{gust_speed}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemText: {
    fontSize: 24
  },

  textImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 4,
  },

  imageText: {
    position: 'absolute',
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },

  image: {
    height: 48,
    width: 48,
    flex: 1,
  },
})

export default ListItems
