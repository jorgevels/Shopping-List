import React, { useContext, useState } from "react";
import { DataContext } from "@context/DataProvider";
import { MdDelete } from "react-icons/md";
import { ContainerFooter, Title, Button } from "./styles";
/* import SweetAlert from "sweetalert-react" */
import Swal from "sweetalert2";

import SweetAlert from "react-bootstrap-sweetalert";
const SIZE = "23px";
const COLOR = "red";
/* swal("Hello world!"); */

export default function Welcome() {
  const [todos, setTodos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    
    setTodos(newTodosComplete());
  };

  const swalDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
          <Button onClick={deleteTodo}>Delete</Button>
        </ContainerFooter>
      )}
    </>
  );
}
