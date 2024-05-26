import { StyleSheet, Text, View } from "react-native";
import GoogleLogin from "./GoogleLogin";
import KakaoLoginButton from "./KakaoLoginButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.box}>
        <Text>ss</Text>
        <View>
          <KakaoLoginButton />
          <GoogleLogin />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c4ab",
    width: "100%",
  },
  header: {
    height: 56,
    width: "100%",
    backgroundColor: "#c7f4e7",
  },
  box: {
    height: 56,
    flex: 1,
    backgroundColor: "#b6c1c9",
    margin: 24,
  },
});
