import styled from "styled-components";
/* import { above, colors } from "@styles/GlobalStyle"; */

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7fff7;
  ${"" /*   background: linear-gradient(#f7fff7, #ffe66d); */}
`;

const Name_articulos = styled.div`
  border: solid 1px blue;
  min-width: 150px;
`;
const Price_articulos = styled.div`
  border: solid 1px blue;
  min-width: 150px;
`;

export { StyledList, Name_articulos, Price_articulos };
