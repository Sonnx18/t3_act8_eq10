import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUsuario } from "../../Services/authService";

function LoginForm({ onLoginExitoso }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación básica antes de llamar a la API
    if (!username.trim() || !password.trim()) {
      setError("Por favor completa usuario y contraseña.");
      return;
    }

    setCargando(true);
    const resultado = await loginUsuario(username, password);
    setCargando(false);

    if (resultado.success) {
      onLoginExitoso(resultado.data);
    } else {
      setError(resultado.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-field">
        <label>Introduce tu correo:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario o correo"
        />
      </div>

      <div className="login-field">
        <label>Introduce tu contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <button type="submit" disabled={cargando}>
        {cargando ? "Entrando..." : "Entrar"}
      </button>

      <span className="login-link-olvido">¿Olvidaste la contraseña?</span>

      <p className="login-registrarse">
        ¿Aún no tienes cuenta?{" "}
        <Link to="/registro">Registrarse</Link>
      </p>
    </form>
  );
}

export default LoginForm;