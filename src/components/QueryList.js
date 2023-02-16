import { Link } from "../../node_modules/react-router-dom/dist/index";
import QueryDetail from "./QueryDetail";

function QueryList({books}) {
  return (
    
    <ul>
      {
        books.map((item, idx) => <li key={idx}><Link to="/bookDiary/query/detail" element={<QueryDetail item={item} />}>
        <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
          <div className="txt">
            <h4>{item.title}</h4>
            <p>{item.publisher}</p>
            <p>{item.contents.substring(0,70)+"..."}</p>
          </div>
          </Link>
        </li>)
      } 
    </ul>
  );
}

export default QueryList;