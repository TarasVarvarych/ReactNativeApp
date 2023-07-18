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
  Platform,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraIcon from "../../assets/images/cam.png";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [locationName, setLocationName] = useState("");
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  // const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [picture, setPicture] = useState(null);
  const [location, setLocation] = useState(null);

  // const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();

  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  const takePic = async () => {
    const pic = await cameraRef.takePictureAsync();
    const picLocation = await Location.getCurrentPositionAsync();
    setPicture(pic.uri);
    setLocation(picLocation.coords);
  };

  const sendPic = () => {
    if (picture === null || title === "" || locationName === "") {
      console.log("Please, fill in all fields");
      return;
    }
    navigation.navigate("DefaultScreen", {
      picture,
      title,
      locationName,
      location,
    });
    setTitle("");
    setLocationName("");
    setPicture(null);
  };

  const deletePost = () => {
    setTitle("");
    setLocationName("");
    setPicture(null);
  };

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
              navigation.navigate("DefaultScreen");
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
          <Camera style={styles.uploadPicBg} ref={setCameraRef}>
            {picture && (
              <View style={styles.picContainer}>
                <Image
                  source={{ uri: picture }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            )}
            <TouchableOpacity onPress={takePic}>
              <Image style={styles.camera} source={CameraIcon} />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.uploadText}>Завантажте фото</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{
              marginBottom: isKeyboardShown && Platform.OS == "ios" ? 32 : 0,
            }}
          >
            <TextInput
              onChangeText={setTitle}
              value={title}
              style={styles.uploadName}
              placeholder="Назва..."
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
            />
            <View style={styles.locationWrapper}>
              <TextInput
                onChangeText={setLocationName}
                value={locationName}
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

          <TouchableOpacity style={styles.publicateBtn} onPress={sendPic}>
            <Text style={styles.publicateBtnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.removePost} onPress={deletePost}>
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
    justifyContent: "space-evenly",
    paddingBottom: 34,
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
  picContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    // width: "100%",
    // borderWidth: 2,
    // borderColor: "#fff",
  },
});
