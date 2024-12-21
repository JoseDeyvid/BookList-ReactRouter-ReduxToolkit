import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Livros</NavLink>
        </li>
        <li>
          <NavLink to={"/add-book"}>Novo livro</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
