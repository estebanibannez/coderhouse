const fs = require("fs");

userCountRandom = 0;

exports.getItemRandom = async (req, res) => {
  userCountRandom++;

  try {
    await fs.readFile(
      "desafios/generico-appnode/productos.txt",
      "utf-8",
      (error, data) => {
        // debugger;
        if (!error) {
          if (data.length > 0) {
            let selected = {};
            let array = JSON.parse(data);

            selected = array[getRandomInt(0, array.length - 1)]

            // console.log("Seleccionado", array[getRandomInt(0, array.length - 1)]);
            // console.log("random", getRandomInt(0, array.length - 1));

            // console.log(JSON.parse(array));
            return res.json({ item: selected });
          } else {
            return [];
          }
        } else {
          console.log(`Ocurrio un error ${error}`);
        }
      },
    );
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};

exports.contadorRandom = (req, res) => {
  return userCountRandom;
};
// devuelve un numero random entre 1 y 3.
function getRandomArbitrary() {
  return parseInt(Math.random() * (4 - 1) + 1);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
