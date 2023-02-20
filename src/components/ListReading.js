
function ListReading() {
   let READINGlist = JSON.parse(localStorage.getItem("READINGlist"))
  return (
    <div style={{ minHeight: 'calc(100vh - 190px)' }}>
      {
        READINGlist == null ? <h4> 리스트가 비어있습니다. </h4> : (
      <ul>
        {
          READINGlist.map((item, idx) => <li key={item.isbn + idx}>
            <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
            <div className="txt">
              <h4>{item.title}</h4>
              <p>{item.publisher}</p>
            </div>
          </li>
          )
        }
      </ul>
      )}
    </div>
  );
}

export default ListReading;