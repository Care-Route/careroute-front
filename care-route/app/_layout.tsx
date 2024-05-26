import { SplashScreen, Stack } from "expo-router";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StyleSheet } from "react-native";

export default function RootLayout() {
  return <RootLayoutNav />;
}

//안내 대상
function RootLayoutNav() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

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

  if (!loaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </RecoilRoot>
  );
}

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//   },
//   text: {
//       fontSize: 25,
//       fontWeight: '500',
//   },
// });
