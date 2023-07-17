import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ProfilePic from "../../assets/images/profilePic.jpg";

export default function DefaultPostsScreen() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      setPosts((pervState) => [...pervState, params]);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
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
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => {
            indx.toString();
          }}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Image source={{ uri: item.picture }} style={styles.postPic} />
              <Text
                style={{
                  marginBottom: 8,
                  fontFamily: "RobotoMedium",
                  fontSize: 16,
                  color: "#212121",
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Comments");
                  }}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Feather name="message-circle" size={24} color="#BDBDBD" />
                  <Text
                    style={{ fontSize: 16, color: "#BDBDBD", marginLeft: 6 }}
                  >
                    0
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Map", { item });
                  }}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#212121",
                      marginLeft: 6,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.locationName}
                  </Text>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      color: "#212121",
                      marginLeft: 6,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.location.coords.latitude},
                    {item.location.coords.longtitude}
                  </Text> */}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "100%",
    minHeight: 88,
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
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  profile: {
    flexDirection: "row",
    marginBottom: 32,
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
  postPic: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postWrapper: {
    width: 343,
    marginBottom: 34,
  },
  postTitle: {
    marginBottom: 8,
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
});
