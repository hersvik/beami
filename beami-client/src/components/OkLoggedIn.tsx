import { collection, addDoc, Timestamp } from "firebase/firestore";
import firebase from "firebase/compat";
import {db} from '../../firestore';
import {useState} from "react";

export function OkLoggedIn() {

  const save = async (e: any) => {
    e.preventDefault();  
  
    try {
        const payload = {
          amount: parseInt(input),    
          date: new Date(),
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

  const [input, setInput] = useState("");
  const [track, setTrack] = useState("");

  return (
    <div className="ok_logged_in">
        <h1>OK logged in</h1>
        <input type="number" value={input} onChange={handleChange}></input>
        <button onClick={save}>{parseInt(input)}</button>
        <pre>
          {track}
        </pre>
    </div>
  )
}