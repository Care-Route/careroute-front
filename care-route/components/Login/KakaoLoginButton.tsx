import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { login } from "@react-native-kakao/user";
import { initializeKakaoSDK } from "@react-native-kakao/core";
import { useEffect } from "react";
import { KaKao_Android_Key_Hash } from "../../config";

export default function KakaoLoginButton() {
  useEffect(() => {
    initializeKakaoSDK(KaKao_Android_Key_Hash);
  });
  const kakaoLogin = () => {
    login().then(console.log).catch(console.error);
  };
  return (
    <View style={styles.button}>
      <Pressable onPress={kakaoLogin}>
        <View style={styles.container}>
          <Image source={require("../../assets/icons/kakaoIcon.png")} style={styles.imageStyle} />
          <Text>카톡 연동로그인</Text>
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
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    flexDirection: "row",
  },
  imageStyle: {
    width: 20, //가로비율
    height: 19, //세로비율
    alignItems: "center", //중간정렬
    justifyContent: "center",
    marginRight: 5,
  },
});
