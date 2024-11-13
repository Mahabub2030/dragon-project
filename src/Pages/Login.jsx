import { NavLink } from "react-router-dom";
import Navbar from "./Shaerd/Navbar";

const Login = () => {
  return (
    <div className="mt-10">
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold text-center mt-10">Login your account</h2>
     <div className="container mx-auto">
     <div className="card  w-full max-w-sm shadow-2xl mt-10 mx-auto border">
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </label>
            <input type="email" placeholder="Enter your email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a href="">Dont’t Have An Account ? <NavLink to='/register'>Register</NavLink></a>
              {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
     </div>

    </div>
  );
};

export default Login;