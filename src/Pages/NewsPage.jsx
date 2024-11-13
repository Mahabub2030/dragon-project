import { useParams } from "react-router-dom";
import Header from "./Shaerd/Header";
import RightSIdeNav from "./Shaerd/RightSIdeNav";
import Navbar from "./Shaerd/Navbar";

const NewsPage = () => {
  const {id} = useParams();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">New deatls</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSIdeNav></RightSIdeNav>
        </div>

      </div>
      <h2 className="text-2xl">new delait</h2>
    </div>
  );
};

export default NewsPage;