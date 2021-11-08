import { useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup , getAuth,signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import initApp from "../Pages/FireBase/Firebase.init";

initApp()

const useFirebase = () => {

    const [user , setUser] = useState({})

    const Googleprovider = new GoogleAuthProvider
    const auth = getAuth()

    const googleSignIn = () => {
       return signInWithPopup(auth,Googleprovider)
       .then(result =>{
           const user = result.user
           setUser(user)
       })
       .finally()
    }

    const RegisterUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email , password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const SignIn = (auth, email, password,) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }


    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
              
            } else {
                setUser({})
            }
          });
          return ()=> unsubscribe
    },[])

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        googleSignIn,
        RegisterUser,
        SignIn,
        logOut,
    }


}
export default useFirebase;