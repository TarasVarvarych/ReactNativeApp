import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NastedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NastedScreen.Navigator>
      <NastedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NastedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <NastedScreen.Screen
        name="Map"
        component={MapScreen}
        // options={{ headerShown: false }}
      />
    </NastedScreen.Navigator>
  );
}
