const db = require("../models");
const Product = db.product;

// Create and Save a new Product
exports.create = (req, res) => {
     // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Le champ ne peut être vide" });
    return;
  }
   // Create product
   const product = new Product({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenu lors de la création du produit."
      });
    });
  
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => { 
    Product.find({}).
    then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenu lors de la récupération des produits "
        });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Le produit n'a pas été trouvé "});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Une erreur est survenue" });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  
};