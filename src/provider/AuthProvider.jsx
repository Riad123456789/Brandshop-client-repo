import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";


const auth = getAuth(app)

 export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);


    const CreatUser = (email, password,name) => {
        return createUserWithEmailAndPassword(auth, email, password,name);


    }









    const UserInfo = {
        user,
        CreatUser

    }



    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;