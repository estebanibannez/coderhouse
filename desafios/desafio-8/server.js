const express = require("express");

const PORT = 3000;
const app = express();

//EXPORTANDO ROUTES
const ProductosRouter = require("./routers/productos.router");
//configuraciones middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Seteo Rutas Producto
app.use("/api/productos/listar", ProductosRouter);
app.use("/api/productos/guardar", ProductosRouter);

app.listen(PORT, () => {
  console.log(`servidor [DESAFIO 8] en puerto : http://localhost:${PORT}`);
});
