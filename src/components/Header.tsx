import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className={"headerContainer"}>
      <li>
        <NavLink to={"/"}>Livros</NavLink>
      </li>
      <li>
        <NavLink to={"/add-book"}>Novo livro</NavLink>
      </li>
    </ul>
  );
};

export default Header;
