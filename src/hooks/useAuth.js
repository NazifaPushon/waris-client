import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

//useAuth Hook
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;