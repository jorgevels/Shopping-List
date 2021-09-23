import styled from "styled-components";
import { colors, above } from "../../GlobalStyle";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr minmax(160px, 1fr) minmax(40px, 1fr);
  align-items: center;
  text-align: center;
  position: fixed;
  background: #f1d302;

  & h3 {
    text-align: center;

    font-size: 20px;
    ${above.small`
    font-size:10px;
    
    
  `};
    ${above.mediu`
    
    font-size: 18px;
  `};
    ${above.mediumL`
    
    font-size: 20px;
  `};
  }
`;

const Header_icons = styled.div`
  display: flex;
  text-align: center;
  padding-inline-start: 20%;
  & p {
    color: white;
    margin-top: -8px;
    font-size: 10px;
    width: 15px;
    margin-left: 8px;
    position: absolute;
    background-color: red;
    border-radius: 100px;
    justify-content: center;
    text-align: center;
  }
  & div {
    margin: 0 0 0 10px;
    padding: 0;
    margin-bottom: -22px;
    text-align: center;
  }
`;

export { StyledHeader, Header_icons };
