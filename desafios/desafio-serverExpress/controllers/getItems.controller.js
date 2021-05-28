const fs = require("fs");

userCount = 0;

exports.getItems = async (req, res) => {
  userCount++;
  try {
    await fs.readFile(
      "desafios/generico-appnode/productos.txt",
      "utf-8",
      (error, data) => {
        // debugger;
        if (error) {
          console.log(`Ocurrio un error ${error}`);
        } else {
          if (data.length > 0) {
            let array = JSON.parse(data);
            // console.log(JSON.parse(array));
            return res.json({ item: array, cantidad: array.length });
          } else {
            return [];
          }
        }
      },
    );
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};

exports.contadorItems = (req, res) => {
  return userCount;
};
