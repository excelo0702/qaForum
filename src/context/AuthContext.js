import { createContext, useContext, useEffect, useState } from 'react';
import {auth} from '../config/firebase';
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);

    const signup = (email,password,fullname) => {
        let promise = new Promise((resolve,reject)=>{
            auth
                .createUserWithEmailAndPassword(email,password)
                .then((ref)=>{
                    ref.user.updateProfile({
                        displayName:fullname,
                    });
                    resolve(ref);
                })
                .catch((error)=>reject(error));
        });
        return promise;
    }

    const signin = (email,password)=>{
        let promise = new Promise((resolve,reject)=>{
            auth
                .signInWithEmailAndPassword(email,password)
                .then((ref)=>{
                    resolve(ref);
                })
                .catch((error)=>{
                    reject(error);
                    console.log(error);
                });
        });
        return promise;
    }

    const signOut = () =>{
        return auth.signOut();
    }

    const passwordReset = (email) =>{
        let promise = new Promise(function(resolve,reject){
            auth
                .sendPasswordResetEmail(email)
                .then(()=>{
                    resolve(`Password reset email sent to ${email}`);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
        return promise;
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;

    },[currentUser]);

    const value = {
        currentUser,
        signup,
        signin,
        signOut,
        passwordReset
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )


}