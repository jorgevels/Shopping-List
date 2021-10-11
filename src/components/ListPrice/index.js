import React from "react";

const ListPrice = ({ title, price }) => {
  return (
    <div className="ListPrice">
      {/*  <h1>Lista de precios</h1> */}
      <p>Articulo:{title}</p>
      <p>Precio:{price}</p>
    </div>
  );
};

export default ListPrice;
