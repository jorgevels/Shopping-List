import React from "react";
import ListPrice from "../../components/ListPrice";
import useTvShowsApi from "../../hooks/useTvShowsApi";

/* const API = "https://us-central1-gndx-fake-api.cloudfunctions.net/api"; */

const API = "https://listacompras-ts.herokuapp.com/api/v1";

const Price = () => {
  const initialState = useTvShowsApi(API);
  console.log(initialState);
  return initialState.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <div className="carousel">
        <div className="carousel__container">
          {
            <div>
              {initialState.products.map((item) => (
                <ListPrice key={item.id} {...item} />
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
};
export default Price;
