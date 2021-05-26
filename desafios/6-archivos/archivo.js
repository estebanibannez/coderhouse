// Implementar programa que contenga una clase llamada Archivo que reciba el nombre del archivo con el que va a trabajar e implemente los métodos leer, guardar, borrar.

// Utilizar guardar para incorporar productos al archivo "productos.txt"
// El formato de cada producto será :
// {
//     title: (nombre del producto),
//     price: (precio),
//     thumbnail: (url de la foto)
// }

// La función guardar incorporará al producto un id, el cual se obtendrá de la longitud total del array actual más 1.

// Con el método leer se mostrará en consola el listado total (si el archivo existe) como un array de productos. Si el archivo no existe, se retornará un array vacío.

// El método borrar elimina el archivo completo.

// Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async await y manejo de errores.

// Ejemplo contenido de "productos.txt" con 3 productos almacenados

// [
//   {
//     title: 'Escuadra',
//     price: 123.45,
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
//     id: 1
//   },
//   {
//     title: 'Calculadora',
//     price: 234.56,
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
//     id: 2
//   },
//   {
//     title: 'Globo Terráqueo',
//     price: 345.67,
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
//     id: 3
//   }
// ]

const fs = require("fs");

class Archivo {
  constructor(archivo) {
    this.archivo =  `${archivo}.txt`;
    // console.log(this.archivo)
  }

  arreglo = [];
  async guardar(producto) {
    producto.id = this.arreglo.length + 1;
    this.arreglo.push(producto);

    await fs.promises.writeFile(
      this.archivo,
      JSON.stringify(this.arreglo, null, "\t"),
    );
  }

  async leer() {
    await fs.readFile(this.archivo, "utf-8", (error, array) => {
      if (error) {
        console.log("ocurrió un error");
      } else {
        if (array.length > 0) {
          console.log(JSON.parse(array));
          // console.log(JSON.parse(array));
          return array;
        }else{
          return []
        }
      }
    });
  }

  async borrar() {
    await fs.unlink(this.archivo, (err) => {
      if (err) {
        console.error(err);
        console.log("Archivo eliminado con éxito!");
        return;
      }

      //file removed
    });
  }
}

let producto = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  id: 0,
};

let producto2 = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  id: 0,
};

let producto3 = {
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  id: 0,
};

let archivo = new Archivo("productos");
archivo.guardar(producto);
archivo.guardar(producto2);
archivo.guardar(producto3);

archivo.leer();
// archivo.borrar("productos.txt");
