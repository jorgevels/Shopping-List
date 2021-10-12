import React from "react";
import ListPrice from "../../components/ListPrice";
import useInitialState from "../../hooks/useInitialState";
import useTvShowsApi from "../../hooks/useInitialState";

/* const API = "https://us-central1-gndx-fake-api.cloudfunctions.net/api"; */

/* const API = "http://localhost:3006/api/v1"; */
const API = "https://listacompras-ts.herokuapp.com/api/v1";

const Price = () => {
  const initialState = useInitialState(API);

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
