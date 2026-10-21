import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import logoImg from '../../assets/home-logo.svg';

function Header() {
  return (
    <header className="mb20">
      <div className="header-content-container container">
        <nav className="navbar">
          <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='/home'
          >
            Início
          </NavLink>
          <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='/products'
          >
            Produtos
          </NavLink>
          <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='/about'
          >
            Sobre Nós
          </NavLink>
        </nav>
        <Link to="/">
          <img src={logoImg} alt="LogoImg" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
