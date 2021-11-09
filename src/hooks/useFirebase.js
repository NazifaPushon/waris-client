import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from "../Firebase/firebase.init";


initailizeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const [admin , setAdmin] = useState(false)
    const [token , setToken] = useState('')
    const [error,setError] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user).then((idToken) => {
                    console.log(idToken)
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [auth])

    useEffect(() => {
        fetch(`https://dry-lake-11876.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAdmin(data.admin)
        })
    } , [user.email])

    const registerUser = (email, password , name , location , history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
                setUser( {...userCredential.user , displayName : name})
                saveUser(email,name ,"POST")
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                  }).catch((error) => {
                    
                  });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(error.message)
                alert(errorMessage)
            }).finally(() => setIsLoading(false))
            ;

    }


    const googleSignIn = (location, history)  => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            const destination = location?.state?.from || '/';
            history.replace(destination);
            saveUser(result.user.email , result.user.displayName , "PUT")
            setError('')
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(error.message)
            alert(errorMessage)
        }).finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setError('')
            setUser({})
        }).catch((error) => {
            setError(error.message)
            alert(error.message)
        }).finally(() => setIsLoading(false));
    }

    const login = (email, password , location , history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
                setUser(userCredential.user)
            })
            .catch((error) => {
                setError(error.message)
                alert(error.message)
            }).finally(() => setIsLoading(false));

    }

    const saveUser = (email , displayName ,method) => {
        const user = {email , displayName}
        fetch('https://dry-lake-11876.herokuapp.com/users' , {
            method: method,
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((res) => res.json())
        .then(data => console.log(data))
    }
    return {
        user,
        setUser,
        logout,
        login,
        error,
        admin,
        token,
        isLoading,
        googleSignIn,
        registerUser
    }
}

export default useFirebase;