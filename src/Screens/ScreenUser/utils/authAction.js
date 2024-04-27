import { getFirebaseApp } from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, child, set, ref } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticate } from "../store/authSlice";

export const Register = (fullName, email, password) => {
  return async (dispatch) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);
      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;
      const expiryDate = new Date(expirationTime);

      const userData = await createUser(fullName, email, uid);
      dispatch(authenticate({ tokens: { accessToken }, userData })); // save user data and token to storage
      await saveToDataStorage(accessToken, uid, expiryDate);
    } catch (e) {
      console.log(e);
      const errorCode = e.code;
      let message = "Something went wrong!";
      if (
        errorCode == "auth/wrong-password" ||
        errorCode == "auth/user-not-found"
      ) {
        message = "Wrong Email or password";
      }
      throw new Error(message);
    }
  };
};

const createUser = async (fullName, email, userID) => {
  const userData = {
    fullName,
    email,
    userID,
    signupDate: new Date().toISOString(),
  };
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userID}`);
  await set(childRef, userData);
  return userData;
};
const saveToDataStorage = async (tokens, userID, expiryDate) => {
  try {
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        tokens,
        userID,
        expiryDate: expiryDate.toISOString(),
      })
    );
  } catch (e) {
    console.error(e);
    // handle the error
  }
};
