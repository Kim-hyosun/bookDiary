// Kakao 책 검색 API 의 document 형태
export interface Book {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

// 서재 종류: 읽은 책 / 읽고 있는 책 / 읽고 싶은 책
export type ShelfKey = "RED" | "READING" | "WANNA";
