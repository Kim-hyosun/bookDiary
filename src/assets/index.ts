import axios from "axios";
import type { Book } from "../types/book";

const MYKEY = import.meta.env.VITE_KAKAO_KEY;

const kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${MYKEY}`,
  },
});

export interface BookSearchParams {
  query: string;
  sort?: "accuracy" | "latest";
  page?: number;
  size?: number;
  target?: "title" | "isbn" | "publisher" | "person";
}

interface BookSearchResponse {
  documents: Book[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}

export const bookSearch = (params: BookSearchParams) => {
  return kakao.get<BookSearchResponse>("/v3/search/book", { params });
};
