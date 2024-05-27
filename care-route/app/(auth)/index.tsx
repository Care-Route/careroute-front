import { Link } from "expo-router";
import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Login from "../../components/Login";
import SelectType from "../../components/SelectType";
import { useEffect, useState } from "react";
import { isLogined, me } from "@react-native-kakao/user";

export default function Auth() {
  const [isUserLogined, setUserIsLogined] = useState(false);
  const [userType, setUserType] = useState<string | undefined>();
  useEffect(() => {
    isLogined().then(setUserIsLogined);
  });

  useEffect(() => {
    console.log("isUserLogined -", isUserLogined);
    if (isUserLogined) {
      me().then(console.log);
    }
  }, [isUserLogined]);

  function page() {
    return <Login/>
    // if (!isUserLogined && !userType) return <Login />;
    // else if(isUserLogined && !userType) return <SelectType />;
  }

  return <View style={styles.container}>{page()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#dcd4d4",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});
