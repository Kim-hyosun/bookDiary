import { NavLink, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import ListAll from "../components/ListAll";
import ListReading from "../components/ListReading";
import ListRed from "../components/ListRed";
import ListWanna from "../components/ListWanna";
import "./style/library.scss"

function Library() {
  const libdata = [
  {id:1, url:"/lib", content:`전체`},
  {id:2, url:"/lib/red", content:`읽은 책`},
  {id:3, url:"/lib/reading", content:`읽고 있는 책`},
  {id:4, url:"/lib/wanna", content:`읽고 싶은 책`},
]

  return (
    <div className="lib">
      <h2>나의 서재</h2>
      <ul className="libNav">
      {
          libdata.map((item) => <li key={item.id}>
                              <NavLink to={item.url} activeclassname="active">{item.content}</NavLink>
                             </li>
                  )
        }
      </ul>
      <div className="showlibList">
       
        <Routes>
          <Route index element={<ListAll />} />
          <Route path="/lib/red" element={<ListRed />} />
          <Route path="/lib/reading" element={<ListReading />} />
          <Route path="/lib/wanna" element={<ListWanna />} />
        </Routes>
        
       

      </div>

    </div>
  );
}

export default Library;