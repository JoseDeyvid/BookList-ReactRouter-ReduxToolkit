import { getAuth, signOut } from "firebase/auth";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../config/firebase";

const Header = () => {
  const auth = getAuth(app);
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error.message)
    });
  }
  return (
    <div>
      <ul className={"headerContainer"}>
        <li>
          <NavLink to={"/"}>Livros</NavLink>
        </li>
        <li>
          <NavLink to={"/add-book"}>Novo livro</NavLink>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>

  );
};

export default Header;
