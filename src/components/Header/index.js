import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Header_icons } from "./styles";
import { DataContext } from "../../utils/DataProvider";
import { FiList, FiShoppingCart } from "react-icons/fi";

const LOGO =
  "https://res.cloudinary.com/imagesfull/image/upload/v1612992976/like/Imagen12_2_nztytc.png";

const SIZE = "25px";

function Header() {
  const [todos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === true);
  };

  const Cantidad = () => {
    return todos.filter((todo) => todo);
  };

  return (
    <>
      <StyledHeader>
        {/*  <img className="logo" src={LOGO} alt="Finca Logo" /> */}
        {/* <Link to="/">
        </Link> */}
        {/* <p>
          <span>Finca</span>0
        </p> */}
        <Header_icons>
          <p>{Cantidad().length}</p>
          <FiList size={SIZE} />
          <div>
            <p> {newTodosComplete().length}</p>
            <FiShoppingCart size={SIZE} />
          </div>
        </Header_icons>
        <h2>Mercando</h2>
      </StyledHeader>
    </>
  );
}

export default Header;
