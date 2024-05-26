import { Pressable, StyleSheet, Text, View } from "react-native";

//지도
export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});