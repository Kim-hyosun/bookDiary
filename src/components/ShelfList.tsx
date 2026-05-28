import { useBookShelf } from "../context/Bookcontext";
import type { ShelfKey } from "../types/book";

// 특정 서재(shelf)의 책 목록을 보여주고 삭제할 수 있는 공용 컴포넌트.
function ShelfList({ shelf }: { shelf: ShelfKey }) {
  const { shelves, dispatch } = useBookShelf();
  const list = shelves[shelf];

  const delItem = (isbn: string) => {
    dispatch({ type: "REMOVE", shelf, isbn });
  };

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }}>
      {list.length === 0 ? (
        <h5>리스트가 비어있습니다.</h5>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item.isbn || item.title}>
              <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
              <div className="txt">
                <h4>{item.title}</h4>
                <p>{item.publisher}</p>
              </div>
              <button onClick={() => delItem(item.isbn)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShelfList;
