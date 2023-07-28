import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  FlatList,
  Image,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const { nickname } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const { params } = useRoute();
  const { postId, picture } = params;
  const createComment = async () => {
    if (comment.trim() === "") {
      return;
    }
    addDoc(collection(db, `posts/${postId}/comments`), {
      comment,
      nickname,
    });
    setComment("");
  };

  const getComments = async () => {
    const commentsRef = collection(db, `posts/${postId}/comments`);
    onSnapshot(commentsRef, (snapshot) => {
      const allComments = [];
      snapshot.forEach((doc) =>
        allComments.push({ ...doc.data(), id: doc.id })
      );
      setComments(allComments);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setIsKeyboardShown(false);
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Posts");
              }}
            >
              <Text>
                <AntDesign name="arrowleft" size={24} color="#151515cc" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Коментарі</Text>
          </View>

          <View style={styles.body}>
            <Image source={{ uri: picture }} style={styles.postPic} />
            <FlatList
              style={{ width: "100%" }}
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={styles.comment}>
                    <Text>{item.comment}</Text>
                    {/* <Text>{item.nickname}</Text> */}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View
            style={{
              ...styles.commentWrapper,
              paddingBottom: isKeyboardShown && Platform.OS == "ios" ? 10 : 16,
            }}
          >
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              value={comment}
              onChangeText={setComment}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
            />
            <TouchableOpacity style={styles.sendIcon}>
              <Ionicons
                name="arrow-up-circle-sharp"
                size={34}
                color="#FF6C00"
                onPress={createComment}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  body: {
    flex: 1,
    width: "100%",
    // maxHeight: "80%",
    paddingTop: 32,
    paddingHorizontal: 16,
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
  commentInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
  },
  commentWrapper: {
    width: "100%",
    paddingHorizontal: 16,
  },
  sendIcon: {
    position: "absolute",
    top: 8,
    right: 24,
  },
  postPic: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  comment: {
    backgroundColor: "#F6F6F6",
    width: 299,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 24,
  },
});
