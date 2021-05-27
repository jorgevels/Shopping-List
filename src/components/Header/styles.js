import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: grid;
  ${"" /* margin: 11px 0px 0px 0px; */}
  grid-template-columns: 1fr minmax(160px, 1fr) minmax(40px, 1fr);
  align-items: center;
  text-align: center;
  ${"" /*  justify-content: center; */}
  position: fixed;
  ${"" /* padding-inline-start: 5%; */}
  ${"" /*  background: ${colors.darkBlue}; */}
  background: #f1d302;

  h2 {
    text-align: center;
    color: blue;
    ${"" /* margin-left: 40%; */}
  }

  ${
    "" /* a {
    text-decoration: none;
  } */
  }
  ${
    "" /* p {
    color: white;
    padding-left:auto;
    padding-rigth: auto;
    text-align: center;
    margin: 0;

    span {
      font-weight: bold;
    }
  } */
  }
`;
const Header_icons = styled.div`
  display: flex;
  align-items: center;
  padding-inline-start: 20%;
  & p {
    color: white;
    margin-top: -10px;
    padding-left: 9px;
    position: absolute;
    background-color: red;
    border-radius: 100px;
    justify-content: center;
    text-align: center;
  }
  & div {
    margin: 0 0 0 10px;
    padding: 0;
    ${"" /* margin: 0; */}
  }
`;

export { StyledHeader, Header_icons };
