import { Stack } from "expo-router";

export default function AuthLayout() {

  return (
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }}  />
      </Stack>
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
