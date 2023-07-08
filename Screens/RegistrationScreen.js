import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AuthBg from "../assets/images/authBg.jpg";

export default function RegistrationScreen() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [loginFocused, setLoginFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    setEmailFocused(false);
    setLoginFocused(false);
    setPasswordFocused(false);
    Keyboard.dismiss();
  };

  const onRegistration = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    setLogin("");
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
                marginBottom: isKeyboardShown ? -190 : 0,
              }}
            >
              <View style={styles.addPhoto}>
                <TouchableOpacity style={styles.addPicBtn}>
                  <Text>
                    <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.formTitle}>Реєстрація</Text>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setLoginFocused(true);
                  }}
                  onBlur={hideKeyboard}
                  style={{
                    ...styles.input,
                    borderColor: loginFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Логін"
                  onChangeText={setLogin}
                  value={login}
                ></TextInput>
              </View>
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
              <TouchableOpacity style={styles.btn} onPress={onRegistration}>
                <Text style={styles.btnText}>Зареєструватись</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 16,
                    color: "#1B4371",
                  }}
                >
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
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
    width: 375,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
});
