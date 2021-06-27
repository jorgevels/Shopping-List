import React, { useContext, useState } from "react";
import { DataContext } from "../../utils/DataProvider";
import { MdDelete } from "react-icons/md";
import { ContainerFooter, Button } from "./styles";

const SIZE = "23px";
const COLOR = "red";

export default function Welcome() {
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
        <ContainerFooter>
          <Button id="delete" onClick={deleteTodo}>
            <MdDelete size={SIZE} color={COLOR} />
          </Button>
        </ContainerFooter>
      )}
    </>
  );
}
