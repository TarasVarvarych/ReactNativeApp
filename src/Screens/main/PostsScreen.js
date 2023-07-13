import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ProfilePic from "../../assets/images/profilePic.jpg";

export default function PostsScreen() {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("Login");
          // }}
          style={{ marginLeft: "auto" }}
        >
          <Text>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.profile}>
          <Image source={ProfilePic} style={styles.profilePic} />
          <View>
            <Text style={styles.profileName}>Natali Romanova</Text>
            <Text style={styles.profileEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 10,
    width: "100%",
    maxHeight: 88,
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004d",
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "RobotoMedium",
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: "center",
  },
  body: {
    minHeight: 641,
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  profile: {
    flexDirection: "row",
  },
  profilePic: {
    marginRight: 8,
  },
  profileName: {
    color: "#212121",
    fontFamily: "RobotoBold",
    fontSize: 13,
  },
  profileEmail: {
    color: "#212121e0",
    fontFamily: "Roboto",
    fontSize: 11,
  },
});
