import React, { useContext, useState } from "react";
/* import { DataContext } from "../DataProvider"; */
import { DataContext } from "../../utils/DataProvider";
import { MdDelete } from "react-icons/md";

const SIZE = "23px";
const COLOR = "red";

export default function Footer() {
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

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>
          Bienvenido ha almacenes Exito!<br></br> Crea tu lista de compras
        </h2>
      ) : (
        <div className="row">
          {/* <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            Todos
          </label> */}
          {/*  <p>tienes en 🛒 {newTodosComplete().length} Articulos</p> */}
          <button id="delete" onClick={deleteTodo}>
            <MdDelete size={SIZE} color={COLOR} />
          </button>
        </div>
      )}
    </>
  );
}
