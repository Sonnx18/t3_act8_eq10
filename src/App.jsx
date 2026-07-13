import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";
import LoginPage from "./Pages/LoginPage";
import DashboardLayout from "./Pages/DashboardLayout";
import ResumenPage from "./Pages/ResumenPage";
import ProductosPage from "./Pages/ProductosPage";
import "./App.css";

function App() {
  const { usuario, estaAutenticado, login, logout } = useAuth();

  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;