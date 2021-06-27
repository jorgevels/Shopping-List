import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${
    "" /* margin-top: 20px;
  margin-bottom: 100px; */
  }
  bottom:50px;
  position: fixed;
  z-index: 2000;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  height: 5px;

  color: white;
  cursor: pointer;
  border: none;

  margin-top: 7px;

  ${
    "" /* justify-content: center;
  text-align: center;
  align-items: center; */
  }
`;

export { ContainerFooter, Button };
