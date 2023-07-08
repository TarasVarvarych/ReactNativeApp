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

import AuthBg from "../assets/images/authBg.jpg";

export default function LoginScreen() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    setEmailFocused(false);
    setPasswordFocused(false);
    Keyboard.dismiss();
  };
  const onLogin = () => {
    console.log(` email: ${email}, password: ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View>
        <ImageBackground source={AuthBg} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isKeyboardShown ? -250 : 0,
              }}
            >
              <Text style={styles.formTitle}>Увійти</Text>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setEmailFocused(true);
                  }}
                  onBlur={hideKeyboard}
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
                  onBlur={hideKeyboard}
                  style={{
                    ...styles.input,
                    borderColor: passwordFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                ></TextInput>
                <TouchableOpacity style={styles.showPassBtn}>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontSize: 16,
                      color: "#1B4371",
                    }}
                  >
                    Показати
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
                <TouchableOpacity>
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 144,
    paddingTop: 32,
  },
  formTitle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    width: 343,
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
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -60,
    left: 128,
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  addPicBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,
  },
  registrationTextContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
