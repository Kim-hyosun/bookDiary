import { useEffect, useState } from "react";
import { Link, useParams } from "../../node_modules/react-router-dom/dist/index";
import { bookSearch } from "../assets/index";
import "./style/querydetail.scss"


function QueryDetail() {
  const [thisbook, setThisbook] = useState([]);
  
  const { itemID } = useParams();
  // console.log(itemID);

  
  useEffect(() => {
    if (itemID !== null) {
      bookSearchHandler(itemID, true)
    }else{
     bookSearchHandler(itemID, false);
    }
 }, [itemID]);

const bookSearchHandler = async (query, resets) => {
   const params = {
     query: query,
     sort: 'accuracy',
     page: 1,
     size: 20,
   };

   const { data } = await bookSearch(params);
   
  if (resets === true) {
  // console.log(data.documents)
    return setThisbook(data.documents[0]);
    
   } else {
     return [];
   }
   
 }

 console.log(thisbook)
   return (
     <div className="detail" style={{minHeight:`calc(100vh - 73px)`}}>
     
      <ul className="title">
        <li>
          <Link to="/bookDiary/query">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z" /></svg>
          </Link>
        </li>
        <li><Link className="savebtn">저장</Link></li>
       </ul>
       <div className="content">
       <h2>{thisbook.title}</h2>
       <figure>
         <div className="imgwrap"><img src={thisbook.thumbnail} alt={thisbook.title} /></div>
         <figcaption>{thisbook.publisher}</figcaption>
       </figure>
       <ul>
         <li>
           <h3>책소개</h3>
           <p>{thisbook.contents}</p>
         </li>
         <li>
           <h3>출판사</h3>
           <p>{thisbook.publisher}</p>
         </li>
         <li>
           <h3>ISBN</h3>
           <p>{thisbook.isbn}</p>
         </li>
         <li>
           <Link to={thisbook.url} target="_blank">자세히 보기</Link>
         </li>
       </ul>
       </div>

    </div>
  );
}

export default QueryDetail;