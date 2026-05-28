import { SHELVES } from "../context/Bookcontext";
import ShelfList from "./ShelfList";

function ListRed() {
  return <ShelfList shelf={SHELVES.RED} />;
}

export default ListRed;
