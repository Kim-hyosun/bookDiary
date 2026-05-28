import { SHELVES } from "../context/Bookcontext";
import ShelfList from "./ShelfList";

function ListWanna() {
  return <ShelfList shelf={SHELVES.WANNA} />;
}

export default ListWanna;
