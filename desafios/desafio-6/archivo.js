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

const fs = require("fs").promises;

class Producto {
  constructor(title, price, thumbnail, id) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }
}

class Archivo {
  constructor(archivo) {
    this.archivo = `${archivo}.txt`;
  }

  async guardar(title, price, thumbnail) {
    // parseo en json el documento con productos.
    let productos = JSON.parse(await this.leer());
    console.log("Arreglo ->", productos);
    //creo un producto 
    let producto = new Producto(title, price, thumbnail, productos.length + 1);
    //paso al arreglo el producto nuevo a crear.
    productos.push(producto);
    //vuelvo a convertir en cadena de texto el array de productos para pasarlo nuevamente al documento.txt.
    await fs.writeFile(this.archivo, JSON.stringify(productos, null, "\t"));
  }

  async leer() {
    const data = await fs.readFile(this.archivo, "utf-8", (error, array) => {
      if (error) {
        console.log("ocurrió un error");
      } else {
        if (array.length > 0) {
          return array;
        } else {
          return [];
        }
      }
    });
    return data;
  }

  
  async borrar() {
    await fs.unlink(this.archivo, (err) => {
      if (err) {
        console.error(err);
        console.log("Archivo eliminado con éxito!");
        return;
      }

    });
  }
}

let archivo = new Archivo("productos");
//guardo un producto desde el mismo metodo guardar.
archivo.guardar(
  "Escuadra",
  345.67,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
);

archivo.leer();
// archivo.borrar("productos.txt");
