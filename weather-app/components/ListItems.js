import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ListItems = ({time_24h, weather_id, temp, precip, wind_speed, wind_rotation, gust_speed}) => {
  const rotate_wind = {
    transform: [{
      rotate: wind_rotation + 'deg',
    }]
  };

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.itemText}>
          <Text>{time_24h}</Text>
        </View>
        <View style={styles.image}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/1163/1163662.png" }} style={styles.image} />
        </View>
        <View style={styles.itemText}>
          <Text>{temp}&#8451;</Text>
        </View>
        <View style={styles.itemText}>
          <Text>{precip}&#x25;</Text>
        </View>
        <View style={styles.image}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/4005/4005837.png" }}  style={[styles.image, rotate_wind,]} />
        </View>
        <View style={styles.image}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/6975/6975223.png" }} style={styles.image} />
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

  image: {
    height: 48,
    width: 48,
  },
})

export default ListItems
