import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

export default function Products() {
  return (
    <main className="container">
      <nav className="dflex mb20 products-navbar">
        <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='computers'
          >
            Computadores
          </NavLink>
          <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='eletronics'
          >
            Eletrônicos
          </NavLink>
          <NavLink
            className={({ isActive }) => `dblock ${isActive ? "nav-bold" : ""}`}
            to='books'
          >
            Livros
          </NavLink>
      </nav>
      <Outlet />
    </main>
  )
}