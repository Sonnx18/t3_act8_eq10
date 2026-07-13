function TablaProductos({ productos, cargando, error, onEditar, onEliminar }) {
  if (cargando) {
    return <p className="tabla-estado">Cargando...</p>;
  }

  if (error) {
    return <p className="tabla-estado tabla-estado-error">{error}</p>;
  }

  if (productos.length === 0) {
    return <p className="tabla-estado">No se encontraron productos.</p>;
  }

  return (
    <table className="tabla-productos">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>
              {producto.thumbnail && (
                <img
                  src={producto.thumbnail}
                  alt={producto.title}
                  className="tabla-productos-imagen"
                />
              )}
            </td>
            <td>{producto.title}</td>
            <td>{producto.category}</td>
            <td>${Number(producto.price).toFixed(2)}</td>
            <td>{producto.stock}</td>
            <td className="tabla-productos-acciones">
              <button
                type="button"
                className="boton-secundario"
                onClick={() => onEditar(producto)}
              >
                Editar
              </button>
              <button
                type="button"
                className="boton-peligro"
                onClick={() => onEliminar(producto)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaProductos;
