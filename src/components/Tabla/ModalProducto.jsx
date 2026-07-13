import { useState } from "react";

const PRODUCTO_VACIO = {
  title: "",
  category: "",
  price: "",
  stock: "",
  thumbnail: "",
};

function ModalProducto({ producto, categorias, onGuardar, onCerrar }) {
  const esEdicion = Boolean(producto);
  const [datos, setDatos] = useState(
    producto
      ? {
          title: producto.title ?? "",
          category: producto.category ?? "",
          price: producto.price ?? "",
          stock: producto.stock ?? "",
          thumbnail: producto.thumbnail ?? "",
        }
      : PRODUCTO_VACIO
  );
  const [error, setError] = useState("");

  const handleChange = (campo) => (e) => {
    setDatos((actuales) => ({ ...actuales, [campo]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!datos.title.trim() || !datos.category.trim()) {
      setError("El nombre y la categoría son obligatorios.");
      return;
    }
    if (datos.price === "" || Number(datos.price) < 0) {
      setError("Introduce un precio válido.");
      return;
    }
    if (datos.stock === "" || Number(datos.stock) < 0) {
      setError("Introduce un stock válido.");
      return;
    }

    onGuardar({
      ...datos,
      price: Number(datos.price),
      stock: Number(datos.stock),
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-producto">
        <h2>{esEdicion ? "Editar producto" : "Agregar producto"}</h2>

        <form onSubmit={handleSubmit} className="modal-producto-form">
          <div className="login-field">
            <label>Nombre</label>
            <input
              type="text"
              value={datos.title}
              onChange={handleChange("title")}
              placeholder="Nombre del producto"
            />
          </div>

          <div className="login-field">
            <label>Categoría</label>
            <input
              type="text"
              list="lista-categorias"
              value={datos.category}
              onChange={handleChange("category")}
              placeholder="Categoría"
            />
            <datalist id="lista-categorias">
              {categorias.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
          </div>

          <div className="modal-producto-fila">
            <div className="login-field">
              <label>Precio</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={datos.price}
                onChange={handleChange("price")}
                placeholder="0.00"
              />
            </div>

            <div className="login-field">
              <label>Stock</label>
              <input
                type="number"
                min="0"
                value={datos.stock}
                onChange={handleChange("stock")}
                placeholder="0"
              />
            </div>
          </div>

          <div className="login-field">
            <label>URL de imagen (opcional)</label>
            <input
              type="text"
              value={datos.thumbnail}
              onChange={handleChange("thumbnail")}
              placeholder="https://..."
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <div className="modal-producto-acciones">
            <button type="button" className="boton-secundario" onClick={onCerrar}>
              Cancelar
            </button>
            <button type="submit" className="boton-primario">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalProducto;
