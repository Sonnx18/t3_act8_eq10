function ResumenPage({ usuario }) {
  return (
    <div className="resumen-page">
      <h1>Bienvenido, {usuario?.firstName}</h1>
      <p className="resumen-subtitulo">
        Resumen de operaciones - {new Date().toLocaleDateString("es-MX", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="resumen-tarjetas">
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-valor">12</span>
          <span className="resumen-tarjeta-etiqueta">Tickets totales</span>
        </div>
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-valor">2</span>
          <span className="resumen-tarjeta-etiqueta">En proceso</span>
        </div>
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-valor">25</span>
          <span className="resumen-tarjeta-etiqueta">Completados</span>
        </div>
      </div>

      <p className="resumen-nota">
        Usa el menú lateral para ir a la sección de Productos.
      </p>
    </div>
  );
}

export default ResumenPage;
