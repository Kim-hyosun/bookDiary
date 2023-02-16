import axios from "../../node_modules/axios/index";

const MYKEY = "9ca57ada68597c8e8b37e8b6fdb79849"
  const kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
      Authorization: `KakaoAK ${MYKEY}`,
    }
  });

  export const bookSearch = (params) => {
    return kakao.get('/v3/search/book', { params });
  }