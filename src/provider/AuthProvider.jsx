import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";


const auth = getAuth(app)
const Googleprovider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);


    const googleLogin = () => {
        return signInWithPopup(auth, Googleprovider)

    }


    const CreatUser = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password, name);
    }



    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const LogOut = () => {
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setuser(createUser);


        })
        return () => {
            unsubscribe();
        };

    }, [])


    const UserInfo = {
        user,
        googleLogin,
        CreatUser,
        LoginUser,
        LogOut,
      


    }



    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;