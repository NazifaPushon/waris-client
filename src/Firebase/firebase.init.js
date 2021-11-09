import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailizeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initailizeAuthentication;