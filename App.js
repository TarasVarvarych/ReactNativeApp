import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { useFonts } from "expo-font";
import { useCallback, useId, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useRoute } from "./src/utils/router";
import { store } from "./redux/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/Fonts/RobotoRegular.ttf"),
    RobotoMedium: require("./src/assets/Fonts/RobotoMedium.ttf"),
    RobotoBold: require("./src/assets/Fonts/RobotoBold.ttf"),
  });
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const routing = useRoute(user);
  const routing = useRoute(false);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>{routing}</NavigationContainer>
      {/* </PersistGate> */}
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
