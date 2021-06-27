import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Select = styled.select`
  width: 100%;
  height: 28px;
  ${"" /*  margin-bottom: 15px; */}
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  ${"" /*  margin-bottom: 15px; */}
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
  grid-template-columns:
    1fr minmax(160px, 1fr) minmax(40px, 1fr)
    minmax(10px, 1fr) minmax(10px, 1fr);
  font-weight: 700;
  color: black;
  align-content: center;
  padding: 0;
  width: 100%;
  height: 20px;
  margin-top: 86px;
  position: fixed;
  ${
    "" /* & button {
    border: none;
    
    background: red;
    margin-bottom: 10px;
    padding: 0;
    margin: 0;
  } */
  }
`;

const Button = styled.button`
  height:25px;
  background: transparent;
  color: white;
  cursor: pointer;
  border: none;
  margin-top: -2px;
  justify-content: center;
  text-align: center;
`;

/* form .table-artiulos {
  top: 20px;
  
} */

export { Select, Input, Table, Tables, Button };
