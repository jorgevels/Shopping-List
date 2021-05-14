import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";
import { DataContext } from "../DataProvider";

const LOGO =
  "https://res.cloudinary.com/imagesfull/image/upload/v1612992976/like/Imagen12_2_nztytc.png";

function Header() {
  const [todos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  return (
    <StyledHeader>
      <p>Mercando</p>
      {/*  <img className="logo" src={LOGO} alt="Finca Logo" /> */}
      {/* <Link to="/">
        </Link> */}
      {/* <p>
          <span>Finca</span>
          App
        </p> */}
      <p>🛒 {newTodosComplete().length}</p>
    </StyledHeader>
  );
}

export default Header;
