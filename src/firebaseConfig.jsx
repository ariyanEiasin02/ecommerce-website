// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmnROPg4KGYMsiTU9SKKDYUhp2GKzrr-M",
  authDomain: "hekto-react.firebaseapp.com",
  projectId: "hekto-react",
  storageBucket: "hekto-react.firebasestorage.app",
  messagingSenderId: "676627671455",
  appId: "1:676627671455:web:20e73a4635d4f33048b5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig