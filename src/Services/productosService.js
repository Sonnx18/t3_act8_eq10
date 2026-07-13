import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export async function getProductos() {
  try {
    const response = await axios.get(`${API_URL}?limit=0`);
    return { success: true, data: response.data.products };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudieron cargar los productos.";
    return { success: false, error: mensaje };
  }
}

export async function getCategorias() {
  try {
    const response = await axios.get(`${API_URL}/category-list`);
    return { success: true, data: response.data };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudieron cargar las categorías.";
    return { success: false, error: mensaje };
  }
}

export async function crearProducto(producto) {
  try {
    const response = await axios.post(`${API_URL}/add`, producto);
    return { success: true, data: response.data };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudo agregar el producto.";
    return { success: false, error: mensaje };
  }
}

export async function actualizarProducto(id, producto) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, producto);
    return { success: true, data: response.data };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudo editar el producto.";
    return { success: false, error: mensaje };
  }
}

export async function eliminarProducto(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "No se pudo eliminar el producto.";
    return { success: false, error: mensaje };
  }
}
