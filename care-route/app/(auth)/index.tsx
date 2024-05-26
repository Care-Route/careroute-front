import { Link } from "expo-router";
import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import Login from "../../components/Login";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#dcd4d4",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
});
