import { Outlet } from "react-router-dom";
import SideBar from "../components/Layout/SideBar";
import NavBar from "../components/Layout/NavBar";

function DashboardLayout({ usuario, onLogout }) {
  return (
    <div className="dashboard-layout">
      <SideBar onLogout={onLogout} />
      <div className="dashboard-contenido">
        <NavBar usuario={usuario} onLogout={onLogout} />
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
