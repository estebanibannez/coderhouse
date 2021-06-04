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

  guardar(title, price, thumbnail, id) {
    this.productos.push({
      title: title,
      price: price,
      thumbnail: thumbnail,
      id: id,
    });
    return this.productos[this.productos.length - 1]
  }

  getProductos = (req, res) => {
    return this.productos;
  };
}

module.exports = new Productos();
