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

            selected = array.filter((res) => res.id == getRandomArbitrary());

            //   selected = res.id[getRandomArbitrary()];
            console.log("Seleccionado", selected);
            console.log("random", getRandomArbitrary());

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
