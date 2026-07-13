import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";
const API_URL_REGISTRO = "https://dummyjson.com/users/add";

export async function loginUsuario(username, password) {
  try {
    const response = await axios.post(API_URL, {
      username,
      password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    // DummyJSON responde con status 400 si las credenciales son incorrectas
    const mensaje =
      error.response?.data?.message || "Usuario o contraseña incorrectos";
    return { success: false, error: mensaje };
  }
}

export async function registrarUsuario(correo, password, telefono) {
  try {
    const response = await axios.post(API_URL_REGISTRO, {
      email: correo,
      password,
      phone: telefono,
    });
    return { success: true, data: response.data };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudo completar el registro";
    return { success: false, error: mensaje };
  }
}