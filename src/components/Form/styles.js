import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Select = styled.select`
  width: 100%;
  height: 28px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const Table = styled.table`
  display: grid;
  grid-template-columns:
    1fr minmax(160px, 1fr) minmax(40px, 1fr)
    minmax(10px, 1fr) minmax(10px, 1fr);
  font-weight: 700;
  align-content: center;
  padding: 0;
  width: 100%;
  height: 20px;
  margin-top: 55px;
  position: fixed;
  ${
    "" /* & button {
    background: transparent;
    border: 0.5px solid white;
  } */
  }
`;

/* const Item = styled.item`
  background: #f1d302;
  border: 0.5px solid white;
  text-align-last: center;
`; */

const Tables = styled.table`
  display: grid;
  margin: 11px 0px 0px 0px;
  grid-template-columns:
    1fr minmax(160px, 1fr) minmax(40px, 1fr)
    minmax(10px, 1fr) minmax(10px, 1fr);
  font-weight: 700;
  color: black;
  align-content: center;
  padding: 0;
  width: 100%;
  margin-top: 80px;
  position: fixed;
  & button {
    ${"" /*  border: 0.5px solid white; */}
    border: none;
    background: transparent;
  }
`;

/* form .table-artiulos {
  top: 20px;
  
} */

export { Select, Input, Table, Tables };
