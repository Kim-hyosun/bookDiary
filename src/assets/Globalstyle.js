import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  display: block;
  color: inherit; text-decoration: none;
}

body {
  color: #3e3a39;
  background-color: #f2d573;
}

.container {max-width:468px; margin: 0 auto; border:0.5px solid #ddd; border-radius:10px; overflow:hidden; background-color:#fff;}
.bold {font-family: 'NanumSquareRoundBold','Pretendard', sans-serif;}

`;

export default Globalstyle;