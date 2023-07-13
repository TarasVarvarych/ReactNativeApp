import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Camera from "../../assets/images/cam.png";
import { useEffect, useState } from "react";

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const [titile, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsKeyboardShown(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostsScreen");
            }}
          >
            <Text>
              <AntDesign name="arrowleft" size={24} color="#151515cc" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Створити публікацію</Text>
        </View>

        <View
          style={{ ...styles.body, paddingBottom: isKeyboardShown ? 16 : 0 }}
        >
          <View style={styles.uploadPicBg}>
            <TouchableOpacity>
              <Image style={styles.camera} source={Camera} />
            </TouchableOpacity>
          </View>
          <Text style={styles.uploadText}>Завантажте фото</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ marginBottom: isKeyboardShown ? 32 : 0 }}
          >
            <TextInput
              onChangeText={setTitle}
              value={titile}
              style={styles.uploadName}
              placeholder="Назва..."
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
            />
            <View style={styles.locationWrapper}>
              <TextInput
                onChangeText={setLocation}
                value={location}
                style={styles.uploadLocation}
                placeholder="Місцевість..."
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
              />
              <Feather
                style={styles.locationIcon}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.publicateBtn}>
            <Text style={styles.publicateBtnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.removePost}>
          <Text style={{ textAlign: "center" }}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  uploadPicBg: {
    position: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 8,
  },
  camera: {
    alignSelf: "center",
    top: 90,
  },
  uploadText: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    marginBottom: 32,
  },
  uploadName: {
    height: 50,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto",
  },
  uploadLocation: {
    width: "100%",
    height: 50,
    paddingLeft: 28,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 32,
  },
  locationWrapper: {
    position: "relative",
  },
  locationIcon: {
    position: "absolute",
    top: 13,
  },
  publicateBtn: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 51,
    paddingVertical: 16,
    marginBottom: 120,
    alignSelf: "center",
  },
  publicateBtnText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#BDBDBD",
  },
  removePost: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    paddingVertical: 8,
  },
});
