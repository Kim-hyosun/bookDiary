import { Link } from "../../node_modules/react-router-dom/dist/index";
import Mybooklist from "../components/Mybooklist";
import Query from "./Query";
import "./style/home.scss"

function Home() {
  return (
    <div className="home">
      <div className="query">
        <Link to="/bookDiary/query" element={<Query />} className="goQuery"><span>책 검색하기</span></Link>
      </div>

      <Mybooklist />
    </div>
  );
}

export default Home;