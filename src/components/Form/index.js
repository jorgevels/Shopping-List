import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../../utils/DataProvider";
import { Select, Input, Table, Tables } from "./styles";
import { MdAddBox, MdEdit, MdAlarmOn } from "react-icons/md";

const SIZE = "30px";
const COLOR = "green";

export default function FormInput() {
  const [list, setList] = useContext(DataContext);
  const [articuloName, setArticuloName] = useState("");
  const [cantidadName, setCantidadName] = useState("");
  const [unidadName, setUnidadName] = useState("");
  const todoInput = useRef();

  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        articuloName: articuloName,
        cantidadName: cantidadName,
        unidadName: unidadName,
        complete: false,
      },
    ]);
    setArticuloName("");
    setCantidadName("");
    setUnidadName("");

    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <>
      <Table>
        <div className="item">
          <div className="idName">Selecion</div>
        </div>
        <div className="item">
          <div className="idName">Nombre del Articulo</div>
        </div>
        <div className="item">
          <div className="idCant">Cantidad</div>
        </div>
        <div className="item">
          <div className="idUnid">Unidad</div>
        </div>

        <div className="item">
          <MdAlarmOn size={SIZE} color={COLOR} />
        </div>
      </Table>

      <form autoComplete="off" onSubmit={addTodo}>
        <Tables>
          <Input
            type="checkbox"
            name="all"
            id="all"
            onChange={handleCheckAll}
            checked={checkAll}
          />

          <Input
            type="text"
            name="articulo"
            id="articulo"
            required
            ref={todoInput}
            placeholder="Ingresa un articulo"
            value={articuloName}
            onChange={(e) => setArticuloName(e.target.value.toLowerCase())}
          />

          <Select
            value={cantidadName}
            required
            onChange={(e) => setCantidadName(e.target.value.toLowerCase())}
          >
            <option value=""> Elige la cantidad </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Select>

          <Select
            value={unidadName}
            onChange={(e) => setUnidadName(e.target.value)}
          >
            <option value=""> Elige la cantidad </option>
            <option value="LB">LB</option>
            <option value="KL">KL</option>
            <option value="Unidad">Unidad</option>
            <option value="PK">PK</option>
            <option value="BL">BL</option>
            <option value="Caja">Caja</option>
          </Select>

          <button type="submit">
            <MdAddBox size={SIZE} color={COLOR} />
          </button>
        </Tables>
      </form>
    </>
  );
}
