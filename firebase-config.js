// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Uw1Nxe5zB3Jqci8aRO2W4lH0JyxYlx0",
  authDomain: "mvp-auth-54165.firebaseapp.com",
  projectId: "mvp-auth-54165",
  storageBucket: "mvp-auth-54165.appspot.com",
  messagingSenderId: "572668607416",
  appId: "1:572668607416:web:24d9970bbba201b41c6d4d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
