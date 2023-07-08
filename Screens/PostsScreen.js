import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";

export default function PostsScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity>
          <Text>
            <MaterialIcons
              style={{ marginLeft: "auto" }}
              name="logout"
              size={24}
              color="#BDBDBD"
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}></View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text>
            <Ionicons name="grid-outline" size={24} color="#212121CC" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPostBtn}>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <Feather name="user" size={24} color="#212121CC" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 11,
    width: "100%",
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
  body: { height: 641, paddingTop: 32, paddingHorizontal: 16 },
  footer: {
    height: 83,
    borderTopWidth: 0.5,
    borderTopColor: "#0000004d",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 39,
    paddingTop: 9,
  },
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
