import { Link } from "react-router-dom";
import type { Book } from "../types/book";

function QueryList({ books }: { books: Book[] }) {
  return (
    <ul>
      {books.map((item, idx) => {
        const id = item.isbn || item.title;
        return (
          <li key={id + idx}>
            <Link to={`/book/query/${encodeURIComponent(id)}`} state={{ book: item }}>
              <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
              <div className="txt">
                <h4>{item.title}</h4>
                <p>{item.publisher}</p>
                <p>{item.contents.substring(0, 70) + "..."}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default QueryList;
