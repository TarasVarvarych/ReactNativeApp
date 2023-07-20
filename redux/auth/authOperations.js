import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

// const updateUserProfile = async (update) => {
//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };

export const register =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: login });

      console.log(user);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickname: user.displayName,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
export const logIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

export const logOut = () => async (dispatch, getState) => {};
