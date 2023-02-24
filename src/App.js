import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import "./assets/font.css"
import Globalstyle from "./assets/Globalstyle";
import "./assets/minireset.min.css"
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
        <Route path="/book">
          <Route index element={<Home />} />
          <Route path="/book/query" element={<Query />} />
          <Route path="/book/query/:itemID" element={<QueryDetail />} />
        </Route>

        <Route path="/lib" element={<Library />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
