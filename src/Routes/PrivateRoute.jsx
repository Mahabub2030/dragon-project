import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

  const {user ,loding } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);
  
  if(loding){
    return <span className="loading loading-bars loading-sm"></span>
  }

  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default PrivateRoute;