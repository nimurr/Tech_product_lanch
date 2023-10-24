// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQUBFc2OUVJKgrQOreQj89HfjSp0tXQc",
  authDomain: "assignment-9-phone-launch.firebaseapp.com",
  projectId: "assignment-9-phone-launch",
  storageBucket: "assignment-9-phone-launch.appspot.com",
  messagingSenderId: "567503211141",
  appId: "1:567503211141:web:f633b78cde6e380d6277ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
