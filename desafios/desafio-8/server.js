const express = require("express");
const handlebars = require("express-handlebars");
const PORT = 3000;
const app = express();

//EXPORTANDO ROUTES
const ProductosRouter = require("./routers/productos.router");


//configuraciones middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//configuracion de handlebars
// app.engine(
//   "hbs",
//   handlebars({
//     extname: ".hbs",
//     defaultLayout: "index.hbs",
//     layoutsDir: `${__dirname}/views/layouts`,
//     partialsDir: `${__dirname}/views/partials`,
//   }),
// );



//se establece el motor de plantilla
app.set('view engine', 'pug');
// app.set("view engine", "hbs");

app.set("views", "./views");

//Seteo Rutas Producto
app.use("/api", ProductosRouter);


//se establece ruta que expone archivos html , css, js
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`servidor [DESAFIO 8] en puerto : http://localhost:${PORT}`);
});
