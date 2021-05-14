import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  padding-inline-start: 5%;
  ${"" /*  background: ${colors.darkBlue}; */}
  background: green;
  h1 {
    text-alingn: center;
  }

  a {
    text-decoration: none;
  }
  p {
    color: white;
    justify-contend: center;

    align-items: center;
    margin: 0;
    padding: 0;

    span {
      font-weight: bold;
    }
  }
`;

export { StyledHeader };
