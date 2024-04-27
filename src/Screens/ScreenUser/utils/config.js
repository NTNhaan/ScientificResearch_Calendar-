import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

let firebaseApp;

// connect database from firebase
export const getFirebaseApp = () => {
  if (firebaseApp) return firebaseApp;

  //Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB7R37qZ90Hd79FWvgxyKvMu4QqxbkY0RI",
    authDomain: "calendartdmu.firebaseapp.com",
    databaseURL: "https://calendartdmu-default-rtdb.firebaseio.com",
    projectId: "calendartdmu",
    storageBucket: "calendartdmu.appspot.com",
    messagingSenderId: "150893247372",
    appId: "1:150893247372:web:416bcb695a917e64a1f4a9",
    measurementId: "G-614FES3LXT",
  };

  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });

  firebaseApp = app;

  return app;
};
