import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true);

    const register = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email, password);
    }
    const login = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const loginWithGoogle = ()=>{
       return signInWithPopup(auth, provider);
    }
    const upDate = (name, photoUrl)=>{
      return updateProfile(auth.currentUser, {
        displayName: name , photoURL: photoUrl
      })
    }

    useEffect(()=>{
      const currentUser =  onAuthStateChanged(auth , current =>{
          setUser(current);
          setLoading(false)
      })
      return () =>{
        currentUser();
      }
    },[])


    const authInfo ={
        register,
        login,
        logOut,
        loading,
        loginWithGoogle,
        upDate,
        user
    }

  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
