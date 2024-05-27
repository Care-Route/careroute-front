import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {  login } from "@react-native-kakao/user";
import colors from "../../styles/colors";

export default function KakaoLoginButton() {

  return (
    <View style={styles.button}>
      <Pressable
        onPress={() => {
          login().then(console.log).catch(console.error);
        }}
      >
        <View style={styles.container}>
          <Image source={require("../../assets/icons/kakaoIcon.png")} style={styles.imageStyle} />
          <Text style={styles.text}>카톡 연동로그인</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: "100%",
  },
  container: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.yellow01,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  imageStyle: {
    width: 20, //가로비율
    height: 19, //세로비율
    alignItems: "center", //중간정렬
    justifyContent: "center",
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray07,
  },
});
