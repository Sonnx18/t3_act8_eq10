import { NavLink } from "react-router-dom";
import logo from "../../assets/YINLOGO.PNG";

function SideBar({ onLogout }) {
  return (
    <aside className="sidebar">
      <img src={logo} alt="YIN soluciones" className="sidebar-logo-img" />

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end className="sidebar-link">
          Tickets
        </NavLink>
        <span className="sidebar-link sidebar-link-simulado">
          Nuevo Cliente
        </span>
        <span className="sidebar-link sidebar-link-simulado">Clientes</span>
        <NavLink to="/dashboard/productos" className="sidebar-link">
          Productos
        </NavLink>
      </nav>

      <button className="sidebar-cerrar-sesion" onClick={onLogout}>
        Cerrar Sesion
      </button>
    </aside>
  );
}

export default SideBar;
