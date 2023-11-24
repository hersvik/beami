import { collection, addDoc, Timestamp } from "firebase/firestore";
import {db} from '../../firebaseConfig';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {  signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebaseConfig';
import {Home} from './Home';

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
          gruppe,
          comment,
        };
        const docRef = await addDoc(collection(db, "deposit"), payload);
        console.log("Document written with ID: ", docRef.id);
        setInput("");
        setComment("");
        setDateLoaded(new Date().toString());
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
    }
    else{
      setInput(prev => prev)
    }
  };

  const handleComment = (event: any) => {
    setComment(event.target.value);
  }

  const handleGruppe = (event: any) => {
    setGruppe(event.target.value);
  }

  const [input, setInput] = useState("");
  const [track, setTrack] = useState("");
  const [comment, setComment] = useState("");
  const [gruppe, setGruppe] = useState("");

  const [dateLoaded, setDateLoaded] = useState(new Date().toString());

  
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
        <h1>Nytt flaskebeløp</h1>
        <input type="number" placeholder="kr." value={input} onChange={handleChange}></input><br />
        <input type="text" placeholder="comment" value={comment} onChange={handleComment}></input><br />
        <select value={gruppe} onChange={handleGruppe}>
          <option value="">Gr.</option>
          <option>gruppe 1</option>
          <option>gruppe 2</option>
          <option>gruppe 3</option>
          <option>gruppe 4</option>
          <option>gruppe 5</option>
          <option>gruppe 6</option>
          <option>gruppe 7</option>
        </select>
        Send inn: <button onClick={save} disabled={isNaN(parseInt(input))}>kr. {parseInt(input) || "Invalid amount"}</button>
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
        <Home dateLoaded={dateLoaded}/>
    </div>
  )
}