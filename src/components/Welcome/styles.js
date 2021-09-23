import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 41px;
  position: fixed;
  z-index: 2000;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 60px;
  background: red;
  color: white;
  cursor: pointer;
  border: none;
`;

export { ContainerFooter, Button };
