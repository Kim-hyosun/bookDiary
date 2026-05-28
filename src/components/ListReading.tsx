import { SHELVES } from "../context/Bookcontext";
import ShelfList from "./ShelfList";

function ListReading() {
  return <ShelfList shelf={SHELVES.READING} />;
}

export default ListReading;
