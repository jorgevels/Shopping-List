import React from "react";
import ListPrice from "../../components/ListPrice";
import PageLoading from "../../components/PageLoading";
import useInitialState from "../../hooks/useInitialState";
import Container_lista from "./styles";

/* const API = "https://us-central1-gndx-fake-api.cloudfunctions.net/api"; */

/* const API = "http://localhost:3006/api/v1"; */
const API = "https://listacompras-ts.herokuapp.com/api/v1";

const Price = () => {
  const initialState = useInitialState(API);

  console.log(initialState);
  return initialState.length === 0 ? (
    <PageLoading />
  ) : (
    <>
      <Container_lista>
        <h3>Lista de precios</h3>
        {initialState.products.map((item) => (
          <ListPrice key={item.id} {...item} />
        ))}
      </Container_lista>
    </>
  );
};
export default Price;
