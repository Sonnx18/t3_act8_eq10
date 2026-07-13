import { useState } from "react";
import { loginUsuario } from "../../services/authService";

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
        <label>Usuario o correo</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario o correo"
        />
      </div>

      <div className="login-field">
        <label>Contraseña</label>
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
    </form>
  );
}

export default LoginForm;