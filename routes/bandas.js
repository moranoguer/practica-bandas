const express = require("express");
const router = express.Router()
const bandaController = require("../controllers/bandaController")

router.get("/", bandaController.index)

router.get("/:id", bandaController.detalle)

router.get("/genero/:genero", bandaController.genero)

module.exports = router