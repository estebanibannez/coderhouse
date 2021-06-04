const Productos = require("../models/producto.model");

exports.getProductos = (req, res) => {
  console.log(Productos.getProductos());
  try {
    res.json({
      productos: Productos.getProductos(),
    });
  } catch (error) {
    console.log(`Ocurrió un error ${error}`);
    res.json({
      error: error,
    });
  }
};

exports.getProductoById = (req, res) => {
  let productos = Productos.getProductos();
  let producto = productos.filter((res) => res.id == req.params.id);
  console.log(producto);
  try {
    if (producto.length == 0) {
      res.json({
        mensaje: `El producto con el id: ${req.params.id} no existe.`,
      });
    }
    res.json({
      producto,
    });
  } catch (error) {}
};

exports.postProduct = (req, res) => {
  try {
    debugger;
    const { title, price, thumbnail } = req.body;
    const id = Productos.getProductos().length + 1;

    let productoAgregado = Productos.guardar(title, price, thumbnail, id);

    console.log("producto agregado ");

    return res.json({
      mensaje: `Producto agregado con éxito!`,
      producto: productoAgregado,
    });
  } catch (err) {
    return res.json({
      error: err.message,
    });
  }
};
