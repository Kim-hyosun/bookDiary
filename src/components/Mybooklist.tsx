import { SHELVES, useBookShelf } from "../context/Bookcontext";

function Mybooklist() {
  const { shelves } = useBookShelf();
  const REDlist = shelves[SHELVES.RED];

  return (
    <div className="mybooklist">
      <h4>내가 읽은 책 리스트</h4>
      <div className="showlist">
        {REDlist.length === 0 ? (
          <h5>리스트가 비어있습니다.</h5>
        ) : (
          <ul>
            {REDlist.map((item) => (
              <li key={item.isbn || item.title}>
                <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
                <p>{item.title.substring(0, 9) + "..."}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Mybooklist;
