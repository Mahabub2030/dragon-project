import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shaerd/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const naviaget = useNavigate();
  console.log('location in the login', location)

  const handelLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email ,password);

    signIn(email ,password)
    .then(result =>{
      console.log(result.user)

      // naviaget after login
      naviaget(location?.state ? location.state:'/');


    })
    .catch(error =>{
      console.log(error)
    })
    
  }

  return (
    <div className="mt-10">
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold text-center mt-10">Login your account</h2>
     <div className="container mx-auto">
     <div className="card  w-full max-w-sm shadow-2xl mt-10 mx-auto border">
        <form onSubmit={handelLogin} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Password</span>
            </label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a  href="">Dont’t Have An Account ? <NavLink  to='/register' className='text-green-500'>Register</NavLink></a>
              {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
            </label>
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
     </div>

    </div>
  );
};

export default Login;