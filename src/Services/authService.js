import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

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