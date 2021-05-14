import React, { useState } from "react";

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
      <li>
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

        <button onClick={() => handleSave(id)}>Actualizar</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkCompleteTodos(id)}
          />
          {todo.articuloName}
        </label>

        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          {todo.cantidadName}
        </label>

        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          {todo.unidadName}
        </label>

        <button disabled={todo.complete} onClick={handleOnEdit}>
          Editar
        </button>
      </li>
    );
  }
}
