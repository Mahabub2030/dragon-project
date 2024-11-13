import Breakinwes from "./Breakinwes";
import Header from "./Shaerd/Header";
import LeftSideBar from "./Shaerd/LeftSideBar";
import Navbar from "./Shaerd/Navbar";
import RightSIdeNav from "./Shaerd/RightSIdeNav";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Breakinwes></Breakinwes>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border" >
         <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl font-bold g">News coming soon</h2>
        </div>

        <div className="border">
          <RightSIdeNav></RightSIdeNav>
        </div>
      </div>
    </div>
  );
};

export default Home;