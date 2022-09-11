import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItems from './components/ListItems';

import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {
  var mylist = []
  for (const i of Array(30).keys()) {
    mylist.push({
      'id': i,
      'time_24h': SAMPLE_DATA[0].hourly.time[i],
      'weather_id': '0',
      'temp': SAMPLE_DATA[0].hourly.temperature_2m[i],
      'precip': '0',
      'windspeed': SAMPLE_DATA[0].hourly.windspeed_10m[i],
      'windrotation': SAMPLE_DATA[0].hourly.winddirection_10m[i],
      'gustspeed': '0'
     })
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}> Weather Report </Text>
      </View>
      <View style={styles.divider} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={mylist}
        renderItem={({item}) => (
            <ListItems
              time_24h={item.time}
              weather_id={item.weather_id}
              temp={item.temp}
              precip={item.precip}
              wind_speed={item.windspeed}
              wind_rotation={item.windrotation}
              gust_speed={item.gustspeed} />
        )}
      ></FlatList>

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
