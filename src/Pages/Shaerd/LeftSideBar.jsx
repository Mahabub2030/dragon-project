import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {

  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(response => response.json())
      .then(data => setCategoris(data))
  }, [])


  return (
    <div className="space-y-8">
      <h2 className="text-2xl text-center">All Caterogy :{length}</h2>
      {
        categoris.map(category => <Link
          className="block ml-4 text-xl font-semibold btn p-2 "
          key={category.id} to={`/category/${category.id}`}>{category.name}
        </Link>)
      }
    </div>
  );
};

export default LeftSideBar;