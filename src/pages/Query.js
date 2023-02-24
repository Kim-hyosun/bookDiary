import { useEffect, useState } from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { bookSearch } from "../assets/index";
import QueryList from "../components/QueryList";
import Home from "./Home";
import "./style/query.scss"

function Query() {
  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState([]);
  // const [resets, setReset] = useState(false);

  const onChangeSearch = (e) => {
    const { value } = e.target;
    e.preventDefault();
    setKeyword(value);
  }

  useEffect(() => {
    if (keyword !== null) {
      bookSearchHandler(keyword, true)
    } else {
      bookSearchHandler(keyword, false);
    }
  }, [keyword]);

  const bookSearchHandler = async (query, resets) => {
    const params = {
      query: query,
      sort: 'accuracy',
      page: 1,
      size: 20,
    };

    const { data } = await bookSearch(params);
    // console.log(data.documents);
    if (resets === true) {
      setBooks(data.documents);
    } else {
      setBooks([]);
    }

  }


  // const onSearch = (e) => {
  //   e.preventDefault();
  //   setReset(true);
  // }

  const onReset = (e) => {
    e.preventDefault();
    //  setReset(false);
    setKeyword("");
  }

  return (
    <div className="query">
      <ul className="title">
        <li>
          <Link to="/book" element={<Home />}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z" /></svg>
          </Link>
        </li>
        <li>책 검색하기</li>
      </ul>

      <form className="querybar">
        <input type="text" placeholder="어떤 책을 읽으셨나요?" onChange={onChangeSearch} value={keyword} />

        <button type="reset" onClick={(e) => onReset(e)}>x</button>
        {/* <button type="submit" onClick={(e)=>onSearch(e)}>검색</button> */}
      </form>

      <div className="result" style={keyword === "" ? { minHeight: `calc(100vh - 220px)` } : { minHeight: `calc(100vh - 220px)`, height: `auto` }}>
        <QueryList books={books} />
      </div>
    </div>
  );
}

export default Query;