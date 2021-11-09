import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initailizeAuthentication from "../Firebase/firebase.init";


initailizeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const [admin , setAdmin] = useState(false)
    const [error,setError] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
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
                Swal.fire({
                    icon: 'success',
                    title: 'Great Job',
                    text: 'Your account has been created successfully',
                  })
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                  }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'something went wrong',
                        text: `${error.message}`,
                      })
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

    const logout = (history) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setError('')
            setUser({})
            history.push('/')
            Swal.fire({
                icon: 'success',
                title: 'Log out successfully',
            })
        }).catch((error) => {
            setError(error.message)
            Swal.fire({
                icon: 'error',
                title: 'something went wrong',
                text: `${error.message}`,
            })
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
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back',
                    text: 'You successfully logged in',
                })
            })
            .catch((error) => {
                setError(error.message)
                alert(error.message)
            }).finally(() => setIsLoading(false));

    }

    const saveUser = (email , displayName ,method) => {
        const user = {email , displayName}
        fetch('http://localhost:5000/users' , {
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
        isLoading,
        googleSignIn,
        registerUser
    }
}

export default useFirebase;