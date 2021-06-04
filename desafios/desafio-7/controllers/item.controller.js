const fs = require("fs");

userCountRandom = 0;
userCount = 0;

exports.getItems = async (req, res) => {
  userCount++;
  try {
    await fs.readFile("productos.txt", "utf-8", (error, data) => {
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
    });
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};

exports.getItemRandom = async (req, res) => {
  userCountRandom++;

  try {
    await fs.readFile("productos.txt", "utf-8", (error, data) => {
      if (!error) {
        if (data.length > 0) {
          let selected = {};
          let array = JSON.parse(data);

          selected = array[getRandomInt(0, array.length - 1)];
          return res.json({ item: selected });
        } else {
          return [];
        }
      } else {
        console.log(`Ocurrio un error ${error}`);
      }
    });
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};

exports.getVisitas = (req, res) => {
  try {
    return res.json({
      visitas: {
        visitasItem: this.contadorItems(),
        visitasItemRandom: this.contadorRandom(),
      },
    });
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};

exports.contadorItems = (req, res) => {
  return userCount;
};

exports.contadorRandom = (req, res) => {
  return userCountRandom;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
