import { useState, useEffect, useCallback } from "react";
import {
  getProductos,
  getCategorias,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../Services/productosService";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarDatosIniciales() {
      setCargando(true);
      setError("");

      const [resultadoProductos, resultadoCategorias] = await Promise.all([
        getProductos(),
        getCategorias(),
      ]);

      if (resultadoProductos.success) {
        setProductos(resultadoProductos.data);
      } else {
        setError(resultadoProductos.error);
      }

      if (resultadoCategorias.success) {
        setCategorias(resultadoCategorias.data);
      }

      setCargando(false);
    }

    cargarDatosIniciales();
  }, []);

  // Nota: DummyJSON simula las escrituras (POST/PUT/DELETE) pero no persiste
  // nada. Un producto agregado localmente puede tener un id que no existe en
  // su dataset real, así que un PUT/DELETE posterior sobre ese id puede
  // responder 404 aunque la petición esté bien hecha. Por eso el estado
  // local se actualiza siempre que la petición se haya podido enviar,
  // independientemente de si la API "reconoce" el id.
  const agregarProducto = useCallback(async (datosProducto) => {
    const resultado = await crearProducto(datosProducto);

    const idNuevo =
      productos.length > 0
        ? Math.max(...productos.map((producto) => producto.id)) + 1
        : 1;

    setProductos((actuales) => [
      { ...datosProducto, id: idNuevo },
      ...actuales,
    ]);

    return resultado;
  }, [productos]);

  const editarProducto = useCallback(async (id, datosProducto) => {
    const resultado = await actualizarProducto(id, datosProducto);

    setProductos((actuales) =>
      actuales.map((producto) =>
        producto.id === id ? { ...producto, ...datosProducto } : producto
      )
    );

    return resultado;
  }, []);

  const eliminarProductoPorId = useCallback(async (id) => {
    const resultado = await eliminarProducto(id);

    setProductos((actuales) =>
      actuales.filter((producto) => producto.id !== id)
    );

    return resultado;
  }, []);

  return {
    productos,
    categorias,
    cargando,
    error,
    agregarProducto,
    editarProducto,
    eliminarProducto: eliminarProductoPorId,
  };
}
