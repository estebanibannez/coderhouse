class Productos {
  productos = [
    {
      title: "Escuadra",
      price: 345.67,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      id: 1,
    },
    {
      title: "test 2",
      price: 345.6,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-test.png",
      id: 2,
    },
  ];

  constructor() {}

  //metodo que agrega 1 producto al array
  guardar(title, price, thumbnail, id) {
    this.productos.push({
      title: title,
      price: price,
      thumbnail: thumbnail,
      id: id,
    });
    return this.productos[this.productos.length - 1];
  }

  //recibe un objeto producto y lo guarda
  postProduct = (req, res) => {
    try {
      debugger;
      const { title, price, thumbnail } = req.body;
      const id = this.productos.length + 1;

      let productoAgregado = this.guardar(title, price, thumbnail, id);

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

  //obtiene todos los productos por id
  getProductoById = (req, res) => {
    let producto = this.productos.filter((res) => res.id == req.params.id);
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

  //obtiene todos los productos
  getProductos = (req, res) => {
    console.log(this.productos);
    try {
      res.json({
        productos: this.productos,
      });
    } catch (error) {
      console.log(`Ocurrió un error ${error}`);
      res.json({
        error: error,
      });
    }
  };
}

module.exports = new Productos();
