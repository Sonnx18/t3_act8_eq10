function ConfirmDialog({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <div className="confirm-dialog">
        <p>{mensaje}</p>
        <div className="confirm-dialog-acciones">
          <button type="button" className="boton-secundario" onClick={onCancelar}>
            Cancelar
          </button>
          <button type="button" className="boton-peligro" onClick={onConfirmar}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
