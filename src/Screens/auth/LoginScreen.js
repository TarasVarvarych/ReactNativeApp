import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

import AuthBg from "../../assets/images/authBg.jpg";

export default function LoginScreen() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    if (password === "") {
      setIsPasswordHidden(true);
    }
  }, [password]);

  const togglePasswordShow = () => {
    if (password !== "") {
      setIsPasswordHidden(!isPasswordHidden);
    }
  };
  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  const onLogin = () => {
    console.log(` email: ${email}, password: ${password}`);
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsKeyboardShown(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={AuthBg} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                // marginBottom: isKeyboardShown ? -250 : 0,
                paddingBottom: isKeyboardShown ? 16 : 144,
              }}
            >
              <Text style={styles.formTitle}>Увійти</Text>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setEmailFocused(true);
                  }}
                  onBlur={() => {
                    setEmailFocused(false);
                  }}
                  style={{
                    ...styles.input,
                    borderColor: emailFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  onChangeText={setEmail}
                  value={email}
                ></TextInput>
              </View>
              <View style={{ position: "relative", marginBottom: 43 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setPasswordFocused(false);
                  }}
                  style={{
                    ...styles.input,
                    borderColor: passwordFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={isPasswordHidden}
                  onChangeText={setPassword}
                  value={password}
                ></TextInput>
                <TouchableOpacity
                  style={styles.showPassBtn}
                  onPress={togglePasswordShow}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontSize: 16,
                      color: "#1B4371",
                    }}
                  >
                    {isPasswordHidden ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.registrationTextContainer}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 16,
                    color: "#1B4371",
                  }}
                >
                  Немає акаунту?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontSize: 16,
                      textDecorationLine: "underline",
                      color: "#1B4371",
                    }}
                  >
                    Зареєструватись
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
  form: {
    minWidth: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    // paddingBottom: 144,
    paddingTop: 32,
  },
  formTitle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    minWidth: "90%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    width: 343,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto",
  },

  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },

  registrationTextContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
