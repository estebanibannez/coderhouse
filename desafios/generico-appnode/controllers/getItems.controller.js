const fs = require("fs");

exports.getItems = async (req, res) => {
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
