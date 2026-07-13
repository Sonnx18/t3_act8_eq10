function NavBar({ usuario, onLogout }) {
  return (
    <header className="navbar">
      <div className="navbar-spacer" />

      <div className="navbar-usuario">
        <img
          src={usuario?.image}
          alt={`Foto de perfil de ${usuario?.firstName ?? "usuario"}`}
          className="navbar-avatar"
        />
        <span className="navbar-nombre">
          {usuario?.firstName} {usuario?.lastName}
        </span>
        <button className="navbar-cerrar-sesion" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}

export default NavBar;
