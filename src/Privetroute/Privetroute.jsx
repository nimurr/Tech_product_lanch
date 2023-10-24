import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Privetroute({ children }) {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);


    if (user) {
        return children;
    }
    if (loading && !user) {
        return <div className="w-20  mx-auto h-[80vh] flex items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }
    // console.log(location)

    return <Navigate state={location.pathname} to='/login'></Navigate>


}
