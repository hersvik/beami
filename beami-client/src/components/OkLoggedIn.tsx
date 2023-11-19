import { collection, addDoc, Timestamp } from "firebase/firestore";
import {db} from '../../firebaseConfig';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {  signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebaseConfig';

export function OkLoggedIn() {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
          navigate("/login")
        }
      });
     
}, [])
  const save = async (e: any) => {
    e.preventDefault();  
  
    try {
        const payload = {
          amount: parseInt(input),    
          date: new Date(),
          comment,
        };
        const docRef = await addDoc(collection(db, "deposit"), payload);
        console.log("Document written with ID: ", docRef.id);
        setInput("");
        setTrack(track + JSON.stringify(payload, null, 2))
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  const handleChange = (event:any) => {
    if (event.target.value === ""){
      setInput("");
      return;
    }

    const intValue = parseInt(event.target.value);

    if(Number.isInteger(intValue)) {
      setInput(intValue.toString());
      // return;
    }
    else{
      setInput(prev => prev)
    }
  };

  const handleComment = (event: any) => {
    setComment(event.target.value);
  }

  const [input, setInput] = useState("");
  const [track, setTrack] = useState("");
  const [comment, setComment] = useState("");

  
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <div className="ok_logged_in">
        <h1>OK logged in</h1>
        <input type="number" value={input} onChange={handleChange}></input>
        <input type="text" value={comment} onChange={handleComment}></input>
        <button onClick={save}>{parseInt(input) || "Invalid amount"}</button>
        <pre>
          {track}
        </pre>
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleLogout}>
                        Logout
        </button>
    </div>
  )
}