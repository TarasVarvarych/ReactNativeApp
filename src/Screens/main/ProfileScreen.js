import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { collection, onSnapshot, query, where, doc } from "firebase/firestore";

import { Feather } from "@expo/vector-icons";
import BgImage from "../../assets/images/authBg.jpg";
import ProfilePic from "../../assets/images/profilePicBig.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const [posts, setPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // const getDataFromFirestore = async () => {
  //   const allPosts = [];
  //   const postsRef = collection(db, "posts");
  //   const q = query(postsRef, where("userId", "==", userId));
  //   onSnapshot(q, (snapshot) => {
  //     snapshot.forEach((doc) => allPosts.push({ ...doc.data(), id: doc.id }));
  //   });
  //   setPosts(allPosts);
  // };

  const getDataFromFirestore = async () => {
    const postsRef = collection(db, `posts`);
    const q = query(postsRef, where("userId", "==", userId));
    onSnapshot(q, (snapshot) => {
      const allPosts = [];
      snapshot.forEach((doc) => allPosts.push({ ...doc.data(), id: doc.id }));
      setPosts(allPosts);
    });
  };

  useEffect(() => {
    getDataFromFirestore();
  }, [userId]);
  return (
    <ImageBackground source={BgImage} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.proflePic}>
            <Image source={ProfilePic} style={{ borderRadius: 16 }} />
            <TouchableOpacity style={styles.RemovePicBtn}>
              <Text>
                <Feather name="x-circle" size={25} color="#E8E8E8" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <TouchableOpacity
            style={styles.logOutBtn}
            onPress={() => {
              dispatch(logOut());
            }}
          >
            <Text>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </Text>
          </TouchableOpacity>
          <FlatList
            style={{ width: "100%" }}
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
                      navigation.navigate("Comments", {
                        postId: item.id,
                        picture: item.picture,
                      });
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
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
  profileWrapper: {
    minWidth: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  proflePic: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -60,
    alignSelf: "center",
  },
  RemovePicBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,
  },
  profileName: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginTop: 70,
    marginBottom: 33,
  },
  logOutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  postPic: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postWrapper: {
    marginBottom: 34,
  },
  postTitle: {
    marginBottom: 8,
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
});
