import React, { useContext, useState } from "react";
import { DataContext } from "@context/DataProvider";
import { MdDelete } from "react-icons/md";
import { ContainerFooter, Title, Button } from "./styles";

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
        <Title>
          Bienvenido a almacenes Exito 🎁!<br></br> Con esta App podras crear tu
          lista de compras y verificar los precios de los productos mas
          destacados.
        </Title>
      ) : (
        <ContainerFooter>
          <Button disabled={""} id="delete" onClick={deleteTodo}>
            Delete
          </Button>
        </ContainerFooter>
      )}
    </>
  );
}
