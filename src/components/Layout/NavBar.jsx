function NavBar({ usuario }) {
  const subtitulo = `Resumen de operaciones - ${new Date().toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  })}`;

  const iniciales =
    (usuario?.firstName?.[0] ?? "") + (usuario?.lastName?.[0] ?? "");

  return (
    <header className="navbar">
      <div className="navbar-titulo">
        <span className="navbar-titulo-principal">DASHBOARD</span>
        <span className="navbar-titulo-sub">{subtitulo}</span>
      </div>

      <div className="navbar-usuario">
        <span className="navbar-nombre">
          {usuario?.firstName} {usuario?.lastName}
        </span>
        <span className="navbar-iniciales">{iniciales}</span>
      </div>
    </header>
  );
}

export default NavBar;
