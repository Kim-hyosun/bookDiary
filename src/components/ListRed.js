
function ListRed() {
  let REDlist = JSON.parse(localStorage.getItem("REDlist"))
  return (
    <div style={{ minHeight: 'calc(100vh - 200px)' }}>
      {
        REDlist == null ? <h5>리스트가 비어있습니다.</h5> :
          (
            <ul>
              {
                REDlist.map((item, idx) => <li key={item.isbn + idx}>
                  <div className="imgWrap"><img src={item.thumbnail} alt={item.title} /></div>
                  <div className="txt">
                    <h4>{item.title}</h4>
                    <p>{item.publisher}</p>
                  </div>
                </li>
                )
              }
            </ul>)}
    </div>
  );
}

export default ListRed;