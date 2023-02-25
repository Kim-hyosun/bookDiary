
function ListReading() {
  let READINGlist = JSON.parse(localStorage.getItem("READINGlist"));

  const delItem = (item) => {
    let READINGlist = JSON.parse(localStorage.getItem("READINGlist")) || [];
    READINGlist = READINGlist.filter(el => el.title !== item.title && el !== undefined && el !== null);
    localStorage.setItem("READINGlist", JSON.stringify(READINGlist));
  }
  return (
    <div style={{ minHeight: 'calc(100vh - 190px)' }}>
      {
        READINGlist == null ? <h5> 리스트가 비어있습니다. </h5> : (
          <ul>
            {
              READINGlist.map((item, idx) => <li key={item.isbn + idx}>
                <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
                <div className="txt">
                  <h4>{item.title}</h4>
                  <p>{item.publisher}</p>
                </div>
                <button onClick={() => delItem(item)}>delete</button>
              </li>
              )
            }
          </ul>
        )}
    </div>
  );
}

export default ListReading;