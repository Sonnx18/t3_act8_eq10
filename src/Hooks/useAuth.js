import { useState, useEffect } from "react";

export function useAuth() {
  const [usuario, setUsuario] = useState(() => {
    // Al cargar la app, revisa si ya había una sesión guardada
    const guardado = localStorage.getItem("usuario");
    return guardado ? JSON.parse(guardado) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  const login = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const logout = () => {
    setUsuario(null);
  };

  return {
    usuario,
    estaAutenticado: !!usuario,
    login,
    logout,
  };
}