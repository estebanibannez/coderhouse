const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//defino los endpoint en router
app.use("/", require("./router/items.router"));

app.listen(3000, () => {
  try {
    console.log(`Servidor [DESAFIO 7] en linea http://localhost:${3000}`);
  } catch (error) {
    console.log(`Ocurrio un error : ${error}`);
  }
});
