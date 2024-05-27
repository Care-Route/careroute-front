import { SplashScreen, Stack } from "expo-router";
import { RecoilRoot, useRecoilState } from "recoil";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { setCustomText } from "react-native-global-props";
import { initializeKakaoSDK } from "@react-native-kakao/core";
import { KaKao_Android_Key_Hash } from "../config";
import { isLogined, me } from "@react-native-kakao/user";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StyleSheet } from "react-native";
import { userInfo } from "./../recoils/AuthAtoms";

export default function RootLayout() {
  useEffect(() => {
    initializeKakaoSDK(KaKao_Android_Key_Hash);
  });
  return (
    <RecoilRoot>
      <RootLayoutNav />;
    </RecoilRoot>
  );
}

//안내 대상
function RootLayoutNav() {
  const [loaded, error] = useFonts({
    Pretendard: require("../assets/fonts/PretendardVariable.ttf"),
    ...FontAwesome.font,
  });

  const [isUserLogined, setUserIsLogined] = useState(false);
  const [userType, setUserType] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userState, setUserState] = useRecoilState(userInfo);

  // 예외처리
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  //로딩
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const getUserInfo = async (id:string) => {
    //로그인 되어있으면 id를 바탕으로 서버에서 유저 정보 호출
    setUserId(id)
    setUserType("")
  };

  useEffect(() => {
    isLogined().then(setUserIsLogined);
  });

  useEffect(() => {
    console.log("isUserLogined -", isUserLogined);
    if (isUserLogined) {
      me().then((res) => {
        console.log(res);
        getUserInfo(res.id.toString());
      });
    }
  }, [isUserLogined]);

  if (!loaded) {
    return null;
  }
  const customTextProps = {
    style: {
      fontFamily: "Pretendard",
    },
  };
  setCustomText(customTextProps);

  return (
    <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(guideTabs)" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
