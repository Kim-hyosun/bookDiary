
function ListAll() {
  let REDlist = JSON.parse(localStorage.getItem("REDlist"));
  let READINGlist = JSON.parse(localStorage.getItem("READINGlist"));
  let WANNAlist = JSON.parse(localStorage.getItem("WANNAlist"));

  let listAll = REDlist.concat(READINGlist, WANNAlist);
  listAll = listAll.filter((el) => el !== undefined && el !== null);
  // listAll 내 중복요소 제거하고 1개만을 반환(객체를 문자열로 바꿔서 비교)
  const map = new Map();
  for (let list of listAll) {
    map.set(JSON.stringify(list), list);
  }
  listAll = [...map.values()];

  return (
    <div style={{ minHeight: 'calc(100vh - 190px)' }}>
      {
        listAll == null ? <h5>리스트가 비어있습니다.</h5> :
          (
            <ul>
              {
                listAll.map((item, idx) => <li key={idx}>
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

export default ListAll;