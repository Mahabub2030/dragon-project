import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase config";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [loding , setLoding] = useState(true)
  const creatUser = (email, password) =>{
    setLoding(true);
    return createUserWithEmailAndPassword(auth , email ,password)
  }

  const signIn = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    setLoding(true)
    return signOut (auth)
  }
  useEffect (() =>{
   const unSubscibe =  onAuthStateChanged(auth, currentUser =>{
      console.log('use in the auth stae', currentUser);
      setUser(currentUser);
      setLoding(false)
    });
    return () =>{
      unSubscibe(); 
    }  
  } ,[])

  const authInfo ={
    user,
    loding,
    creatUser,
    signIn,
    logOut

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;