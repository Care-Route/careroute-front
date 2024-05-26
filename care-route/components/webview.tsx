import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const REST_API_KEY = "ac501927b10a62d9ada165d42cbd8ba2";
const REDIRECT_URI = "https://careroute.com/oauth";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export default function LoginScreen() {
  const [code, setCode] = useState<any>();

  useEffect(() => {
    console.log(code);
  }, [code]);

  const getCode = (target: string) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      setCode(requestCode);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
        cacheMode={"LOAD_NO_CACHE"}
        cacheEnabled={false}
        incognito={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  kakao: {
    backgroundColor: "red",
    flex: 1,
  },
});
