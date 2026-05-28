# 📚 북적북적 — 도서 검색 & 내 서재

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm&logoColor=white)

모바일 앱 [‘북적북적’](https://play.google.com/store/apps/details?id=com.studiobustle.bookjuk&hl=ko)을 참고하여, 책을 검색하고 상세 정보를 확인한 뒤 **내 서재에 3가지 목록(읽은 / 읽고 있는 / 읽고 싶은)** 으로 저장하는 기능을 구현한 프로젝트입니다.

🔗 **[배포 사이트 바로가기 — HS | 북적북적](https://kim-hyosun.github.io/bookDiary/#/book)**

<br />

## 🎯 목표

> 내가 읽은 책 · 읽고 싶은 책 · 읽고 있는 책을 목록으로 정리해 한눈에 보고, 검색으로 다양한 책 정보를 확인할 수 있으면 유용하겠다는 생각에서 시작했습니다.

1. **localStorage** 를 활용한 저장 · 삭제 기능 구현
2. **카카오 책 검색 API** 를 이용한 검색 · 상세 페이지 구현

<br />

## 🧰 기술 스택

| 분류 | 기술 |
|---|---|
| Build | **Vite 5** |
| Language | **TypeScript 5** |
| UI | **React 18** |
| Routing | **React Router 6** (HashRouter) |
| Styling | **SCSS (sass)** + **styled-components 5** |
| HTTP | **Axios** |
| State | **React Context API + useReducer** (localStorage 영속화) |
| API | **Kakao 책 검색 API** |
| Package Manager | **pnpm 9** |
| Deploy | **GitHub Pages** + **GitHub Actions** (자동 배포) |
| Tools | Git / VS Code / Figma |

<br />

## 🚀 실행 방법

```bash
# 1. 의존성 설치
pnpm install

# 2. 환경변수 설정 (.env.example 복사 후 키 입력)
cp .env.example .env.local
# .env.local 안에 발급받은 카카오 REST API 키 입력
#   VITE_KAKAO_KEY=your_kakao_rest_api_key

# 3. 개발 서버
pnpm dev        # http://localhost:3000/bookDiary/

# 그 외
pnpm build      # 타입체크(tsc) + 프로덕션 빌드 → build/
pnpm preview    # 빌드 결과 로컬 미리보기
pnpm deploy     # gh-pages 브랜치로 수동 배포
```

> 💡 **자동 배포**: `main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드 후 GitHub Pages 로 자동 배포합니다. (저장소 **Settings → Secrets** 에 `VITE_KAKAO_KEY` 등록 필요)

<br />

## ✨ 주요 기능

- 🔍 **책 검색** — 입력 디바운스(300ms), 빈 검색어 무시
- 📖 **상세 페이지** — 목록에서 넘긴 데이터 재사용, URL 직접 접근 시 ISBN 으로 정확 조회
- 🗂 **서재 저장 / 삭제** — 읽은 책 · 읽고 있는 책 · 읽고 싶은 책 3개 목록, ISBN 기준 중복 방지
- 💾 **localStorage 영속화** — 새로고침해도 서재 유지
- 📚 **전체 목록** — 3개 서재 통합 후 중복 제거

<br />

## 🗂 디렉토리 구조

```
bookDiary/
├─ index.html               # Vite 진입점
├─ vite.config.ts
├─ tsconfig.json
├─ .env.example             # 환경변수 예시 (실제 값은 .env.local)
├─ .github/workflows/
│  └─ deploy.yml            # main push → Pages 자동 배포
├─ public/images/           # favicon, og 이미지
└─ src/
   ├─ index.tsx             # 앱 부트스트랩 (Provider + Router)
   ├─ App.tsx               # 라우트 정의
   ├─ assets/
   │  ├─ index.ts           # Kakao 책 검색 API (axios)
   │  └─ Globalstyle.ts     # styled-components 전역 스타일
   ├─ context/
   │  └─ Bookcontext.tsx    # 서재 상태 (useReducer + localStorage)
   ├─ pages/                # Home / Query / Library / NotFoundPage
   ├─ components/           # QueryList, QueryDetail, Nav, ShelfList 등
   └─ types/
      └─ book.ts            # Book, ShelfKey 타입
```

<br />

## 🖼 페이지 구성

**홈 → 검색 → 상세 페이지 → 서재(3가지 목록)에 나눠 저장**

| 홈 | 검색 | 상세 |
|:--:|:--:|:--:|
| <img width="240" alt="home" src="https://user-images.githubusercontent.com/113571272/221362705-24db9bb1-632a-4185-8774-b9b7609fd513.png"> | <img width="240" alt="search" src="https://user-images.githubusercontent.com/113571272/221362730-7d6f94d8-a741-474e-bd5c-bbb588e84409.png"> | <img width="240" alt="detail" src="https://user-images.githubusercontent.com/113571272/221362740-e3f09d11-36e2-41a4-b851-6e37e9c4dafc.png"> |

**상세 페이지에서 저장한 책을 서재에서 확인**

<img width="240" alt="lib1" src="https://user-images.githubusercontent.com/113571272/221362765-023ac78d-64b5-4faf-99fb-31021149598a.png"> <img width="240" alt="lib2" src="https://user-images.githubusercontent.com/113571272/221362769-207deb31-e9a6-45d0-a6eb-d6a5cf07ffb5.png"> <img width="240" alt="lib3" src="https://user-images.githubusercontent.com/113571272/221362776-af475724-94f9-4152-a982-df843805b274.png">

<br />

## 🔥 문제 및 해결 과정

**localStorage 배열에 같은 책이 계속 중복 저장된다?!**
> `indexOf`, `Set`, `forEach + if` 로 걸러도 같은 책이 계속 저장됐다. 객체는 참조 비교라 `Set` 으로 중복 제거가 안 된다는 걸 알게 됐다.
> ⇒ 객체를 문자열(또는 ISBN)로 변환해 비교하고, `filter` 로 걸러낸 배열을 재할당해 해결.

**무한히 존재하는 상세 페이지는 데이터를 어디서 가져오지?**
> ⇒ URL 파라미터로 받은 정보를 이용해 컴포넌트 안에서 API 를 다시 호출하여 해결. *(현재는 목록에서 넘긴 데이터를 router state 로 재사용하고, 직접 접근 시에만 ISBN 으로 조회하도록 개선)*

**홈 탭이 하위 페이지에서 active 가 안 된다?!**
> 홈 탭 안에서 검색·상세로 이동해도 홈 탭이 계속 활성화돼야 했는데, `NavLink to="/"` 로는 하위 페이지에서 active 가 풀렸다.
> ⇒ 랜딩 경로를 `/book` 으로 두어 하위 페이지가 같은 트리로 인식되게 해 해결.

<br />

## 📖 개인 리뷰

> 라우터 구조가 복잡해지면서 시작이 막막했고, 모바일 앱을 참고하다 보니 레퍼런스가 없어 막막함도 컸다. 검색 API 의 header 형식, 검색 데이터를 상세로 넘기는 방법, localStorage 중복 저장 문제까지 — 객체 비교가 안 돼 한참 헤맸지만 배열 메서드를 제대로 공부하는 계기가 됐다.

<br />

## 🛠 리팩터링 (2026)

초기 CRA(JavaScript) 버전을 다음과 같이 현대화했습니다.

- **Vite + TypeScript** 전환 (빌드 속도 개선 · 타입 안전성 확보)
- **pnpm** 패키지 매니저 전환
- 깨져 있던 Context 를 `useReducer` 기반 단일 상태 소스로 재구축 → **저장/삭제 즉시 반영**
- 분산돼 있던 localStorage 키를 통합하고 **ISBN 기준 중복 방지**
- 검색 **디바운스** 적용, API 키 **환경변수** 분리, **GitHub Actions 자동 배포** 구성
