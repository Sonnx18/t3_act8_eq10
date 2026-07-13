const TAMANOS_PAGINA = [10, 20, 40, 50];

function Paginacion({ pagina, totalPaginas, limite, onPaginaChange, onLimiteChange }) {
  return (
    <div className="paginacion">
      <div className="paginacion-controles">
        <button
          type="button"
          disabled={pagina <= 1}
          onClick={() => onPaginaChange(pagina - 1)}
        >
          Anterior
        </button>

        <span className="paginacion-info">
          Página {pagina} de {totalPaginas || 1}
        </span>

        <button
          type="button"
          disabled={pagina >= totalPaginas}
          onClick={() => onPaginaChange(pagina + 1)}
        >
          Siguiente
        </button>
      </div>

      <label className="paginacion-tamano">
        Mostrar
        <select
          value={limite}
          onChange={(e) => onLimiteChange(Number(e.target.value))}
        >
          {TAMANOS_PAGINA.map((tamano) => (
            <option key={tamano} value={tamano}>
              {tamano}
            </option>
          ))}
        </select>
        por página
      </label>
    </div>
  );
}

export default Paginacion;
