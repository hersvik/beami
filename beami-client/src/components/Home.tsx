import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebaseConfig';
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore"

export function Home() {

  const [deposits, setDeposits] = useState<any>([]);
 
  const fetchPost = async () => {
     
      await getDocs(collection(db, "deposit"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc:any) => ({...doc.data(), id:doc.id }));
              setDeposits(newData.sort((a,b) => a.date.seconds - b.date.seconds));                
              console.log(deposits, newData);
          })
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

return (
  <div className="home">
      <h1>Flaskebeløp</h1>
      {deposits.map((d: any) => 
        (<p key={d.id}>kr. {d.amount} 
          <span style={{color: "silver", paddingLeft: "1em", paddingRight: "1em"}}>
            {(d.date as Timestamp).toDate().toLocaleDateString() }
          </span>
          {d.comment}
        </p>))}
  </div>
)
}
