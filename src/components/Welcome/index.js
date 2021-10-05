import React, { useContext, useState } from "react";
import { DataContext } from "@context/DataProvider";
import { MdDelete } from "react-icons/md";
import { ContainerFooter, Button } from "./styles";

const SIZE = "23px";
const COLOR = "red";

export default function Welcome() {
  const [todos, setTodos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplete());
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>
          Bienvenido a almacenes Exito 🎁!<br></br> Crea tu lista de compras
        </h2>
      ) : (
        <ContainerFooter>
          <Button disabled={""} id="delete" onClick={deleteTodo}>
            {/*  <MdDelete size={SIZE} color={COLOR} /> */}
            Delete
          </Button>
        </ContainerFooter>
      )}
    </>
  );
}
