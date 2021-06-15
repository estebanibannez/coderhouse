const { Router } = require("express");
const {
  getProductos,
  getProductosView,
  getProductoById,
  postProduct,
  postProductosForm,
} = require("../controllers/productos.controller");
const router = Router();

router.get("/productos/listar", getProductos);
router.get("/productos/listar/:id", getProductoById);
router.post("/productos/guardar", postProduct);
router.get("/productos/vista", getProductosView);
router.get("/productos/formulario", postProductosForm);
module.exports = router;
