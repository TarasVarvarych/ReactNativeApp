import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import PostsScreen from "./main/PostsScreen";
import CreatePostsScreen from "./main/CreatePostsScreen";
import BottomNavigation from "./components/BottomNavigation";
// import BottomNavigation from "./components/BottomNavigation";

export default function Home() {
  return (
    <>
      <BottomNavigation />
    </>
  );
}
