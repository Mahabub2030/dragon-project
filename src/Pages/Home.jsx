import { useLoaderData } from "react-router-dom";
import Breakinwes from "./Breakinwes";
import Header from "./Shaerd/Header";
import LeftSideBar from "./Shaerd/LeftSideBar";
import Navbar from "./Shaerd/Navbar";
import RightSIdeNav from "./Shaerd/RightSIdeNav";
import NewsCard from "./NewsCard";


const Home = () => {

  const news = useLoaderData()
  console.log(news);
  
  return (
    <div>
      <Header></Header>
      <Breakinwes></Breakinwes>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="" >
         <LeftSideBar></LeftSideBar>
        </div>
        {/* news continer */}
        <div className="md:col-span-2 ">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
          }
        </div>

        <div>
          <RightSIdeNav></RightSIdeNav>
        </div>
      </div>
    </div>
  );
};

export default Home;