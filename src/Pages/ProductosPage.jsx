import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductos } from "../Hooks/useProductos";
import Filtros from "../components/Tabla/Filtros";
import Paginacion from "../components/Tabla/Paginacion";
import TablaProductos from "../components/Tabla/TablaProductos";
import ModalProducto from "../components/Tabla/ModalProducto";
import ConfirmDialog from "../components/Tabla/ConfirmDialog";

function ProductosPage() {
  const { productos, categorias, cargando, error, agregarProducto, editarProducto, eliminarProducto } =
    useProductos();
  const [searchParams, setSearchParams] = useSearchParams();

  const busqueda = searchParams.get("q") ?? "";
  const categoria = searchParams.get("category") ?? "";
  const pagina = Number(searchParams.get("page") ?? "1");
  const limite = Number(searchParams.get("limit") ?? "10");

  const [modalAbierto, setModalAbierto] = useState(null); // "nuevo" | producto | null
  const [pendienteGuardar, setPendienteGuardar] = useState(null); // { id, datos } | null
  const [pendienteEliminar, setPendienteEliminar] = useState(null); // producto | null

  const actualizarParametros = (cambios) => {
    const siguientes = new URLSearchParams(searchParams);
    Object.entries(cambios).forEach(([clave, valor]) => {
      if (valor === "" || valor === null || valor === undefined) {
        siguientes.delete(clave);
      } else {
        siguientes.set(clave, valor);
      }
    });
    setSearchParams(siguientes);
  };

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const coincideBusqueda = producto.title
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const coincideCategoria = !categoria || producto.category === categoria;
      return coincideBusqueda && coincideCategoria;
    });
  }, [productos, busqueda, categoria]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(productosFiltrados.length / limite)
  );
  const paginaActual = Math.min(pagina, totalPaginas);

  const productosPagina = useMemo(() => {
    const inicio = (paginaActual - 1) * limite;
    return productosFiltrados.slice(inicio, inicio + limite);
  }, [productosFiltrados, paginaActual, limite]);

  const handleGuardarModal = (datos) => {
    if (modalAbierto === "nuevo") {
      agregarProducto(datos);
      setModalAbierto(null);
      return;
    }

    setPendienteGuardar({ id: modalAbierto.id, datos });
    setModalAbierto(null);
  };

  return (
    <div className="productos-page">
      <div className="productos-page-encabezado">
        <h1>Productos</h1>
        <button
          type="button"
          className="boton-primario"
          onClick={() => setModalAbierto("nuevo")}
        >
          Agregar producto
        </button>
      </div>

      <Filtros
        busqueda={busqueda}
        categoria={categoria}
        categorias={categorias}
        onBusquedaChange={(valor) =>
          actualizarParametros({ q: valor, page: null })
        }
        onCategoriaChange={(valor) =>
          actualizarParametros({ category: valor, page: null })
        }
      />

      <TablaProductos
        productos={productosPagina}
        cargando={cargando}
        error={error}
        onEditar={(producto) => setModalAbierto(producto)}
        onEliminar={(producto) => setPendienteEliminar(producto)}
      />

      {!cargando && !error && (
        <Paginacion
          pagina={paginaActual}
          totalPaginas={totalPaginas}
          limite={limite}
          onPaginaChange={(nuevaPagina) =>
            actualizarParametros({ page: nuevaPagina })
          }
          onLimiteChange={(nuevoLimite) =>
            actualizarParametros({ limit: nuevoLimite, page: null })
          }
        />
      )}

      {modalAbierto && (
        <ModalProducto
          producto={modalAbierto === "nuevo" ? null : modalAbierto}
          categorias={categorias}
          onGuardar={handleGuardarModal}
          onCerrar={() => setModalAbierto(null)}
        />
      )}

      {pendienteGuardar && (
        <ConfirmDialog
          mensaje="¿Confirmas guardar los cambios de este producto?"
          onConfirmar={() => {
            editarProducto(pendienteGuardar.id, pendienteGuardar.datos);
            setPendienteGuardar(null);
          }}
          onCancelar={() => setPendienteGuardar(null)}
        />
      )}

      {pendienteEliminar && (
        <ConfirmDialog
          mensaje={`¿Seguro que quieres eliminar "${pendienteEliminar.title}"?`}
          onConfirmar={() => {
            eliminarProducto(pendienteEliminar.id);
            setPendienteEliminar(null);
          }}
          onCancelar={() => setPendienteEliminar(null)}
        />
      )}
    </div>
  );
}

export default ProductosPage;
