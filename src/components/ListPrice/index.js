import React from "react";
import { StyledList, Name_articulos, Price_articulos } from "./styles";

const ListPrice = ({ title, price }) => {
  let value = price;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <StyledList>
        <Name_articulos>{title}</Name_articulos>
        <Price_articulos>{formatterPeso.format(value) || "0"}</Price_articulos>
      </StyledList>
    </>
  );
};

export default ListPrice;
