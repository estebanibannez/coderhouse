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
//handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
  }),
);

const data = [
  { title: "esteban1", lane: "tests1" },
  { title: "esteban2", lane: "tests2" },
  { title: "esteban3", lane: "tests3" },
];

//se establece el motor de plantilla
app.set("view engine", "hbs");
app.set("views", "./views");

//Seteo Rutas Producto
app.use("/api/productos/listar", ProductosRouter);
app.use("/api/productos/guardar", ProductosRouter);

//defino el path inicial y que se renderizará en el.
app.use("/", (req, res) => {
  res.render("formulario", { data: data, listExists: true });
});
app.use("/lista", (req, res) => {
  res.render("main", { data: data, listExists: true });
});
//se establece ruta que expone archivos html , css, js
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`servidor [DESAFIO 8] en puerto : http://localhost:${PORT}`);
});
