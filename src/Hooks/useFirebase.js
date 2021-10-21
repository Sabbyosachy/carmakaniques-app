import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthetication from "../Pages/Login/Firebase/firebaseinit";

initializeAuthetication();
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const auth = getAuth();
    const signInUsingGoogle=()=>{
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
        .then((result)=>{
            setUser(result.user);
        });
    }

    //observe user state change
    
   useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
           setUser({});
        }
      });
      return ()=>unSubscribed;

   },[])


    const logOut=()=>{
    signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    return {
        user,
        logOut,
        signInUsingGoogle
    }
}
export default useFirebase;

