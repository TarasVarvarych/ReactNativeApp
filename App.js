import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useRoute } from "./src/utils/router";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/Fonts/RobotoRegular.ttf"),
    RobotoMedium: require("./src/assets/Fonts/RobotoMedium.ttf"),
    RobotoBold: require("./src/assets/Fonts/RobotoBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
