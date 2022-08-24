import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItems from './components/ListItems';

import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}> Weather Report </Text>
      </View>
      <View style={styles.divider} />

      <ListItems
          time_24h={SAMPLE_DATA[0].hourly.time[0]}
          weather_id='0'
          temp={SAMPLE_DATA[0].hourly.temperature_2m[0]}
          precip='0'
          wind_speed='0'
          wind_rotation='60'
          gust_speed='0' />

      <ListItems
          time_24h={SAMPLE_DATA[0].hourly.time[1]}
          weather_id='0'
          temp={SAMPLE_DATA[0].hourly.temperature_2m[1]}
          precip='0'
          wind_speed='0'
          wind_rotation='180'
          gust_speed='0' />

      <ListItems
          time_24h={SAMPLE_DATA[0].hourly.time[2]}
          weather_id='0'
          temp={SAMPLE_DATA[0].hourly.temperature_2m[2]}
          precip='0'
          wind_speed='0'
          wind_rotation='270'
          gust_speed='0' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },

  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  }
});
