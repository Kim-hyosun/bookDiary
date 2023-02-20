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
    } else {
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


 const addREDlist = (thisbook) => {
   let REDlist = JSON.parse(localStorage.getItem("REDlist")) || [];
   REDlist.push(thisbook);
   localStorage.setItem("REDlist", JSON.stringify(REDlist));
  }

  const addREADINGlist = (thisbook) => {
    let READINGlist = JSON.parse(localStorage.getItem("READINGlist")) || [];
    READINGlist.push(thisbook);
    localStorage.setItem("READINGlist", JSON.stringify(READINGlist));
  }

  const addWANNAlist = (thisbook) => {
    let WANNAlist = JSON.parse(localStorage.getItem("WANNAlist")) || []; 
    WANNAlist.push(thisbook);
    localStorage.setItem("WANNAlist", JSON.stringify(WANNAlist));
  }

  // console.log(thisbook)
  return (
    <div className="detail" style={{ minHeight: `calc(100vh - 73px)` }}>

      <ul className="title">
        <li>
          <Link to="/bookDiary/query">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z" /></svg>
          </Link>
        </li>
        <li><Link to="/lib" className="toLib">내 책 보기</Link></li>
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
        <div className="savebtns">
          <h4>내 서재에 등록하기</h4>
          <div className="btns">
            <button onClick={()=>addREDlist(thisbook)}>
              <svg viewBox="0 0 49 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.6482 4.14468C47.3395 3.9317 46.9833 3.79775 46.6108 3.75455C46.2382 3.71136 45.8608 3.76026 45.5116 3.89696C41.8346 5.4906 38.9235 6.99344 33.9618 6.99344C29 6.99344 29.0468 5.27723 26.8399 3.89696C23.9916 2.13657 22.6009 0.305053 17.5505 0.305054C12.5 0.305054 4.04984 3.06092 2.06809 3.71117C1.60808 3.86655 1.20833 4.1622 0.925064 4.55655C0.641796 4.95091 0.489256 5.42413 0.488892 5.90967V52.2948C0.488892 52.9108 0.733567 53.5015 1.16909 53.937C1.60462 54.3725 2.19532 54.6172 2.81125 54.6172C3.42717 54.6172 4.01787 54.3725 4.4534 53.937C4.88893 53.5015 5.1336 52.9108 5.1336 52.2948V34.1495C8.99364 32.7816 11.5 31.5175 17.086 31.5175C21.6265 31.5175 22.2145 33.2055 24.5175 34.614C27.2118 36.2608 26.8399 37 33.2496 38.113H36C40.4819 37.533 42.8279 36.3562 46.9979 34.614C47.4332 34.4415 47.8071 34.1431 48.0718 33.757C48.3366 33.3709 48.4802 32.9146 48.4842 32.4464V6.0645C48.5074 5.70108 48.4437 5.33737 48.2983 5.0035C48.1529 4.66963 47.9301 4.37523 47.6482 4.14468Z" />
              </svg><br />
              읽은 책<br />
              <span className="tail">다 읽었어요!</span>
            </button>
            <button onClick={()=>addREADINGlist(thisbook)}>
              <svg viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.8462 0H10.1539C7.46094 0 4.87827 0.943398 2.97406 2.62266C1.06985 4.30192 7.5099e-05 6.57948 7.5099e-05 8.95432V54.5399C-0.00366753 54.9881 0.132544 55.4286 0.39379 55.8131C0.655036 56.1976 1.03124 56.5113 1.48118 56.7198C1.93113 56.9282 2.43746 57.0235 2.94471 56.9951C3.45196 56.9667 3.94056 56.8157 4.35699 56.5587L24 44.4785L43.6431 56.5587C44.1108 56.8396 44.6649 56.9873 45.2308 56.982C45.6777 56.9773 46.1183 56.8885 46.5231 56.7215C46.9673 56.5069 47.3385 56.1915 47.5981 55.8079C47.8578 55.4244 47.9965 54.9866 48 54.5399V8.95432C48 6.57948 46.9302 4.30192 45.026 2.62266C43.1218 0.943398 40.5391 0 37.8462 0Z" />
              </svg><br />
              읽고 있는 책<br />
              <span className="tail">열심히 읽는 중!</span>
            </button>
            <button onClick={()=>addWANNAlist(thisbook)}>
              <svg viewBox="0 0 49 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.483 4.23818C43.2207 2.9621 41.7172 1.94992 40.0599 1.26058C38.4027 0.571232 36.6248 0.218507 34.8299 0.222942C33.035 0.218507 31.2572 0.571232 29.5999 1.26058C27.9427 1.94992 26.4391 2.9621 25.1768 4.23818L24.4068 5.03573L23.6368 4.26568C21.0838 1.71299 17.6214 0.278927 14.0112 0.278927C10.4009 0.278927 6.93855 1.71299 4.3856 4.26568C1.86608 6.83611 0.454834 10.2919 0.454834 13.8913C0.454834 17.4906 1.86608 20.9464 4.3856 23.5168L23.0042 42.1904C23.391 42.5767 23.9152 42.7937 24.4618 42.7937C25.0084 42.7937 25.5326 42.5767 25.9194 42.1904L44.538 23.5168C47.0585 20.938 48.4651 17.4722 48.4548 13.8662C48.4445 10.2603 47.0181 6.80261 44.483 4.23818Z" />
              </svg><br />
              읽고 싶은 책<br />
              <span className="tail">찜 해두고 싶어요!</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default QueryDetail;

