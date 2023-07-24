import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useRoute } from "../utils/router";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { authStateChangeUser } from "../../redux/auth/authOperations";

export default function Main() {
  const { stateChange } = useSelector((state) => state.auth);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);
  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
