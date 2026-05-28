import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { Book, ShelfKey } from "../types/book";

export const SHELVES: Record<ShelfKey, ShelfKey> = {
  RED: "RED", // 읽은 책
  READING: "READING", // 읽고 있는 책
  WANNA: "WANNA", // 읽고 싶은 책
};

const STORAGE_KEY = "bookShelf";

type Shelves = Record<ShelfKey, Book[]>;

type Action =
  | { type: "ADD"; shelf: ShelfKey; book: Book }
  | { type: "REMOVE"; shelf: ShelfKey; isbn: string };

interface BookContextValue {
  shelves: Shelves;
  dispatch: React.Dispatch<Action>;
}

export const BookContext = createContext<BookContextValue | null>(null);

// localStorage 초기화: 신규 통합 키가 있으면 사용, 없으면 legacy 3-키에서 마이그레이션
const init = (): Shelves => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved) as Shelves;

  const legacy = (key: string): Book[] => {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Book[]) : [];
  };
  return {
    RED: legacy("REDlist"),
    READING: legacy("READINGlist"),
    WANNA: legacy("WANNAlist"),
  };
};

const bookReducer = (state: Shelves, action: Action): Shelves => {
  switch (action.type) {
    case "ADD": {
      const { shelf, book } = action;
      // isbn 기준 중복 제거 후 추가 (동명이서 구분)
      const next = state[shelf].filter((b) => b.isbn !== book.isbn);
      return { ...state, [shelf]: [...next, book] };
    }
    case "REMOVE": {
      const { shelf, isbn } = action;
      return {
        ...state,
        [shelf]: state[shelf].filter((b) => b.isbn !== isbn),
      };
    }
    default:
      return state;
  }
};

const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const [shelves, dispatch] = useReducer(bookReducer, undefined, init);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shelves));
  }, [shelves]);

  return (
    <BookContext.Provider value={{ shelves, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookShelf = (): BookContextValue => {
  const ctx = useContext(BookContext);
  if (!ctx) {
    throw new Error("useBookShelf must be used within BookContextProvider");
  }
  return ctx;
};

export default BookContextProvider;
