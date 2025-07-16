/* --------- IMPORTING PACKAGE --------- */
const express= require("express");
const router= express.Router();

/* --------- IMPORTING CONTROLLER --------- */
const homeController = require('../controllers/home_controller');

/** --------- MAKING ROUTES --------- **/
router.get('/', homeController.home);
router.use('/products', require('./product'));
router.use("/users", require("./users"));
router.use("/cart", require("./cart"));


/* --------- EXPORTING ROUTER --------- */
module.exports = router;