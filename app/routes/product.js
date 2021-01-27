module.exports = app => {
  const product = require("../controllers/product.js");

  var router = require("express").Router();

  // Create a new product
  router.post("/", product.create);

  // Retrieve all products
  router.get("/", product.findAll);

  // Retrieve a single product with id
  router.get("/:id", product.findOne);

  // Update a product with id
  router.put("/:id", product.update);

  // Delete a product with id
  router.delete("/:id", product.delete);

  // Create a new product
  router.delete("/", product.deleteAll);
  
  app.use("/api/products", router);
};