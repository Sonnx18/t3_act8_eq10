import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardLayout from "./Pages/DashboardLayout";
import ResumenPage from "./Pages/ResumenPage";
import ProductosPage from "./Pages/ProductosPage";
import ClientesPage from "./Pages/ClientesPage";
import NuevoClientePage from "./Pages/NuevoClientePage";
import "./App.css";

function App() {
  const { usuario, estaAutenticado, login, logout } = useAuth();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            estaAutenticado ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginPage onLogin={login} />
            )
          }
        />
        <Route
          path="/registro"
          element={
            estaAutenticado ? <Navigate to="/dashboard" /> : <RegisterPage />
          }
        />
        <Route
          path="/dashboard"
          element={
            estaAutenticado ? (
              <DashboardLayout usuario={usuario} onLogout={logout} />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<ResumenPage usuario={usuario} />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="nuevo-cliente" element={<NuevoClientePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;