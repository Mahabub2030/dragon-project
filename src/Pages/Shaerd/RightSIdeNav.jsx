import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qzone1 from '../../assets/swimming.png'
import qzone3 from '../../assets/class.png'
import qzone2 from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const RightSIdeNav = () => {
  return (
    <div>
      <div className="space-y-4 p-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Login with</h2>
        </div>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      {/* find use section */}

      <div className=" p-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-6">Find Us On</h2>
        </div>
        <a className="flex p-4  items-center text-lg border-2 rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          Facebooks
        </a>
        <a className="flex p-4  items-center text-lg border-x " href="">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a className="flex p-4  items-center text-lg border-2 rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          Insagram
        </a>
      </div>
      {/* q-zone  */}
      <div className=" p-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-6 border p-4">Q-Zone</h2>
        </div> 
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div>
        <img src={bg} alt="" />
      </div>



    </div>
  );
};

export default RightSIdeNav;