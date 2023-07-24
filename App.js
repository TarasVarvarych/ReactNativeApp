import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import Main from "./src/components/Main";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useRoute } from "./src/utils/router";
import { store } from "./redux/store";
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

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
