const express = require("express");

const { getItems } = require("./controllers/getItems.controller");
const { getItemRandom } = require("./controllers/getItemsRandom.controller");
const { getVisitas } = require("./controllers/getVisitas.controller");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/items", getItems);
app.get("/api/itemsrandom", getItemRandom);
app.get("/api/visitas", getVisitas);

app.listen(3000, () => {
  try {
    console.log(`Servidor en linea http://localhost:${3000}`);
  } catch (error) {
    console.log(`Ocurrio un error : ${error}`);
  }
});
