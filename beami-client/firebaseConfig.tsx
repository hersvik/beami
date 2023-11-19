 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDE6U13tAY7XTTkzN3nvjY05LJxWm-t1SQ",
  authDomain: "beam-ahead.firebaseapp.com",
  projectId: "beam-ahead",
  storageBucket: "beam-ahead.appspot.com",
  messagingSenderId: "240835648688",
  appId: "1:240835648688:web:b9a6b9c2e7b942cdc7ef75"
};

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);