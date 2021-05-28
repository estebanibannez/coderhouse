const { contadorItems } = require("./getItems.controller");
const { contadorRandom } = require("./getItemsRandom.controller");

exports.getVisitas = (req, res) => {
  try {
    return res.json({
      visitas: {
        visitasItem: contadorItems(),
        visitasItemRandom: contadorRandom(),
      },
    });
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};
