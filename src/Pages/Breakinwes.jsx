import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakinwes = () => {
  return (
    <div className="flex mt-2">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to='/'>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link to='/'>
          Match Highlights: Germany vs Spain — as it happened ......
        </Link>
      </Marquee>
    </div>
  );
};
export default Breakinwes;