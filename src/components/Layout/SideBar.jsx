import { NavLink } from "react-router-dom";

function SideBar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        YIN<span className="sidebar-logo-acento">⚡</span>
        <small>soluciones</small>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-activo" : "sidebar-link"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/productos"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-activo" : "sidebar-link"
          }
        >
          Productos
        </NavLink>
        <span className="sidebar-link sidebar-link-simulado">Clientes</span>
      </nav>

      <button className="sidebar-cerrar-sesion" onClick={onLogout}>
        Cerrar sesión
      </button>
    </aside>
  );
}

export default SideBar;
