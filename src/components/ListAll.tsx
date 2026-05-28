import { SHELVES, useBookShelf } from "../context/Bookcontext";
import type { Book } from "../types/book";

function ListAll() {
  const { shelves } = useBookShelf();

  // 3개 서재를 합치고 isbn 기준 중복 제거
  const merged = [
    ...shelves[SHELVES.RED],
    ...shelves[SHELVES.READING],
    ...shelves[SHELVES.WANNA],
  ];
  const map = new Map<string, Book>();
  merged.forEach((book) => map.set(book.isbn || book.title, book));
  const listAll = [...map.values()];

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }}>
      {listAll.length === 0 ? (
        <h5>리스트가 비어있습니다.</h5>
      ) : (
        <ul>
          {listAll.map((item) => (
            <li key={item.isbn || item.title}>
              <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
              <div className="txt">
                <h4>{item.title}</h4>
                <p>{item.publisher}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListAll;
