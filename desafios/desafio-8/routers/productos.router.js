const { Router } = require("express");
const {
  getProductos,
  getProductoById,
  postProduct
} = require("../controllers/productos.controller");
const router = Router();

router.get("", getProductos);
router.get("/:id", getProductoById);
router.post("/", postProduct);

module.exports = router;
