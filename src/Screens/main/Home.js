import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../main/CreatePostsScreen";
import ProfileScreen from "../main/ProfileScreen";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import DefaultPostsScreen from "./PostsScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: 9,
          paddingBottom: 34,
          paddingHorizontal: 90,
          borderTopColor: "#212121CC",
          height: 83,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={DefaultPostsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="grid-outline" size={24} color="#212121CC" />
          ),
        }}
      />
      <Tab.Screen
        name="Create posts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },

          tabBarIcon: () => (
            <View style={styles.addPostBtn}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                }}
              >
                +
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
        }}
      />

      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          tabBarIcon: () => null,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => null,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  addPostBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
