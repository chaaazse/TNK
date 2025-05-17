// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe2XbCOeXJpOlJiNXZJa6a7hCn8cGz3rk",
  authDomain: "tabangi-na-ko-50e44.firebaseapp.com",
  projectId: "tabangi-na-ko-50e44",
  storageBucket: "tabangi-na-ko-50e44.firebasestorage.app",
  messagingSenderId: "689330150636",
  appId: "1:689330150636:web:f372959cf30d6f159819c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});