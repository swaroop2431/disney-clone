import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZGl7wKB1prVPcoz_GZBJx1UeSjQc8O1I",
  authDomain: "disneyplus-clone-c4f9d.firebaseapp.com",
  projectId: "disneyplus-clone-c4f9d",
  storageBucket: "disneyplus-clone-c4f9d.appspot.com",
  messagingSenderId: "992286231503",
  appId: "1:992286231503:web:370b9fa47ef9431b6d60ba",
  measurementId: "G-9J0539PZ37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
