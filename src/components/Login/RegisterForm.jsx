import { useState } from "react";
import { Link } from "react-router-dom";
import { registrarUsuario } from "../../Services/authService";

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const REGEX_TELEFONO = /^\d{10}$/;

function RegisterForm({ onRegistroExitoso }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleTelefonoChange = (e) => {
    const soloNumeros = e.target.value.replace(/\D/g, "").slice(0, 10);
    setTelefono(soloNumeros);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrorCorreo("");
    setErrorPassword("");
    setErrorTelefono("");

    let esValido = true;

    if (!REGEX_CORREO.test(correo)) {
      setErrorCorreo("Introduce un correo con formato válido (ejemplo@dominio.com).");
      esValido = false;
    }

    if (!REGEX_PASSWORD.test(password)) {
      setErrorPassword(
        "La contraseña debe tener al menos 8 caracteres, con letras y números."
      );
      esValido = false;
    }

    if (!REGEX_TELEFONO.test(telefono)) {
      setErrorTelefono("El teléfono debe tener exactamente 10 dígitos numéricos.");
      esValido = false;
    }

    if (!esValido) return;

    setCargando(true);
    const resultado = await registrarUsuario(correo, password, telefono);
    setCargando(false);

    if (resultado.success) {
      onRegistroExitoso(resultado.data);
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
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Usuario o correo"
        />
        {errorCorreo && <p className="login-error-campo">{errorCorreo}</p>}
      </div>

      <div className="login-field">
        <label>Introduce tu contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {errorPassword && (
          <p className="login-error-campo">{errorPassword}</p>
        )}
      </div>

      <div className="login-field">
        <label>Agrega un número de teléfono:</label>
        <input
          type="text"
          inputMode="numeric"
          value={telefono}
          onChange={handleTelefonoChange}
          placeholder="Numero de telefono"
        />
        {errorTelefono && (
          <p className="login-error-campo">{errorTelefono}</p>
        )}
      </div>

      {error && <p className="login-error">{error}</p>}

      <button type="submit" disabled={cargando}>
        {cargando ? "Registrando..." : "Registrar"}
      </button>

      <p className="login-registrarse">
        ¿Ya tienes una cuenta? <Link to="/">Iniciar Sesion</Link>
      </p>
    </form>
  );
}

export default RegisterForm;
