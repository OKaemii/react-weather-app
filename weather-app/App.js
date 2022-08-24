import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItems from './components/ListItems';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}> Weather Report </Text>
      </View>
      <View style={styles.divider} />

      <ListItems />
      <ListItems />
      <ListItems />
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
