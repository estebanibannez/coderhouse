const express = require("express");

const { getItems } = require("./controllers/getItems.controller");
const { getItemRandom } = require("./controllers/getItemsRandom.controller");

let app = express();



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/items", getItems);
app.get("/itemsRandom", getItemRandom);

app.listen(3000, () => {
  console.log(`Servidor en linea http://localhost:${3000}`);
});
