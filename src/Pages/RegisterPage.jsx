import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Login/RegisterForm";
import logo from "../assets/logo.png";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegistroExitoso = () => {
    navigate("/");
  };

  return (
    <div className="login-page login-page-invertido">
      <div className="login-panel-izq">
        <h2>Bienvenidos a YIN</h2>
        <p>
          En este sistema podrás darle seguimiento a reparaciones o trabajos
          que se estén realizando.
        </p>
      </div>

      <div className="login-panel-der">
        <div className="login-card">
          <img src={logo} alt="YIN soluciones" className="login-logo" />
          <RegisterForm onRegistroExitoso={handleRegistroExitoso} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
