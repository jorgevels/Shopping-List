import React, { useState } from "react";
import { MdEdit, MdModeEdit, MdSave } from "react-icons/md";
import { List, Input } from "./styles";

const SIZE = "25px";
const COLOR = "orange";

export default function ListItem({
  todo,
  id,
  checkCompleteTodos,
  handleEditArticulo,
  handleEditCantidad,
  handleEditUnidad,
}) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValueArticulo, setEditValueArticulo] = useState(todo.articuloName);
  const [editValueCantidad, setEditValueCantidad] = useState(todo.cantidadName);
  const [editValueUnidad, setEditValueUnidad] = useState(todo.unidadName);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValueArticulo) {
      handleEditArticulo(editValueArticulo, id);
    } else {
      setEditValueArticulo(todo.articuloName);
    }
    if (editValueCantidad) {
      handleEditCantidad(editValueCantidad, id);
    } else {
      setEditValueCantidad(todo.cantidadName);
    }
    if (editValueUnidad) {
      handleEditUnidad(editValueUnidad, id);
    } else {
      setEditValueUnidad(todo.unidadName);
    }
  };

  if (onEdit) {
    return (
      <div className="listaX">
        <Input
          type="checkbox"
          id={id}
          checked={todo.complete}
          onChange={() => checkCompleteTodos(id)}
        />

        <input
          type="text"
          id="editValue"
          value={editValueArticulo}
          name="editValue"
          onChange={(e) => setEditValueArticulo(e.target.value.toLowerCase())}
        />
        <input
          type="text"
          id="editValue"
          value={editValueCantidad}
          name="editValue"
          onChange={(e) => setEditValueCantidad(e.target.value.toLowerCase())}
        />
        <input
          type="text"
          id="editValue"
          value={editValueUnidad}
          name="editValue"
          onChange={(e) => setEditValueUnidad(e.target.value.toLowerCase())}
        />

        <button onClick={() => handleSave(id)}>
          <MdSave size={SIZE} color={COLOR} />
        </button>
      </div>
    );
  } else {
    return (
      <div className="lista">
        <div
          htmlFor={id}
          className={todo.complete ? "active" : ""}
          className="itemsx"
        >
          <Input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkCompleteTodos(id)}
          />
        </div>

        <div
          htmlFor={id}
          className={todo.complete ? "active" : ""}
          className="items"
        >
          {todo.articuloName}
        </div>

        <div
          htmlFor={id}
          className={todo.complete ? "active" : ""}
          className="items"
        >
          {todo.cantidadName}
        </div>

        <div
          htmlFor={id}
          className={todo.complete ? "active" : ""}
          className="items"
        >
          {todo.unidadName}
        </div>

        <button disabled={todo.complete} onClick={handleOnEdit}>
          <MdModeEdit size={SIZE} color={COLOR} />
        </button>
      </div>
    );
  }
}
