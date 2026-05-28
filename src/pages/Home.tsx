import { Link } from "react-router-dom";
import Mybooklist from "../components/Mybooklist";
import "./style/home.scss";

function Home() {
  return (
    <div className="home">
      <div className="query">
        <Link to="/book/query" className="goQuery"><span>책 검색하기</span></Link>
      </div>

      <Mybooklist />
    </div>
  );
}

export default Home;
