# 도서 검색 및 내 책으로 저장 (북적북적)

---

모바일 앱 [‘북적북적’](https://play.google.com/store/apps/details?id=com.studiobustle.bookjuk&hl=ko&gl=US&pli=1)의 책 검색, 상세페이지 구현과 검색한 책을 내 서재에 3가지 목록으로 저장하는 기능 구현

최하단 구현사이트 바로가기 링크 있습니다!

<br />
<br />
<br />

# 목표

---

> 프로젝트를 시작하게 된 이야기 :
> 
> 
> 내가 읽은 책, 읽고 싶은 책, 읽고 있는 책 정보를 목록화하여 시각적으로 볼 수 있고, 
> 
> 검색해서 다양한 책 정보를 볼 수 있는 기능이 유용하다고 생각하여 시작하였습니다. 
> 

> **1.   local storage를 활용해서 저장 및 삭제 기능 구현하기**
> 

> **2.   카카오 API를 이용하여 검색기능 구현과 상세페이지 출력하기**
> 

<br />
<br />
<br />

# 디렉토리 구조

---

### 폴더 구성
<img width="209" alt="2_1" src="https://user-images.githubusercontent.com/113571272/221362677-5fbd1303-ae24-40b1-9283-d6eec52f8218.png">



### 세부 Component 구성
<img width="213" alt="2_2" src="https://user-images.githubusercontent.com/113571272/221362689-8b0c12a6-0ea4-4b8e-a5fd-7273684f884c.png">
<br />
<br />
<br />


# 사용 기술

---

### 👍 UI Design  :  React   /  SCSS  /  Axios  /  Router / JSON / styled-component

### 👍 Used Tools :  GitHub / Visual Studio Code /  Figma

<br />
<br />
<br />

# 페이지 구성

---

## 홈 화면 -  검색 - 상세페이지로 이동 - 서재(3가지 리스트)에 나눠 저장가능

홈화면<br/>
<img width="610" alt="4_1" src="https://user-images.githubusercontent.com/113571272/221362705-24db9bb1-632a-4185-8774-b9b7609fd513.png">

검색<br/>
<img width="506" alt="4_2" src="https://user-images.githubusercontent.com/113571272/221362730-7d6f94d8-a741-474e-bd5c-bbb588e84409.png">

상세페이지<br/>
<img width="374" alt="4_3" src="https://user-images.githubusercontent.com/113571272/221362740-e3f09d11-36e2-41a4-b851-6e37e9c4dafc.png">


## 상세페이지에서 저장한 정보를 서재에서 보여줌
<img width="427" alt="4_4" src="https://user-images.githubusercontent.com/113571272/221362765-023ac78d-64b5-4faf-99fb-31021149598a.png">


<img width="438" alt="4_5" src="https://user-images.githubusercontent.com/113571272/221362769-207deb31-e9a6-45d0-a6eb-d6a5cf07ffb5.png">


<img width="378" alt="4_6" src="https://user-images.githubusercontent.com/113571272/221362776-af475724-94f9-4152-a982-df843805b274.png">


<br />
<br />
<br />

# 문제 및 해결 과정

---

## 🔥 local storage 배열에 같은 책 정보가 계속 저장된다?!

<aside>
💡 리스트에 이미 있는 책을 가지고,

indexOf 로 걸러도 같은 책이 계속 저장되고, 

set 함수로도 걸러지지 않고, 

forEach로 돌려서 if문을 넣었는데도 걸러지지 않고… 

배열 함수를 아직 잘 쓰지 못하는 것인지 적용이 되지 않아 

다시 공부하고 조건식 짜고를 계속 반복했었다. 

**⇒ set함수를 쓸 때는 객체의 비교가 어려워, map,문자열로 변환 등을 이용하여 해결** 

**⇒ 객체 내부 정보를 비교하여 filter로 반환한 배열을 기존 변수에 재할당**

</aside>

## 🔥  무한히 존재하는 상세페이지는 데이터를 어디서 끌어오지?

<aside>
💡 **⇒ params로 받아온 정보로 component내에서 다시 API 소환하여 해결**

</aside>

## 🔥 router로 지정해주지 않으면 home탭이 왜 active가 안되는거야 ?!

<aside>
💡 홈 탭안에서 검색화면으로 이동이되고, 상세페이지를 볼수있다.

그렇기 때문에 검색화면에서도 상세페이지에서도 홈탭이 활성화가 되어있어야 한다. 

navLink를 이용해서 적용한 스타일이 link to를 ‘/’로 설정하면 홈탭이 계속 active 되어 있지 않았다.

홈의 하위 라우터로 인식할 수 있게 했는데 

하위페이지로만 가면 home탭안에 있는 페이지임을 인식하지 못했다.

**⇒ 랜딩페이지에도 path에 ‘/book’설정하니 하위페이지에서 인식**

</aside>
<br />
<br />
<br />

# 개인 리뷰

---

<aside>
📖 Router가 복잡해지니 처음 시작할 때 막막했다.

또 모바일 앱을 따라 하는 거라 참조할 만한 내용이 없어서 두렵기도 했다. 

웹에서는 데이터가 없을 때 높이가 줄어드는 것을 어떻게 보여지게 할지도 한참 고민을 했었다.  

시작한 후에는, 검색 API를 양식에 맞게 불러 와야 하는데 header 양식이 잘 못되었다고 오류가 떴고 이를 어떻게 넘겨야줘야 하는지를 몰라 한참 헤맸다.  

또, 불러온 검색데이터를 다시 상세페이지로 넘겨야 할 때 어떻게 해야할지 며칠을 끙끙 앓았다. 

또 로컬 스토리지에 중복 데이터 없이 어떻게 저장 할수 있을지 한참을 헤맸다. 

내 서재에 3가지 목록으로 저장할 수 있기 때문에 나는 3가지 배열 안에 책정보를 객체형태로 저장시켰는데 객체끼리 동일 데이터인지 비교가 잘 안되었다. 그래서 배열함수를 있는대로 찾아봤고 다시 공부하고 배우는 계기가 되어 좋았다. 

</aside>
<br />
<br />
<br />

# 내가 작업한 사이트 바로가기

# [HS | 북적북적](https://kim-hyosun.github.io/bookDiary/#/book)
