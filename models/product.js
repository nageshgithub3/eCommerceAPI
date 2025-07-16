/* --------- IMPORTING PACKAGE --------- */
const mongoose = require("mongoose");

/* --------- CREATING SCHEMA --------- */
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/* --------- EXPORTING MODEL --------- */
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
