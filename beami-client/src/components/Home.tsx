import {SignInScreen} from '../SignInScreen';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firestore';
import { useState, useEffect } from "react";

export function Home() {

  const [deposits, setDeposits] = useState<any>([]);
 
  const fetchPost = async () => {
     
      await getDocs(collection(db, "deposit"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setDeposits(newData);                
              console.log(deposits, newData);
          })
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

return (
  <div className="home">
      <h1>Beami test deploy2</h1>
      <SignInScreen />
      {deposits.map((d: any) => (<p key={d.id}>{d.amount}</p>))}
  </div>
)
}
