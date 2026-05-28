import { useState, type ReactElement } from "react";
import ListAll from "../components/ListAll";
import ListReading from "../components/ListReading";
import ListRed from "../components/ListRed";
import ListWanna from "../components/ListWanna";
import "./style/library.scss";

interface LibTab {
  title: ReactElement;
  content: ReactElement;
}

function Library() {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabActiveHandler = (idx: number) => {
    setActiveIdx(idx);
  };

  const libdata: LibTab[] = [
    { title: (<li key="1" className={activeIdx === 0 ? "active" : ""} onClick={() => tabActiveHandler(0)}>전체</li>), content: (<ListAll />) },
    { title: (<li key="2" className={activeIdx === 1 ? "active" : ""} onClick={() => tabActiveHandler(1)}>읽은 책</li>), content: (<ListRed />) },
    { title: (<li key="3" className={activeIdx === 2 ? "active" : ""} onClick={() => tabActiveHandler(2)}>읽고 있는 책</li>), content: (<ListReading />) },
    { title: (<li key="4" className={activeIdx === 3 ? "active" : ""} onClick={() => tabActiveHandler(3)}>읽고 싶은 책</li>), content: (<ListWanna />) },
  ];

  return (
    <div className="lib">
      <h2>나의 서재</h2>
      <ul className="libNav">
        {libdata.map((item) => item.title)}
      </ul>
      <div className="showlibList">
        {libdata[activeIdx].content}
      </div>
    </div>
  );
}

export default Library;
