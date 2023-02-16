import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import "./assets/font.css"
import Globalstyle from "./assets/Globalstyle";
import "./assets/minireset.min.css"
// import ListAll from "./components/ListAll";
// import ListReading from "./components/ListReading";
// import ListRed from "./components/ListRed";
// import ListWanna from "./components/ListWanna";
import Nav from "./components/Nav";
import QueryDetail from "./components/QueryDetail";
import Home from "./pages/Home";
import Library from "./pages/Library";
import NotFoundPage from "./pages/NotFoundPage";
import Query from "./pages/Query";



function App() {
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route path="/bookDiary">
          <Route index element={<Home />} />
          <Route path="/bookDiary/query" element={<Query />}>
            <Route path="/bookDiary/query/detail" element={<QueryDetail />} />
          </Route>
        </Route>

        <Route path="/lib" element={<Library />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
