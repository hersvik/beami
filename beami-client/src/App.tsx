import { useState } from 'react'
import './App.css'
// import { initializeApp } from "firebase/app";
import SignInScreen from './SignInScreen';

function App() {
  // // Import the functions you need from the SDKs you need
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDE6U13tAY7XTTkzN3nvjY05LJxWm-t1SQ",
  //   authDomain: "beam-ahead.firebaseapp.com",
  //   projectId: "beam-ahead",
  //   storageBucket: "beam-ahead.appspot.com",
  //   messagingSenderId: "240835648688",
  //   appId: "1:240835648688:web:b9a6b9c2e7b942cdc7ef75"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Beami test deploy2</h1>
      <SignInScreen />
    </div>
  )
}

export default App
