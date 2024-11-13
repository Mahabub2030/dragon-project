import { NavLink } from "react-router-dom";
import Navbar from "./Shaerd/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const register = () => {
  const { creatUser } = useContext(AuthContext)

  const hadnelRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget)

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, photo, email, password)

    // create user
    creatUser( email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  
  return (
    <div className="mt-10">
      <Navbar></Navbar>
      <h2 className="text-3xl text-center mt-10 font-bold">Register your account</h2>
      <div className="container mx-auto">
        <div className="card  w-full max-w-sm shadow-2xl mt-10 mx-auto border">
          <form onSubmit={hadnelRegister} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Your Name</span>
              </label>
              <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Enter your url" className="input input-bordered" required />
            </div>
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
                <a href=""> Already Have An Account ? <NavLink to='/login'>login</NavLink></a>
                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default register;