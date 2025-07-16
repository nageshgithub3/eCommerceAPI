const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart_controller");
const { verifyToken } = require("../middleware/auth");

router.post("/add", verifyToken, cartController.addToCart);
router.get("/", verifyToken, cartController.getCart);

module.exports = router;
