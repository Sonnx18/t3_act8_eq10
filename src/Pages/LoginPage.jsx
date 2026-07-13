import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLoginExitoso = (datosUsuario) => {
    onLogin(datosUsuario);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-panel-izq">
        <h2>Bienvenido a ServiTrack</h2>
        <p>
          En este sistema podrás darle seguimiento a reparaciones o trabajos
          que se estén realizando.
        </p>
      </div>

      <div className="login-panel-der">
        <div className="login-card">
          <h1>ServiTrack</h1>
          <p>Panel de Administración</p>
          <LoginForm onLoginExitoso={handleLoginExitoso} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;