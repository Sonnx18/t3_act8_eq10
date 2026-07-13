const ticketsRecientes = [
  {
    id: "YIN-2026-012",
    cliente: "Isaac Cruz Fidalgo",
    detalle: "Laptop no enciende",
    estado: "En proceso",
  },
  {
    id: "YIN-2026-011",
    cliente: "Michell Hernandez",
    detalle: "Pantalla rota - daño físico",
    estado: "Completado",
  },
  {
    id: "YIN-2026-010",
    cliente: "Ana Karen Dominguez Sanchez",
    detalle: "No carga - puerto de carga dañado",
    estado: "En espera",
  },
  {
    id: "YIN-2026-010",
    cliente: "Alondra Mariam Mendoza",
    detalle: "Pantalla con líneas",
    estado: "Completado",
  },
];

const estadoTickets = [
  { etiqueta: "Completado", valor: 2, clase: "completado" },
  { etiqueta: "En espera", valor: 1, clase: "espera" },
  { etiqueta: "En proceso", valor: 1, clase: "proceso" },
  { etiqueta: "Entregado", valor: 0, clase: "entregado" },
];

const tecnicosActivos = [
  { iniciales: "NL", nombre: "Noel Lopez", tickets: 4 },
  { iniciales: "YM", nombre: "Yhudiel Men", tickets: 5 },
  { iniciales: "IC", nombre: "Isaac Cruz", tickets: 5 },
];

function claseEstado(estado) {
  if (estado === "Completado") return "estado-badge estado-badge-completado";
  if (estado === "En proceso") return "estado-badge estado-badge-proceso";
  return "estado-badge estado-badge-espera";
}

function ResumenPage() {
  const totalEstados = estadoTickets.reduce(
    (total, item) => total + item.valor,
    0
  );

  return (
    <div className="resumen-page">
      <h1>Dashboard</h1>
      <p className="resumen-subtitulo">
        Resumen de operaciones - {new Date().toLocaleDateString("es-MX", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="resumen-tarjetas">
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-icono resumen-tarjeta-icono-azul" />
          <div className="resumen-tarjeta-texto">
            <span className="resumen-tarjeta-valor">12</span>
            <span className="resumen-tarjeta-etiqueta">Tickets Totales</span>
          </div>
        </div>
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-icono resumen-tarjeta-icono-naranja" />
          <div className="resumen-tarjeta-texto">
            <span className="resumen-tarjeta-valor">2</span>
            <span className="resumen-tarjeta-etiqueta">En proceso</span>
          </div>
        </div>
        <div className="resumen-tarjeta">
          <span className="resumen-tarjeta-icono resumen-tarjeta-icono-verde" />
          <div className="resumen-tarjeta-texto">
            <span className="resumen-tarjeta-valor">25</span>
            <span className="resumen-tarjeta-etiqueta">Completados</span>
          </div>
        </div>
      </div>

      <div className="resumen-columnas">
        <div className="resumen-tarjeta-panel resumen-tickets-recientes">
          <div className="resumen-panel-encabezado">
            <h2>Tickets recientes</h2>
            <span className="resumen-ver-todos">Ver todos →</span>
          </div>

          <ul className="resumen-lista-tickets">
            {ticketsRecientes.map((ticket, indice) => (
              <li key={`${ticket.id}-${indice}`} className="resumen-ticket">
                <span className="resumen-ticket-icono" />
                <div className="resumen-ticket-info">
                  <span className="resumen-ticket-id">{ticket.id}</span>
                  <span className="resumen-ticket-cliente">
                    {ticket.cliente}
                  </span>
                  <span className="resumen-ticket-detalle">
                    {ticket.detalle}
                  </span>
                </div>
                <span className={claseEstado(ticket.estado)}>
                  {ticket.estado}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resumen-columna-lateral">
          <div className="resumen-tarjeta-panel">
            <h2>Estado de tickets</h2>
            <div className="resumen-estados">
              {estadoTickets.map((item) => (
                <div key={item.etiqueta} className="resumen-estado-fila">
                  <div className="resumen-estado-encabezado">
                    <span>{item.etiqueta}</span>
                    <span>{item.valor}</span>
                  </div>
                  <div className="resumen-estado-barra">
                    <div
                      className={`resumen-estado-progreso resumen-estado-progreso-${item.clase}`}
                      style={{
                        width: totalEstados
                          ? `${(item.valor / totalEstados) * 100}%`
                          : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resumen-tarjeta-panel">
            <h2>Técnicos activos</h2>
            <ul className="resumen-tecnicos">
              {tecnicosActivos.map((tecnico) => (
                <li key={tecnico.iniciales} className="resumen-tecnico">
                  <span className="resumen-tecnico-avatar">
                    {tecnico.iniciales}
                  </span>
                  <span className="resumen-tecnico-nombre">
                    {tecnico.nombre}
                  </span>
                  <span className="resumen-tecnico-tickets">
                    {tecnico.tickets} Tickets
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumenPage;
