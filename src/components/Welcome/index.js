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

  const swalDelete = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras recuperar los articulos de la lista!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(newTodosComplete());
        Swal.fire("Eliminado!", "Articulos borrados.", "success");
      }
    });
  };

  const swalWiltoutSelection = () => {
    todos.find((todo) => todo.complete)
      ? swalDelete()
      : Swal.fire(
          "Sin seleccion ",
          "Debes selecionar almenenos un articulo?",
          "info"
        );
  };
  const HandleDeleteClick = (e) => {
    todos.find((todo) => todo.complete) ? swalDelete() : swalWiltoutSelection();
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
          <Button onClick={HandleDeleteClick}>Delete</Button>
        </ContainerFooter>
      )}
    </>
  );
}
