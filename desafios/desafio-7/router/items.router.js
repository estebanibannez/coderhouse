/*
  Ruta: /api/items
        /api/itemsrandom
        /api/visitas
*/

const { Router } = require("express");
const router = Router();

const {
  getItems,
  getItemRandom,
  getVisitas,
} = require("../controllers/item.controller");

router.get("/api/items", getItems);
router.get("/api/itemsrandom", getItemRandom);
router.get("/api/visitas", getVisitas);

module.exports = router;
