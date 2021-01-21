const controller = require("../controllers/mainController.js");
const express = require("express")
const router = express.Router()
const homeController = require("../controllers/mainController.js");

router.get("/", homeController.home);

module.exports = router;