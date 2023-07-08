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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AuthBg from "../assets/images/authBg.jpg";

export default function RegistrationScreen() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
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
                  }}
                  onBlur={hideKeyboard}
                  style={styles.input}
                  placeholder="Логін"
                ></TextInput>
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onBlur={hideKeyboard}
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                ></TextInput>
              </View>

              <View style={{ position: "relative", marginBottom: 43 }}>
                <TextInput
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onBlur={hideKeyboard}
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
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

              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setIsKeyboardShown(false);
                }}
              >
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
    // resizeMode: "cover",
    // alignItems: "center",
    // width: 375,
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
