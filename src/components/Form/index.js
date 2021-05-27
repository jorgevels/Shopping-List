import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../../utils/DataProvider";

export default function FormInput() {
  const [list, setList] = useContext(DataContext);
  const [articuloName, setArticuloName] = useState("");
  const [cantidadName, setCantidadName] = useState("");
  const [unidadName, setUnidadName] = useState("");
  const todoInput = useRef();

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
      <form>
        {/* <label>Nombre del articulo</label>
        <label>Cantida</label>
        <label>Unidad</label> */}
        <div className="table-row">
          <div className="item">
            <div className="idName">Nombre del Articulo</div>
          </div>
          <div className="item">
            <div className="idCant">Cantidad</div>
          </div>
          <div className="item">
            <div className="idUnid">Unidad</div>
          </div>
        </div>

        <button type="submit">Agregar</button>
      </form>

      <form autoComplete="off" onSubmit={addTodo}>
        <div className="table-artiulos">
          <input
            type="text"
            name="articulo"
            id="articulo"
            required
            ref={todoInput}
            placeholder="Ingresa un articulo"
            value={articuloName}
            onChange={(e) => setArticuloName(e.target.value.toLowerCase())}
          />
          <input
            type="text"
            name="cantidad"
            id="cantidad"
            required
            ref={todoInput}
            placeholder="Ingresa la cantidad"
            value={cantidadName}
            onChange={(e) => setCantidadName(e.target.value.toLowerCase())}
          />
          <input
            type="text"
            name="unidad"
            id="unidad"
            required
            ref={todoInput}
            placeholder="Ingresa la cantidad"
            value={unidadName}
            onChange={(e) => setUnidadName(e.target.value.toLowerCase())}
          />
        </div>

        <button type="submit">Agregar</button>
      </form>
    </>
  );
}
