import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../main/PostsScreen";
import CreatePostsScreen from "../main/CreatePostsScreen";
import ProfileScreen from "../main/ProfileScreen";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 9,
          borderTopColor: "#212121CC",
          paddingHorizontal: 90,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
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
