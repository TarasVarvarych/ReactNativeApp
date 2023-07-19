import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const register =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
export const logIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      //   console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };
export const logOut = () => async (dispatch, getState) => {};
