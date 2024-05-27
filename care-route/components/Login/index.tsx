import { StyleSheet, Text, View } from "react-native";
import GoogleLogin from "./GoogleLogin";
import KakaoLoginButton from "./KakaoLoginButton";
import colors from "../../styles/colors";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.box}>
        <View style={styles.TextBox}>
          <Text style={styles.boxTextGray}>
            <Text style={styles.boxTextGreen}>케어루트</Text>를 통해
          </Text>
          <Text style={styles.boxTextGray}>
            내 가족의 <Text style={styles.boxTextGreen}>길</Text>을
          </Text>
          <Text style={styles.boxTextGray}>
            <Text style={styles.boxTextGreen}>안전</Text>하게 만들어요!
          </Text>
        </View>

        <View style={styles.buttonBox}>
          <View>
            <Text style={styles.buttonBoxText}>간편하게 로그인하기</Text>
          </View>
          <GoogleLogin />
          <KakaoLoginButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray01,
    width: "100%",
  },
  header: {
    height: 56,
    width: "100%",
    backgroundColor: "#d2ece5",
  },
  box: {
    height: 56,
    flex: 1,
    justifyContent: "center",
    margin: 16,
    position: "relative",
  },
  TextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTextGray: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.gray05,
  },
  boxTextGreen: {
    color: colors.point_green01,
  },
  buttonBox: {
    height: 140,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  buttonBoxText: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
    color: colors.gray07,
  },
});
