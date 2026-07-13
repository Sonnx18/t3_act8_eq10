function Filtros({ busqueda, categoria, categorias, onBusquedaChange, onCategoriaChange }) {
  return (
    <div className="filtros">
      <input
        type="text"
        className="filtros-busqueda"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
      />

      <select
        className="filtros-categoria"
        value={categoria}
        onChange={(e) => onCategoriaChange(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filtros;
