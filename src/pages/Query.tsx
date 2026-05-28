import { useEffect, useState, type ChangeEvent, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { bookSearch } from "../assets/index";
import QueryList from "../components/QueryList";
import type { Book } from "../types/book";
import "./style/query.scss";

function Query() {
  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // 입력이 멈춘 뒤 300ms 후에만 검색 (디바운스). 빈 검색어는 호출하지 않음.
  useEffect(() => {
    const query = keyword.trim();
    if (query === "") {
      setBooks([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const { data } = await bookSearch({
          query,
          sort: "accuracy",
          page: 1,
          size: 20,
        });
        setBooks(data.documents);
      } catch (err) {
        console.error("책 검색 실패:", err);
        setBooks([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setKeyword("");
  };

  return (
    <div className="query">
      <ul className="title">
        <li>
          <Link to="/book">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z" /></svg>
          </Link>
        </li>
        <li>책 검색하기</li>
      </ul>

      <form className="querybar" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="어떤 책을 읽으셨나요?" onChange={onChangeSearch} value={keyword} />
        <button type="reset" onClick={onReset}>x</button>
      </form>

      <div className="result" style={keyword === "" ? { minHeight: `calc(100vh - 220px)` } : { minHeight: `calc(100vh - 220px)`, height: `auto` }}>
        <QueryList books={books} />
      </div>
    </div>
  );
}

export default Query;
